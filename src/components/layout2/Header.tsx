import { useContext } from "react"
import { ToggleMenu } from "../../context/menuToggleContext"
import { user } from "../../svgs"
import SearchInput from "./../Search"
const Header: React.FC = () => {
  const { setToggle, toggle } = useContext(ToggleMenu)
  return (
    <div className="box-border relative flex justify-between h-full -mt-2 header">
      {/* Hamburger */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 mt-4 ml-4 text-blue-700 delay-150 hover:text-blue-500 hamburger"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{ marginLeft: -224, cursor: "pointer" }}
        onClick={() => {
          setToggle!(!toggle)
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div className="w-96">
        <SearchInput />
      </div>
      <div className="mt-3">{user}</div>
    </div>
  )
}

export default Header
