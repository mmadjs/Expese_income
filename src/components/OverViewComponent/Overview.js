
import { useState } from "react";
import TransActionForm from "../TransActionForm";
const OverviewComponent = ({ income, expense ,addTranseAction,formValue}) => {
  const [isShow, setisShow] = useState(false);

  return (
    <>
      <div className="top-section">
        <button   onClick={() => setisShow(!isShow)} 
        className={`btn ${isShow ? "cancel":"open"}`} >
          {isShow ? "خارج شدن" : "  شروع کردن"}
        </button>
        <p>  {income - expense}$ :موجودی</p>

      </div>
      {isShow && <TransActionForm addTranseAction={addTranseAction} setIsshow={setisShow} />}
      <div className="bottom-section">
        <p >مخارج <span style={{color:'red'}} >{expense}$</span> </p>
        <p>درآمد <span style={{color:'green'}}>{income}$</span></p>
      </div>
    </>
  );
};

export default OverviewComponent;

