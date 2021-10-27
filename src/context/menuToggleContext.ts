import { createContext } from "react"
interface State {
  toggle: boolean
  setToggle?: Function
}
export const ToggleMenu = createContext<State>({
  toggle: false,
})
