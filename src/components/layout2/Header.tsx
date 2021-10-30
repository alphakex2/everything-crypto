import { useContext } from "react"
import { ToggleMenu } from "../../context/menuToggleContext"
import { user } from "../../svgs"
import SearchInput from "./../Search"
const Header: React.FC = () => {
  return (
    <div className="box-border relative flex justify-between h-full -mt-2 header">
      <div className="w-96"></div>
      <div className="mt-3">{user}</div>
    </div>
  )
}

export default Header
