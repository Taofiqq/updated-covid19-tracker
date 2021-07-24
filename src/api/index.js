import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
    headers: {
      'x-rapidapi-key': '5cf25132e5msh07ce895df09bd96p1fb02ajsn623ba5792950',
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

export const fetchWorldCovidData = async() => {
    try {
        const {data: [{TotalCases, NewCases, TotalRecovered, NewRecovered, TotalDeaths, NewDeaths, ActiveCases, Recovery_Proporation, Case_Fatality_Rate}]} = await axios.request(options);
        return {TotalCases, NewCases, TotalRecovered, NewRecovered, TotalDeaths, NewDeaths, ActiveCases, Recovery_Proporation, Case_Fatality_Rate};
    } catch (error) {
        
    }
}