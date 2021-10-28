import Layout from "./components/layout/Layout"
import { ToggleMenu } from "./context/menuToggleContext"
import { useState } from "react"
import Layout2 from "./components/layout2/Layout2"

const App: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <ToggleMenu.Provider
      value={{
        toggle,
        setToggle,
      }}
    >
      <Layout2 />
    </ToggleMenu.Provider>
  )
}

export default App
