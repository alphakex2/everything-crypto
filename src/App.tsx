
import { ToggleMenu } from "./context/menuToggleContext"
import { useState } from "react"
import Layout from './components/layout/Layout';


const App: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <ToggleMenu.Provider
      value={{
        toggle,
        setToggle,
      }}
    >
      <Layout />
    </ToggleMenu.Provider>
  )
}

export default App
