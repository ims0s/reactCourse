// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardsList from './components/card-list/cardList.component.jsx';
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
    console.log('render app')
    const {monsters,search} = this.state
    return (
      
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(e) =>{
          this.setState({search:e.target.value})
        }} />
        
        <CardsList monsters={monsters} search={search} />
      </div>
    )
  }
}

export default App;
