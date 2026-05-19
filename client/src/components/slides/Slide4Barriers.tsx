import { AlertCircle, Eye, Users, ClipboardList } from "lucide-react";

export default function Slide4Barriers() {
  const barriers = [
    {
      icon: AlertCircle,
      title: "Language Barriers",
      description: "Complex wording or excessive reading load",
      details:
        "Students may struggle to understand what is being asked due to complex vocabulary or unclear instructions, masking their actual knowledge.",
      color: "red",
    },
    {
      icon: Eye,
      title: "Accessibility Barriers",
      description: "Small text, poor contrast, no captions",
      details:
        "Visual or auditory barriers prevent students with disabilities from accessing assessment content, creating unfair disadvantages.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Cultural Bias",
      description: "Examples that exclude learner experiences",
      details:
        "Assessments that only reflect certain cultural perspectives can disadvantage students from different backgrounds and experiences.",
      color: "green",
    },
    {
      icon: ClipboardList,
      title: "Single Response Method",
      description: "Only essays or tests allowed",
      details:
        "When students can only show learning through one format, such as written tests, those with different strengths are disadvantaged.",
      color: "purple",
    },
  ];

  const colorClasses = {
    red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200", header: "bg-red-50" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200", header: "bg-blue-50" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200", header: "bg-green-50" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200", header: "bg-purple-50" },
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Common Assessment Barriers</h1>
          <p className="text-lg text-slate-600">
            Understanding these barriers is the first step toward creating more inclusive assessments.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Barriers Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {barriers.map((barrier, index) => {
            const Icon = barrier.icon;
            const colors = colorClasses[barrier.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 ${colors.border}`}
              >
                {/* Header */}
                <div className={`${colors.header} p-4 flex items-center gap-3`}>
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="font-bold text-slate-900">{barrier.title}</h3>
                </div>

                {/* Content */}
                <div className="bg-white p-6">
                  <p className={`font-semibold ${colors.text} mb-3`}>{barrier.description}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{barrier.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 rounded-lg">
          <p className="text-slate-800">
            <span className="font-bold text-orange-900">Remember:</span> Barriers are about
            assessment and design, not student ability. By removing these barriers, we create
            fairer, more accurate measures of what students actually know and can do.
          </p>
        </div>
      </div>
    </div>
  );
}
