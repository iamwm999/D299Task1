import { ExternalLink, Mail, HelpCircle } from "lucide-react";

export default function Slide14Resources() {
  const resources = [
    {
      title: "CAST UDL Guidelines 3.0",
      url: "https://udlguidelines.cast.org/",
      description: "The official UDL Guidelines with detailed information about all three principles",
      icon: "📚",
    },
    {
      title: "Accessible Educational Materials (AEM)",
      url: "https://aem.cast.org/",
      description: "Resources for creating and finding accessible educational materials",
      icon: "♿",
    },
    {
      title: "ISTE Accessibility Resources",
      url: "https://www.iste.org/",
      description: "International Society for Technology in Education - accessibility standards and resources",
      icon: "🌐",
    },
    {
      title: "National Center for Learning Disabilities",
      url: "https://www.ncld.org/",
      description: "Resources for supporting students with learning disabilities",
      icon: "🎓",
    },
    {
      title: "Understood.org",
      url: "https://www.understood.org/",
      description: "Practical strategies and resources for supporting diverse learners",
      icon: "💡",
    },
    {
      title: "WebAIM - Web Accessibility",
      url: "https://webaim.org/",
      description: "Guidelines for creating accessible digital content",
      icon: "🖥️",
    },
  ];

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Additional Resources</h1>
          <p className="text-lg text-slate-600">
            Continue your learning with these valuable resources and organizations:
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border-l-4 border-blue-600 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{resource.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-600 text-sm">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Support Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Technical Support */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Technical Support</h3>
            </div>
            <p className="text-slate-700 mb-4">
              If you encounter technical issues with this module or need assistance:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-slate-700 text-sm">
                <strong>Email:</strong> support@example.com
              </p>
              <p className="text-slate-700 text-sm mt-2">
                <strong>Help Desk:</strong> Available Monday-Friday, 9am-5pm
              </p>
            </div>
          </div>

          {/* Learning Management System */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-slate-900">Your LMS</h3>
            </div>
            <p className="text-slate-700 mb-4">
              For questions about module completion, grades, or course requirements:
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-slate-700 text-sm">
                <strong>Contact:</strong> Your course instructor or LMS help desk
              </p>
              <p className="text-slate-700 text-sm mt-2">
                <strong>Check:</strong> Your course syllabus for support contact information
              </p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-600 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Keep Learning</h3>
          <p className="text-slate-800 mb-4">
            Inclusive assessment design is a growing field with new research and resources emerging
            regularly. Consider:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>• Subscribing to newsletters from CAST or other organizations</li>
            <li>• Joining professional learning communities focused on UDL and inclusive practices</li>
            <li>• Attending workshops or webinars on assessment design</li>
            <li>• Collaborating with colleagues to share strategies and successes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
