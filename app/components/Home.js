const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Welcome = require('./Welcome');

const Home = React.createClass({
  render() {
    return (
      <Welcome>
        <h1>Welcome</h1>
        <p className='lead'>Welcome Message</p>
        <Link to='/pgOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </Welcome>
    );
  },
});

module.exports = Home;
