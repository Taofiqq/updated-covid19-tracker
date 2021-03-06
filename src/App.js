import React from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchWorldCovidData } from './api';


 class App extends React.Component {
     state = {
         data: {},
     }

    async componentDidMount() {
        const fetchedData = await fetchWorldCovidData();
        // console.log(data);
      this.setState({data: fetchedData});
    }
    render() {
        return (
            <div className={styles.container}>
               <Cards data={this.state.data}/>
               <Chart />
               <CountryPicker />
            </div>
        )
    }
}


export default App;