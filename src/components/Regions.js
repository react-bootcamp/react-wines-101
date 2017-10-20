import React, { Component } from 'react';

export class Regions extends Component {
  onSelectRegion = (e, region) => {
    e.preventDefault();
    this.props.onSelectRegion(region);
  };

  render() {
    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Regions</h2>
        <div className="collection">
          {this.props.regions.map(region => (
            <a
              key={region}
              href="#!"
              onClick={e => this.onSelectRegion(e, region)}
              className={['collection-item', region === this.props.region ? 'active' : ''].join(
                ' '
              )}>
              {region}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
