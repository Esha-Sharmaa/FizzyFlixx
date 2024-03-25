import React from 'react';
import { IMG_URL } from '../utils/constants';
const MovieCard = ({imgID}) => {
    return (
      <img
        src={`${IMG_URL}${imgID}`}
        alt="img"
        className="w-52 h-40 object-cover rounded"
      />
    );
}

export default MovieCard;
