import { useEffect, useState } from "react";
import OverviewComponent from "../OverViewComponent/Overview";
import TranActionComponent from '../TranseAction/TransAction'
const ExpensApp = () => {
  const[income, setIncome] = useState(0);
  const[expense, setExpens] = useState(0);
  const[transAction,setTArans]=useState([]);
  const addTranseAction =(formValue)=>{
    console.log(formValue)
    const date= {...formValue,id:Date.now()} 
    setTArans([...transAction,date])
   }
   useEffect(()=>{
     let exp =0
     let inc =0
     transAction.forEach((t)=>{
       t.type==='expense' ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
       console.log(expense);
     });
     setExpens(exp)
     setIncome(inc)
   },[transAction])
  
  return (
    <section className="main-EXpense">
      <OverviewComponent income={income} expense={expense} addTranseAction={addTranseAction} />
      <TranActionComponent transAction={transAction} />
    </section>
  );
};

export default ExpensApp;
