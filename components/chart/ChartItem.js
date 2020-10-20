import React, { useState } from 'react'
import { Text, CardItem, Thumbnail, Right, Icon, View } from 'native-base';
import { StyleSheet } from 'react-native'

import getSymbols from '../../lib/getSymbols.js';
import ChartItemDetail from './ChartItemDetail.js';

const ChartItem = ({ chart }) => {
    const [visibility, setVisibility] = useState(false);
    const { symbol, data } = chart;

    let _symbol = getSymbols(symbol);

    if (_symbol === undefined || _symbol.img === undefined) {
        _symbol = {};
        _symbol.img = require("../../assets/image/no_img_symbol.png");
    }

    return (
        <View>
            <CardItem bordered button onPress={() => setVisibility(!visibility)} style={{ flexDirection: "column" }}>
                <CardItem style={{ marginLeft: -15, marginRight: -15 }}>
                    <Thumbnail source={_symbol.img} small style={styles.thumbnail} />
                    <View style={styles.symbol}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{symbol}</Text>
                            <Text style={styles.price}>{parseInt(data.closing_price).toLocaleString()} KRW</Text>
                        </View>
                    </View>
                    <Right style={styles.right}>
                        <Icon type='MaterialIcons' name='swap-vert' />
                    </Right>
                </CardItem>

            </CardItem>
            {
                visibility && <ChartItemDetail symbol={symbol} data={data} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        flex: 1,
    },
    symbol: {
        flex: 8,
        marginLeft: 10,
        flexDirection: "column"
    },
    header: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontWeight: "bold",
        flex: 1
    },
})

export default ChartItem