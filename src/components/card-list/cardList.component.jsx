import {Component} from 'react'
import './cardList.style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from '../card/card.component.jsx'

class CardsList extends Component{
    

    render(){
        
        const {monsters,search}=this.props
        return (
            <div className='card-list'>
                <Row>
                {
                    monsters.map((monster) => {
            
                        if(monster.name.toLowerCase().includes(search.toLowerCase())){
                            return (
                                <Col xs={3} onClick={console.log(this.props)}>
                                <Cards monster={monster} />
                                </Col>
                            )                            
                        }
                        return ''
                    })
                }
                </Row>
            </div>
        )
    }

}

export default CardsList