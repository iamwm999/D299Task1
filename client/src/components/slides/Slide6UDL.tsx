export default function Slide6UDL() {
  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Universal Design for Learning (UDL)
          </h1>
          <p className="text-lg text-slate-600 mb-4">
            UDL is a framework that helps teachers design flexible learning experiences that remove
            barriers and support all learners.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          {/* UDL Wheel Diagram */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565092341/YzFbQjEYBgLiGrYSmtK9eL/udl-wheel-9kc5vus2Qmv5nrLosdB3kN.webp"
              alt="UDL 3.0 wheel showing three principles: Engagement (Why), Representation (What), and Action & Expression (How)"
              className="w-full"
            />
          </div>

          {/* Principles Explanation */}
          <div className="space-y-6">
            {/* Engagement */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900">Engagement (Why)</h3>
              </div>
              <p className="text-slate-700">
                <strong>Stimulate interest and motivation for learning.</strong>
              </p>
            </div>

            {/* Representation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900">Representation (What)</h3>
              </div>
              <p className="text-slate-700">
                <strong>Present information and content in different ways.</strong>
              </p>
            </div>

            {/* Action & Expression */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900">Action & Expression (How)</h3>
              </div>
              <p className="text-slate-700">
                <strong>Offer options for learners to express what they know.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Key Concept */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-600 p-8 rounded-xl">
          <h3 className="font-bold text-slate-900 mb-3 text-lg">The Core Idea of UDL</h3>
          <p className="text-slate-700 mb-4">
            UDL is NOT about creating separate assessments for different students. Instead, it's
            about building flexibility into the assessment from the start so that all students can
            access and demonstrate their learning.
          </p>
          <p className="text-slate-700 font-semibold text-blue-900">
            
          </p>
        </div>
      </div>
    </div>
  );
}
