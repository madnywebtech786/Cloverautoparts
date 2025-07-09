// app/components/Testimonials.jsx
export default function Testimonials({page=false}) {
  const testimonials = [
    {
      quote:
        "The quality of their parts is unmatched. I've been buying from them for years and never had any issues.",
      author: "Sarah Johnson",
      role: "Car Enthusiast",
    },
    {
      quote:
        "Excellent customer service and fast shipping. They helped me find the perfect parts for my classic car.",
      author: "Michael Chen",
      role: "Classic Car Owner",
    },
    {
      quote:
        "Competitive prices and great selection. I always recommend them to my friends for their automotive needs.",
      author: "Emily Rodriguez",
      role: "DIY Mechanic",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`p-4 md:p-8 lg:p-12 2xl:p-16 ${
        page ? "bg-white" : "bg-gradient-to-r from-red-50 to-white"
      } `}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Testimonials
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow transition-shadow"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                {["★", "★", "★", "★", "★"].map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="font-bold text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-primary">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
