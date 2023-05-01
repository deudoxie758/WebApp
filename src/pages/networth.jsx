import Layout from "@/components/layout";
import debts from "../lib/debts"; 
import assets from "../lib/assets";
// import { Line } from 'react-chartjs-2';

const NetWorthCalculator = () => {

  const totalLiabilities = () => {
    let sum = 0;
    for (let el of debts) {
      // Parse the balance value as a float after removing the dollar sign
      sum += parseFloat(el.Balance.replace('$', ''));
    }
    return '$' + sum.toFixed(2);
  };
  
  const totalAssets = () => {
    let sum = 0;
    for (let el of assets) {
      // Remove the dollar sign and commas before parsing the worth value as a float
      sum += parseFloat(el.Worth.replace(/[$,]/g, ''));
    }
    return '$' + sum.toFixed(2);
  };

const calculateNetworth = () => {
  // Calculate the net worth by subtracting totalLiabilities from totalAssets
  return '$' + (parseFloat(totalAssets().replace('$', '')) - parseFloat(totalLiabilities().replace('$', ''))).toFixed(2);
};
  
  return (
    <>
  <div className="flex">
    <div className="w-3/4 flex-col">
    <h1 className='text-2xl font-bold'>Net Worth: {calculateNetworth()}</h1>
    <div className="p-8 mb-10 bg-red-100 border-solid border-4 border-red-600 w-full">
      <h2 className="text-2xl font-bold pb-4">Liabilities: {totalLiabilities()}</h2>
      <div className=" flex flex-row">
        <ul className="space-y-1 justify-content: space-between">
          {debts.map((debt, index) => (
            <li key={index}>
              <div className="grid grid-flow-col auto-cols-fr">
                <span className="justify-self-start mr-20">{debt.Creditor}</span>
                <span className="justify-self-end mr-40">{debt.Balance}</span>
                <span className="justify-self-start">{debt.Debt_Type}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="p-8 bg-green-100 border-solid border-4 border-green-700 w-full">
      <h2 className="text-2xl font-bold pb-4">Assets: {totalAssets()}</h2>
      <ul className="space-y-1 justify-content: space-between;">
        {assets.map((asset, index) => (
          <li key={index}>
            <div className="grid grid-flow-col auto-cols-fr">
              <span className="justify-self-start mr-10">{asset.Asset}</span>
              <span className="justify-self-end mr-40">{asset.Worth}</span>
              <span className="justify-self-start">{asset.Asset_account}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
    <div className="border-solid border-4 border-green-700 w-1/4 h-fit p-8 ml-10 mt-8 mr-4">
      <h2 className="">Stats</h2>
    </div>
  </div>
  </>
  );
};
NetWorthCalculator.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default NetWorthCalculator;
  