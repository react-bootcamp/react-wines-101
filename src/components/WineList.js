import React, { PropTypes } from 'react';
import './WineList.css';

export const WineList = React.createClass({
  render() {
    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Wines</h2>
        <div className="collection">
          <a href="#!" className="collection-item">Ausone</a>
          <a href="#!" className="collection-item">Brane Cantenac</a>
          <a href="#!" className="collection-item">Château Margaux</a>
          <a href="#!" className="collection-item">Cheval Blanc</a>
          <a href="#!" className="collection-item active">Haut Brion</a>
          <a href="#!" className="collection-item">Lafite Rothschild</a>
          <a href="#!" className="collection-item">Lagrange</a>
          <a href="#!" className="collection-item">Mouton Rothschild</a>
          <a href="#!" className="collection-item">Petrus</a>
          <a href="#!" className="collection-item">Yquem</a>
        </div>
      </div>
    );
  }
});
