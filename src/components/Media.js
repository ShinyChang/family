import React, { PropTypes } from 'react';
import 'lazysizes';

const transparent = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const Media = ({ id, src, width, height }) => (
  <div className='media' style={{width: width * 100 / height, flexGrow: width * 100 / height}}>
    <div style={{paddingBottom: (height / width * 100) + '%'}}></div>
    <img className="lazyload" src={transparent} data-src={src} alt=""/>
  </div>
);

Media.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Media;
