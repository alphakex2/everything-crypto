import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/CryptoApi"
import DropDownCryptoDetails from "./../drop-downs/DropDownCryptoDetails"

import List from "../list/List"
import { genericStats, stats } from "../../data/cryptoStats"
import HTMLReactParser from "html-react-parser"
import Chart from "./../chart/Chart"
import millify from "millify"
import Spinner from "../spinner/Spinner"

const CryptoDetails: React.FC = () => {
  const { coinId }: any = useParams()
  const [timePeriod, setTimePeriod] = useState("7d")

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const { data: historyData, isFetching: isHistoryFetching } =
    useGetCryptoHistoryQuery({ coinId, timePeriod })

  const cryptoDetails = data?.data?.coin
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"]

  const _stats = stats(cryptoDetails)
  const _genericStats = genericStats(cryptoDetails)

  const [dropValue, setDropValue] = useState("")

  const onChange = (e: any) => {
    setDropValue(e.target.value)
  }

  useEffect(() => {
    if (dropValue === "" || dropValue === "Select a coin") {
      setTimePeriod("7d")
    } else {
      setTimePeriod(dropValue)
    }
  }, [setTimePeriod, dropValue])

  if (isFetching) return <Spinner />
  if (isHistoryFetching) return <Spinner />
  return (
    <div className="grid col-span-1 md:grid-cols-1">
      {/* col 1 */}
      <div>
        <div className="text-3xl font-bold text-center text-blue-700">
          {cryptoDetails?.name} ({cryptoDetails?.slug})
        </div>
        <div>
          <p className="text-center text-gray-500">
            {cryptoDetails?.name} Live price in USD View value statistics,
            market cap and supply.
          </p>
        </div>
      </div>
      <DropDownCryptoDetails
        data={time}
        placehoder="Select Time Period"
        onChange={onChange}
        value={dropValue}
      />

      {/* Chart */}
      <div>
        <Chart
          coinHistory={historyData}
          currentPrice={cryptoDetails && millify(cryptoDetails.price)}
          coinName={cryptoDetails && cryptoDetails.name}
        />
      </div>
      {/* End Chart */}

      {/* Stats Container */}
      <div className="grid col-span-1 mr-0 md:ml-4 md:mr-8 md:grid-cols-2">
        <div className="">
          <div className="text-2xl font-semibold text-center text-gray-700">
            {cryptoDetails?.name} value Statistics
          </div>
          <div>
            <p className="text-center text-gray-500">
              An overview showing the stats of {cryptoDetails?.name}
            </p>
            {_stats.map(({ icon, title, value }) => (
              <List icon={icon} title={title} value={value} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-center text-gray-700">
            Other Statistics
          </div>
          <div>
            <p className="text-center text-gray-500">
              An overview showing stats of all other Cryptocurrencies
            </p>
            {_genericStats.map(({ icon, title, value }) => (
              <List icon={icon} title={title} value={value} />
            ))}
          </div>
        </div>
      </div>
      {/* End of Stats */}
      <div>
        <p className="text-3xl font-bold text-center text-blue-700">
          All about {cryptoDetails && cryptoDetails.name}
        </p>
        <div className="mb-8 -mr-3 leading-relaxed text-justify md:mr-8">
          {cryptoDetails &&
            HTMLReactParser(cryptoDetails?.description.toString())}
        </div>
        {/* Links */}
        <div>{cryptoDetails && cryptoDetails.name}</div>
        {cryptoDetails &&
          cryptoDetails.links.map((link: any) => (
            <div className="grid col-span-1 md:grid-cols-2">
              <div>
                <p>{link.type}</p>
              </div>
              <div>
                <a className="text-blue-700" href={link.url} target="_blank">
                  {link.name}
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CryptoDetails
