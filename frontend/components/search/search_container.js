import {connect} from 'react-redux';
import { clearFilters, updatefilters } from '../../actions/filter_actions'
import Search from './search';

const mDTP = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  clearFilters: () => dispatch(clearFilters())
  //help
})

export default connect(null, mDTP)(Search);