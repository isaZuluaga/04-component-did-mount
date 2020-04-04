import React, { Component } from 'react';
import './App.css';

const url = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  state = {
    users: [],
    titleClass: 'yellow'
  }

  async componentDidMount() {
    try {
      const { users } = this.state
      const response = await fetch(url)
      const usersResponse = await response.json()
      this.setState({ users: [...users, ...usersResponse] })
    } catch (err) {
      console.log(err)
    }

    document.addEventListener('mouseenter', this.handleMouseEnter)
    document.addEventListener('mouseout', this.handleMouseOut)
  }

  handleMouseEnter = (e) => {
    e.preventDefault()
    this.setState({ titleClass: 'green' })
  }

  handleMouseOut = (e) => {
    e.preventDefault()
    this.setState({ titleClass: 'yellow' })
  }

  render() {
    const { users, titleClass } = this.state

    return (
      <>
        <h1 className={titleClass}>componentDidMount</h1>
        <ul>
          {users.map(user => <li key={user.id.toString()}>
            {user.name}
          </li>)}
        </ul>
      </>
    );
  }
}

export default App;
