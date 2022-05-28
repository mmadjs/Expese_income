const TranActionComponent = ({ transAction }) => {
  return (
    <section>
      {transAction.length && 
      transAction.map((t) => (
        <div key={t.id} className="transaction"
       style={{border:t.type==="expense" ? "5px solid red":"5px solid green"}} >
          
          <span>{t.desc}</span> =<span>{t.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default TranActionComponent;
