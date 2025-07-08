import { Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { id, name, brand, model, price, condition, rating, stock } = product;

  return (
    <div
      key={id}
      className='bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden group border border-gray-100'
    >
      <div className='relative h-40 bg-gray-200 overflow-hidden'>
        <img
          src={`/images/parts/${name}.png`} // e.g., "EngineBlock.png"
          alt={name}
          className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${
            condition === 'new'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {condition.toUpperCase()}
        </span>
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-start'>
          <h3 className='font-semibold text-lg'>{name}</h3>
          <div className='flex items-center gap-1 text-yellow-500 text-sm'>
            <Star fill='currentColor' size={14} />
            <span>{rating}</span>
          </div>
        </div>
        <p className='text-sm text-gray-600 mt-1'>
          {brand} • {model}
        </p>
        <p className='mt-2 text-red-600 font-bold'>${price.toFixed(2)}</p>
        <p className='text-xs mt-1 text-gray-500'>
          {stock ? 'In Stock' : 'Out of Stock'}
        </p>
        <Link href={`/products/${id}`}>
          <div className='mt-4 flex gap-2'>
            <button className='flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors text-sm cursor-pointer '>
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
