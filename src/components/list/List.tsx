interface ListProps {
  icon?: JSX.Element
  title?: string
  value?: string
}

const List: React.FC<ListProps> = ({ icon, title, value }) => {
  return (
    <div className="container grid md:grid-cols-1">
      <ul className="flex flex-col p-4 ">
        <li className="flex flex-row mb-2 border-gray-400">
          <div className="flex items-center flex-1 p-4 transition duration-500 ease-in-out transform bg-gray-200 rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col items-center justify-center w-10 h-10 mr-4 bg-white rounded-md">
              {icon}
            </div>
            <div className="flex-1 pl-1 mr-16">
              <div className="font-medium">{title}</div>
              <div className="text-lg font-bold text-gray-600">{value}</div>
            </div>
            {/* <div className="text-xs text-gray-600">6:00 AM</div> */}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default List
