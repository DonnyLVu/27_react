import React, { Component } from 'react';
import { getCharacter } from '../../services/AvatarApi';
import DetailGet from './DetailGet';

export default class Detail extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    getCharacter(this.props.match.params.id)
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
        <DetailGet {...characters} />
        Detail Page
      </div>
    );
  }
}
