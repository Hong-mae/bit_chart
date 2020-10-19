import React from 'react'
import { View, Text, CardItem, Thumbnail } from 'native-base';

import getSymbols from '../../lib/getSymbols.js';

const ChartItem = ({ chart }) => {
    const { symbol, data } = chart;
    let _symbol = getSymbols(symbol);

    return (
        <CardItem>
            <Thumbnail source={_symbol.img} />
            < Text style={{ fontSize: 25 }}>{symbol}</Text>
        </CardItem>
    )
}

export default ChartItem