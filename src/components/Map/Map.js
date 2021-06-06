import React, { useState } from 'react';

import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

import MapModal from './MapModal';

import { Container } from './Map.styles';
import { MapColor } from '../../util/color';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({data}) => {
    const [setting, changeSetting] = useState({
        width: "100%",
        height: "100%",
        latitude: 0,
        longitude: 0,
        zoom: 2,
    });
    const [ select, changeSelect ] = useState({});
    const [ popup, changePopup ] = useState(false);

    const changeSettings = (nextViewport) => {
        changeSetting({...nextViewport});
    }

    const setColor = (data) => {
        let status = data.todayCases < 100 ? 'safe' : data.todayCases > 1000 ? 'danger' : 'neutral';
        return MapColor[status];
    }

    const openPopup = (data) => {
        changePopup(true);
        changeSelect({...data})
    }

    const closePopup = () => {
        changePopup(false);
        changeSelect({})
    }

    return (
        <Container>
            <ReactMapGL 
                {...setting}
                mapStyle={'mapbox://styles/mapbox/dark-v10'}
                onViewportChange={(nextViewport) => changeSettings(nextViewport)}
                mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
            >
                {
                    (data && data.length > 0) && data.map((item, i) => {
                        return (
                            <Marker 
                                key={`${i}_${item.countryInfo.iso2}`} 
                                longitude={item.countryInfo.long} 
                                latitude={item.countryInfo.lat} 
                            >
                                <div 
                                    style={{
                                        width: '20px', 
                                        height: '20px', 
                                        borderRadius: '10px', 
                                        backgroundColor: setColor(item)
                                    }}
                                    onClick={() => openPopup(item)}
                                />
                            </Marker>
                        );
                    })
                }
                {popup && <MapModal data={select} togglePopup={closePopup}/>}
                <NavigationControl style={{margin: '10px'}}/>
            </ReactMapGL>
        </Container>
    )
}

export default Map;