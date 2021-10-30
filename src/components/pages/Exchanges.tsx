import { useGetCryptoExchangesQuery } from "../../services/CryptoApi"
import Accordion from "../Accordion"
import Spinner from "../spinner/Spinner"

const Exchanges: React.FC = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery("")
  if(isFetching) return <Spinner />
  return (
    <div>
      {data &&
        data?.data?.exchanges?.map((exchange: any, idx: number) => (
          <Accordion
            key={idx}
            count={exchange.rank}
            icon={exchange.iconUrl}
            header={exchange.name}
            body={exchange.description}
            tradeVol={exchange.volume}
            markets={exchange.numberOfMarkets}
            marketShare={exchange.marketShare}
          />
        ))}
    </div>
  )
}
export default Exchanges
