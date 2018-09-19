import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='row justify-content-center mt-4'>
          <div className='col-9 text-center text-white'>
            <h1 className='display-4 mt-4 mb-0'>San Diego Top Spots</h1>
            <p className='mt-0 mb-4'>A list of the top 30 places to see in San Diego, California.</p>
          </div>
        </div>
        { 
          this.state.topspots.map(topspot => (
            <div className='row justify-content-center mt-5'>  
              <div className='col-9 border border-dark topspot'>
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location} />
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
