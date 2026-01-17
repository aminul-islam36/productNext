import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-primary">ItemHub</span>
            </h2>

            <p className="text-gray-600 mb-4">
              ItemHub is a modern product listing and management platform built
              to demonstrate clean architecture, responsive UI, and real-world
              web development practices using Next.js and Express.js.
            </p>

            <p className="text-gray-600 mb-6">
              This project focuses on simplicity, performance, and usability —
              allowing users to explore products, view detailed information, and
              securely add new items through protected routes.
            </p>

            <button className="btn btn-primary">Learn More</button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="About ItemHub"
              className="rounded-xl shadow-lg max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
