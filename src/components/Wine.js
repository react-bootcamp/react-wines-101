import React, { PropTypes } from 'react';
import { LikeButton, CommentButton, CommentList } from '.';
import './Wine.css';

export const Wine = React.createClass({
  render() {
    return (
      <div className="col s12 m12 l6">
        <h2 className="center-align">Wine details</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img className="responsive-img wine-detail-image" src="https://www.haut-brion.com/mobile/img/chem/Chateau-Haut-Brion_b5-simple.png" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>Haut Brion</h3>
              <p>Château Haut-Brion is a French wine, rated a Premier Cru Classé (First Growth), produced in Pessac just outside the city of Bordeaux.</p>
              <br/>
              <p><b>Appellation:</b> Pessac-Léognan</p>
              <p><b>Color:</b> red</p>
              <p><b>Grapes:</b> Merlot, Cabernet-Sauvignon</p>
              <CommentList />
            </div>
            <div className="card-action">
              <LikeButton />
              <CommentButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
