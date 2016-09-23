import React, { PropTypes } from 'react';

const Loading = ({ loading }) => (
  <div className='loading' style={{display: loading ? 'block' : 'none'}}>
    Loading...
  </div>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loading;
