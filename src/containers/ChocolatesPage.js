// ./src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ChocolatesList from '../components/ChocolatesList';
import ChocolateShow from './ChocolatesShow';

const ChocolatesPage = ({ match, chocolates }) =>
  <div>
    <ChocolatesList chocolates={chocolates} />
    <Route path={`${match.url}/:chocolateId`}
    component={ChocolateShow}/>
    <Route exact path={match.url} render={() =>
    (
      <h3>Please select a Chocolate from the list.</h3>
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    chocolates: state.chocolates
  };
}

export default connect(mapStateToProps)(ChocolatesPage);
