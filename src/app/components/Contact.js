// app/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="p-4 md:p-8 lg:p-12 2xl:p-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or need help finding the right parts? Reach out to our team today.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-primary text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="md:w-1/2 bg-primary p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-red-100">123 Auto Parts Drive, Detroit, MI 48201</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-red-100">(313) 555-0198</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Hours</h4>
                    <p className="text-red-100">Mon-Fri: 9am-6pm</p>
                    <p className="text-red-100">Sat: 10am-4pm</p>
                    <p className="text-red-100">Sun: Closed</p>
                  </div>
                  
                  <div className="mt-8">
                    <iframe 
                      src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.811437344711!2d-83.04566238539315!3d42.33142707918747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c55555555555%3A0x5555555555555555!2s123%20Auto%20Parts%20Dr%2C%20Detroit%2C%20MI%2048201%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                      width="100%" 
                      height="200" 
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="rounded"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}