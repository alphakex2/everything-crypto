interface CardBoxProps {
  name?: string
  numbers?: number
  icon?: JSX.Element
}
const CardBox: React.FC<CardBoxProps> = ({ name, numbers, icon }) => {
  return (
    <div className="bg-white -mr-14 md:-mr-0 h-44 hover:bg-blue-700 rounded-2xl drop-shadow-2xl cardBox">
      <div className="float-right mr-2 icon">{icon}</div>

      <div className="ml-6 text-3xl font-bold text-center text-blue-700 truncate mt-14 number">
        {numbers}
      </div>
      <div className="mt-1 ml-6 text-center text-gray-400 truncate cardName">{name}</div>
    </div>
  )
}

export default CardBox
