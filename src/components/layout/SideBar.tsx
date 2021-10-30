import { useState } from "react"
import { Link } from "react-router-dom"
import { navigationData } from "../../data/navigation"
import { BrandIcon } from "../../svgs"

const SideBar = () => {
  const [hover, setHover] = useState<null | number>(1)

  const defaultProperties =
    "relative flex ml-1 space-x-5  text-white rounded-tl-3xl rounded-bl-3xl hover:bg-white hover:text-blue-700"
  const defaultPropertiesNoWhite =
    "relative flex ml-1 space-x-5 rounded-tl-3xl rounded-bl-3xl hover:bg-white hover:text-blue-700"

  return (
    <div className={"fixed  top-0 left-0 h-full bg-blue-700  w-14  md:w-60"}>
      <div className="brand">
        <div className="flex text-white">
          <span className="icon">{BrandIcon}</span>
          <span className="brand-title">Crypto Currencies</span>
        </div>
      </div>
      <ul
        className="static navigation"
        style={{ marginTop: "40px", minWidth: "56px" }}
      >
        {navigationData.map((data, idx) => (
          <Link key={idx} to={data.to} className="w-16 md:w-60">
            <li
              className={
                hover === idx
                  ? `hovered ${defaultPropertiesNoWhite}`
                  : defaultProperties
              }
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
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
