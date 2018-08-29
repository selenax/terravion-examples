import React, { Component } from 'react';
import SearchResult from './SearchResult.jsx';
import axios from 'axios';
import 'babel-polyfill';
import '../style.css';


const epochAPI = 'https://api2.terravion.com/layers/getLayersFromBlockId?blockId=48ed28ca-d272-4d1f-bfe0-cb95b61eecbc&access_token=2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa';
const geomAPI = 'https://api2.terravion.com/userBlocks/getUserBlocksForMap?userId=5bad4dfa-7262-4a0a-b1e5-da30793cec65&access_token=2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 0,
      lat: 0,
      zoom: 0,
      epochTime: [],
    };


  }
  componentDidMount() {
    this.getDateEpoch();
    this.getCoordinates();
  }
  
  async getDateEpoch()  {
    const res = axios.get(epochAPI).then(({data: data}) => {
      console.log('successful epoch!', data);
      this.setState({ epochTime: data})
    })
  }

  getCoordinates() {
    const res = axios.get(geomAPI).then(({data: data}) => {
      console.log('successful geosjon', data[0].geom)
      this.setState({ })
    })
  }


  render() {
    const {} = this.state;
    return (
      <div>
       <SearchResult />
      </div>
    );
  }
}

export default App;
