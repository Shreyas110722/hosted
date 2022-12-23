import { industries } from "../../../../utils/Servicedata";
import BankData from "./BankData";

function BankingInside() {
  return (<div>{industries.map((item) => {
    <BankData
    maintitle={item.maintitle}
    subTitle={item.subTitle}
    Overview={item.Overview}
    Overviewcontent={item.Overviewcontent}
    />
  })}</div>)
}
export default BankingInside;
