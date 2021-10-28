import { useState, useContext } from "react"
import { ToggleMenu } from "../../context/menuToggleContext"
import { BrandIcon } from "../../svgs"
import { navigationData } from "./../../data/navigation"

const SideBar: React.FC = () => {
  const [hover, setHover] = useState<null | number>(1)
  const { toggle } = useContext(ToggleMenu)

  const defaultProperties =
    "relative flex ml-1 space-x-5 text-white rounded-tl-3xl rounded-bl-3xl hover:bg-white hover:text-blue-700"
  const defaultPropertiesNoWhite =
    "relative flex ml-1 space-x-5 rounded-tl-3xl rounded-bl-3xl hover:bg-white hover:text-blue-700"
  return (
    <div
      className={
        toggle
          ? ` sidemenu sm:16 fixed   h-full overflow-hidden transition-transform duration-500 bg-blue-700 border-l-2 w-16  isActive`
          : " sidemenu sm:16 fixed sm:w-16  h-full overflow-hidden transition-transform duration-500 bg-blue-700 border-l-2 md:w-60"
      }
    >
      {/* Brand Name */}
      <div className="flex text-white">
        <span className="icon">{BrandIcon}</span>
        <span className="brand-title">Crypto Currencies</span>
      </div>
      {/* Side Menu */}
      <ul className="static w-full navigation" style={{ marginTop: "40px" }}>
        {navigationData.map((data, idx) => (
          <button className="w-60">
            <li
              className={
                hover === idx
                  ? `hovered ${defaultPropertiesNoWhite}`
                  : defaultProperties
              }
              key={idx}
              onClick={() => {
                setHover(idx)
              }}
              onMouseOver={() => {
                setHover(idx)
              }}
            >
              <span className="icon">{data.icon}</span>
              <span className="title">{data.title}</span>
            </li>
          </button>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
