import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateChocolateFormData } from '../actions/chocolateForm';
import { createChocolate } from '../actions/Chocolates.js'

class ChocolateForm extends Component{
  handleOnChange = (event) => {
    const { name, value } = event.target;
    const currentChocolateFormData = Object.assign({}, this.props.chocolateFormData, {
      [name]: value
    })
    this.props.updateChocolateFormData({currentChocolateFormData})
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createChocolate(this.props.chocolateFormData)
  }
  render(){
    const { chocolate_type, img_url} = this.props.chocolateFormData
     return(
       <div>
         Add a Chocolate to the inventory
         <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="chocolate_type">Chocolate_Type:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="chocolate_type"
              value={chocolate_type}
             />
          </div>
          <div>
            <label htmlFor="img_url">img_url:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>

          <button type="submit">Add Chocolate</button>

        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    chocolateFormData: state.chocolateFormData
  }
}
export default connect(mapStateToProps, {
   updateChocolateFormData,
   createChocolate })(ChocolateForm);
