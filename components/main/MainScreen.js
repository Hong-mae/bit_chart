import React, { useEffect, useRef } from 'react'
import { Container, Header, Title, Body, Text, View, Spinner, Icon, Content, Card, Right, CardItem } from 'native-base';
import { Dimensions, StyleSheet, Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { bitCoinsChart } from '../../modules/bitCoinCharts';
import moment from 'moment';
import ChartItem from '../chart/ChartItem';

const MainScreen = () => {
    const dispatch = useDispatch();
    const { status, charts, date, error, loading } = useSelector(
        ({ bitCoinCharts, loading }) => {
            const { datas, error, status } = bitCoinCharts;
            let charts = [];
            let date = moment().format('lll');
            if (datas) {
                Object.keys(datas).map(element => element !== "date" && charts.push({ symbol: element, data: datas[element] }));
                // date = moment(datas.date).format('LLLL');
                date = moment(parseInt(datas.date)).format('lll');
            }

            return ({
                status,
                error,
                charts: charts,
                date,
                loading: loading['bitCoins/GET_BIT_COINS_CHART']
            })
        }
    )

    useInterval(() => {
        dispatch(bitCoinsChart());
    }, 1000);


    useEffect(() => {
        dispatch(bitCoinsChart());
    }, [dispatch])

    if (loading) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Spinner color="#212121" />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Now Loading...
                </Text>
            </View>
        )
    }

    if (error) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Icon
                    type='FontAwesome'
                    name='close'
                    style={{ fontSize: 60 }}
                    onPress={refreshScreen} />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Sorry. Try Again...
                </Text>
                <Text
                    style={{ color: "#2a2fff55", textDecorationLine: "underline", marginTop: 10 }}
                    onPress={() => Alert.alert("Error", error.message)}>
                    details...
                </Text>
            </View>
        )
    }

    return (
        <Container>
            <Header>
                <Body>
                    <Title>{date}</Title>
                </Body>
            </Header>
            {!loading && charts && (
                <Content>
                    <Card>
                        {charts.map((chart, index) => (
                            <ChartItem chart={chart} key={index} />
                        ))}
                    </Card>
                </Content>
            )
            }
        </Container >
    )
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default MainScreen