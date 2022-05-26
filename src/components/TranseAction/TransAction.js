const TranActionComponent = ({ transAction }) => {
  
  return (
    <section>
      {
     transAction.map((t) => (
        <div key={t.id}>{t.desc}</div>
      ))}
      <div>hi</div>
    </section>
  );
};

export default TranActionComponent;
