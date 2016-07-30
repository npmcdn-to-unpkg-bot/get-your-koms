import React from 'react';
import { Link } from 'react-router';
import styles from '../styles';

const Home = React.createClass({
  render() {
    return (
      <div className="jumbotron col-xs-12 text-xs-center" style={styles.transparentBg}>
        <h1>Home Page</h1>
        <p className="lead">Welcome Message</p>
        <Link to="/KOMs">
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    );
  },
});

export default Home;
