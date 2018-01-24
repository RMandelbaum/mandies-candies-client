const API_URL = process.env.REACT_APP_API_URL;

const setChocolates= chocolates => {
  return{
    type: 'GET_CHOCOLATES_SUCCESS',
    chocolates
    }
  }

export const getChocolates = () => {
  return dispatch => {
    fetch(`${API_URL}/chocolates`)
    .then(response => response.json())
    .then(chocolates => dispatch(setChocolates(chocolates)))
    .catch(error => console.log(error))
  }
}

export const createChocolate = chocolate => {
  return dispatch => {
    return fetch(`${API_URL}/chocolates`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(chocolate)
    })
    .then(response => response.json())
    .then(chocolate => {
      debugger
     })
    .catch(error => console.log(error))
  }
}
