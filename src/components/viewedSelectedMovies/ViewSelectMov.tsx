import React, {useEffect} from 'react';
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { State } from "../../types";
import BuyCard from '../buyCard/BuyCard';
import FavouriteCard from '../favouriteCard/FavouriteCard';
import { HomeContainer } from "./styles/ViewSelect";

const ViewSelectMov = () => {
    const tickets = useSelector((state: State) => state.tickets);
    const favourites = useSelector((state: State) => state.favourites);

    return (
        <HomeContainer>
            <div className="row">            
                <div className="col mt-2">
                    <h1 className="title">Favourites movies</h1>
                    {!favourites || favourites!.length ===0 ?
                         <h4 className="info">No favourites movies</h4>
                        :
                        (<Row xs={1} lg={2}>
                             {favourites.map((item, idx) => (<FavouriteCard key={idx} movie={item}/>))}
                        </Row>)
                    }
                </div>
                <div className="col mt-2">
                    <h1 className="title">Viewed movies</h1>
                    {!tickets || tickets!.length ===0 ?
                         <h4 className="info">No viewed movies</h4>
                        :
                        (<Row xs={1} lg={2}>
                            {tickets.map((item, idx) => (<BuyCard key={idx} ticket={item} />))}
                        </Row>)
                    }</div>
            </div>
        </HomeContainer>
    )
}

export default ViewSelectMov