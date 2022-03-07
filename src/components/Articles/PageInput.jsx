const Pageinput = ({ pageInfo, changePage }) => {
  return (
    <div>
      <button
        disabled={pageInfo.page === 1}
        onClick={() => {
          changePage(-1);
        }}
      >
        {"<-"}
      </button>
      <p>{pageInfo.page}</p>
      <button
        disabled={pageInfo.limit * pageInfo.page > pageInfo.count}
        onClick={() => {
          changePage(1);
        }}
      >
        {"->"}
      </button>
    </div>
  );
};

export default Pageinput;
