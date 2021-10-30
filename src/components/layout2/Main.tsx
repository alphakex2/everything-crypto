import { cardData } from "../../data/card"
import CardBox from "../card/CardBox"
import Details from "../details/Details"
import CustomRouter from "../router/CustomRouter"
import Header from "./Header"

const Main: React.FC = () => {
  return (
    <div className="p-12 -mt-9 md:-mt-0 md:p-2 md:ml-60 main">
     
      <div className="container w-full mb-8 ml-4">
        <div className="drop-shadow-2xl">
          <CustomRouter />
        </div>
      </div>
    </div>
  )
}

export default Main
