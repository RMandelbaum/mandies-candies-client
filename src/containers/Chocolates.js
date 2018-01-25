import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Chocolates.css'
import ChocolateCard from '../components/ChocolateCard'
import ChocolateForm from './ChocolateForm'
import { getChocolates } from '../actions/Chocolates';

class Chocolates extends Component {

  componentDidMount() {
    this.props.getChocolates()
  }

  render(){
    return(
      <div className="chocolate-container">
        <h1>Chocolate Selection</h1>
        {this.props.chocolates.map( chocolate => <ChocolateCard key={chocolate.id} chocolate={chocolate} />)}
        <ChocolateForm />

      </div>
   )
  }

}


const mapStateToProps = (state) => {
  return ({
    chocolates: state.chocolates
  })
}

export default connect(mapStateToProps,{ getChocolates })(Chocolates);
