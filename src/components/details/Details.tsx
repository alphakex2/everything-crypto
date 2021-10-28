import RecentCutomers from "../customers/RecentCustomers"
import OrderList from "../orders/OrderList"
import { orderDetailsData } from "./../../data/order-details"
const Details: React.FC = () => {
  return (
    <div className="relative grid w-full grid-cols-1 p-5 md:flex rounded-2xl drop-shadow-2xl gap-7 details">
      {/* Order List */}

      <OrderList />

      {/* Recent Customers */}

      <RecentCutomers />
    </div>
  )
}

export default Details
