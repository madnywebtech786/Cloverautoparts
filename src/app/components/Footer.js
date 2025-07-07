// app/components/Footer.jsx
'use client';

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white p-4 md:p-8 lg:p-12 2xl:p-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand Column */}
          <div>
            <h3 className='text-primary font-bold text-xl mb-4'>AutoParts</h3>
            <p className='text-gray-400'>
              Your one-stop shop for premium auto parts and accessories. Quality
              you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-gray-400 flex flex-col gap-1'>
              <Link
                href='#home'
                className='hover:text-primary transition-colors'
              >
                {' '}
                Home
              </Link>
              <Link
                href='#about'
                className='hover:text-primary transition-colors'
              >
                {' '}
                About Us
              </Link>
              <Link
                href='#services'
                className='hover:text-primary transition-colors'
              >
                {' '}
                Services
              </Link>
              <Link
                href='#gallery'
                className='hover:text-primary transition-colors'
              >
                {' '}
                Gallery
              </Link>
              <Link
                href='#contact'
                className='hover:text-primary transition-colors'
              >
                {' '}
                Contact
              </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-3 text-gray-400'>
              <p className='flex items-center gap-2'>
                <MapPin size={16} />
                <span>123 Auto Parts Street, Detroit, MI</span>
              </p>
              <Link
                href={'mailto:support@autoparts.com'}
                className='flex items-center gap-2'
              >
                <Mail size={16} />
                <span>support@autoparts.com</span>
              </Link>
              <Link
                href={'tel:+15551234567'}
                className='flex items-center gap-2'
              >
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </Link>
            </ul>
          </div>

          {/* Newsletter / Social Media */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Stay Connected</h3>

            <div className='flex space-x-4 text-gray-400'>
              <Link href='#' className='hover:text-primary transition-colors'>
                <Facebook size={20} />
              </Link>
              <Link href='#' className='hover:text-primary transition-colors'>
                <Twitter size={20} />
              </Link>
              <Link href='#' className='hover:text-primary transition-colors'>
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-12 pt-6 text-center text-gray-500'>
          <p>
            &copy; {new Date().getFullYear()} AutoParts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
