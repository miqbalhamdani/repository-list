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

  componentDidMount() {
    axios
      .get('https://api.github.com/users/miqbalhamdani/repos')
      .then(response => {
        this.setState({ repositories: response.data});
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  render() {
    const list = {
      justifyContent: 'center',
      marginTop: '50px'
    }

    return (
      <div className="container">
        <div className="row" style={list}>
          <div className="col-6">
            <RepositoryList repositories={this.state.repositories} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
