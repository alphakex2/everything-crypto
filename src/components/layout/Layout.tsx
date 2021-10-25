import Content from "./Content"
import Header from "./Header"
import SideBar from "./SideBar"

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Content />
    </>
  )
}

export default Layout
