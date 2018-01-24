export default (state = [], action) => {
  switch(action.type) {
    case 'GET_CHOCOLATES_SUCCESS':
      return action.chocolates;

      default:
        return state;
  }
}
