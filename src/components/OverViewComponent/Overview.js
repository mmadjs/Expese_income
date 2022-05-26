
import { useState } from "react";
import TransActionForm from "../TransActionForm";
const OverviewComponent = ({ income, expense ,addTranseAction,formValue}) => {
  const [isShow, setisShow] = useState(false);

  return (
    <>
      <div className="top-section">
        <button   onClick={() => setisShow(!isShow)}>
          {isShow ? "خارج شدن" : " حساب کتاب"}
        </button>
        <p>  {income - expense}$ :موجودی</p>

      </div>
      {isShow && <TransActionForm addTranseAction={addTranseAction}  />}
      <div className="bottom-section">
        <p>مخارج: <span>{expense}</span> </p>
        <p>درآمد: <span>{income}</span></p>
      </div>
    </>
  );
};

export default OverviewComponent;

