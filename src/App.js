import React, { useState, useEffect } from 'react';

import useFetch from './hooks/useFetch';

import OverallItem from './components/OverallItem/OverallItem';
import CountryTable from './components/CountryTable/CountryTable';

import { Container, OverallContainer, MapContainer } from './App.styles';

function App() {
  const [ overallData, loading, error ] = useFetch(`/v3/covid-19/historical/all`);
  const [ countryData, countryLoading, countryError ] = useFetch('/v3/covid-19/countries');

  const [ overallFormatted, setData ] = useState({});
  const [ contryList, setCountryList ] = useState([]);
  const [ contryData, setCountryData ] = useState([]);

  useEffect(() => {
    if(!loading && !error) {
      let format = overallData.data.data;
      setData({
        cases: linearData(format.cases),
        deaths: linearData(format.deaths),
        recovered: linearData(format.recovered),
      })
    }
    },[overallData, loading, error]);

  useEffect(() => {
    if(!countryLoading && !countryError) {
      changeCountryList();
      setCountryData([...countryData.data.data.sort((a,b) => b.cases - a.cases)]);
    }
  }, [countryData, countryLoading, countryError])
  
  const changeCountryList = () => {
    const list = countryData.data.data.map(item => item.country);
    setCountryList([...list]);
  }

  const linearData = (obj) => {
    let result = Object.entries(obj).map(item => ({name: item[0], value: item[1]}))
    return result;
  }
  
  return (
    <Container>
      <div>
        <h1>COVID-19</h1>
        <h3>Live total dashboard</h3>
      </div>
      <OverallContainer>
        <OverallItem data={overallFormatted['cases']} category={'Cases'}/>
        <OverallItem data={overallFormatted['deaths']} category={'Deaths'}/>
        <OverallItem data={overallFormatted['recovered']} category={'Recovered'}/>
      </OverallContainer>
      <MapContainer>
        Map goes here
      </MapContainer>
      <div>
        <CountryTable data={contryData}/>
      </div>
    </Container>
  );
}

export default App;
