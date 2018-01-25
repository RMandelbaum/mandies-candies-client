import { resetChocolateForm } from './chocolateForm';


const API_URL = process.env.REACT_APP_API_URL;

const setChocolates= chocolates => {
  return{
    type: 'GET_CHOCOLATES_SUCCESS',
    chocolates
    }
  }

const addChocolate = chocolate => {
  return {
    type: 'CREATE_CHOCOLATE_SUCCESS',
    chocolate
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
      body: JSON.stringify({ chocolate: chocolate} )

    })
      .then(response => {
        debugger
        response.json()
      })
      .then(chocolate => {
        debugger
          dispatch(addChocolate(chocolate))
          dispatch(resetChocolateForm())
        })
        .catch(error => console.log(error))
    }
  }
