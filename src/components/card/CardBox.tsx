import { Eye } from "../../svgs"

const CardBox: React.FC = () => {
  return (
    <div className="cardBox">
      <div className="card">
        <div className="numbers">1,504</div>
        <div className="cardName">Daily Views</div>
        <div className="icon">{Eye}</div>
      </div>
    </div>
  )
}

export default CardBox
