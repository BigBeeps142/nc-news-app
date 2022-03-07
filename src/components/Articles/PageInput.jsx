const Pageinput = ({ pageInfo, setPageInfo, articles }) => {
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
        disabled={articles.length < pageInfo.limit}
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
