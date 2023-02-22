// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search:''
      
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => { 
            return { monsters: users } 
          }
        )
      )
  }

  render() {
    return (
      
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(e) =>{
          this.setState({search:e.target.value})
        }} />
        {
          this.state.monsters.map((monster) => {
            
            if(monster.name.toLowerCase().includes(this.state.search.toLowerCase())){
              return <h1 key={monster.id} >{monster.name}</h1>
            }
            return ''
          })
        }
      </div>
    )
  }
}

export default App;
