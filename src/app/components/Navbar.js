// app/components/Navbar.jsx
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 px-4 md:px-8 lg:px-12 2xl:px-16 ${
          scrolled
            ? 'bg-white/90 shadow-md py-4 backdrop-blur-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between w-full'>
            <div className='text-primary font-bold text-2xl'>AutoParts</div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-primary'
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex space-x-8'>
              {[
                'Home',
                'About',
                'Services',
                'Gallery',
                'Testimonials',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className='text-gray-700 hover:text-primary transition-colors'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <Link href={'/products'} className='hidden md:block'>
              <button className=' bg-primary text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors'>
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className='absolute top-4 right-4 text-primary'
          onClick={() => setIsDrawerOpen(false)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <ul className='flex flex-col mt-16 space-y-6 px-6'>
          {[
            'Home',
            'About',
            'Services',
            'Gallery',
            'Testimonials',
            'Contact',
          ].map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase()}`}
                className='text-gray-700 hover:text-primary transition-colors block py-2'
                onClick={() => setIsDrawerOpen(false)} // Close drawer on click
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <Link href={'/products'} >
              <button className='w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors'>
                Shop Now
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {isDrawerOpen && (
        <div
          className='fixed inset-0 bg-black/70 bg-opacity-50 z-40 md:hidden'
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
}
