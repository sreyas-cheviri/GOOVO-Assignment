import { ChevronLeft, ChevronRight } from './icons';

export default function Pagination({ currentPage, setCurrentPage, ProductList }) {
    const pageNumbers = Math.ceil(ProductList.length / 10);

    const renderPageNumbers = (totalPages, currentPage) => {
        const pages = [];
        const VISIBLE_PAGES = 5;

        if (totalPages <= VISIBLE_PAGES) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2 py-4">
            <button
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
            >
                <ChevronLeft />
            </button>

            {renderPageNumbers(pageNumbers, currentPage).map((pageNo, index) => (
                <button
                    key={index}
                    onClick={() => typeof pageNo === 'number' && setCurrentPage(pageNo)}
                    disabled={pageNo === '...'}
                    className={`w-10 h-10 rounded-full flex items-center justify-center  ${
                        currentPage === pageNo
                        ? 'bg-[#EE1A73] text-white'
                        : pageNo === '...'
                        ? 'cursor-default'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    {pageNo}
                </button>
            ))}

            <button
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    currentPage === pageNumbers
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                disabled={currentPage === pageNumbers}
                onClick={() => setCurrentPage(prev => prev + 1)}
            >
                <ChevronRight />
            </button>
        </div>
    );
}
