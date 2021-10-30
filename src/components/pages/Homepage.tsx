import millify from "millify"
import { Link } from "react-router-dom"
import { useGetCryptosQuery } from "../../services/CryptoApi"
import CardBox from "../card/CardBox"
import CryptoCurrencies from "./CryptoCurrencies"
import News from "./News"

const Homepage: React.FC = () => {
  //@ts-ignore
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  if (isFetching) return <div>Loading...</div>
  return (
    <div className="">
      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 mt-4 mr-12 break-words overscroll-contain sm:col-span-1 md:mr-6 md:grid-cols-5">
        <CardBox
          //@ts-ignore
          numbers={millify(globalStats.total)}
          name="Total Cryptocurrencies"
        />
        <CardBox
          //@ts-ignore
          numbers={millify(globalStats.totalExchanges)}
          name="Total Exchanges"
        />
        <CardBox
          //@ts-ignore
          numbers={millify(globalStats.totalMarketCap)}
          name="Total Market Cap"
        />
        <CardBox
          //@ts-ignore
          numbers={millify(globalStats.total24hVolume)}
          name="Total 24h Volume"
        />
        <CardBox
          //@ts-ignore
          numbers={millify(globalStats.totalMarkets)}
          name="Total Markets"
        />
      </div>
      {/* Top 10 */}
      <div>
        <h1 className="mt-8 mb-6 text-3xl font-semibold text-blue-700">
          Top 10 CryptoCurrencies
        </h1>
        <CryptoCurrencies simplified={true} />
        <h3 className="mt-6 text-center">
          <Link
            className="text-white bg-blue-700 rounded hover:text-white hover:bg-blue-500"
            to="/cryptocurrencies"
          >
            Show More
          </Link>
        </h3>
      </div>

      {/* Latest News */}
      <div>
        <h1 className="mt-8 text-3xl font-semibold text-blue-700">
          Latest Crypto News
        </h1>
        <News simplified={true}  />
        <h3 className="mt-5 text-center">
          <Link
            className="text-white bg-blue-700 rounded hover:text-white hover:bg-blue-500"
            to="/news"
          >
            Show More
          </Link>
        </h3>
      </div>
    </div>
  )
}
export default Homepage
