import { FaSearch, FaInfoCircle, FaCartPlus } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-primary" />,
      title: "Explore Products",
      description:
        "Browse a wide range of products on ProductNest with ease and clarity.",
    },
    {
      icon: <FaInfoCircle className="text-4xl text-primary" />,
      title: "View Details",
      description:
        "Click on any product to view detailed information, including price, description, and images.",
    },
    {
      icon: <FaCartPlus className="text-4xl text-primary" />,
      title: "Add & Manage",
      description:
        "Authenticated users can add new products and manage existing ones seamlessly.",
    },
  ];

  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            How <span className="text-primary">ProductNest</span> Works
          </h2>
          <p className="mt-4 text-gray-600">
            Simple steps to explore, view, and manage products effortlessly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body items-center text-center">
                {step.icon}
                <h3 className="card-title mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
