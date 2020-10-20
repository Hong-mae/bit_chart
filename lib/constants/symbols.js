// @flow strict
const SYMBOLS = {
    BTC: {
        img: require('../../assets/image/btc_symbol.png')
    },
    ETH: {
        img: require('../../assets/image/eth_symbol.png')
    },
    DASH: {
        img: require('../../assets/image/dash_symbol.png')
    },
    LTC: {
        img: require('../../assets/image/ltc_symbol.png')
    },
    ETC: {
        img: require('../../assets/image/etc_symbol.png')
    },
    XRP: {
        img: require('../../assets/image/xrp_symbol.png')
    },
    // BCH: {
    //     img: require('../../assets/image/bch_symbol.png')
    // },
    // ZEC: {
    //     img: require('../../assets/image/zec_symbol.png')
    // },
    // QTUM: {
    //     img: require('../../assets/image/qtum_symbol.png')
    // },
    // BTG: {
    //     img: require('../../assets/image/btg_symbol.png')
    // },
    // EOS: {
    //     img: require('../../assets/image/eos_symbol.png')
    // },
    // ICX: {
    //     img: require('../../assets/image/icx_symbol.png')
    // },
    // TRX: {
    //     img: require('../../assets/image/trx_symbol.png')
    // },
    // ELF: {
    //     img: require('../../assets/image/elf_symbol.png')
    // },
    // OMG: {
    //     img: require('../../assets/image/omg_symbol.png')
    // },
    // KNC: {
    //     img: require('../../assets/image/knc_symbol.png')
    // },
    // GNT: {
    //     img: require('../../assets/image/gnt_symbol.png')
    // },
    // ZIL: {
    //     img: require('../../assets/image/zil_symbol.png')
    // },
    // WAXP: {
    //     img: require('../../assets/image/waxp_symbol.png')
    // },
    // POWR: {
    //     img: require('../../assets/image/powr_symbol.png')
    // },
    // LRC: {
    //     img: require('../../assets/image/lrc_symbol.png')
    // },
    // STEEM: {
    //     img: require('../../assets/image/steem_symbol.png')
    // },
    // STRAT: {
    //     img: require('../../assets/image/strat_symbol.png')
    // },
    // AE: {
    //     img: require('../../assets/image/ae_symbol.png')
    // },
    // ZRX: {
    //     img: require('../../assets/image/zrx_symbol.png')
    // },
    // REP: {
    //     img: require('../../assets/image/rep_symbol.png')
    // },
    // XEM: {
    //     img: require('../../assets/image/xem_symbol.png')
    // },
    // SNT: {
    //     img: require('../../assets/image/snt_symbol.png')
    // },
    // ADA: {
    //     img: require('../../assets/image/ada_symbol.png')
    // },
    // CTXC: {
    //     img: require('../../assets/image/ctxc_symbol.png')
    // },
    // BAT: {
    //     img: require('../../assets/image/bat_symbol.png')
    // },
    // WTC: {
    //     img: require('../../assets/image/wtc_symbol.png')
    // },
    // THETA: {
    //     img: require('../../assets/image/theta_symbol.png')
    // },
    // LOOM: {
    //     img: require('../../assets/image/loom_symbol.png')
    // },
    // WAVES: {
    //     img: require('../../assets/image/waves_symbol.png')
    // },
    // ITC: {
    //     img: require('../../assets/image/itc_symbol.png')
    // },
    // TRUE: {
    //     img: require('../../assets/image/true_symbol.png')
    // },
    // LINK: {
    //     img: require('../../assets/image/link_symbol.png')
    // },
    // RNT: {
    //     img: require('../../assets/image/rnt_symbol.png')
    // },
    // ENJ: {
    //     img: require('../../assets/image/enj_symbol.png')
    // },
    // VET: {
    //     img: require('../../assets/image/vet_symbol.png')
    // },
    // MTL: {
    //     img: require('../../assets/image/mtl_symbol.png')
    // },
    // IOST: {
    //     img: require('../../assets/image/iost_symbol.png')
    // },
    // TMTG: {
    //     img: require('../../assets/image/tmtg_symbol.png')
    // },
    // QKC: {
    //     img: require('../../assets/image/qkc_symbol.png')
    // },
    // BZNT: {
    //     img: require('../../assets/image/bznt_symbol.png')
    // },
    // HDAC: {
    //     img: require('../../assets/image/hdac_symbol.png')
    // },
    // NPXS: {
    //     img: require('../../assets/image/npxs_symbol.png')
    // },
    // LBA: {
    //     img: require('../../assets/image/lba_symbol.png')
    // },
    // WET: {
    //     img: require('../../assets/image/wet_symbol.png')
    // },
    // AMO: {
    //     img: require('../../assets/image/amo_symbol.png')
    // },
    // BSV: {
    //     img: require('../../assets/image/bsv_symbol.png')
    // },
    // DAC: {
    //     img: require('../../assets/image/dac_symbol.png')
    // },
    // ORBS: {
    //     img: require('../../assets/image/orbs_symbol.png')
    // },
    // VALOR: {
    //     img: require('../../assets/image/valor_symbol.png')
    // },
    // CON: {
    //     img: require('../../assets/image/con_symbol.png')
    // },
    // ANKR: {
    //     img: require('../../assets/image/ankr_symbol.png')
    // },
    // MIX: {
    //     img: require('../../assets/image/mix_symbol.png')
    // },
    // LAMB: {
    //     img: require('../../assets/image/lamb_symbol.png')
    // },
    // CRO: {
    //     img: require('../../assets/image/cro_symbol.png')
    // },
    // FX: {
    //     img: require('../../assets/image/fx_symbol.png')
    // },
    // CHR: {
    //     img: require('../../assets/image/chr_symbol.png')
    // },
    // MBL: {
    //     img: require('../../assets/image/mbl_symbol.png')
    // },
    // MXC: {
    //     img: require('../../assets/image/mxc_symbol.png')
    // },
    // FAB: {
    //     img: require('../../assets/image/fab_symbol.png')
    // },
    // OGO: {
    //     img: require('../../assets/image/ogo_symbol.png')
    // },
    // DVP: {
    //     img: require('../../assets/image/dvp_symbol.png')
    // },
    // FCT: {
    //     img: require('../../assets/image/fct_symbol.png')
    // },
    // FNB: {
    //     img: require('../../assets/image/fnb_symbol.png')
    // },
    // TRV: {
    //     img: require('../../assets/image/trv_symbol.png')
    // },
    // PCM: {
    //     img: require('../../assets/image/pcm_symbol.png')
    // },
    // DAD: {
    //     img: require('../../assets/image/dad_symbol.png')
    // },
    // AOA: {
    //     img: require('../../assets/image/aoa_symbol.png')
    // },
    // XSR: {
    //     img: require('../../assets/image/xsr_symbol.png')
    // },
    // WOM: {
    //     img: require('../../assets/image/wom_symbol.png')
    // },
    // SOC: {
    //     img: require('../../assets/image/soc_symbol.png')
    // },
    // EM: {
    //     img: require('../../assets/image/em_symbol.png')
    // },
    // QBZ: {
    //     img: require('../../assets/image/qbz_symbol.png')
    // },
    // BOA: {
    //     img: require('../../assets/image/boa_symbol.png')
    // },
    // FLETA: {
    //     img: require('../../assets/image/fleta_symbol.png')
    // },
    // SXP: {
    //     img: require('../../assets/image/sxp_symbol.png')
    // },
    // COS: {
    //     img: require('../../assets/image/cos_symbol.png')
    // },
    // APIX: {
    //     img: require('../../assets/image/apix_symbol.png')
    // },
    // EL: {
    //     img: require('../../assets/image/el_symbol.png')
    // },
    // BASIC: {
    //     img: require('../../assets/image/basic_symbol.png')
    // },
    // HIVE: {
    //     img: require('../../assets/image/hive_symbol.png')
    // },
    // XPR: {
    //     img: require('../../assets/image/xpr_symbol.png')
    // },
    // EGG: {
    //     img: require('../../assets/image/egg_symbol.png')
    // },
    // BORA: {
    //     img: require('../../assets/image/bora_symbol.png')
    // },
    // ARPA: {
    //     img: require('../../assets/image/arpa_symbol.png')
    // },
    // APM: {
    //     img: require('../../assets/image/apm_symbol.png')
    // },
    // ANW: {
    //     img: require('../../assets/image/anw_symbol.png')
    // },
    // CENNZ: {
    //     img: require('../../assets/image/cennz_symbol.png')
    // },
    // MCI: {
    //     img: require('../../assets/image/mci_symbol.png')
    // },
    // SRM: {
    //     img: require('../../assets/image/srm_symbol.png')
    // },
    // UNI: {
    //     img: require('../../assets/image/uni_symbol.png')
    // },
    // BCD: {
    //     img: require('../../assets/image/bcd_symbol.png')
    // },
    // XLM: {
    //     img: require('../../assets/image/xlm_symbol.png')
    // },
    // PIVX: {
    //     img: require('../../assets/image/pivx_symbol.png')
    // },
    // GXC: {
    //     img: require('../../assets/image/gxc_symbol.png')
    // },
    // BTT: {
    //     img: require('../../assets/image/btt_symbol.png')
    // },
    // HYC: {
    //     img: require('../../assets/image/hyc_symbol.png')
    // },
    // VSYS: {
    //     img: require('../../assets/image/vsys_symbol.png')
    // },
    // IPX: {
    //     img: require('../../assets/image/ipx_symbol.png')
    // },
    // WICC: {
    //     img: require('../../assets/image/wicc_symbol.png')
    // },
    // ONT: {
    //     img: require('../../assets/image/ont_symbol.png')
    // },
    // LUNA: {
    //     img: require('../../assets/image/luna_symbol.png')
    // },
    // AION: {
    //     img: require('../../assets/image/aion_symbol.png')
    // },
    // META: {
    //     img: require('../../assets/image/meta_symbol.png')
    // },
    // ONG: {
    //     img: require('../../assets/image/ong_symbol.png')
    // },
    // ALGO: {
    //     img: require('../../assets/image/algo_symbol.png')
    // },
    // XTZ: {
    //     img: require('../../assets/image/xtz_symbol.png')
    // },
    // MLK: {
    //     img: require('../../assets/image/mlk_symbol.png')
    // },
    // DOT: {
    //     img: require('../../assets/image/dot_symbol.png')
    // },
};

export default SYMBOLS;
