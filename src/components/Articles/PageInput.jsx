const Pageinput = ({ pageInfo, setPageInfo }) => {
  return (
    <div>
      <button
        disabled={pageInfo.page === 1}
        onClick={() => {
          setPageInfo((currentInfo) => {
            const newInfo = { ...currentInfo };
            newInfo.page--;
            return newInfo;
          });
        }}
      >
        {"<-"}
      </button>
      <p>{pageInfo.page}</p>
      <button
        disabled={pageInfo.limit * pageInfo.page > pageInfo.count}
        onClick={() => {
          setPageInfo((currentInfo) => {
            const newInfo = { ...currentInfo };
            newInfo.page++;
            return newInfo;
          });
        }}
      >
        {"->"}
      </button>
    </div>
  );
};

export default Pageinput;
