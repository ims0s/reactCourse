import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react';
import CardsList from './components/card-list/cardList.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search:''
      
    }
  }

  onSearchChange = (e) => {
    this.setState({search:e.target.value})
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
    
    const {monsters,search} = this.state
    return (
      
      <div className="App">
        <SearchBox className='' placeholder="monsters name" onChangeHandler={this.onSearchChange} />
        
        <CardsList monsters={monsters} search={search} />
      </div>
    )
  }
}

export default App;
