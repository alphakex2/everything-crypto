import CardBox from "../card/CardBox"
import Content from "./Content"
import SideBar from "./SideBar"
import { cardData } from "./../../data/card"
import Details from "../details/Details"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="relative ">
      <SideBar />
      <Content>
        {/* CardBox */}
        <div className="relative grid gap-4 m-4 md:grid-cols-4 sm:grid-cols-1">
          {cardData.map((card) => (
            <CardBox name={card.name} icon={card.icon} numbers={card.number} />
          ))}
        </div>

        {/* Recent Orders */}
        <Details />
      </Content>
    </div>
  )
}

export default Layout
