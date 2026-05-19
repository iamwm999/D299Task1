export default function Slide15References() {
  const references = [
    {
      citation:
        "CAST. (2024). Universal Design for Learning Guidelines version 3.0. Retrieved from https://udlguidelines.cast.org/",
      note: "The official UDL 3.0 Guidelines released in July 2024",
    },
    {
      citation:
        "Meyer, A., Rose, D. H., & Gordon, D. (2014). Universal design for learning: Theory and practice. CAST, Inc.",
      note: "Foundational text on UDL theory and practical applications",
    },
    {
      citation:
        "Rose, D. H., & Gravel, J. W. (2010). Universal Design for Learning. Journal of Special Education Technology, 25(2), 63-68.",
      note: "Research on UDL implementation in schools",
    },
    {
      citation:
        "Tomlinson, C. A., & Moon, T. R. (2013). Assessment and student success in a differentiated classroom. ASCD.",
      note: "Practical strategies for differentiated assessment",
    },
    {
      citation:
        "Wiggins, G., & McTighe, J. (2005). Understanding by design (2nd ed.). ASCD.",
      note: "Framework for designing assessments aligned with learning objectives",
    },
    {
      citation:
        "Orkwis, R., & McLane, K. (1998). A curriculum every student can use: Design principles for student access. ERIC Clearinghouse on Disabilities and Gifted Education.",
      note: "Early work on universal design principles in education",
    },
    {
      citation:
        "National Center for Learning Disabilities. (2023). The state of learning disabilities: Understanding the 1 in 5. Retrieved from https://www.ncld.org/",
      note: "Statistics and resources on learning disabilities",
    },
    {
      citation:
        "American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). Standards for educational and psychological testing. AERA.",
      note: "Professional standards for assessment design and validation",
    },
  ];

  return (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">References</h1>
          <p className="text-lg text-slate-600">
            Academic sources and resources used in this module (APA Format):
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-4"></div>
        </div>

        {/* References List */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {references.map((ref, index) => (
              <div key={index} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                <p className="text-slate-800 leading-relaxed mb-2 italic font-serif">
                  {ref.citation}
                </p>
                <p className="text-slate-600 text-sm">
                  <strong>Note:</strong> {ref.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Citation Information */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-slate-900 mb-2">How to Cite This Module</h3>
          <p className="text-slate-700 text-sm mb-4">
            If you use this module in your work or teaching, please cite it as:
          </p>
          <div className="bg-white p-4 rounded border border-blue-200 font-mono text-sm text-slate-700">
            [Your Name]. (2026). Inclusive Assessment Design in K-12 Classrooms. Course D299.
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Additional Learning Resources</h3>
          <p className="text-slate-700 mb-4">
            For more information on the topics covered in this module, explore:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>
              • <strong>CAST Website:</strong> https://www.cast.org/ - Organization dedicated to UDL
              research and practice
            </li>
            <li>
              • <strong>Understood.org:</strong> https://www.understood.org/ - Practical resources for
              supporting diverse learners
            </li>
            <li>
              • <strong>ISTE Standards:</strong> https://www.iste.org/ - International standards for
              technology in education
            </li>
            <li>
              • <strong>WebAIM:</strong> https://webaim.org/ - Web accessibility guidelines and
              resources
            </li>
            <li>
              • <strong>National Center for Learning Disabilities:</strong> https://www.ncld.org/ -
              Research and advocacy for students with learning disabilities
            </li>
          </ul>
        </div>

        {/* Module Info */}
        <div className="mt-8 text-center text-slate-600 text-sm">
          <p>
            <strong>Module Version:</strong> 1.0 | <strong>Last Updated:</strong> May 2026
          </p>
          <p className="mt-2">
            This module is designed to be accessible and inclusive for all learners. If you have
            suggestions for improvement, please contact the course instructor.
          </p>
        </div>
      </div>
    </div>
  );
}
