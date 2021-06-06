import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ error, changeError ] = useState(false);
    const baseUrl = process.env.REACT_APP_DOMAIN;
    useEffect(() => {
        getData()
    }, [url])

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