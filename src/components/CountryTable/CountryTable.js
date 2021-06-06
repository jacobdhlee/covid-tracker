import React, { useState, useEffect } from 'react';
import { Container, Table } from './CountryTable.styles';

const CountryTable = ({data}) => {
    const [index, changeIndex] = useState(0);
    const [current, changeCurrent] = useState([...data.slice(0, 10)]);

    useEffect(() => {
        changeTable()
    }, [index, data])

    const changeTable = () => {
        const end = index + 10 > data.length ? data.length : index + 10;
        changeCurrent([...data.slice(index, end)]);
    }

    const updateIndex = (change) => {
        const newIndex = change === 'increase' ? index + 10 : index - 10;
        changeIndex(newIndex);
    }

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Today</th>
                        <th>Cases</th>
                        <th>Death</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {current.length > 0 && current.map((country, i) => {
                        return (
                            <tr key={i}>
                                <th>
                                    <img src={country.countryInfo.flag} alt={`${country.country} flag`}/>
                                    {country.country}
                                </th>
                                <th>{country.todayCases}</th>
                                <th>{country.cases}</th>
                                <th>{country.deaths}</th>
                                <th>{country.recovered}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div>
                <button onClick={() => updateIndex('decrease')} disabled={index === 0}>back</button>
                <button onClick={() => updateIndex('increase')} disabled={index + 10 > data.length}>next</button>
            </div>
        </Container>
    )
}

export default CountryTable;