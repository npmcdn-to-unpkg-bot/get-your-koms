const React = require('react');
const Prompt = require('../components/PgOne');

const PgOneContainer = React.createClass({
  // Page logic would go here
  /*
  getInitialState() {
    return {
      data: [],
    };
  },
  componentWillMount() {
    this.getAthlete();
  },
  getAthlete() {
    axios.get('/api/athlete', { // eslint-disable-line no-undef
      params: {
        id: 875993,
      },
    }).then((response) => {
      this.setState({ data: response.data });
      console.log(this.state.data);
    });
  },
  */
  render() {
    return (
      <Prompt header={this.props.route.header}/>
    );
  },
});

module.exports = PgOneContainer;
