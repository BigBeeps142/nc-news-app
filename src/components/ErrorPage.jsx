const Errorpage = ({ component, error }) => {
  console.log(error);
  console.log(error.status);
  console.log(error.msg);
  return (
    <section>
      <h2>{error.status}</h2>
      <h2>{`${component ?? ""} ${error.msg}`}</h2>
    </section>
  );
};

export default Errorpage;
