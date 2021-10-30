import { useGetCryptosQuery } from "../../services/CryptoApi"
import { useEffect, useState } from "react"
import CardBoxCrypto from "./../card/CardBoxCrypto"
import SearchInput from "../Search"
import { Link } from "react-router-dom"

interface CryptoCurrenciesProps {
  simplified?: boolean
}

const CryptoCurrencies: React.FC<CryptoCurrenciesProps> = ({ simplified }) => {
  const count = simplified ? 10 : 100

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  if (isFetching) return <div>Fetching...</div>
  const [term, setTerm] = useState("")
  const onChange = (e: any) => {
    setTerm(e.target.value)
  }
  useEffect(() => {
    setCryptos(
      term.toLowerCase().length && count > 10
        ? cryptos.filter((coin: any) =>
            coin.name.toLowerCase().includes(term.toLowerCase())
          )
        : cryptosList?.data?.coins
    )
  }, [cryptosList, term])
  return (
    <div>
      {count > 10 && (
        <SearchInput searchTerm={term} handleOnChange={onChange} />
      )}
      <div className="grid grid-cols-1 gap-6 ml-3 mr-12  sm:col-span-1 md:ml-0 md:mr-6 md:grid-cols-5">
        {cryptos?.slice(0, count).map((currency: any, idx: number) => (
          <Link key={idx} to={`/cryptodetails/${currency.id}`}>
            <CardBoxCrypto
              itemNo={currency && `${currency.rank}.`}
              iconUrl={currency.iconUrl}
              name={currency.name}
              price={currency.price}
              marketCap={currency.marketCap}
              dailyChange={currency.change}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default CryptoCurrencies
