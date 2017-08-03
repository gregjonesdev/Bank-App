import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          This is the header
        </header>
          {this.props.children}
        <footer>
          This is the footer
        </footer>
      </div>
    )
  }
}
