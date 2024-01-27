import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Pagination = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  if (pages < 2) return null;

  const {search, pathname} = useLocation();
  
  const navigate = useNavigate()

  const handlePage = (pageNumber) => {
    const searchParams = new URLSearchParams(search);

    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            let prevPage = page - 1;
            if (page === 1) {
              prevPage = 1;
            }

            handlePage(prevPage);
          }}
          disabled={page === 1}
        >
          prev
        </button>
      </div>
      {pages.map((pageNumber) => {
        return (
          <button
            key={pageNumber}
            className={`btn btn-xs sm:btn-md join-item ${
              page === pageNumber ? 'bordered bg-base-300' : ''
            }`}
            onClick={() => handlePage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className='btn btn-xs sm:btn-md join-item'
        onClick={() => {
          let prevPage = page + 1;
          if (page >= pageCount) {
            prevPage = pageCount;
          }

          handlePage(prevPage);
        }}
        disabled={page === pageCount}
      >
        next
      </button>
    </div>
  );
};
export default Pagination;
