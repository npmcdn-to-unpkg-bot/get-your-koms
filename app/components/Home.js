import React from 'react';
import { Link } from 'react-router';
import styles from '../styles';

const btnStyle = {
  borderRadius: '3rem',
  paddingLeft: '4rem',
  paddingRight: '4rem',
};

class Home extends React.Component{
  render() {
    return (
      <div className="jumbotron col-xs-12 text-xs-center" style={styles.transparentBg}>
        <h1>StravaMap</h1>
        <p className="lead">See all the times you went HAM.</p>
        <Link to="/Map">
          <button type="button" className="btn btn-lg btn-success" style={btnStyle}>GO</button>
        </Link>
      </div>
    );
  }
}

export default Home;
