import React from 'react';
import { Card } from 'react-bootstrap';

const Game = ({
    id,
    title,
    thumbnail,
    short_description,
    game_url,
    genre,
    platform,
    publisher,
    developer,
    release_date,
    freetogame_profile_url,
}) => {
    return (
        <Card className="game">
            <Card.Body>
                <Card.Title className="game-title">{title}</Card.Title>
                <div className="game-details">
                    <div><img src={thumbnail} /></div>
                    <div>Short Description: {short_description}</div>
                    <div>Genre: {genre}</div>
                    <div>Free to game a profile <a href={freetogame_profile_url} target='_blank'>click here</a></div>
                    <div><a href={game_url} target='_blank'>Link game</a></div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Game;