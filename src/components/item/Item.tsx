import React from 'react';
import { Image } from "react-bootstrap";
import { PropsItem } from "../../types";
import { ItemContainer } from "./styles/ItemStyles";

const Item = ({ movie, image, genres }: PropsItem) => {

    return (
        <ItemContainer>
            <div className='imageDiv'>
                <Image className='image' src={image} alt='image' />
            </div>
            <div>
                <h4>{movie.title}</h4>
                <div><span>Year:</span> {movie.release_date}</div>
                <div className='details'>
                    <span>Genres:</span>
                    {genres.map((item, index) => (<div className='genre' key={index}>{`${item}`}</div>))}
                </div>
                <div className='details'>
                    <span>Age limit: <span className='spanAge'>{movie.adult === false ? ' No age limit' : '18+'}</span></span>  
                </div>
                <div className='details'>
                    <span>Movie Trailer: <span className='spanAge'>{movie.video === false ? ' Absent' : movie.video}</span></span>  
                </div>
                <div>
                    <div><span>Overview:</span></div>
                    {movie.overview}
                </div>
            </div>
        </ItemContainer>
    );
};

export default Item;