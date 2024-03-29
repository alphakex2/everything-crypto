import { user } from "../../svgs"
const Header: React.FC = () => {
  return (
    <div className="box-border relative flex justify-between h-full -mt-2 header">
      <div className="w-96"></div>
      <div className="mt-3">{user}</div>
    </div>
  )
}

export default Header
