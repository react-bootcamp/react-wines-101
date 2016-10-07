import React, { PropTypes } from 'react';
import './Regions.css';

export const Regions = React.createClass({
  render() {
    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Regions</h2>
        <div className="collection">
          <a href="#!" className="collection-item">Alsace</a>
          <a href="#!" className="collection-item active">Bordeaux</a>
          <a href="#!" className="collection-item">Bourgogne</a>
          <a href="#!" className="collection-item">Loire Valley</a>
          <a href="#!" className="collection-item">Rhône</a>
        </div>
      </div>
    );
  }
});
