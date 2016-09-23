import { connect } from 'react-redux'
import Loading from '../components/Loading';

const mapStateToProps = (state) => ({
  loading: state.medias.fetching
});

const mapDispatchToProps =  ({
});

const MediaLoading = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);

export default MediaLoading
