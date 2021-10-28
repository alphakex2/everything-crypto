import { cardData } from "../../data/card"
import CardBox from "../card/CardBox"
import Details from "../details/Details"
import Header from "./Header"

const Main: React.FC = () => {
  return (
    <div className="p-12 -mt-9 md:-mt-0 md:p-2 md:ml-60 main">
      <Header />
      <div className="grid grid-cols-1 ml-4 md:grid-cols-6 mb-7">
        <div className="col-span-full drop-shadow-2xl">
          {/* Card Content */}
          <div className="relative grid gap-4 mr-7 md:grid-cols-4 sm:grid-cols-1">
            {cardData.map((card) => (
              <CardBox
                name={card.name}
                icon={card.icon}
                numbers={card.number}
              />
            ))}
          </div>
          {/* End of Card Content */}
        </div>
      </div>
      <div className="grid grid-container">
        <div className=""><Details /></div>
      </div>
    </div>
  )
}

export default Main
