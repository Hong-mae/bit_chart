import client from './client';

export const getChart = () => (
    client.get('https://api.bithumb.com/public/ticker/ALL')
);