import moment from "moment"
import { useEffect, useState } from "react"
import { useGetCryptosQuery } from "../../services/CryptoApi"
import { useGetCryptoNewsQuery } from "../../services/CryptoNewsApi"
import CardBoxNews from "../card/CardBoxNews"
import DropDown from "../drop-downs/DropDown"

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

  if (isFetching) return <div>Loading...</div>
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
        {cryptoNews?.articles?.slice(0, count).map((news: any, idx: number) => (
          <CardBoxNews
            key={idx}
            imageUrl={news.urlToImage}
            title={news.title}
            description={news.description}
            url={news.url}
            datePublished={news.publishedAt}
            authour={news.author}
          />
        ))}
      </div>
    </div>
  )
}
export default News
