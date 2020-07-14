import { connect } from 'react-redux'
import { toggleCapsule, closeCapsule } from '../actions'
import CapsuleList from '../components/CapsuleList'

const mapStateToProps = state => ({
    capsules: state.capsules.items,
    toggleCapsule: state.capsules.toggleCapsule,
});

const mapDispatchToProps = dispatch => ({
  onCapsuleClick: id => dispatch(toggleCapsule(id)),
  onCapsuleClose: () => dispatch(closeCapsule()),
});

const VisibleCapsuleList = connect(mapStateToProps, mapDispatchToProps)(CapsuleList)

export default VisibleCapsuleList
