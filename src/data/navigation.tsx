import { exchanges, home, news } from "../svgs"
import { currency } from "./../svgs/index"

//To add an item simply add a new object below and give it a name and and jsx svg, get one from heroicons
export const navigationData = [
  {
    title: "Home",
    icon: home,
    to: "/",
  },
  {
    title: "Crypto Currencies",
    icon: currency,
    to: "/cryptocurrencies",
  },
  {
    title: "Exchanges",
    icon: exchanges,
    to: "exchanges",
  },
  {
    title: "News",
    icon: news,
    to: "/news",
  },
]
