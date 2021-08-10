import React from 'react';
import { ICharacter } from './types';

interface ICharacterCardProps {
    character: ICharacter
}

const CharacterCard: React.FC<ICharacterCardProps> = props => {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
        </div>
    )
}

export default CharacterCard;