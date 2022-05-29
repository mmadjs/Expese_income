import { useState } from "react";

const TransActionForm = ({addTranseAction,setIsshow}) => {
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
        setIsshow(false)
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
          placeholder="هزینه"
          onChange={chngeHandler}
          value={formValue.amount.value}
          min='0'
          
        />
        <div className="input-radio">
          <input
            type="radio"
            value="expense"
            checked={formValue.type === "expense"}
            name="type"
            onChange={chngeHandler}
            id="expense "
          />
          <label  htmlFor="expense">خرج </label>
          <input
            type="radio"
            value="income"
            checked={formValue.type ==="income"}
            name="type"
            onChange={chngeHandler}
            id="income"
          />
          <label htmlFor="income" >درامد</label>
        </div>
        <button type="submit" className="button-action" > حساب کردن</button>
      </form> );
}
 
export default TransActionForm;