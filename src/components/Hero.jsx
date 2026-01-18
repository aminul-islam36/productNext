import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className="hero min-h-[70vh] max-w-7xl mx-auto px-6">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center gap-10">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co.com/KchSZBdB/photo-1522202176988-66273c2fd55f.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Manage & Explore Products <br />
              <span className="text-primary">Effortlessly with ItemHub</span>
            </h1>

            <p className="py-6 text-gray-600 max-w-xl">
              ItemHub is a simple and powerful platform to explore products,
              view detailed information, and manage items seamlessly — all in
              one place.
            </p>

            <div className="flex gap-4">
              <Link href="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
