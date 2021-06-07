import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [ data, setData ] = useState({});
    const [ count, setCount ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const [ error, changeError ] = useState(false);
    const baseUrl = process.env.REACT_APP_DOMAIN;

    useEffect(() => {
        getData();
        increaseCount();
    }, [url, count])

    const increaseCount = () => {
        setTimeout(() => {
            console.log('working!')
            setCount(count + 1);
        }, 600000)
    }

    const getData = async () => {
        axios.get(baseUrl + url)
            .then(resp => {
                setData({data: resp});
            })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                changeError(true);
            })
    }

    return [ data, loading, error ];
}

export default useFetch;