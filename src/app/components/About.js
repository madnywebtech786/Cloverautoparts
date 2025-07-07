// app/components/About.jsx
export default function About() {
  return (
    <section id='about' className='p-4 md:p-8 lg:p-12 2xl:p-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <img
              src='/images/about-side.png'
              alt='Auto Shop'
              className='rounded-lg shadow-md mx-auto'
            />
          </div>

          <div>
            <div className='mb-8'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                About Us
              </h2>
              <div className='h-1 w-20 bg-primary mb-6'></div>
              <p className='text-gray-600 mb-4'>
                With over 15 years of experience in the automotive industry, we
                provide premium quality auto parts with exceptional customer
                service. Our mission is to make finding the right parts easy and
                affordable.
              </p>

              <p className='text-gray-600 mb-4'>
                We're committed to providing high-quality auto parts that meet
                strict industry standards. Our team of experts ensures every
                product we sell is reliable and durable.
              </p>
              <p className='text-gray-600'>
                From classic cars to the latest models, we have the parts you
                need to keep your vehicle performing at its best.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <div className='text-primary text-3xl font-bold'>15+</div>
                <div className='text-gray-600'>Years Experience</div>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <div className='text-primary text-3xl font-bold'>5000+</div>
                <div className='text-gray-600'>Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
