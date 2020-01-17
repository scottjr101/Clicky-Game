import React from 'react';
import './styles.css';

function Cards(props) {
    return <div className="card border-0" onClick={() => props.clicker(props.id)}>
              <img src={props.image} className="card-img-top" alt={props.name} />
            </div>
            
}

export default Cards;