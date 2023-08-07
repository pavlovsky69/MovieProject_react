import React from 'react';

const GenreListCard = ({genre}) => {
    const {id, name}=genre;

    return (
        <div>
            <p>{id},{name}</p>
        </div>

    );
};

export {GenreListCard};