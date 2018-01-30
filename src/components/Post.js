import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { details } = this.props;

    return (
      <div className="post">
        <div className="post-top">
          <p className="flex-post num">{details.num}</p>
          <img
            className="flex-post post-img"
            src={details.image}
            alt={details.alt}
          />
          <p className="flex-post votes">
            <i className="arrow fa fa-arrow-up" aria-hidden="true" />{' '}
            {details.votes}
            <i className="arrow fa fa-arrow-down" aria-hidden="true" />
          </p>
        </div>
        <a className="title-link" href={details.href} target="_blank">
          <h2 className="post-title">{details.title}</h2>
        </a>
        <p className="post-submit">
          {details.submit} <span className="author">{details.author}</span>
        </p>
        <div className="post-bottom">
          <p className="social"> {details.comments}</p>
          <p className="social"> share</p>
          <p className="social"> save</p>
          <p className="social"> hide</p>
          <p className="social"> report</p>
        </div>
      </div>
    );
  }
}

export default Post;
