import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export default function Slide10CaseStudy() {
  const [showIdeas, setShowIdeas] = useState(false);

  const redesignIdeas = [
    {
      title: "Multiple Response Formats",
      description:
        "Instead of only essays, allow students to submit: written essay, video explanation, podcast, infographic, or presentation.",
    },
    {
      title: "Flexible Timing",
      description:
        "Provide extended time options, allow students to work over multiple days with check-in points, or offer asynchronous submission.",
    },
    {
      title: "Visual & Text Supports",
      description:
        "Include images, diagrams, or reference materials. Provide clear, simple instructions with visual guides.",
    },
    {
      title: "Scaffolding & Supports",
      description:
        "Offer sentence starters, outline templates, word banks, or access to speech-to-text tools.",
    },
    {
      title: "Choice & Autonomy",
      description:
        "Let students choose their topic, format, and support level. This increases engagement and motivation.",
    },
    {
      title: "Meaningful Feedback",
      description:
        "Provide specific, constructive feedback focused on learning, not just grades. Offer opportunities for revision.",
    },
  ];

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Classroom Scenario</h1>
          <p className="text-lg text-slate-600">
            Apply what you've learned to this real-world situation.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Scenario */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-orange-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Scenario</h2>
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
            <p className="text-slate-800 leading-relaxed">
              <strong>Ms. Chen is a 7th-grade social studies teacher.</strong> She wants to assess
              her students' understanding of the Industrial Revolution. She creates a timed written
              essay assessment with the following characteristics:
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 ml-4">
              <li>• <strong>Format:</strong> Written essay only (no alternatives)</li>
              <li>• <strong>Timing:</strong> 60-minute timed test in class</li>
              <li>• <strong>Instructions:</strong> Complex, multi-step directions with advanced vocabulary</li>
              <li>• <strong>Accommodations:</strong> No visual supports, no captions, no access to tools</li>
              <li>• <strong>Deadline:</strong> All students must complete on the same day</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-slate-800 font-semibold mb-3">
              <strong>The Problem:</strong> Several students struggle with this assessment:
            </p>
            <ul className="space-y-2 text-slate-700 ml-4">
              <li>• <strong>Student 1</strong> has ADHD and struggles with timed tests</li>
              <li>• <strong>Student 2</strong> is an English Language Learner and finds complex vocabulary confusing</li>
              <li>• <strong>Student 3</strong> is a strong visual learner but struggles with writing</li>
              <li>• <strong>Student 4</strong> has anxiety about performance and needs more processing time</li>
            </ul>
          </div>
        </div>

        {/* Reflection Prompt */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-blue-600">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Your Task</h3>
          <p className="text-slate-700 mb-6">
            How could Ms. Chen redesign this assessment to be more inclusive? Think about:
          </p>
          <ul className="space-y-2 text-slate-700 ml-4 mb-6">
            <li>• What barriers exist in the current assessment?</li>
            <li>• How could she apply UDL principles?</li>
            <li>• What specific changes would help each student?</li>
            <li>• How could she still measure understanding fairly?</li>
          </ul>

          <textarea
            placeholder="Write your thoughts here ..."
            className="w-full h-32 p-4 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none resize-none"
          />
        </div>

        {/* Show Ideas Button */}
        <div className="mb-8">
          <Button
            onClick={() => setShowIdeas(!showIdeas)}
            variant="outline"
            className="gap-2"
          >
            <Lightbulb className="w-4 h-4" />
            {showIdeas ? "Hide" : "Show"} Redesign Ideas
          </Button>
        </div>

        {/* Redesign Ideas */}
        {showIdeas && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Possible Redesign Strategies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {redesignIdeas.map((idea, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                      ✓
                    </span>
                    {idea.title}
                  </h4>
                  <p className="text-slate-700 text-sm">{idea.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-slate-800">
                <strong className="text-green-900">The Result:</strong> With these changes, Ms. Chen
                can still assess the same learning objectives (understanding of the Industrial
                Revolution), but now all students have fair opportunities to demonstrate their
                knowledge. Marco gets the time he needs, Priya has clearer language and visual
                supports, David can create a video or infographic, and Aisha can work at her own
                pace.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
