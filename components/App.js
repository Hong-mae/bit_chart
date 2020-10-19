import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import axios from 'axios';

const App = () => {
    const [charts, setCharts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(
            `https://api.bithumb.com/public/ticker/ALL`
        ).then(response => {
            setCharts(response.data);
        }).catch(err => {
            setError(err);
        });
    }, [])

    if (error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>{charts}</Text>
        </View>
    )
}

export default App
