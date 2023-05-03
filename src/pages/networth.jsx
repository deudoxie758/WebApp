import Layout from "@/components/layout";
import debts from "../lib/debts"; 
import assets from "../lib/assets";

const NetWorthCalculator = () => {

  const totalLiabilities = () => {
    let sum = 0;
    for (let el of debts) {
      sum += parseFloat(el.Balance.replace("$", ''));
    }
    return  sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };


  const totalAssets = () => {
    let sum = 0;
    for (let el of assets) {
      sum += parseFloat(el.Worth.replace("$", ''));
    }
    return sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

const calculateNetworth = () => {
  const assetsValue = parseFloat(totalAssets().replace(/[^\d.-]/g, ''));
  const liabilitiesValue = parseFloat(totalLiabilities().replace(/[^\d.-]/g, ''));
  const netWorthValue = assetsValue - liabilitiesValue;
  return '$' + netWorthValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
//   return (
//     <>
//       <div className="flex">
//         <div className="w-3/4 flex-col">
//           <h1 className='text-2xl font-bold'>Net Worth: {calculateNetworth()}</h1>
//           <div className="p-8 mb-10 bg-red-100 border-solid border-4 border-red-600 w-full">
//             <h2 className="text-2xl font-bold pb-4">Liabilities: ${totalLiabilities()}</h2>
//             <div className=" flex flex-row">
//               <ul className="space-y-1 justify-content: space-between">
//                 {debts.map((debt, index) => (
//                   <li key={index}>
//                     <div className="grid grid-flow-col auto-cols-fr">
//                       <span className="justify-self-start mr-20">{debt.Creditor}</span>
//                       <span className="justify-self-end mr-40">{parseFloat(debt.Balance.replace('$', '')).toLocaleString('en-US', {
//                         style: 'currency',
//                         currency: 'USD',
//                       })} 
//                       </span>
//                       <span className="justify-self-start">{debt.Debt_Type}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="p-8 bg-green-100 border-solid border-4 border-green-700 w-full">
//             <h2 className="text-2xl font-bold pb-4">Assets: ${totalAssets()}</h2>
//             <ul className="space-y-1 justify-content: space-between;">
//               {assets.map((asset, index) => (
//                 <li key={index}>
//                   <div className="grid grid-flow-col auto-cols-fr">
//                     <span className="justify-self-start mr-10">{asset.Asset}</span>
//                     <span className="justify-self-end mr-40">{parseFloat(asset.Worth.replace('$', '')).toLocaleString('en-US', {
//                       style: 'currency',
//                       currency: 'USD',
//                     })} </span>
//                     <span className="justify-self-start">{asset.Asset_account}</span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//     <div className="border-solid border-4 border-grey-400 h-[90vh] w-1/4 p-8 ml-10 mt-8 mr-4 flex flex-col items-center">
//       <h2 className="text-xl font-bold mb-4">Stats</h2>
//       <p className="text-lg mb-20 font-medium">Top 40% of users aged 30-35</p>
//       <p className="text-lg mb-20 font-medium">Increase $20k in the last 6 months</p>
//       <p className="text-lg mb-20 font-medium">0% of your lifetime earnings</p>
//     </div>
//   </div>
//   <div>
//     {/* Networth Graph Area */}
//   </div>
//   </>
//   );
// };
// NetWorthCalculator.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }
// export default NetWorthCalculator;
  
return (
  <>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 flex-col">
        <h1 className='text-2xl font-bold mb-4'>Net Worth: {calculateNetworth()}</h1>
        <div className="p-8 mb-10 bg-red-100 border-solid border-4 border-red-600 w-4/5">
          <h2 className="text-2xl font-bold pb-4">Liabilities: ${totalLiabilities()}</h2>
          <div className="flex flex-row">
            <ul className="space-y-1">
              {debts.map((debt, index) => (
                <li key={index}>
                  <div className="grid grid-cols-4 gap-4" style={{ gridTemplateColumns: '2fr 2fr 1fr' }}>
                    <span>{debt.Creditor}</span>
                    <span className="text-right">{parseFloat(debt.Balance.replace('$', '')).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })} 
                    </span>
                    <span>{debt.Debt_Type}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-8 bg-green-100 border-solid border-4 border-green-700 w-4/5">
          <h2 className="text-2xl font-bold pb-4">Assets: ${totalAssets()}</h2>
          <ul className="space-y-1">
            {assets.map((asset, index) => (
              <li key={index}>
                <div className="grid grid-cols-4 gap-4" style={{ gridTemplateColumns: '1fr 1.2fr .8fr' }}>
                  <span>{asset.Asset}</span>
                  <span className="text-right">{parseFloat(asset.Worth.replace('$', '')).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })} </span>
                  <span>{asset.Asset_account}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-solid border-4 border-grey-400 w-full mt-10 md:w-1/4 md:p-8 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Stats</h2>
        <p className="text-lg mb-20 font-medium">Top 40% of users aged 30-35</p>
        <p className="text-lg mb-20 font-medium">Increase $20k in the last 6 months</p>
        <p className="text-lg mb-20 font-medium">0% of your lifetime earnings</p>
      </div>
    </div>
    <div>
      {/* Networth Graph Area */}
    </div>
  </>
);

                }


NetWorthCalculator.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default NetWorthCalculator;