import React, { PropTypes } from 'react';
import Media from './Media';
import './MediaList.css';

const MediaList = ({ medias }) => (
  <div className='media-list'>
    {medias.map(media =>
      <Media
        key={media.id}
        {...media}
      />
    )}
  </div>
);

MediaList.propTypes = {
  medias: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired).isRequired
};

export default MediaList;
