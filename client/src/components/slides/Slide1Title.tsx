export default function Slide1Title() {
  return (
    <div className="min-h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>

      {/* Hero Image Background */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663565092341/YzFbQjEYBgLiGrYSmtK9eL/hero-classroom-55RdjakfkXV3uQ22xQTG5J.webp')",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-3xl">
          {/* Icon */}
          <div className="mb-8 inline-block">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z"
                />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Inclusive Assessment Design in K–12 Classrooms
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
            Creating equitable and accessible assessments for diverse learners
          </p>

          {/* Course Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-base">

            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <p className="text-blue-100 text-sm">Duration</p>
              <p className="text-white font-semibold">20-30 Minutes</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12">
            <p className="text-blue-100 text-sm mb-3"></p>
            <p className="text-white text-lg font-semibold">Click "Begin" to start the module →</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
    </div>
  );
}
