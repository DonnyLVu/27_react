import React, { Component } from 'react';
import { getCharacters } from '../../services/AvatarApi';
import CharacterList from './CharacterLists';

export default class AllCharacter extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return (
      <CharacterList characters={characters} />
    );
  }
}

