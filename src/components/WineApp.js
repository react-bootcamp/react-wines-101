import React, { PropTypes } from 'react';
import './WineApp.css';
import { Regions, WineList, Wine } from '.';

export const WineApp = React.createClass({
  render() {
    return (
      <div className="container">
        <h1 className="center-align">Open Wine Database</h1>
        <div className="row">
          <Regions />
          <WineList />
          <Wine />
        </div>
      </div>
    );
  }
});
