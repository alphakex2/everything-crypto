import millify from "millify"
import {
  dollarO,
  boltO,
  trophyO,
  fundO,
  checkO,
  stopO,
  exclaimO,
  market,
  rank,
} from "../svgs"

export const stats = (cryptoDetails: any) => {
  return [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: dollarO,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: rank },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: boltO,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: market,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: trophyO,
    },
  ]
}
export const genericStats = (cryptoDetails: any) => {
  return [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: fundO,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: dollarO,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.approvedSupply ? checkO : stopO,
      icon: exclaimO,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.totalSupply && millify(cryptoDetails?.totalSupply)
      }`,
      icon: exclaimO,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.circulatingSupply &&
        millify(cryptoDetails?.circulatingSupply)
      }`,
      icon: exclaimO,
    },
  ]
}
