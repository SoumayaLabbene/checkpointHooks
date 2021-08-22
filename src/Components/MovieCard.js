import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {

    return (
        <>
            
    <Card style={{ width:'25rem', height:'60rem'}}>
    <Card.Img variant="top" src={movie.posterUrl} style={{height:'500px'}} />
    <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    <p>{movie.description}</p>
    <h6 style={{ color: 'red' }}>Rating: {movie.rating}</h6>
    {/* <p>Trailer Link: movie.trailerLink}</p>  */}
    </Card.Text>
    </Card.Body>
    <div style={{ textAlign:'center', marginBottom:'1.4rem' }}>
    <Link to={`/Trailer/${movie.id}`}> <Button variant="outline-dark">See more</Button></Link>
    </div>
                </Card>
                
                
    </>
    );
   };
   export default  MovieCard;