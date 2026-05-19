import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface Slide5Props {
  slideNumber: number;
  assessmentScores: Record<string, any>;
  setAssessmentScores: (scores: Record<string, any>) => void;
}

export default function Slide5FormativeAssessment1({
  assessmentScores,
  setAssessmentScores,
}: Slide5Props) {
  const [selectedBarriers, setSelectedBarriers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const possibleBarriers = [
    {
      id: "language",
      label: "Language Barrier - Complex vocabulary and dense text",
      correct: true,
    },
    {
      id: "accessibility",
      label: "Accessibility Barrier - Tiny text size, no visual supports",
      correct: true,
    },
    {
      id: "timing",
      label: "Single Response Method - Timed test only, no alternative formats",
      correct: true,
    },
    {
      id: "cultural",
      label: "Cultural Bias - Examples assume specific background knowledge",
      correct: true,
    },
  ];

  const handleToggle = (id: string) => {
    if (selectedBarriers.includes(id)) {
      setSelectedBarriers(selectedBarriers.filter((b) => b !== id));
    } else {
      setSelectedBarriers([...selectedBarriers, id]);
    }
  };

  const handleSubmit = () => {
    const correctCount = selectedBarriers.filter((id) =>
      possibleBarriers.find((b) => b.id === id && b.correct)
    ).length;
    const score = correctCount >= 2 ? 100 : Math.round((correctCount / 2) * 100);
    setAssessmentScores({
      ...assessmentScores,
      formative1: score,
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedBarriers([]);
    setSubmitted(false);
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            Formative Assessment #1
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Spot the Barrier</h1>
          <p className="text-lg text-slate-600">
            Review the example assessment below and identify at least 2 barriers that may impact
            student success.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Sample Assessment Image */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-red-200">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Sample Assessment (Poorly Designed)
          </h3>
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="text-xs text-slate-600 mb-4 font-mono">
              Unit 4 Summative Assessment | Time Allowed: 60 Minutes
            </div>
            <div className="text-xs text-slate-700 leading-relaxed mb-6 space-y-2">
              <p>
                Read the following instructions carefully before you begin. Instructions: 1. Do not
                open this assessment until you are told to do so. 2. Read each question carefully
                and completely before answering. 3. Answer all questions in the spaces provided. 4.
                Use a black or blue pen only. Do not use pencil. 5. Do not talk or communicate with
                others during the test. 6. If you finish early, review your answers until time is
                called. 7. You must complete the assessment in the time allowed. No extra time will
                be given. 8. Any academic dishonesty will result in a grade of zero.
              </p>
              <p className="font-semibold mt-4">Questions:</p>
              <p>
                1. Explain the causes and effects of the Industrial Revolution. Use specific
                examples to support your answer.
              </p>
              <p>
                2. Read the following quote and answer the questions that follow: "The only limit
                to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt a.
                What is the meaning of the quote? (5 points) b. Do you agree or disagree? Why? (5
                points)
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4 italic">
            Note: This is a representation of a poorly designed assessment with multiple barriers.
          </p>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="font-bold text-slate-900 mb-6">Which barriers do you identify?</h3>
          <div className="space-y-3 mb-8">
            {possibleBarriers.map((barrier) => (
              <label
                key={barrier.id}
                className="flex items-start gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedBarriers.includes(barrier.id)}
                  onChange={() => handleToggle(barrier.id)}
                  className="w-5 h-5 mt-1 cursor-pointer"
                  disabled={submitted}
                />
                <span className="text-slate-700">{barrier.label}</span>
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {!submitted ? (
              <Button
                onClick={handleSubmit}
                disabled={selectedBarriers.length === 0}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Submit Answer
              </Button>
            ) : (
              <>
                <Button onClick={handleReset} variant="outline">
                  Try Again
                </Button>
                <Button disabled className="bg-green-600">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Completed
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Feedback */}
        {submitted && (
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Possible Barriers Include:</h4>
            <ul className="space-y-2 text-green-800">
              <li>
                <strong>Language Barrier:</strong> Complex instructions and vocabulary make it
                difficult for all students to understand what is expected.
              </li>
              <li>
                <strong>Accessibility Barrier:</strong> Tiny text size, no visual supports, and no
                captions make this inaccessible to students with visual disabilities.
              </li>
              <li>
                <strong>Single Response Method:</strong> Only written essay format is allowed—no
                alternatives for students who struggle with writing.
              </li>
              <li>
                <strong>Timing Barrier:</strong> Strict time limits don't account for students who
                need more processing time or have anxiety.
              </li>
            </ul>
            <p className="text-green-700 mt-4 text-sm">
              Great job identifying these barriers! In the next slides, you'll learn how to redesign
              this assessment to be more inclusive.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
