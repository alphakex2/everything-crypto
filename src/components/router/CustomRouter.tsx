import { Route, Switch } from "react-router"
import Homepage from "../pages/Homepage"
import CryptoCurrencies from "./../pages/CryptoCurrencies"
import News from "./../pages/News"
import Exchanges from "./../pages/Exchanges"
import CryptoDetails from "../pages/CryptoDetails"

const CustomRouter: React.FC = ({ children }) => {
  return (
    <Switch>
      <Route exact path="/">
        {" "}
        <Homepage />{" "}
      </Route>

      <Route exact path="/cryptocurrencies">
        {" "}
        <CryptoCurrencies simplified={false} />{" "}
      </Route>
      <Route exact path="/news">
        {" "}
        <News />{" "}
      </Route>
      <Route exact path="/exchanges">
        {" "}
        <Exchanges />{" "}
      </Route>
      <Route exact path="/cryptodetails/:coinId">
        {" "}
        <CryptoDetails />{" "}
      </Route>
    </Switch>
  )
}

export default CustomRouter
