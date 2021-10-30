import HTMLReactParser from "html-react-parser"
import millify from "millify"
import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import { up } from "../svgs"

interface AccordionProps {
  header?: string
  body?: string
  icon: any
  count?: number
  tradeVol?: number
  markets?: number
  marketShare?: number
}

const Accordion: React.FC<AccordionProps> = ({
  header,
  tradeVol,
  count,
  body,
  icon,
  markets,
  marketShare,
}) => {
  return (
    <AccordionComponent allowZeroExpanded={true} >
      <AccordionItem>
        <AccordionItemHeading className="p-4 font-bold text-white bg-gray-500 md:mr-8 hover:bg-blue-600">
          <AccordionItemButton className="grid col-span-1 md:grid-cols-4">
            <div className="flex">
              <span className="mt-1 mr-3">{count && count}. </span>
              <img className="w-8 h-8 " src={icon} alt={`${header} icon`} />
              <span className="mt-1 ml-4">{header} </span>
            </div>

            <div className="flex">
              <span className="mt-1 mr-3">24Hr Trade Volume </span>
              <span className="mt-1 mr-3">
                {tradeVol && millify(tradeVol)}{" "}
              </span>
            </div>

            <div className="flex">
              <span className="mt-1 mr-3">Markets </span>
              <span className="mt-1 mr-3">{markets && millify(markets)} </span>
            </div>

            <div className="flex">
              <span className="mt-1 mr-3">Market Share </span>
              <span className="mt-1 mr-3">
                {marketShare && marketShare.toFixed(2)}%{" "}
              </span>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="p-4 ">
          <p className="p-4 text-justify">{body && HTMLReactParser(body)}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </AccordionComponent>
  )
}

export default Accordion
