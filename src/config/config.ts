export const GTM_ID = 'GTM-M2BWXLW';
const DEV = false;
const HARMONY_TESTNET = 1666700000;
const HARMONY_MAINNET = 1666600000;
const VEVO_TOKEN_TESTNET = "0xf7979fe14b786e4718714d7bf91cbe8ae21359ce";
const VEVO_TOKEN_MAINET = "0xEb76Ef5d121f31c2cb59e50A4fa5475042C84e34";

export const isDevMode = DEV;
export const getChainID = () => DEV ? HARMONY_TESTNET : HARMONY_MAINNET;
export const getvEVOTokenAddress = () => DEV ? VEVO_TOKEN_TESTNET : VEVO_TOKEN_MAINET;