import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-16">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
      </div>

      {/* Main Grid - 2x2 Layout - EXACT SAME AS ABOUT PAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Academic Education */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Academic Education</h3>
          </div>
          <ul className="space-y-6">
            <li>
              <p className="text-gray-900 font-medium mb-2">
                University of the Arts London - London College of Communication - 
                Master of Arts (MA) in User Experience Design
              </p>
              <p className="text-gray-500 text-sm">2020 - 2022</p>
            </li>
          </ul>
        </div>

        {/* Non-Formal Education */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Non-Formal Education</h3>
          </div>
          <ul className="space-y-6">
            <li>
              <p className="text-gray-900 font-medium mb-2">
                Nielsen Norman Group [NNG] - UX Certification Program
              </p>
              <p className="text-gray-500 text-sm">March - June 2023</p>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
          </div>
          <ul className="space-y-6">
            <li>
              <p className="text-gray-900 font-medium mb-2">Google - UX Designer</p>
              <p className="text-gray-500 text-sm">January 2022 - Present</p>
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
          </div>
          <ul className="space-y-6">
            <li>
              <p className="text-gray-900 font-medium mb-2">
                Adobe - Web Designer
              </p>
              <p className="text-gray-500 text-sm">June 2019 - December 2021</p>
            </li>
          </ul>
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