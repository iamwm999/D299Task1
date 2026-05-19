import { Users, Eye, Zap } from "lucide-react";

export default function Slide7ApplyingUDL() {
  const principles = [
    {
      icon: Users,
      title: "Engagement",
      subtitle: "Why - Motivate Learners",
      color: "orange",
      strategies: [
        "Offer student choice in topics or formats",
        "Connect to relevant, real-world contexts",
        "Provide meaningful feedback",
        "Celebrate diverse perspectives",
        "Build community and belonging",
      ],
    },
    {
      icon: Eye,
      title: "Representation",
      subtitle: "What - Present Information",
      color: "blue",
      strategies: [
        "Provide visuals and diagrams",
        "Include audio supports and captions",
        "Offer text in multiple formats",
        "Use clear, simple language",
        "Highlight key concepts",
      ],
    },
    {
      icon: Zap,
      title: "Action & Expression",
      subtitle: "How - Show Learning",
      color: "green",
      strategies: [
        "Allow written, oral, or visual responses",
        "Permit video, audio, or presentation formats",
        "Offer flexible timelines",
        "Provide tools and supports",
        "Enable collaboration options",
      ],
    },
  ];

  const colorClasses = {
    orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Applying UDL to Assessment Design</h1>
          <p className="text-lg text-slate-600">
            Here's how to use each UDL principle to create more inclusive assessments:
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            const colors = colorClasses[principle.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`rounded-xl shadow-lg overflow-hidden border-2 ${colors.border} hover:shadow-xl transition-shadow`}
              >
                {/* Header */}
                <div className={`${colors.bg} p-6 text-center`}>
                  <div className={`w-14 h-14 rounded-lg ${colors.bg} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{principle.title}</h2>
                  <p className={`text-sm font-semibold ${colors.text} mt-1`}>{principle.subtitle}</p>
                </div>

                {/* Content */}
                <div className="bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Assessment Strategies:</h3>
                  <ul className="space-y-3">
                    {principle.strategies.map((strategy, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0 text-xs font-bold ${colors.text}`}>
                          ✓
                        </span>
                        <span className="text-slate-700 text-sm">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <p className="text-slate-800">
            <span className="font-bold text-blue-900">Remember:</span> These UDL strategies are
            smart assessment design that benefits all learners. When you build flexibility in from
            the start, you reduce the need for last-minute modifications.
          </p>
        </div>
      </div>
    </div>
  );
}
