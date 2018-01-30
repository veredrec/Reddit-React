import React, { Component } from 'react';
import UpperNav from './components/UpperNav';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import LowerMenu from './components/LowerMenu';

import samplePosts from './posts';
import './Reddit.css';

class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      posts: samplePosts
    };
  }

  render() {
    return (
      <div className="App">
        <UpperNav />
        <Header />
        <div className="main" onLoad={this.loadPosts}>
          {Object.keys(this.state.posts).map(key => (
            <Post key={key} details={this.state.posts[key]} />
          ))}
        </div>
        <LowerMenu />
        <Footer />
      </div>
    );
  }
}

export default Reddit;
