
const initialState = {
  chocolate_type: '',
  price: 0,
  img_url:'',
  piece_count:0,
  gift_wrapped:"false"
}

export default(state=initialState, action) => {
  switch(action.type){
    case 'UPDATED_DATA':
      return action.chocolateFormData

    case 'RESET_CHOCOLATE_FORM':
      return initialState;

    default:
      return state
  }
}
