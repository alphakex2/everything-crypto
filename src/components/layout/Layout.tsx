import Content from "./Content"
import SideBar from "./SideBar"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="relative ">
      <SideBar />
      <Content>
      
      </Content>
    </div>
  )
}

export default Layout
