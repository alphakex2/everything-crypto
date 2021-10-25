import { navigationData } from "./../../data/navigation"
const SideBar: React.FC = () => {
  return (
    <div className="container">
      <ul>
        {navigationData.map((data) => (
          <li className="flex space-x-2">
            <span className="">{data.icon}</span>
            <span className="">{data.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
