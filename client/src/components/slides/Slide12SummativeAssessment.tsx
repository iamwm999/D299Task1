import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Mic, Image } from "lucide-react";

interface Slide12Props {
  slideNumber: number;
  assessmentScores: Record<string, any>;
  setAssessmentScores: (scores: Record<string, any>) => void;
}

export default function Slide12SummativeAssessment({
  assessmentScores,
  setAssessmentScores,
}: Slide12Props) {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submissionFormats = [
    {
      id: "written",
      icon: FileText,
      title: "Written Response",
      description: "Type your redesigned assessment and explanation",
      placeholder:
        "Describe the original assessment, identify barriers, explain how you'll apply at least 3 inclusive strategies, and how UDL principles are addressed...",
    },
    {
      id: "audio",
      icon: Mic,
      title: "Audio Recording",
      description: "Record your thoughts",
      placeholder: "You can record audio using your device's voice recorder and describe your redesign...",
    },
    {
      id: "visual",
      icon: Image,
      title: "Visual Plan",
      description: "Create a visual representation or outline",
      placeholder:
        "Describe a visual plan, infographic, or diagram showing your redesigned assessment...",
    },
  ];

  const handleSubmit = () => {
    if (selectedFormat && response.trim().length > 50) {
      const score = 100; // Summative assessment is marked complete
      setAssessmentScores({
        ...assessmentScores,
        summative: score,
      });
      setSubmitted(true);
    }
  };

  const canSubmit = selectedFormat && response.trim().length > 50;

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            Summative Assessment
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Redesign an Assessment</h1>
          <p className="text-lg text-slate-600">
            Apply everything you've learned to redesign a real classroom assessment.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Task Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Task</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Redesign a traditional classroom assessment using at least 3 inclusive assessment strategies learned in this module.</h4>
              <p className="text-slate-700 mb-4">
                You can use the 7th-grade history assessment from the case study, or choose a
                different assessment from your own teaching experience.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-4">Your redesign should:</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Identify barriers</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Apply UDL principles</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>
                    <strong>Provide flexible supports</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold"></span>
                  <span>
                    <strong>Maintain rigor:</strong> How will your redesigned assessment still
                    measure the same learning objectives?
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submission Format Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            How would you like to submit? (Choose one)
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {submissionFormats.map((format) => {
              const Icon = format.icon;
              return (
                <button
                  key={format.id}
                  onClick={() => {
                    setSelectedFormat(format.id);
                    setResponse("");
                  }}
                  disabled={submitted}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    selectedFormat === format.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  } ${submitted ? "opacity-50" : ""}`}
                >
                  <Icon className="w-8 h-8 mb-2 text-slate-700" />
                  <h4 className="font-bold text-slate-900">{format.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{format.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Response Input */}
        {selectedFormat && !submitted && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {submissionFormats.find((f) => f.id === selectedFormat)?.title}
            </h3>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder={
                submissionFormats.find((f) => f.id === selectedFormat)?.placeholder
              }
              className="w-full h-48 p-4 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none resize-none"
            />
            <p className="text-sm text-slate-600 mt-2">
              Minimum 50 characters required. {response.length} characters entered.
            </p>
          </div>
        )}

        {/* Submit Button */}
        {!submitted && (
          <div className="mb-8">
            <Button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Submit Assessment
            </Button>
          </div>
        )}

        {/* Completion Message */}
        {submitted && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-purple-50 border-l-4 border-green-600 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <h4 className="font-bold text-slate-900 text-xl">Congratulations!</h4>
              </div>
              <p className="text-slate-800 mb-4">
                You've completed the summative assessment! Your redesigned assessment demonstrates
                your understanding of inclusive assessment design and UDL principles.
              </p>
              <p className="text-slate-700">
                <strong>What you've accomplished:</strong> You've identified barriers, applied UDL
                principles, and created a more equitable assessment that supports diverse learners
                while maintaining academic rigor.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600">
              <h4 className="font-bold text-slate-900 mb-4">Next Steps in Your Practice</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <span>
                    <strong>Implement one strategy:</strong> Start with the redesign you just
                    created in your next assessment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <span>
                    <strong>Gather feedback:</strong> Ask students how the changes affected their
                    experience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <span>
                    <strong>Reflect and refine:</strong> Adjust based on what you learn from your
                    students.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <span>
                    <strong>Share with colleagues:</strong> Collaborate and build a culture of
                    inclusive assessment.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
