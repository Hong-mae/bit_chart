// @flow strict
import { SYMBOLS } from './constants';

const getSymbols = (name: string) => {
    let symbol;

    switch (name) {
        case 'BTC':
            symbol = SYMBOLS.BTC;
            break;
        case "ETH":
            symbol = SYMBOLS.ETH;
            break;
        case "DASH":
            symbol = SYMBOLS.DASH;
            break;
        case "LTC":
            symbol = SYMBOLS.LTC;
            break;
        case "ETC":
            symbol = SYMBOLS.ETC;
            break;
        case "XRP":
            symbol = SYMBOLS.XRP;
            break;
        case "BCH":
            symbol = SYMBOLS.BCH;
            break;
        case "ZEC":
            symbol = SYMBOLS.ZEC;
            break;
        case "QTUM":
            symbol = SYMBOLS.QTUM;
            break;
        case "BTG":
            symbol = SYMBOLS.BTG;
            break;
        case "EOS":
            symbol = SYMBOLS.EOS;
            break;
        case "ICX":
            symbol = SYMBOLS.ICX;
            break;
        case "TRX":
            symbol = SYMBOLS.TRX;
            break;
        case "ELF":
            symbol = SYMBOLS.ELF;
            break;
        case "OMG":
            symbol = SYMBOLS.OMG;
            break;
        case "KNC":
            symbol = SYMBOLS.KNC;
            break;
        case "GNT":
            symbol = SYMBOLS.GNT;
            break;
        case "ZIL":
            symbol = SYMBOLS.ZIL;
            break;
        case "WAXP":
            symbol = SYMBOLS.WAXP;
            break;
        case "POWR":
            symbol = SYMBOLS.POWR;
            break;
        case "LRC":
            symbol = SYMBOLS.LRC;
            break;
        case "STEEM":
            symbol = SYMBOLS.STEEM;
            break;
        case "STRAT":
            symbol = SYMBOLS.STRAT;
            break;
        case "AE":
            symbol = SYMBOLS.AE;
            break;
        case "ZRX":
            symbol = SYMBOLS.ZRX;
            break;
        case "REP":
            symbol = SYMBOLS.REP;
            break;
        case "XEM":
            symbol = SYMBOLS.XEM;
            break;
        case "SNT":
            symbol = SYMBOLS.SNT;
            break;
        case "ADA":
            symbol = SYMBOLS.ADA;
            break;
        case "CTXC":
            symbol = SYMBOLS.CTXC;
            break;
        case "BAT":
            symbol = SYMBOLS.BAT;
            break;
        case "WTC":
            symbol = SYMBOLS.WTC;
            break;
        case "THETA":
            symbol = SYMBOLS.THETA;
            break;
        case "LOOM":
            symbol = SYMBOLS.LOOM;
            break;
        case "WAVES":
            symbol = SYMBOLS.WAVES;
            break;
        case "ITC":
            symbol = SYMBOLS.ITC;
            break;
        case "TRUE":
            symbol = SYMBOLS.TRUE;
            break;
        case "LINK":
            symbol = SYMBOLS.LINK;
            break;
        case "RNT":
            symbol = SYMBOLS.RNT;
            break;
        case "ENJ":
            symbol = SYMBOLS.ENJ;
            break;
        case "VET":
            symbol = SYMBOLS.VET;
            break;
        case "MTL":
            symbol = SYMBOLS.MTL;
            break;
        case "IOST":
            symbol = SYMBOLS.IOST;
            break;
        case "TMTG":
            symbol = SYMBOLS.TMTG;
            break;
        case "QKC":
            symbol = SYMBOLS.QKC;
            break;
        case "BZNT":
            symbol = SYMBOLS.BZNT;
            break;
        case "HDAC":
            symbol = SYMBOLS.HDAC;
            break;
        case "NPXS":
            symbol = SYMBOLS.NPXS;
            break;
        case "LBA":
            symbol = SYMBOLS.LBA;
            break;
        case "WET":
            symbol = SYMBOLS.WET;
            break;
        case "AMO":
            symbol = SYMBOLS.AMO;
            break;
        case "BSV":
            symbol = SYMBOLS.BSV;
            break;
        case "DAC":
            symbol = SYMBOLS.DAC;
            break;
        case "ORBS":
            symbol = SYMBOLS.ORBS;
            break;
        case "VALOR":
            symbol = SYMBOLS.VALOR;
            break;
        case "CON":
            symbol = SYMBOLS.CON;
            break;
        case "ANKR":
            symbol = SYMBOLS.ANKR;
            break;
        case "MIX":
            symbol = SYMBOLS.MIX;
            break;
        case "LAMB":
            symbol = SYMBOLS.LAMB;
            break;
        case "CRO":
            symbol = SYMBOLS.CRO;
            break;
        case "FX":
            symbol = SYMBOLS.FX;
            break;
        case "CHR":
            symbol = SYMBOLS.CHR;
            break;
        case "MBL":
            symbol = SYMBOLS.MBL;
            break;
        case "MXC":
            symbol = SYMBOLS.MXC;
            break;
        case "FAB":
            symbol = SYMBOLS.FAB;
            break;
        case "OGO":
            symbol = SYMBOLS.OGO;
            break;
        case "DVP":
            symbol = SYMBOLS.DVP;
            break;
        case "FCT":
            symbol = SYMBOLS.FCT;
            break;
        case "FNB":
            symbol = SYMBOLS.FNB;
            break;
        case "TRV":
            symbol = SYMBOLS.TRV;
            break;
        case "PCM":
            symbol = SYMBOLS.PCM;
            break;
        case "DAD":
            symbol = SYMBOLS.DAD;
            break;
        case "AOA":
            symbol = SYMBOLS.AOA;
            break;
        case "XSR":
            symbol = SYMBOLS.XSR;
            break;
        case "WOM":
            symbol = SYMBOLS.WOM;
            break;
        case "SOC":
            symbol = SYMBOLS.SOC;
            break;
        case "EM":
            symbol = SYMBOLS.EM;
            break;
        case "QBZ":
            symbol = SYMBOLS.QBZ;
            break;
        case "BOA":
            symbol = SYMBOLS.BOA;
            break;
        case "FLETA":
            symbol = SYMBOLS.FLETA;
            break;
        case "SXP":
            symbol = SYMBOLS.SXP;
            break;
        case "COS":
            symbol = SYMBOLS.COS;
            break;
        case "APIX":
            symbol = SYMBOLS.APIX;
            break;
        case "EL":
            symbol = SYMBOLS.EL;
            break;
        case "BASIC":
            symbol = SYMBOLS.BASIC;
            break;
        case "HIVE":
            symbol = SYMBOLS.HIVE;
            break;
        case "XPR":
            symbol = SYMBOLS.XPR;
            break;
        case "EGG":
            symbol = SYMBOLS.EGG;
            break;
        case "BORA":
            symbol = SYMBOLS.BORA;
            break;
        case "ARPA":
            symbol = SYMBOLS.ARPA;
            break;
        case "APM":
            symbol = SYMBOLS.APM;
            break;
        case "ANW":
            symbol = SYMBOLS.ANW;
            break;
        case "CENNZ":
            symbol = SYMBOLS.CENNZ;
            break;
        case "MCI":
            symbol = SYMBOLS.MCI;
            break;
        case "SRM":
            symbol = SYMBOLS.SRM;
            break;
        case "UNI":
            symbol = SYMBOLS.UNI;
            break;
        case "BCD":
            symbol = SYMBOLS.BCD;
            break;
        case "XLM":
            symbol = SYMBOLS.XLM;
            break;
        case "PIVX":
            symbol = SYMBOLS.PIVX;
            break;
        case "GXC":
            symbol = SYMBOLS.GXC;
            break;
        case "BTT":
            symbol = SYMBOLS.BTT;
            break;
        case "HYC":
            symbol = SYMBOLS.HYC;
            break;
        case "VSYS":
            symbol = SYMBOLS.VSYS;
            break;
        case "IPX":
            symbol = SYMBOLS.IPX;
            break;
        case "WICC":
            symbol = SYMBOLS.WICC;
            break;
        case "ONT":
            symbol = SYMBOLS.ONT;
            break;
        case "LUNA":
            symbol = SYMBOLS.LUNA;
            break;
        case "AION":
            symbol = SYMBOLS.AION;
            break;
        case "META":
            symbol = SYMBOLS.META;
            break;
        case "ONG":
            symbol = SYMBOLS.ONG;
            break;
        case "ALGO":
            symbol = SYMBOLS.ALGO;
            break;
        case "XTZ":
            symbol = SYMBOLS.XTZ;
            break;
        case "MLK":
            symbol = SYMBOLS.MLK;
            break;
        case "DOT":
            symbol = SYMBOLS.DOT;
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
