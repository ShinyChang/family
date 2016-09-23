import { connect } from 'react-redux'
import MediaList from '../components/MediaList'

// const getVisibleTodos = (medias, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return medias
//     case 'SHOW_COMPLETED':
//       return medias.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return medias.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }

const mapStateToProps = (state) => ({
  medias: state.medias.list
});

const mapDispatchToProps =  ({
});

const VisibleMediaList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaList);

export default VisibleMediaList
