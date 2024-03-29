import moment from "moment"

interface CardBoxNewsProps {
  authour?: string
  title?: string
  url?: string
  imageUrl?: string
  datePublished?: string
  source?: string
  description?: string
}
const CardBoxNews: React.FC<CardBoxNewsProps> = ({
  authour,
  title,
  url,
  imageUrl,
  datePublished,
  source,
  description,
}) => {
  return (
    <div className="mr-4 transition duration-200 bg-white rounded-lg shadow-lg h-60 md:w-auto hover:opacity-80">
      <a target="_blank" href={url}>
        <img className="float-right rounded-t-lg " src={imageUrl} alt="" />
        <div className="px-6 py-2 mt">
          <h1 className="mt-2 font-bold tracking-tight text-gray-900 break-words hover:cursor-pointer">
            {title}
          </h1>
          <p className="relative py-3 leading-6 text-gray-600 text-xm hover:cursor-pointer">
            {description && description.length > 100 ? (
              <p>{description.substring(0, 100)}...</p>
            ) : (
              <p>{description}...</p>
            )}
          </p>
          <div className="flex justify-between">
            <p className="mr-2 font-thin">
              {moment(datePublished).startOf("s").fromNow()}
            </p>
            <p className="font-thin ">by {authour}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardBoxNews
