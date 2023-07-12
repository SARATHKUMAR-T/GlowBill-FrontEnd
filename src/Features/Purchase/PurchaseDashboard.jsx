import {
    HiOutlineCube,
    HiOutlineSquare3Stack3D,
    HiOutlineArchiveBoxArrowDown,
  } from 'react-icons/hi2';
  import { useSelector } from 'react-redux';
  import { decode } from 'html-entities';
import AddPurchase from './AddPurchase';
  function PurchaseDashboard() {
   const indianRubee=(decode('&#x20B9'));
  
    const data = useSelector((state) => state.purchase.purchase);
  
    if (data) {
      var totalStock = data
        ?.slice()
        .reduce((sum, item) => sum + Number(item.quantity), 0);
  
      var price = data
        .map((item) => Number(item.quantity) * Number(item.purchasePrice))
        .slice()
        .reduce((sum, price) => sum + price, 0);
    }
  
    return (
      <div className="flex gap-2 border-b-2 border-blue-700 ">
        <div className="flex w-full justify-around px-2 py-3 text-center text-xs font-semibold capitalize tracking-wide">
          <div className="h-26 flex w-36 duration-300 hover:translate-x-1 hover:translate-y-1 cursor-pointer flex-col items-center gap-1 rounded-md border-b-2 border-r-2 border-blue-700 bg-slate-50 px-2 py-3 shadow-xl">
            {/* <p>product</p> */}
            <HiOutlineCube className="h-8 w-8 text-blue-700" />
            <h5>No Of Items</h5>
            <p>{data ? data.length : '_'}</p>
          </div>
          <div className="h-26 flex w-36 duration-300 hover:translate-x-1 hover:translate-y-1 cursor-pointer flex-col items-center gap-1 rounded-md border-b-2 border-r-2 border-blue-700 bg-slate-50 px-2 py-3 shadow-xl">
            {/* <p>product</p> */}
            <HiOutlineSquare3Stack3D className="h-8 w-8 text-blue-700" />
            <h5>Total Stock</h5>
            <p>{totalStock ? totalStock : '_'}</p>
          </div>
          <div className="h-26 flex w-36 duration-300 hover:translate-x-1 hover:translate-y-1 cursor-pointer flex-col items-center gap-1 rounded-md border-b-2 border-r-2 border-blue-700 bg-slate-50 px-2 py-3 shadow-xl">
            {/* <p>product</p> */}
            <HiOutlineArchiveBoxArrowDown className="h-8 w-8 text-blue-700" />
            <h5 >Inventory cost </h5>
            <p>{price ? `${indianRubee}${price}` : '_'}</p>
          </div>
        </div>
        <AddPurchase />
      </div>
    );
  }
  
  export default PurchaseDashboard;
  