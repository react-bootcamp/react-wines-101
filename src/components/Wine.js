import React, { Component } from 'react';
import { LikeButton, CommentButton, CommentList } from '.';

export class Wine extends Component {
  render() {
    if (!this.props.wine) {
      return null;
    }
    return (
      <div className="col s12 m12 l6">
        <h2 className="center-align">Wine details</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img className="responsive-img wine-detail-image" alt="Wine bottle pic" src={`${this.props.host}/api/wines/${this.props.wine.id}/image`} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>{this.props.wine.name}</h3>
              <br/>
              <p><b>Appellation:</b> {this.props.wine.appellation.name}</p>
              <p><b>Region:</b> {this.props.wine.appellation.region}</p>
              <p><b>Color:</b> {this.props.wine.type}</p>
              <p><b>Grapes:</b> {this.props.wine.grapes.join(', ')}</p>
              <CommentList wine={this.props.wine} />
            </div>
            <div className="card-action">
              <LikeButton wine={this.props.wine} />
              <CommentButton openCommentModal={this.props.openCommentModal} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
