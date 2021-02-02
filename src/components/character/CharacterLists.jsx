import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  const renderedCharacters = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {renderedCharacters}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.arrayOf.isRequired,
    name: PropTypes.arrayOf.isRequired,
    photoUrl: PropTypes.arrayOf.isRequired
    // affiliation: PropTypes.arrayOf.isRequired
  })).isRequired
};

export default CharacterList;
