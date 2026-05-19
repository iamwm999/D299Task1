import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface Slide8Props {
  slideNumber: number;
  assessmentScores: Record<string, any>;
  setAssessmentScores: (scores: Record<string, any>) => void;
}

export default function Slide8FormativeAssessment2({
  assessmentScores,
  setAssessmentScores,
}: Slide8Props) {
  const [answers, setAnswers] = useState<Record<number, number | null>>({
    1: null,
    2: null,
    3: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which is an example of Multiple Means of Representation?",
      options: [
        "Allowing students to choose between essay or video format",
        "Providing captions on videos and visual supports with text",
        "Giving students extended time to complete the assessment",
        "Creating a flexible deadline for submission",
      ],
      correct: 1,
      explanation:
        "Multiple Means of Representation is about presenting information in different ways (captions, visuals, text, audio). The other options relate to Engagement or Action & Expression.",
    },
    {
      id: 2,
      question: "Which assessment barrier affects accessibility?",
      options: [
        "Using relevant, culturally responsive examples",
        "Allowing only one response format (written test)",
        "Small text size, poor contrast, and no captions",
        "Providing clear, simple instructions",
      ],
      correct: 2,
      explanation:
        "Accessibility barriers include small text, poor contrast, and missing captions. These specifically prevent students with disabilities from accessing content.",
    },
    {
      id: 3,
      question: "Which strategy best supports learner choice (Engagement)?",
      options: [
        "Providing audio descriptions of images",
        "Allowing students to choose assessment format or topic",
        "Extending time limits for all students",
        "Using simple vocabulary in instructions",
      ],
      correct: 1,
      explanation:
        "Engagement includes supporting learner choice and autonomy. Allowing students to choose format or topic directly supports their motivation and engagement.",
    },
  ];

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (!submitted) {
      setAnswers({ ...answers, [questionId]: optionIndex as number });
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correctCount++;
      }
    });
    const score = Math.round((correctCount / questions.length) * 100);
    setAssessmentScores({
      ...assessmentScores,
      formative2: score,
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({ 1: null, 2: null, 3: null });
    setSubmitted(false);
  };

  const allAnswered = Object.values(answers).every((a: any) => a !== null);

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            Formative Assessment #2
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Knowledge Check</h1>
          <p className="text-lg text-slate-600">
            Test your understanding of UDL principles and assessment barriers. Select the best
            answer for each question.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Questions */}
        <div className="space-y-8 mb-8">
          {questions.map((q) => (
            <div key={q.id} className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Question {q.id}: {q.question}
              </h3>

              <div className="space-y-3 mb-6">
                {q.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(q.id, idx)}
                    disabled={submitted}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      answers[q.id] === (idx as any)
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 bg-slate-50 hover:border-blue-300"
                    } ${submitted && idx === q.correct ? "border-green-600 bg-green-50" : ""} ${
                      submitted && answers[q.id] === (idx as any) && idx !== q.correct
                        ? "border-red-600 bg-red-50"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          answers[q.id] === idx
                            ? "border-blue-600 bg-blue-600"
                            : "border-slate-300"
                        } ${submitted && idx === q.correct ? "border-green-600 bg-green-600" : ""} ${
                          submitted && answers[q.id] === idx && idx !== q.correct
                            ? "border-red-600 bg-red-600"
                            : ""
                        }`}
                      >
                        {answers[q.id] === idx && (
                          <span className="text-white text-sm">✓</span>
                        )}
                      </div>
                      <span className="text-slate-700">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {submitted && (
                <div
                  className={`p-4 rounded-lg ${
                    answers[q.id] === q.correct
                      ? "bg-green-50 border-l-4 border-green-600"
                      : "bg-blue-50 border-l-4 border-blue-600"
                  }`}
                >
                  <div className="flex gap-2 mb-2">
                    {answers[q.id] === q.correct ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    )}
                    <p
                      className={`font-semibold ${
                        answers[q.id] === q.correct ? "text-green-900" : "text-blue-900"
                      }`}
                    >
                      {answers[q.id] === q.correct ? "Correct!" : "Here's the explanation:"}
                    </p>
                  </div>
                  <p
                    className={answers[q.id] === q.correct ? "text-green-800" : "text-blue-800"}
                  >
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {!submitted ? (
            <Button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Submit Answers
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

        {/* Summary */}
        {submitted && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-slate-800">
              <span className="font-bold text-blue-900">Great work!</span> You're building a strong
              understanding of UDL principles. In the next slides, you'll apply these concepts to
              real classroom scenarios.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
