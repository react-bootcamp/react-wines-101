import React, { PropTypes } from 'react';
import './WineList.css';

export const WineList = React.createClass({
  render() {
    if (this.props.region === null) {
      return null;
    }
    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Wines</h2>
        <div className="collection">
          {this.props.wines.map(wine =>
            <a key={wine.id} href="#!" onClick={e => this.props.onSelectWine(wine.id)} className={['collection-item', wine === this.props.wine ? 'active' : ''].join(' ')}>{wine.name}</a>
          )}
        </div>
      </div>
    );
  }
});
