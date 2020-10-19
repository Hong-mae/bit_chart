// @flow strict
import { SYMBOLS } from './constants';

const getSymbols = (name: string) => {
    let symbol;

    switch (name) {
        case 'BTC':
            symbol = SYMBOLS.BTC;
            break;
        default:
            symbol = {
                img: require("../assets/image/no_img_symbol.png")
            };
            break;
    }

    return symbol;
};

export default getSymbols;
