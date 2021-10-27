interface CardBoxProps {
  name?: string
  numbers?: number
  icon?: JSX.Element
}
const CardBox: React.FC<CardBoxProps> = ({ name, numbers, icon }) => {
  return (
    <div className="border-b-2 bg-gray-400-300 cardBox">
      <div className=" card">
        <div className="numbers">{numbers}</div>
        <div className="cardName">{name}</div>
        <div className="icon">{icon}</div>
      </div>
    </div>
  )
}

export default CardBox
