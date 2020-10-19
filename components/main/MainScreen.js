import React, { useEffect, useState } from 'react'
import { Container, Header, Title, Body, Text, View, Spinner, Icon, Content, Card, Button } from 'native-base';
import { Dimensions, StyleSheet, Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { bitCoinsChart } from '../../modules/bitCoinCharts';
import moment from 'moment';
import ChartItem from '../chart/ChartItem';

const MainScreen = () => {
    const [runRefresh, setRunRefresh] = useState(false)
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

    useEffect(() => {
        dispatch(bitCoinsChart());
    }, [dispatch])

    const height = Dimensions.get('window').height;

    const refreshScreen = () => {
        console.log("press");
        setRunRefresh(true);
    }

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
                    name='refresh'
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
            )}
        </Container >
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        flexDirection: "row"
    },
    redContent: {
        flex: 1,
        backgroundColor: "red",
        height: 100
    },
    yellowContent: {
        flex: 1,
        backgroundColor: "yellow",
        height: 100
    },
    blueContent: {
        flex: 1,
        backgroundColor: "blue",
        height: 100
    },
})

export default MainScreen