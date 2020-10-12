//Import the Uniswap SDK
const UNISWAP = require('@uniswap/sdk');

//Tokens with the address and the symbols
const USDC = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 18,'USDC','USD Coin');
const DAI = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18,'DAI','Dai');
const USDT = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 18,'USDT','usdt');
const LEND = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03', 18,'LEND','lend');
const MKR = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18,'MKR','mkr');
const REN = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x408e41876cCCDC0F92210600ef50372656052a38', 18,'REN','ren');
const SUSD = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51', 18,'SUSD','susd');
const KNC = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xdd974D5C2e2928deA5F71b9825b8b646686BD200', 18,'KNC','knc');
const BAT = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x0D8775F648430679A709E98d2b0Cb6250d2887EF', 18,'BAT','bat');
const TUSD = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x0000000000085d4780B73119b644AE5ecd22b376', 18,'TUSD','tusd');
const LINK = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x514910771AF9Ca656af840dff83E8264EcF986CA', 18,'LINK','link');
const REP = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x1985365e9f78359a9B6AD760e32412f4a445E862', 18,'REP','rep');
const ZRX = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xE41d2489571d322189246DaFA5ebDe1F4699F498', 18,'ZRX','zrx');
const SNX = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F', 18,'SNX','snx');
const MANA = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942', 18,'MANA','mana');
const WBTC = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 18,'wbtc','wbtc');
const ENJ = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c', 18,'ENJ','enj');
const YFI = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18,'YFI','yfi');


//Asynchronous function to retrieve the pairs price
async function pairs() {
    //All pairs in ETH price
    let pairs = [
        "DAI/ETH",
        "USDT/ETH",
        "USDC/ETH",
        "LEND/ETH",
        "MKR/ETH",
        "REN/ETH",
        "SUSD/ETH",
        "KNC/ETH",
        "BAT/ETH",
        "TUSD/ETH",
        "LINK/ETH",
        "REP/ETH",
        "ZRX/ETH",
        "SNX/ETH",
        "MANA/ETH",
        "WBTC/ETH",
        "ENJ/ETH",
        "YFI/ETH",
    ]
    let pair = [], route = [];
    //Pair declarations
    pair[0] = await UNISWAP.Fetcher.fetchPairData(DAI, UNISWAP.WETH[DAI.chainId])
    pair[1] = await UNISWAP.Fetcher.fetchPairData(USDT, UNISWAP.WETH[USDT.chainId])
    pair[2] = await UNISWAP.Fetcher.fetchPairData(USDC, UNISWAP.WETH[USDC.chainId])
    pair[3] = await UNISWAP.Fetcher.fetchPairData(LEND, UNISWAP.WETH[LEND.chainId])
    pair[4] = await UNISWAP.Fetcher.fetchPairData(MKR, UNISWAP.WETH[MKR.chainId])
    pair[5] = await UNISWAP.Fetcher.fetchPairData(REN, UNISWAP.WETH[REN.chainId])
    pair[6] = await UNISWAP.Fetcher.fetchPairData(SUSD, UNISWAP.WETH[SUSD.chainId])
    pair[7] = await UNISWAP.Fetcher.fetchPairData(KNC, UNISWAP.WETH[KNC.chainId])
    pair[8] = await UNISWAP.Fetcher.fetchPairData(BAT, UNISWAP.WETH[BAT.chainId])
    pair[9] = await UNISWAP.Fetcher.fetchPairData(TUSD, UNISWAP.WETH[TUSD.chainId])
    pair[10] = await UNISWAP.Fetcher.fetchPairData(LINK, UNISWAP.WETH[LINK.chainId])
    pair[11] = await UNISWAP.Fetcher.fetchPairData(REP, UNISWAP.WETH[REP.chainId])
    pair[12] = await UNISWAP.Fetcher.fetchPairData(ZRX, UNISWAP.WETH[ZRX.chainId])
    pair[13] = await UNISWAP.Fetcher.fetchPairData(SNX, UNISWAP.WETH[SNX.chainId])
    pair[14] = await UNISWAP.Fetcher.fetchPairData(MANA, UNISWAP.WETH[MANA.chainId])
    pair[15] = await UNISWAP.Fetcher.fetchPairData(WBTC, UNISWAP.WETH[WBTC.chainId])
    pair[16] = await UNISWAP.Fetcher.fetchPairData(ENJ, UNISWAP.WETH[ENJ.chainId])
    pair[17] = await UNISWAP.Fetcher.fetchPairData(YFI, UNISWAP.WETH[YFI.chainId])
    //Route declarations
    route[0] = new UNISWAP.Route([pair[0]], UNISWAP.WETH[DAI.chainId])
    route[1] = new UNISWAP.Route([pair[1]], UNISWAP.WETH[USDT.chainId])
    route[2] = new UNISWAP.Route([pair[2]], UNISWAP.WETH[USDC.chainId])
    route[3] = new UNISWAP.Route([pair[3]], UNISWAP.WETH[LEND.chainId])
    route[4] = new UNISWAP.Route([pair[4]], UNISWAP.WETH[MKR.chainId])
    route[5] = new UNISWAP.Route([pair[5]], UNISWAP.WETH[REN.chainId])
    route[6] = new UNISWAP.Route([pair[6]], UNISWAP.WETH[SUSD.chainId])
    route[7] = new UNISWAP.Route([pair[7]], UNISWAP.WETH[KNC.chainId])
    route[8] = new UNISWAP.Route([pair[8]], UNISWAP.WETH[BAT.chainId])
    route[9] = new UNISWAP.Route([pair[9]], UNISWAP.WETH[TUSD.chainId])
    route[10] = new UNISWAP.Route([pair[10]], UNISWAP.WETH[LINK.chainId])
    route[11] = new UNISWAP.Route([pair[11]], UNISWAP.WETH[REP.chainId])
    route[12] = new UNISWAP.Route([pair[12]], UNISWAP.WETH[ZRX.chainId])
    route[13] = new UNISWAP.Route([pair[13]], UNISWAP.WETH[SNX.chainId])
    route[14] = new UNISWAP.Route([pair[14]], UNISWAP.WETH[MANA.chainId])
    route[15] = new UNISWAP.Route([pair[15]], UNISWAP.WETH[WBTC.chainId])
    route[16] = new UNISWAP.Route([pair[16]], UNISWAP.WETH[ENJ.chainId])
    route[17] = new UNISWAP.Route([pair[17]], UNISWAP.WETH[YFI.chainId])
    //Retrieve each pair data and transform to significant data
    for (let i = 0; i < 18; i++) {
        if (i === 1 || i === 2){
            console.log(pairs[i], " :",route[i].midPrice.toSignificant(6), " ETH") // 201.306
        }else{
            console.log(pairs[i], " :",route[i].midPrice.invert().toSignificant(6) ," ETH") // 201.306
        }
    }
}
//Call the pairs data and print the output
pairs().then();

