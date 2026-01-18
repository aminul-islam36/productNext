const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
);

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Navbar Skeleton */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9 rounded-lg" /> {/* Logo Icon */}
          <Skeleton className="h-6 w-28" /> {/* Brand Name */}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-24 rounded-full" /> {/* Button */}
        </div>
      </nav>

      {/* 2. Hero Section Skeleton */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 w-full space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-12 w-full md:w-[90%]" />{" "}
              {/* Heading Line 1 */}
              <Skeleton className="h-12 w-2/3" /> {/* Heading Line 2 */}
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" /> {/* Description 1 */}
              <Skeleton className="h-4 w-5/6" /> {/* Description 2 */}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Skeleton className="h-12 w-40 rounded-lg" /> {/* Primary CTA */}
              <Skeleton className="h-12 w-40 rounded-lg" />{" "}
              {/* Secondary CTA */}
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="flex-1 w-full">
            <Skeleton className="aspect-4/3 w-full rounded-2xl shadow-xl" />
          </div>
        </div>
      </main>

      {/* 3. Features Grid Skeleton */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Features Header */}
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <Skeleton className="h-10 w-64" /> {/* Section Title */}
          <Skeleton className="h-4 w-80" /> {/* Section Subtitle */}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-8 border border-gray-100 rounded-3xl space-y-5 shadow-sm"
            >
              <Skeleton className="h-14 w-14 rounded-2xl" /> {/* Icon */}
              <Skeleton className="h-6 w-3/4" /> {/* Feature Title */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" /> {/* Feature Text */}
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
