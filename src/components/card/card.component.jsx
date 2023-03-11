import { Component } from "react";
import './card.style.css'
import Button from 'react-bootstrap/Button'

class Cards extends Component{

    render(){
        const {id,name,email}=this.props.monster
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${id}}?set=set2&size=150x150`} alt={`monster ${name} `} key={id} />
                <h2 className="h2">{name}</h2>
                <p>{email}</p>
                <Button variant='danger'>
                    hello
                </Button>
            </div>
    )}
}

export default Cards