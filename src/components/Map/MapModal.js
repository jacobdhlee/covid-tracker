import React, { useState, useEffect } from 'react';
import { Popup } from 'react-map-gl';

import { Container, Header, Text } from './MapModa.styles'
import './map.css';

const MapModal = ({data, togglePopup}) => {
    return (
        <Popup
            latitude={data.countryInfo.lat}
            longitude={data.countryInfo.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => togglePopup()}
            tipSize={0}
            
        >
            <Container>
                <Header>
                    <img src={data.countryInfo.flag} alt={`${data.country} flag img`}/>
                    <div>{data.country}</div>
                </Header>
                <Text className="active">{data.cases} Cases</Text>
                <div>
                    <Text>Recover: {data.recovered}</Text>
                    <Text>Active: {data.active}</Text>
                    <Text>Deaths: {data.deaths}</Text>
                </div>
            </Container>

        </Popup>
    )
}

export default MapModal;