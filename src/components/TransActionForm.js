import { useState } from "react";

const TransActionForm = ({addTranseAction}) => {
    const [formValue, setformvalue] = useState({
        type: "expense",
        amount: 0,
        desc: "",
     
      });
    
      const chngeHandler = (e) => {
        setformvalue({ ...formValue, [e.target.name]: e.target.value });
        console.log({[e.target.name]:e.target.value});
      };
      const submitHandler =(e)=>{
        e.preventDefault()
        addTranseAction(formValue)
        
      }
    return ( <form onSubmit={submitHandler}>
        <input
          type="text"
          name="desc"
          placeholder="عمل مورد نظر"
          onChange={chngeHandler}
          value={formValue.desc}
        />
        <input
          type="number"
          name="amount"
          placeholder="مفدار"
          onChange={chngeHandler}
          value={formValue.amount}
        />
        <div className="input-radio">
          <input
            type="radio"
            value="expense"
            checked={formValue.type === "expense"}
            name="type"
            onChange={chngeHandler}
          />
          <label>خرج شده</label>
          <input
            type="radio"
            value="income"
            checked={formValue.type ==="income"}
            name="type"
            onChange={chngeHandler}
          />
          <label>درامد</label>
        </div>
        <button type="submit" > حساب کردن</button>
      </form> );
}
 
export default TransActionForm;