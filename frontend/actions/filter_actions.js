import { fetchPins } from './bench_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateFilter = (filter) => (dispatch) => {
    dispatch(changeFilter(filter))
    return fetchPins(getState().ui.filters)(dispatch);
};