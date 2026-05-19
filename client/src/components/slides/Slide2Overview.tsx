import { CheckCircle2, Clock, Package } from "lucide-react";

export default function Slide2Overview() {
  const objectives = [
    "Identify barriers to assessment accessibility and fairness",
    "Apply UDL principles to assessment design",
    "Modify assessments to support diverse learner needs",
  ];

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome to the Module</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Learning Objectives */}
          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-slate-900">Learning Objectives</h2>
            </div>
            <p className="text-slate-600 mb-6 font-medium">
              By the end of this module, you will be able to:
            </p>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-semibold flex-shrink-0 text-sm">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 pt-0.5">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Info Cards */}
          <div className="space-y-4">
            {/* Duration */}
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Estimated Completion Time</h3>
                  <p className="text-slate-600">20–30 minutes</p>
                </div>
              </div>
            </div>

            {/* Materials */}
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-orange-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Materials Needed</h3>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• Device with internet access</li>
                    <li>• Notebook or digital notes (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <p className="text-slate-700">
            <span className="font-semibold text-blue-900">Accessibility Note:</span> This module
            includes captions on all videos, alt text on images, and clear navigation. You can
            navigate using arrow keys on your keyboard or the buttons at the bottom of each slide.
          </p>
        </div>
      </div>
    </div>
  );
}
