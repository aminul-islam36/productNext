import { FaBoxOpen, FaLock, FaBolt, FaMobileAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBoxOpen className="text-4xl text-primary" />,
      title: "Product Listing",
      description:
        "Browse a clean and organized list of products with essential details at a glance.",
    },
    {
      icon: <FaBolt className="text-4xl text-primary" />,
      title: "Fast Performance",
      description:
        "Built with Next.js for lightning-fast page loads and smooth navigation.",
    },
    {
      icon: <FaLock className="text-4xl text-primary" />,
      title: "Secure Access",
      description:
        "Protected routes ensure only authenticated users can add new products.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-primary" />,
      title: "Fully Responsive",
      description:
        "Optimized for all devices including mobile, tablet, and desktop.",
    },
  ];

  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold">
            Powerful Features to Simplify Workflow
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to manage, explore, and organize products
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body items-center text-center">
                {feature.icon}
                <h3 className="card-title mt-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
