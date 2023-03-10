import { Component } from "react";
import './card.style.css'

class Cards extends Component{

    render(){
        const {id,name,email}=this.props.monster
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${id}}?set=set2`} alt={`monster ${name} `} key={id} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    )}
}

export default Cards