import moment from "moment"
import { useEffect, useState } from "react"
import { useGetCryptosQuery } from "../../services/CryptoApi"
import { useGetCryptoNewsQuery } from "../../services/CryptoNewsApi"
import CardBoxNews from "../card/CardBoxNews"
import DropDown from "../drop-downs/DropDown"
import Spinner from "../spinner/Spinner"

interface NewsProps {
  simplified?: boolean
}

const News: React.FC<NewsProps> = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
  const { data } = useGetCryptosQuery(100)
  let count = simplified ? 4 : 20
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  })
  // Drop down state
  const [dropValue, setDropValue] = useState("")
  //Drop Down change
  const handleDropChange = (e: any) => {
    setDropValue(e.target.value)
  }

  useEffect(() => {
    if (dropValue === "" || dropValue === "Select a coin") {
      setNewsCategory("Cryptocurrency")
    } else {
      setNewsCategory(dropValue)
    }
  }, [newsCategory, dropValue])
console.log(cryptoNews && cryptoNews?.value[0]?.about[0]?.name)
  if (isFetching) return <Spinner />
  return (
    <div>
      {count > 4 && (
        <DropDown
          placehoder="Select a coin"
          value={dropValue}
          onChange={handleDropChange}
          data={data?.data?.coins}
        />
      )}

      <div className="grid grid-cols-1 gap-3 mt-4 ml-5 sm:col-span-1 md:ml-0 md:mr-2 md:grid-cols-4">
        {cryptoNews?.value?.slice(0, count).map((news: any, idx: number) => (
          <CardBoxNews
            key={idx}
            imageUrl={news?.image?.thumbnail?.contentUrl}
            title={news.name}
            description={news.description}
            url={news.url}
            datePublished={news.datePublished}
            authour={news.about[0]?.name}
          />
        ))}
      </div>
    </div>
  )
}
export default News
