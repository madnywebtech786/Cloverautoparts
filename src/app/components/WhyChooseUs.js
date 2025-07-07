// app/components/WhyChooseUs.jsx
export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality Parts",
      description: "All parts are fully inspected to ensure top reliability.",
      icon: "🔧",
    },
    {
      title: "Extensive Inventory",
      description:
        "A vast selection of both common and hard‑to‑find components.",
      icon: "📦",
    },
    {
      title: "Expert Support Team",
      description: "Our specialists guide you in choosing the perfect part.",
      icon: "📞",
    },
    {
      title: "Price‑Match Guarantee",
      description: "We’ll match any lower advertised price no questions asked.",
      icon: "💰",
    },
  ];

  return (
    <section
      id="services"
      className="p-4 md:p-8 lg:p-12 2xl:p-16 bg-gradient-to-r from-red-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            We stand out from the competition with our commitment to quality,
            service, and value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-primary text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
