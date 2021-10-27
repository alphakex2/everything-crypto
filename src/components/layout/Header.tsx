import { useContext } from "react"
import { ToggleMenu } from "../../context/menuToggleContext"
import SearchInput from "../Search"

const Header: React.FC = () => {
  const { setToggle, toggle } = useContext(ToggleMenu)
// style={{ width: "calc(100% - 238px)" }}
  return (
    <div className="flex items-center justify-around md:w-full h-11">
      {/* Hamburger */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 delay-150 hover:text-blue-500"
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

      <SearchInput />
      <div></div>
    </div>
  )
}

export default Header
