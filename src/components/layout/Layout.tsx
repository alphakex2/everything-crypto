import CardBox from "../card/CardBox"
import Content from "./Content"
import SideBar from "./SideBar"
import { cardData } from "./../../data/card"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="relative ">
      <SideBar />
      <Content>
        {/* CardBox */}
        <div className="relative grid grid-cols-4 gap-3">
          {cardData.map((card) => (
            <CardBox name={card.name} icon={card.icon} numbers={card.number} />
          ))}
        </div>
      </Content>
    </div>
  )
}

export default Layout
