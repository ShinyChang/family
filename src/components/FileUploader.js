import React, { Component, PropTypes } from 'react';
import EXIF from 'exif-js';



const fileToDataURL = function(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = function(e) {
      resolve(e.target.result);
      reader = null;
    }
    reader.readAsDataURL(file);
  });
};

const getImageEXIF = function(file) {
  return new Promise((resolve, reject) => {
    EXIF.getData(file, (data) => {
      if (Object.keys(file.exifdata).length) {
        let exif = {
          width: file.exifdata.PixelXDimension,
          height: file.exifdata.PixelYDimension
        };

        if (file.exifdata.DateTimeOriginal) {
          exif.take_at = new Date(file.exifdata.DateTimeOriginal).getTime();
        }
        resolve(exif);
        exif = null;
      } else {
        fileToDataURL(file).then(dataURL => {
          let image = new Image();
          image.onload = function() {
            resolve({
              width: image.width,
              height: image.height
            });
            image = null;
          };
          image.src = dataURL;
        });
      }
    });
  });
};

const getMeta = function(file) {
  let meta = {
    name: file.name,
    size: file.size,
    take_at: file.lastModified,
    type: file.type
  };
  return new Promise((resolve, reject) => {
    if (file.type.indexOf('image') === 0) {
      return getImageEXIF(file).then(exif => {
        resolve(Object.assign({}, meta, exif));
        meta = null;
      });
    } else {
      resolve(meta);
    }
  });
};



class FileUploader extends Component {
  onChange = (e) => {
    let files = e.target.files;
    Object.keys(files).forEach((key) => {
      this.onFileAdd(files[key]);
    });
  }

  onFileAdd(file) {
    getMeta(file).then(meta => {
      this.props.uploadFile(file, meta)
    });
  }

  render() {
    return (
      <div className='file-uploader'>
        <ul className='file-uploader__list'>
          {this.props.queue.map((o) => <li key={o.id}>{o.name}</li>)}
        </ul>
        <input type='file' ref='file' accept='image/*, .mp4' multiple onChange={this.onChange.bind(this)}/>
      </div>
    )
  }
}

FileUploader.defaultProps = {
  queue: []
};

FileUploader.propTypes = {
  queue: PropTypes.array.isRequired,
  uploadFile: PropTypes.func.isRequired
};

export default FileUploader;
