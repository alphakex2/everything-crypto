import { orderDetailsData } from "../../data/order-details"
import Table from "../table/Table"

const OrderList: React.FC = () => {
  return (
    <div className="relative p-3 bg-white recentOders">
      <div className="flex justify-between mb-3 cardHeader">
        <h2 className="font-semibold text-blue-800">Recent Orders</h2>
        <button className="relative p-2 text-white bg-blue-800 rounded-lg hover:bg-blue-600">
          View All
        </button>
      </div>
     
      <Table data={orderDetailsData} />
    </div>
  )
}

export default OrderList
