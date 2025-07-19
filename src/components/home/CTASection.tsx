import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12">
      <div className="bg-white rounded-xl py-24 px-12 shadow-sm text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Do you have any project idea you<br />
          want to discuss about?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}