import React, { Component } from 'react';
import Map1 from './Map';
import axios from 'axios';
import 'babel-polyfill';
import '../style.css';


const epochAPI = 'https://api2.terravion.com/layers/getLayersFromBlockId?blockId=48ed28ca-d272-4d1f-bfe0-cb95b61eecbc&access_token=2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa';
const geomAPI = 'https://api2.terravion.com/userBlocks/getUserBlocksForMap?userId=5bad4dfa-7262-4a0a-b1e5-da30793cec65&access_token=2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 0,
      lat: 0,
      geom: {},
      zoom: 0,
      epochTimes: [],
    };


  }
  componentDidMount() {
    this.getDateEpoch();
    this.getCoordinates();
  }
  
  async getDateEpoch()  {
    const res = axios.get(epochAPI).then(({data: data}) => {
      console.log('successful epoch!', data);
      this.setState({ epochTimes: data})
    })
  }

  getCoordinates() {
    const res = axios.get(geomAPI).then(({data: data}) => {
      console.log('successful geosjon', JSON.parse(data[0].geom))
      const coordinates = JSON.parse(data[0].geom);
      console.log(coordinates, 'coordinates appjsx')
      this.setState({ geom: coordinates })
    })
  }


  render() {
    const { epochTimes, geom } = this.state;
    return (
      <div>
       {epochTimes.length > 1 && <Map1 epochTimes={epochTimes}/>}

      </div>
    );
  }
}

export default App;
