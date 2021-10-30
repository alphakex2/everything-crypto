import millify from "millify"

interface CardBoxCryptoProps {
  name?: string
  numbers?: number
  icon?: JSX.Element
  iconUrl?: string
  itemNo?: number
  price?: number
  marketCap?: number
  dailyChange?: number
}
const CardBoxCrypto: React.FC<CardBoxCryptoProps> = ({
  name,
  itemNo,
  numbers,
  icon,
  iconUrl,
  price,
  marketCap,
  dailyChange,
}) => {
  return (
    <div className="bg-white -mr-14 md:-mr-0 h-44 hover:bg-blue-700 rounded-2xl drop-shadow-2xl cardBox">
      {/* Border Bottom Card */}
      <div className="h-10 border-b-2 ">
        <div className="flex justify-between">
          <div className="mt-1 mr-2 font-bold truncate icon">{`${itemNo} ${name}`}</div>
          <div className="w-8 h-8 mt-1 mr-2 icon">
            <img src={iconUrl} />
          </div>
        </div>
      </div>

      <div className="ml-6 text-3xl font-bold text-center text-blue-700 mt-14 number">
        {numbers}
      </div>

      {/* Extra Content */}

      <div className="ml-4 font-semibold text-black hover:text-white">
        <p className="mb-2 -mt-8 truncate ">Price {price && millify(price)}</p>
        <p className="mb-2 truncate ">
          Market Cap: {marketCap && millify(marketCap)}
        </p>
        <p className="truncate">
          Daily Change: {dailyChange && millify(dailyChange)}
        </p>
      </div>
    </div>
  )
}

export default CardBoxCrypto
