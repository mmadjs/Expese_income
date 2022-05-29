import { useEffect, useState } from "react";

const TranActionComponent = ({ transAction }) => {
  const [searchitem, setsearchitem] = useState("");
  const [fitertransaction, setfiltertransaction] = useState(transAction);

  const filterHandler = (search) => {
    if (!search || search === "") {
      setfiltertransaction(transAction);
      return;
    }
    const filterd = transAction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setfiltertransaction(filterd)
  };

  const searchHandler = (e) => {
    setsearchitem(e.target.value);
    filterHandler(e.target.value);
  };
  useEffect(() => {
    filterHandler(searchitem);
  }, [transAction]);

  if(!transAction.length)return <h3>حساب هایتان را وارد کنید</h3>


  return (

    <section>
      <input
        className=" search"
        type="text"
        value={searchitem}
        onChange={searchHandler}
      />
      {fitertransaction.length &&
        fitertransaction.map((t) => (
          <div
            key={t.id}
            className="transaction"
            style={{
              border:
                t.type === "expense" ? "5px solid red" : "5px solid green",
            }}
          >
            <span>{t.amount}تومان</span>
            <span>{t.desc}</span>

          </div>
        ))}
    </section>
  );
};

export default TranActionComponent;
