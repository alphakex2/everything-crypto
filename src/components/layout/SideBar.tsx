import { useState } from "react"
import { navigationData } from "./../../data/navigation"

const SideBar: React.FC = () => {
  const [hover, setHover] = useState<null | number>(1)

  const defaultProperties =
    "relative flex ml-1 space-x-5 text-white rounded-tl-3xl rounded-bl-3xl hover:bg-white hover:text-blue-700"
  return (
    <div className="container fixed h-full overflow-hidden transition duration-500 bg-purple-500 border-l-2 w-60">
      {/* Brand Name */}
      <div className="flex text-white">
        <span className="icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-8 h-8"
          >
            <g>
              <path d="m176,224c-61.758,0-112,50.242-112,112s50.242,112 112,112 112-50.242 112-112-50.242-112-112-112zm0,192c-44.109,0-80-35.891-80-80s35.891-80 80-80 80,35.891 80,80-35.891,80-80,80z" />
              <path d="m192,352v-48c0-8.836-7.164-16-16-16h-16c-8.836,0-16,7.164-16,16s7.164,16 16,16v32c-8.836,0-16,7.164-16,16s7.164,16 16,16h32c8.836,0 16-7.164 16-16s-7.164-16-16-16z" />
              <path d="M319.867,0C224.523,0,128,27.477,128,80v86.823C54.238,187.788,0,255.609,0,336c0,97.047,78.953,176,176,176   c38.672,0,74.352-12.685,103.426-33.908C292.816,479.226,306.359,480,320,480c95.414,0,192-27.477,192-80V80   C512,27.477,415.344,0,319.867,0z M32,336c0-79.398,64.602-144,144-144s144,64.602,144,144s-64.602,144-144,144S32,415.398,32,336z    M480,400c0,19.109-63.813,48-160,48c-2.818,0-5.371-0.215-8.121-0.271c11.822-14.352,21.262-30.675,28.102-48.289   c54.863-2.231,107.734-13.47,140.02-33.425V400z M480,320c0,17.095-51.244,41.965-130.906,47.021   C350.898,356.932,352,346.6,352,336c0-5.804-0.32-11.534-0.871-17.195c50.795-3.225,98.785-14.192,128.871-32.789V320z M480,240   c0,17.386-53.023,42.789-135.02,47.236c-4.902-16.961-12.25-32.869-21.707-47.316c60.66-0.418,121.17-11.927,156.727-33.904V240z    M480,160c0,19.109-63.945,48-160.133,48c-8.367,0-16.383-0.296-24.227-0.713C264.203,178.047,222.219,160,176,160   c-5.344,0-10.607,0.333-15.832,0.802C160.145,160.539,160,160.26,160,160v-33.887C196.221,148.439,258.207,160,319.867,160   c61.772,0,123.869-11.57,160.133-33.914V160z M319.867,128C223.758,128,160,99.109,160,80s63.758-48,159.867-48   C416.133,32,480,60.891,480,80S416.133,128,319.867,128z" />
            </g>
          </svg>
        </span>
        <span className="brand-title">Crypto Currencies</span>
      </div>
      {/* Main Menu */}
      <ul className="static w-full navigation" style={{ marginTop: "40px" }}>
        {navigationData.map((data, idx) => (
          <button className="w-60">
            <li
              className={
                hover === idx
                  ? `hovered ${defaultProperties}`
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
