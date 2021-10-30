import ChartJS from "react-apexcharts"
import { info } from "./../../svgs/index"
interface ChartProps {
  coinHistory?: any
  currentPrice?: any
  coinName?: string
}
const Chart: React.FC<ChartProps> = ({
  coinHistory,
  currentPrice,
  coinName,
}) => {
  const coinPrice = []
  const coinTimeStatmp = []
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price)
    coinTimeStatmp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    )
  }


  const options = {
    chart: {
      id: "cryptocurrency",
    },
    xaxis: {
      categories: coinTimeStatmp,
    },
  }
  const series = [
    {
      name: "series1",
      data: coinPrice,
    },
  ]

  return (
    <div className="grid col-span-1 md:grid-cols-2">
      <div>
        <ChartJS options={options} series={series} type="line" />
      </div>
      <div>
        <div className="container mx-auto">
          <div className="max-w-sm mx-auto overflow-hidden transition duration-500 transform bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-2xl hover:scale-105">
            <div className="flex items-center justify-between h-20 bg-purple-500">
              <h1 className="px-4 py-2 ml-4 text-white border-2 rounded-full">
                {info}
              </h1>
              <p className="mr-20 text-lg text-white">{coinName} Summary</p>
              <p className="mr-4 text-lg font-thin text-white"></p>
            </div>

            <p className="py-6 ml-16 text-lg tracking-wide text-center">
              {coinHistory?.data?.change}% Current Price {currentPrice} Usd
            </p>

            <div className="flex justify-between px-5 mb-2 text-sm text-gray-600">
              <p></p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default Chart
