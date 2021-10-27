import Header from "./Header"
import { useContext } from "react"
import { ToggleMenu } from "../../context/menuToggleContext"

const Content: React.FC = ({ children }) => {
  const { toggle } = useContext(ToggleMenu)
  return (
    <div
      style={
        !toggle
          ? {
              width: "calc(100vw-240px)",
              marginLeft: "240px",
              height: "100vh",
            }
          : {
              minWidth: "calc(100vw - 64px)",
              marginLeft: 40,
            }
      }
      className={toggle ? `isActive` : ""}
    >
      <Header />
      <div style={!toggle ? { marginLeft: "0.3em" } : { marginLeft: "2.2em" }}>
        {children}
      </div>
    </div>
  )
}

export default Content
