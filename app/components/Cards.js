import React, { PropTypes } from 'react';

// Card info
const cardData = [
  { id: 'card-1', title: 'Show My KOMs' },
  { id: 'card-2', title: 'Show My Races' },
  { id: 'card-3', title: 'Show My Longest Run' },
];

// Individual card markup
const cardStyle = {
  borderColor: '#1E8BC3',
  cursor: 'pointer',
};

function logClick(title) {
  console.log(title);
}

const Card = (props) => {
  return (
    <div
      className="card card-outline-primary text-xs-center"
      style={cardStyle}
      onClick={props.getStravaData}
    >
      <div className="card-block">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getStravaData: PropTypes.func.isRequired,
};

// Itterate over Cards
const CardList = (props) => {
  const CardsArray = props.cards.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        id={item.id}
        getStravaData={props.handleGetStravaData}
      />
    );
  });
  return <div>{CardsArray}</div>;
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  handleGetStravaData: PropTypes.func.isRequired,
};

// Render card section
const cardsStyle = {
  tableLayout: 'auto',
  marginBottom: 0,
};

const Cards = () => {
  function test() {
    console.log('hello');
  }
  return (
    <div className="card-deck-wrapper">
      <div className="card-deck" style={cardsStyle}>
        <CardList
          cards={cardData}
          handleGetStravaData={test()}

        />
      </div>
    </div>
  );
};

export default Cards;
