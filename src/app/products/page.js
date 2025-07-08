'use client';

import { useState, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import { products } from '../constants/productData';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);



  // Available filters
  const brands = [
    'Ford',
    'Chevrolet',
    'Toyota',
    'Dodge',
    'Honda',
    'BMW',
    'Mercedes',
  ];
  const types = [
    'Engine',
    'Transmission',
    'Drive Shaft & Axles',
    'Bumpers',
    'Fenders',
    'Doors',
  ];

  // State for filter values
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchModel, setSearchModel] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Initialize filters from URL query parameters
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl) {
      setSelectedTypes([typeFromUrl]);
    }
  }, [searchParams]);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // Model filter
    if (
      searchModel &&
      !product.model.toLowerCase().includes(searchModel.toLowerCase())
    ) {
      return false;
    }

    // Price range filter
    if (
      (minPrice && product.price < parseFloat(minPrice)) ||
      (maxPrice && product.price > parseFloat(maxPrice))
    ) {
      return false;
    }

    // Condition filter
    if (
      selectedConditions.length > 0 &&
      !selectedConditions.includes(product.condition)
    ) {
      return false;
    }

    // Type filter
    if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
      return false;
    }

    return true;
  });

  // Toggle brand filter
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Toggle condition filter
  const toggleCondition = (condition) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter((c) => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  // Toggle type filter
  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className='bg-white min-h-screen'>
      {/* Header */}
      <div className='bg-gradient-to-r from-red-50 to-white min-h-[300px] flex items-center justify-center'>
        <h6 className='text-4xl lg:text-6xl font-bold text-red-600 text-center'>
          Shop Products
        </h6>
      </div>

      {/* Main Content */}
      <main className='container mx-auto p-4 md:p-8 lg:p-12 2xl:p-16 flex flex-col md:flex-row gap-8'>
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className='md:hidden bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 self-start mb-4'
        >
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </button>

        {/* Filter Sidebar (Mobile Drawer) */}
        <aside
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:relative md:translate-x-0 md:w-64 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='p-6 h-full overflow-y-auto'>
            <h2 className='font-semibold text-lg mb-4'>Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className='absolute top-4 right-4 text-gray-500 md:hidden'
            >
              ×
            </button>

            {/* Brands */}
            <div className='mb-6'>
              <h3 className='text-sm uppercase tracking-wider font-medium text-gray-600 mb-2'>
                Brand
              </h3>
              <ul className='space-y-2'>
                {brands.map((brand) => (
                  <li key={brand}>
                    <label className='flex items-center gap-2 cursor-pointer text-gray-700'>
                      <input
                        type='checkbox'
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className='form-checkbox h-4 w-4 text-red-600'
                      />
                      <span>{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Models */}
            <div className='mb-6'>
              <h3 className='text-sm uppercase tracking-wider font-medium text-gray-600 mb-2'>
                Model
              </h3>
              <input
                type='text'
                value={searchModel}
                onChange={(e) => setSearchModel(e.target.value)}
                placeholder='Search model'
                className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
              />
            </div>

            {/* Price Range */}
            <div className='mb-6'>
              <h3 className='text-sm uppercase tracking-wider font-medium text-gray-600 mb-2'>
                Price
              </h3>
              <div className='flex gap-2'>
                <input
                  type='number'
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder='Min'
                  className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
                />
                <input
                  type='number'
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder='Max'
                  className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500'
                />
              </div>
            </div>

            {/* Condition */}
            <div className='mb-6'>
              <h3 className='text-sm uppercase tracking-wider font-medium text-gray-600 mb-2'>
                Condition
              </h3>
              <ul className='space-y-2'>
                {['new', 'used'].map((cond) => (
                  <li key={cond}>
                    <label className='flex items-center gap-2 cursor-pointer text-gray-700'>
                      <input
                        type='checkbox'
                        checked={selectedConditions.includes(cond)}
                        onChange={() => toggleCondition(cond)}
                        className='form-checkbox h-4 w-4 text-red-600'
                      />
                      <span>{cond}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Types */}
            <div>
              <h3 className='text-sm uppercase tracking-wider font-medium text-gray-600 mb-2'>
                Type
              </h3>
              <ul className='space-y-2'>
                {types.map((type) => (
                  <li key={type}>
                    <label className='flex items-center gap-2 cursor-pointer text-gray-700'>
                      <input
                        type='checkbox'
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className='form-checkbox h-4 w-4 text-red-600'
                      />
                      <span>{type}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Overlay when drawer open */}
        {isFilterOpen && (
          <div
            className='fixed inset-0 bg-black/70 bg-opacity-40 z-30 md:hidden'
            onClick={() => setIsFilterOpen(false)}
          ></div>
        )}

        {/* Product Grid */}
        <section className='flex-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
