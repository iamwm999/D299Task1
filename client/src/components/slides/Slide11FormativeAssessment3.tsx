import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface Slide11Props {
  slideNumber: number;
  assessmentScores: Record<string, any>;
  setAssessmentScores: (scores: Record<string, any>) => void;
}

export default function Slide11FormativeAssessment3({
  assessmentScores,
  setAssessmentScores,
}: Slide11Props) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const practices = [
    {
      id: "flexible",
      title: "Flexible Response Options",
      description: "Students can demonstrate learning through multiple formats (written, oral, visual, etc.)",
    },
    {
      id: "visual",
      title: "Visual Supports",
      description: "Assessments include images, diagrams, icons, and other visual aids",
    },
    {
      id: "captions",
      title: "Captions & Transcripts",
      description: "All videos have captions and audio content has transcripts",
    },
    {
      id: "instructions",
      title: "Clear Instructions",
      description: "Directions are simple, concise, and easy to understand",
    },
    {
      id: "choice",
      title: "Student Choice",
      description: "Students have some control over topic, format, or timeline",
    },
    {
      id: "timing",
      title: "Flexible Timing",
      description: "Extended time, flexible deadlines, or asynchronous options available",
    },
    {
      id: "accessibility",
      title: "Accessibility Features",
      description: "High contrast, readable fonts, alt text, and assistive technology support",
    },
    {
      id: "feedback",
      title: "Meaningful Feedback",
      description: "Students receive specific, constructive feedback focused on learning",
    },
  ];

  const handleToggle = (id: string) => {
    setCheckedItems({
      ...checkedItems,
      [id]: !checkedItems[id],
    });
  };

  const handleSubmit = () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const score = Math.round((checkedCount / practices.length) * 100);
    setAssessmentScores({
      ...assessmentScores,
      formative3: score,
    });
    setSubmitted(true);
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            Formative Assessment #3
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Inclusive Assessment Checklist</h1>
          <p className="text-lg text-slate-600">
            Review the checklist below and identify which inclusive practices you already use and
            which you would like to implement.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Which practices do you use or plan to implement?
          </h3>
          <div className="space-y-4">
            {practices.map((practice) => (
              <label
                key={practice.id}
                className="flex items-start gap-4 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={checkedItems[practice.id] || false}
                  onChange={() => handleToggle(practice.id)}
                  className="w-6 h-6 mt-1 cursor-pointer"
                  disabled={submitted}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">{practice.title}</h4>
                  <p className="text-slate-600 text-sm mt-1">{practice.description}</p>
                </div>
              </label>
            ))}
          </div>

          {/* Counter */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-slate-700">
              <span className="font-bold text-blue-900">Practices selected:</span> {checkedCount} of{" "}
              {practices.length}
            </p>
          </div>

          {/* Submit Button */}
          {!submitted && (
            <div className="mt-8">
              <Button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Complete Reflection
              </Button>
            </div>
          )}
        </div>

        {/* Feedback */}
        {submitted && (
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-600 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-slate-900 text-lg">Reflection Complete!</h4>
              </div>
              <p className="text-slate-800 mb-4">
                You've identified {checkedCount} inclusive assessment practices. This is a great
                starting point for your journey toward more equitable assessments.
              </p>
              <p className="text-slate-700">
                <strong>Next steps:</strong> For practices you haven't implemented yet, consider
                starting with one or two. Small changes can have a big impact on student success.
              </p>
            </div>

            {/* Encouragement */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-600">
              <h4 className="font-bold text-slate-900 mb-3">Remember:</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-2xl">🎯</span>
                  <span>
                    <strong>Start small:</strong> You don't need to implement everything at once.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📈</span>
                  <span>
                    <strong>Build gradually:</strong> Add one or two practices each term.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🤝</span>
                  <span>
                    <strong>Collaborate:</strong> Share ideas with colleagues and learn from each
                    other.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">✨</span>
                  <span>
                    <strong>Celebrate progress:</strong> Every step toward inclusion matters!
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
