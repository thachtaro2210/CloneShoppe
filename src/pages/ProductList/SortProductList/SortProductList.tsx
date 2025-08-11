import React from 'react';
import { useTranslation } from 'react-i18next';

interface SortProductListProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  loading: boolean;
}

export default function SortProductList({
  sortBy,
  setSortBy,
  currentPage,
  setCurrentPage,
  totalPages,
  loading,
}: SortProductListProps) {
  const { t } = useTranslation('product'); // Sử dụng namespace 'product'

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-300/40 py-4 px-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center flex-wrap gap-2">
          <div className="text-sm">{t('sortBy')}</div>
          <button
            className={`h-8 px-4 capitalize text-sm text-center ${
              sortBy === '' ? 'bg-orange-500 text-white hover:bg-orange-400/80' : 'bg-white text-black hover:bg-slate-100'
            }`}
            onClick={() => handleSortChange('')}
          >
            {t('popular')}
          </button>
          <button
            className={`h-8 px-4 capitalize text-sm text-center ${
              sortBy === 'createdAt:desc'
                ? 'bg-orange-500 text-white hover:bg-orange-400/80'
                : 'bg-white text-black hover:bg-slate-100'
            }`}
            onClick={() => handleSortChange('createdAt:desc')}
          >
            {t('newest')}
          </button>
          <button
            className={`h-8 px-4 capitalize text-sm text-center ${
              sortBy === 'sold:desc'
                ? 'bg-orange-500 text-white hover:bg-orange-400/80'
                : 'bg-white text-black hover:bg-slate-100'
            }`}
            onClick={() => handleSortChange('sold:desc')}
          >
            {t('bestSelling')}
          </button>
          <select
            className="h-8 px-4 capitalize bg-white text-black text-sm hover:bg-slate-100"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="" disabled>
              {t('price')}
            </option>
            <option value="price:asc">{t('priceLowToHigh')}</option>
            <option value="price:desc">{t('priceHighToLow')}</option>
          </select>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-orange-500 font-medium">{t('page')} {currentPage}</span>
          <span>{t('of')}</span>
          <span className="text-gray-500">{totalPages}</span>
          <div className="flex ml-2">
            <button
              className={`px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 ${
                currentPage === 1 ? 'cursor-not-allowed' : ''
              }`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              className={`px-3 h-8 rounded-tr-sm rounded-br-sm bg-white hover:bg-slate-100 ${
                currentPage === totalPages ? 'cursor-not-allowed' : ''
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}