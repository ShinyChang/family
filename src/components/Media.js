import React, { PropTypes } from 'react';

const Media = ({ id, src, width, height }) => (
  <div className='media' style={{width: width * 200 / height, flexGrow: width * 200 / height}}>
    <div style={{paddingBottom: (height / width * 100) + '%'}}></div>
    <img src={src} alt=""/>
  </div>
);

Media.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Media;
