export default ( state = {
  chocolate_type: '',
  price: 0,
  img_url:'',
  piece_count:0,
  gift_wrapped:"false"
}, action) => {

  switch(action.type){
    case 'UPDATED_DATA':
      return action.chocolateFormData

    default:
      return state
  }
}
