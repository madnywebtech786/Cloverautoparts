import { products } from '@/app/constants/productData';
import { CheckCheck } from 'lucide-react';
import Image from 'next/image';

// Import the product data from your external file

export default function ProductDetailPage({ params }) {
  const productId = parseInt(params.id) || 1;

  // Find the product based on the ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className='bg-white min-h-screen'>
        <div className='bg-gradient-to-r from-red-50 to-white min-h-[300px] flex items-center justify-center'>
          <h6 className='text-4xl lg:text-6xl font-bold text-red-600 text-center'>
            Product Not Found
          </h6>
        </div>
        <main className='container mx-auto px-4 md:px-8 lg:px-12 2xl:px-16 py-10'>
          <p className='text-gray-700 mb-6'>
            The product you are looking for does not exist.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className='bg-white min-h-screen'>
      <div className='bg-gradient-to-r from-red-50 to-white min-h-[300px] flex items-center justify-center'>
        <h6 className='text-4xl lg:text-6xl font-bold text-red-600 text-center'>
          Product Detail
        </h6>
      </div>
      {/* Main Content */}
      <main className='container mx-auto px-4 md:px-8 lg:px-12 2xl:px-16 py-10'>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='flex flex-col gap-3 w-full lg:w-1/2'>
            <h1 className='text-3xl font-bold mt-6 mb-2'>{product.name}</h1>
            <p className='text-gray-500 mb-4'>
              Part Number: {product.partNumber}
            </p>
            <p className='text-gray-700 mb-6'>{product.detailDescription}</p>
          </div>
          <div className='flex w-full lg:w-1/2'>
            <div className='grid grid-cols-1 gap-6 mb-8 w-full lg:w-4/5 mx-auto'>
              {/* Primary Image */}
              <div className='group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'>
                <Image
                  width={300}
                  height={300}
                  src={product.primaryImage}
                  alt={product.name}
                  className='w-full  object-cover transition-transform duration-500 group-hover:scale-105 h-[200px] lg:max-h-[250px]'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5'>
                  <span className='text-white font-medium text-lg'>
                    Main View
                  </span>
                </div>
              </div>

              {/* Secondary Images Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Secondary Image 1 */}
                <div className='group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'>
                  <Image
                    width={300}
                    height={300}
                    src={product.secondaryImages[0]}
                    alt={`${product.name} - Angle View`}
                    className='w-full  object-cover transition-transform duration-500 group-hover:scale-105 h-[200px] lg:max-h-[200px]'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5'>
                    <span className='text-white font-medium text-lg'>
                      Angle View
                    </span>
                  </div>
                </div>

                {/* Secondary Image 2 */}
                <div className='group relative overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'>
                  <Image
                    width={300}
                    height={300}
                    src={product.secondaryImages[1]}
                    alt={`${product.name} - Packaging`}
                    className='w-full  object-cover transition-transform duration-500 group-hover:scale-105 h-[200px] lg:max-h-[200px]'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5'>
                    <span className='text-white font-medium text-lg'>
                      Packaging
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <section className='my-6'>
          <h2 className='text-xl font-bold mb-4'>Specifications</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {product.specifications.map((spec, index) => (
              <div
                key={index}
                className='flex flex-col md:flex-row justify-between border-b border-gray-200 pb-4 last-of-type:border-b-0'
              >
                {/* Label */}
                <div className='md:w-1/3 text-gray-500 font-medium'>
                  {spec.label}
                </div>

                {/* Value */}
                <div className='md:w-2/3 text-gray-700 font-medium'>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features & Benefits */}
        <section>
          <h2 className='text-2xl font-bold mb-2'>Features & Benefits</h2>
          <ul className='list-disc mb-6'>
            {product.features.map((feature, index) => (
              <li
                key={index}
                className='text-gray-700 mb-2 flex items-center gap-2 text-sm lg:text-base'
              >
                <CheckCheck className='text-green-500 text-base lg:text-xl' />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
