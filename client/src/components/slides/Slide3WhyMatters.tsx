import { TrendingUp, Users, Accessibility, BookOpen } from "lucide-react";

export default function Slide3WhyMatters() {
  const benefits = [
    {
      icon: Accessibility,
      title: "Improves Accessibility",
      description: "Removes barriers that prevent students from demonstrating their knowledge",
      color: "blue",
    },
    {
      icon: Users,
      title: "Supports Equity",
      description: "Ensures all students have fair opportunities to succeed",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Increases Engagement",
      description: "Students feel valued and motivated when assessments honor their strengths",
      color: "orange",
    },
    {
      icon: BookOpen,
      title: "Multiple Ways to Show Learning",
      description: "Students can demonstrate knowledge through their preferred modality",
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Why Inclusive Assessment Matters</h1>
          <p className="text-lg text-slate-600 font-medium">
            Traditional assessments may unintentionally create barriers for students.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClass = colorClasses[benefit.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-slate-200 hover:border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${colorClass} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Learn More: UDL in Action</h2>
            <p className="text-blue-100">Watch this short video to see inclusive assessment in practice</p>
          </div>
          <div className="p-8">
            <div className="relative bg-slate-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gmGgplQkrVw?cc_load_policy=1"
                title="Universal Design for Learning: UDL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
            <p className="text-sm text-slate-600 mt-4">
              <strong>Video includes captions.</strong> This video introduces UDL principles and how
              they support all learners in the classroom.
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <p className="text-slate-800 text-lg">
            <span className="font-bold text-blue-900">Key Insight:</span> When we design assessments
            with accessibility and flexibility in mind from the start, we create better learning
            experiences for everyone and not just students with disabilities.
          </p>
        </div>
      </div>
    </div>
  );
}
