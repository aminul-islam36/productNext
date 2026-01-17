import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Product Manager",
      message:
        "ItemHub made product management incredibly simple. The clean UI and fast performance are impressive.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Sarah Smith",
      role: "Frontend Developer",
      message:
        "I loved how easy it was to explore products and view details. The layout is modern and user-friendly.",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Michael Lee",
      role: "Startup Founder",
      message:
        "A well-structured demo project that clearly shows real-world development practices. Great work!",
      avatar: "https://i.pravatar.cc/100?img=8",
    },
  ];

  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold">What People Say About Us</h2>
          <p className="mt-4 text-gray-600">
            Trusted by developers and product enthusiasts for its simplicity and
            performance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-sm hover:shadow-md transition"
            >
              <div className="card-body">
                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-600 italic mb-3">
                  “{item.message.slice(0, 80)} ...”
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <Image
                    width={500}
                    height={500}
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
