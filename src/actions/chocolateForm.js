export const updateChocolateFormData = chocolateFormData => {

  return {
    type: 'UPDATED_DATA',
    chocolateFormData
  }
}

export const resetChocolateForm = () => {
  return {
    type: 'RESET_CHOCOLATE_FORM'
  }
}
