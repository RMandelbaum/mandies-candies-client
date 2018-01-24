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
const { chocolate_type, price, img_url, piece_count, gift_wrapped } = this.props.chocolateFormData
    return(
      <div>
        Add a Chocolate to the inventory
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="chocolate_type">Chocolate_Type:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="chocolate_type"
            values={chocolate_type}
            />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            onChange={this.handleOnChange}
            name="price"
            values={price}
            />
          <label htmlFor="img_url">img_url:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="img_url"
            values={img_url}
            />
          <label htmlFor="piece_count">piece_count:</label>
          <input
            type="number"
            onChange={this.handleOnChange}
            name="piece_count"
            values={piece_count}
            />
          <label htmlFor="gift_wrapped">gift_wrapped:</label>
          <input
            type="checkbox"
            onChange={this.handleOnChange}
            name="gift_wrapped"
            values={gift_wrapped}
            />

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
export default connect(mapStateToProps, { updateChocolateFormData, createChocolate })(ChocolateForm);
