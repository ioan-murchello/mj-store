import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

let index = 0;

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const subarrays = chunkArray(pages, 7);
  let [currentPage, setCurrentPage] = useState(page);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePage = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const handlePrevPage = () => {
    const currentPageIndexInSubarray = currentPage % 7;
    setCurrentPage(currentPage - 1);
    handlePage(currentPage - 1);

    if (currentPageIndexInSubarray === 1) {
      setCurrentPage(subarrays[index - 1][0]);
      index--;
      handlePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const currentPageIndexInSubarray = currentPage % 7;
    setCurrentPage(currentPage + 1);
    handlePage(currentPage + 1);

    if (currentPageIndexInSubarray === 0) {
      setCurrentPage(subarrays[index + 1][0]);
      index++;
      handlePage(currentPage + 1);
    }
  };

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={handlePrevPage}
          disabled={index === 0 && currentPage === 1}
        >
          prev
        </button>
      </div> 
      {subarrays[index].map((n) => (
        <button
          className={`btn btn-xs sm:btn-md ${
            currentPage === n ? 'bg-slate-100' : ''
          }`}
          key={n}
          onClick={() => handlePage(n)}
        >
          {n}
        </button>
      ))}
      <button
        className='btn btn-xs sm:btn-md join-item'
        onClick={handleNextPage}
        disabled={currentPage === pageCount || index === subarrays.length - 1}
      >
        next
      </button>
    </div>
  );
};

export default ComplexPaginationContainer;
