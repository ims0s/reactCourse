import {Component} from 'react'

class CardsList extends Component{
    

    render(){
        console.log('render cards')
        const {monsters,search}=this.props
        return (
            <div>
                {
                    monsters.map((monster) => {
            
                        if(monster.name.toLowerCase().includes(search.toLowerCase())){
                            return <h1 key={monster.id} >{monster.name}</h1>
                        }
                        return ''
                    })
                }
            </div>
        )
    }

}

export default CardsList