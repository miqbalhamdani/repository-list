import React, { Component } from 'react';
import axios from 'axios';
import RepositoryList from './components/Repositories/RepositoryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
    };
  };

  fetch(name) {
    axios
      .get(`https://api.github.com/users/${name}/repos`)
      .then(response => {
        this.setState({ repositories: response.data});
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  inputOnchangeHandler = event => {
    if (!event.target.value) {
      this.setState({ repositories: []});
      return;
    }

    this.fetch(event.target.value);
  };

  render() {
    const list = {
      justifyContent: 'center',
      marginTop: '50px'
    }

    return (
      <div className="container">
        <div className="row" style={list}>
          <div className="col">
            <div className="form-group input-group-lg">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Repository Name"
                onChange={this.inputOnchangeHandler} />
            </div>

            <RepositoryList repositories={this.state.repositories} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
