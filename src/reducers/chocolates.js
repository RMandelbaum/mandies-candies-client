export default (state = [], action) => {
  switch(action.type) {
    case 'GET_CHOCOLATES_SUCCESS':
      return action.chocolates;

    case 'CREATE_CHOCOLATE_SUCCESS':
      return state.concat(action.surfboard);

      default:
        return state;
  }
}
