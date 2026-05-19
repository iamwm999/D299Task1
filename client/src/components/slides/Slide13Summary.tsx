import { CheckCircle2, Target, Zap } from "lucide-react";

export default function Slide13Summary() {
  const keyTakeaways = [
    {
      icon: Target,
      title: "Inclusive assessments improve equity",
      description: "They create fair opportunities for all students to demonstrate their knowledge",
    },
    {
      icon: Zap,
      title: "Inclusive assessments reduce barriers",
      description: "They remove obstacles that prevent students from showing what they know",
    },
    {
      icon: CheckCircle2,
      title: "Inclusive assessments support diverse learners",
      description: "They honor different learning styles, abilities, and backgrounds",
    },
  ];

  const designPrinciples = [
    "Accessibility - Remove barriers to access and participation",
    "Flexibility - Offer multiple ways to engage, learn, and demonstrate knowledge",
    "Multiple ways to demonstrate learning - Allow students to show what they know in different formats",
  ];

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Key Takeaways</h1>
          <p className="text-lg text-slate-600">
            Here's what you've learned about inclusive assessment design:
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Main Takeaways */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {keyTakeaways.map((takeaway, index) => {
            const Icon = takeaway.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{takeaway.title}</h3>
                <p className="text-slate-600">{takeaway.description}</p>
              </div>
            );
          })}
        </div>

        {/* Design Principles */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Effective Inclusive Design Includes:</h2>
          <div className="space-y-4">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 font-bold text-green-600">
                  {index + 1}
                </div>
                <p className="text-slate-700 pt-1">{principle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Module Completion */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-slate-900">You've Completed the Module!</h3>
          </div>
          <p className="text-slate-700 mb-4">
            You've learned about assessment barriers, UDL principles, accessibility best practices,
            and how to redesign assessments for inclusion. You've also completed three formative
            assessments and one summative assessment.
          </p>

        </div>
      </div>
    </div>
  );
}
