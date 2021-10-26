import Content from "./Content"
import Header from "./Header"
import SideBar from "./SideBar"

const Layout: React.FC = () => {
  return (
    <div className="relative ">
      <SideBar />
      <Content />
    </div>
  )
}

export default Layout
