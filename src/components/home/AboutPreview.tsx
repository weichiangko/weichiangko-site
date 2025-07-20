import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
      </div>

      {/* Main About Section - New Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Description & Stats Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <p className="text-gray-900 leading-relaxed text-lg mb-8">
            Currently a Sr. UI Engineer at MiTAC with 10+ years of UX/UI design, Web and App Development. also winner of iF Award 2024.
          </p>
          
          {/* Stats Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600 text-lg">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600 text-lg">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Right Column - Current Work & Award Cards */}
        <div className="space-y-8">
          {/* Current Work Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Current Work</h3>
            </div>
            <div>
              <p className="text-gray-900 font-medium mb-2">MiTAC Corporation</p>
              <p className="text-gray-500 text-sm">Jan 2022 – Present</p>
            </div>
          </div>

          {/* Award Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Award</h3>
            </div>
            <div>
              <p className="text-gray-900 font-medium mb-2">Red Dot Award</p>
              <p className="text-gray-500 text-sm">2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* View Full Experience Link */}
      <div className="text-right">
        <Link 
          href="/about"
          className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
        >
          View Full Experience
        </Link>
      </div>
    </section>
  );
}