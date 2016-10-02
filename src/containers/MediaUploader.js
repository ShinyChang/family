import { connect } from 'react-redux'
import FileUploader from '../components/FileUploader';
import { uploadFile } from '../actions';

const mapStateToProps = (state) => ({
  queue: state.uploads
});

const mapDispatchToProps =  ({
  uploadFile
});

const MediaUploader = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploader);

export default MediaUploader
