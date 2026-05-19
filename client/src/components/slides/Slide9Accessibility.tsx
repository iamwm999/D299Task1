import { CheckCircle2, AlertCircle } from "lucide-react";

export default function Slide9Accessibility() {
  const practices = [
    {

      title: "Readable Fonts",
      description: "Use sans-serif fonts (Arial, Verdana, Aptos) at 12pt or larger for easy reading",
    },
    {

      title: "High Color Contrast",
      description: "Ensure text contrasts with background (dark text on light, or vice versa)",
    },
    {

      title: "Captions & Transcripts",
      description: "Provide captions for videos and transcripts for audio content",
    },
    {

      title: "Alt Text",
      description: "Describe all images with clear, concise alternative text",
    },
    {

      title: "Chunked Information",
      description: "Break content into small, manageable sections with clear headings",
    },
    {

      title: "Flexible Formats",
      description: "Offer assessments in multiple formats (text, audio, visual, interactive)",
    },
  ];

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Accessibility Best Practices</h1>
          <p className="text-lg text-slate-600">
            Accessible assessments support all learners and ensure fair measurement of knowledge.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Practices Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-600"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{practice.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{practice.title}</h3>
                  <p className="text-slate-600 text-sm">{practice.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Checklist */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-l-4 border-green-600">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Accessibility Quick Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Font size is 12pt or larger</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Text has high contrast with background</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">All images have descriptive alt text</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Videos include captions and transcripts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Instructions are clear and simple</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Multiple response formats are available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-slate-800">
                <span className="font-bold text-blue-900">Important:</span> When you build
                accessible assessments from the start, you create better experiences for all
                learners and not just those with various challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
