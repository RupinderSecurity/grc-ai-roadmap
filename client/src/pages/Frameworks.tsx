import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Frameworks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container py-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Core AI GRC Frameworks</h1>
          <p className="text-lg text-slate-600">Three globally recognized frameworks your team must master — by Rupinder Pal Singh</p>
        </div>
      </div>

      {/* Framework Details */}
      <div className="container py-16">
        <div className="space-y-12">
          {/* EU AI Act */}
          <div>
            <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">EU AI Act</h2>
                <p className="text-lg text-slate-600">A landmark regulation establishing a comprehensive legal framework for AI in Europe</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Overview</h3>
                  <p className="text-slate-600 mb-4">
                    The European Union Artificial Intelligence Act is a landmark regulation aiming to establish a comprehensive legal framework for AI. It categorizes AI systems based on their risk level (unacceptable, high, limited, minimal) and imposes stringent requirements on high-risk AI systems.
                  </p>
                  <p className="text-slate-600">
                    Requirements include: risk management, data governance, technical documentation, human oversight, robustness, accuracy, and cybersecurity.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Relevance for GRC</h3>
                  <p className="text-slate-600 mb-4">
                    This act will significantly impact organizations operating within or serving the EU, requiring GRC teams to assess AI systems for compliance, implement robust risk management processes, and ensure transparency and accountability.
                  </p>
                  <p className="text-slate-600">
                    Auditors will need to verify adherence to these legal obligations.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">Key Focus Areas for Your Team</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Understanding the risk classification of AI systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Requirements for high-risk AI systems (e.g., conformity assessments, quality management systems)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Post-market monitoring and reporting obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Data governance and quality requirements for AI training data</span>
                  </li>
                </ul>
              </div>

              <div className="text-sm text-slate-600">
                <p className="mb-2"><strong>Applicability:</strong> Directly applicable to EU team members and any operations impacting the EU. Understanding this act is critical for all global GRC teams, as its influence extends beyond EU borders.</p>
              </div>
            </Card>
          </div>

          {/* ISO/IEC 42001 */}
          <div>
            <Card className="p-8 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">ISO/IEC 42001:2023</h2>
                <p className="text-lg text-slate-600">Artificial Intelligence Management System (AIMS) Standard</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Overview</h3>
                  <p className="text-slate-600 mb-4">
                    ISO/IEC 42001 is the first international standard for Artificial Intelligence Management Systems (AIMS). It provides a framework for organizations to establish, implement, maintain, and continually improve an AIMS, ensuring responsible development and use of AI.
                  </p>
                  <p className="text-slate-600">
                    It is designed to be auditable and can be integrated with other management system standards like ISO 27001.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Relevance for GRC</h3>
                  <p className="text-slate-600 mb-4">
                    This standard offers a structured approach for managing AI risks and opportunities. For auditors, it provides a clear set of controls and requirements against which AI systems and their governance can be assessed.
                  </p>
                  <p className="text-slate-600">
                    It is particularly valuable for demonstrating due diligence and building trust in AI.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-indigo-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">Key Focus Areas for Your Team</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Understanding the AIMS framework and its clauses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Implementing AI policies, objectives, and processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Risk assessment and treatment specific to AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Performance evaluation and continuous improvement of AIMS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Integration with existing GRC frameworks</span>
                  </li>
                </ul>
              </div>

              <div className="text-sm text-slate-600">
                <p className="mb-2"><strong>Applicability:</strong> As an international standard, ISO/IEC 42001 is globally recognized and applicable across all regions. Its adoption provides a consistent framework for AI Management Systems, regardless of geographical location.</p>
              </div>
            </Card>
          </div>

          {/* NIST AI RMF */}
          <div>
            <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">NIST AI Risk Management Framework (AI RMF 1.0)</h2>
                <p className="text-lg text-slate-600">A flexible, voluntary framework for trustworthy AI systems</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Overview</h3>
                  <p className="text-slate-600 mb-4">
                    Developed by the National Institute of Standards and Technology (NIST), the AI RMF is a voluntary framework designed to improve the trustworthiness of AI systems. It consists of four core functions: Govern, Map, Measure, and Manage.
                  </p>
                  <p className="text-slate-600">
                    It provides a flexible and comprehensive approach to identify, assess, and mitigate AI risks.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Relevance for GRC</h3>
                  <p className="text-slate-600 mb-4">
                    The NIST AI RMF is widely adopted, especially in the US, and offers practical guidance for organizations to address AI risks. GRC teams can use it to develop internal AI policies, conduct risk assessments, and establish continuous monitoring programs.
                  </p>
                  <p className="text-slate-600">
                    It complements regulatory requirements by providing actionable steps for risk management.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-purple-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">Four Core Functions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h5 className="font-semibold text-slate-900 mb-1">Govern</h5>
                    <p className="text-sm text-slate-600">Establish policies, objectives, and processes for responsible AI governance</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h5 className="font-semibold text-slate-900 mb-1">Map</h5>
                    <p className="text-sm text-slate-600">Identify and categorize AI risks and opportunities</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h5 className="font-semibold text-slate-900 mb-1">Measure</h5>
                    <p className="text-sm text-slate-600">Assess and monitor AI system performance and risks</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h5 className="font-semibold text-slate-900 mb-1">Manage</h5>
                    <p className="text-sm text-slate-600">Develop and implement risk mitigation strategies</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-purple-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">Key Focus Areas for Your Team</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Understanding the four core functions (Govern, Map, Measure, Manage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Applying the framework to identify and categorize AI risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Developing risk mitigation strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">Establishing transparent and accountable AI practices</span>
                  </li>
                </ul>
              </div>

              <div className="text-sm text-slate-600">
                <p className="mb-2"><strong>Applicability:</strong> While developed in the US, the NIST AI RMF is widely adopted internationally due to its practical, risk-based approach. It serves as a valuable guide for AI risk management in all regions, complementing regulatory requirements.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Framework Comparison */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Framework Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Aspect</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">EU AI Act</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">ISO/IEC 42001</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">NIST AI RMF</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4 font-semibold text-slate-900">Type</td>
                  <td className="py-4 px-4 text-slate-600">Regulatory</td>
                  <td className="py-4 px-4 text-slate-600">Standard</td>
                  <td className="py-4 px-4 text-slate-600">Voluntary Framework</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4 font-semibold text-slate-900">Geographic Scope</td>
                  <td className="py-4 px-4 text-slate-600">EU & EU-serving orgs</td>
                  <td className="py-4 px-4 text-slate-600">Global</td>
                  <td className="py-4 px-4 text-slate-600">Global (US-led)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4 font-semibold text-slate-900">Focus</td>
                  <td className="py-4 px-4 text-slate-600">Risk-based compliance</td>
                  <td className="py-4 px-4 text-slate-600">Management system</td>
                  <td className="py-4 px-4 text-slate-600">Risk management</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4 font-semibold text-slate-900">Auditability</td>
                  <td className="py-4 px-4 text-slate-600">Compliance verification</td>
                  <td className="py-4 px-4 text-slate-600">Highly auditable</td>
                  <td className="py-4 px-4 text-slate-600">Flexible assessment</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-slate-900">Integration</td>
                  <td className="py-4 px-4 text-slate-600">Standalone</td>
                  <td className="py-4 px-4 text-slate-600">Integrates with ISO 27001</td>
                  <td className="py-4 px-4 text-slate-600">Complements regulations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Principles */}
      <section className="container py-16">
        <Card className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Principles</h2>
          <p className="text-slate-600 mb-6">
            While distinct in their approach, all three frameworks share common principles. This comprehensive analysis is part of the strategic plan by Rupinder Pal Singh:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Transparency</h4>
                <p className="text-sm text-slate-600">Clear documentation and disclosure of AI system capabilities and limitations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Fairness</h4>
                <p className="text-sm text-slate-600">Mitigation of bias and discrimination in AI systems</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Accountability</h4>
                <p className="text-sm text-slate-600">Clear responsibility and oversight for AI system decisions and outcomes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Robustness</h4>
                <p className="text-sm text-slate-600">Reliability, security, and resilience of AI systems</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
          <p className="text-slate-600 mb-8">
            A holistic understanding of all three frameworks will enable your GRC team to address AI compliance and risk management comprehensively across different jurisdictions and operational contexts.
          </p>
          <Link href="/roadmap">
            <Button size="lg">View Implementation Roadmap</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
