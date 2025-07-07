// app/components/Promotions.jsx
export default function Promotions() {
  return (
    <section className="p-4 md:p-8 lg:p-12 2xl:p-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Offers</h2>
          <p className="text-red-100 mb-12 max-w-2xl mx-auto">
            Take advantage of our current promotions and save on your next auto parts purchase.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Summer Sale</h3>
              <p className="text-red-100 mb-6">
                Save up to 30% on all cooling system components during our summer sale event.
              </p>
              <button className="bg-white text-primary px-6 py-2 rounded-full hover:bg-red-50 transition-colors">
                Shop Sale
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Free Shipping</h3>
              <p className="text-red-100 mb-6">
                Enjoy free standard shipping on all orders over $99 across the continental US.
              </p>
              <button className="bg-white text-primary px-6 py-2 rounded-full hover:bg-red-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}