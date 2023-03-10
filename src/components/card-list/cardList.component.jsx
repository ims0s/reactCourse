import {Component} from 'react'
import './cardList.style.css'

import Cards from '../card/card.component.jsx'

class CardsList extends Component{
    

    render(){
        console.log('render cards')
        const {monsters,search}=this.props
        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
            
                        if(monster.name.toLowerCase().includes(search.toLowerCase())){
                            return <Cards monster={monster} />
                        }
                        return ''
                    })
                }
            </div>
        )
    }

}

export default CardsList