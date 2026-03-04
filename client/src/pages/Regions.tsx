import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Globe, Users, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Regions() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Global Regional Support</h1>
          <p className="text-lg text-slate-600">Tailored guidance for your team across 8 regions — by Rupinder Pal Singh</p>
        </div>
      </div>

      {/* Global Overview */}
      <section className="container py-16">
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Global Applicability of Frameworks</h2>
          <p className="text-slate-600 mb-6">
            Your GRC team operates across diverse regions including the UK, EU, AU, PH, India, US, Canada, and South America. This global footprint necessitates a plan that is adaptable and accounts for regional nuances while maintaining a unified approach to AI GRC.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">EU AI Act</h4>
                <p className="text-sm text-slate-600">Directly applicable to EU team members and any operations impacting the EU. Understanding this act is critical for all global team members.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">ISO/IEC 42001</h4>
                <p className="text-sm text-slate-600">As an international standard, globally recognized and applicable across all regions with consistent framework for AI Management Systems.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">NIST AI RMF</h4>
                <p className="text-sm text-slate-600">Widely adopted internationally due to its practical, risk-based approach. Serves as a valuable guide for AI risk management in all regions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Global Certifications</h4>
                <p className="text-sm text-slate-600">ISACA and IAPP certifications are globally recognized, providing a common language and standard of expertise across all regions.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Regional Details */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Regional Guidance</h2>
        <div className="space-y-8">
          {/* Europe (EU + UK) */}
          <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Europe (EU + UK)</h3>
                <p className="text-slate-600">EU, UK teams</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Primary Focus</h4>
                <p className="text-slate-600 text-sm">
                  EU AI Act compliance is paramount. This region will be the first to implement strict AI governance requirements, making expertise in the EU AI Act critical.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Key Regulations & Frameworks</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    EU AI Act (mandatory)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    ISO/IEC 42001 (recommended)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    GDPR + AI intersection
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Local Resources</h4>
                <p className="text-xs text-slate-600">
                  <strong>ISACA Chapters:</strong> <a href="https://www.isaca.org/membership/local-chapters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Find local chapter</a> in your EU country
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>IAPP KnowledgeNet:</strong> <a href="https://iapp.org/community/local-chapters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Find local chapter</a> for privacy + AI governance
                </p>
              </div>
            </div>
          </Card>

          {/* Americas (US, Canada, South America) */}
          <Card className="p-8 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Americas (US, Canada, South America)</h3>
                <p className="text-slate-600">US, Canada, South America teams</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Primary Focus</h4>
                <p className="text-slate-600 text-sm">
                  NIST AI RMF is the primary framework for US operations. Canada follows similar risk-based approaches. South America is developing its own AI regulations; monitor local developments.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Key Regulations & Frameworks</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    NIST AI RMF 1.0 (primary)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    ISO/IEC 42001 (recommended)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    Sector-specific regulations (e.g., HIPAA for healthcare)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Local Resources</h4>
                <p className="text-xs text-slate-600">
                  <strong>ISACA Chapters:</strong> <a href="https://www.isaca.org/membership/local-chapters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Find local chapter</a> in your country
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>IAPP Global Summit:</strong> <a href="https://iapp.org/conference/iapp-global-summit/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Attend annual conference</a> for Americas-focused training
                </p>
              </div>
            </div>
          </Card>

          {/* Asia-Pacific (AU, PH, India) */}
          <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Asia-Pacific (Australia, Philippines, India)</h3>
                <p className="text-slate-600">AU, PH, India teams</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Primary Focus</h4>
                <p className="text-slate-600 text-sm">
                  ISO/IEC 42001 is the primary international standard. Australia has strong data protection frameworks. India is developing AI governance guidelines. Philippines is emerging in AI regulation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Key Regulations & Frameworks</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                    ISO/IEC 42001 (primary)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                    NIST AI RMF (complementary)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                    Local data protection laws (e.g., Privacy Act in AU)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Local Resources</h4>
                <p className="text-xs text-slate-600">
                  <strong>ISACA Chapters:</strong> <a href="https://www.isaca.org/membership/local-chapters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">India (Hyderabad, New Delhi, Bangalore)</a>, Australia chapters available
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  <strong>IAPP KnowledgeNet:</strong> Growing presence in Asia-Pacific region with local chapter meetings
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Localized Support */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Localized Support Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Local Chapters & Communities
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Encourage team members to engage with local chapters of ISACA and IAPP in their respective regions. These chapters offer networking opportunities, region-specific events, and discussions on local regulatory developments.
              </p>
              <a href="https://www.isaca.org/membership/local-chapters" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Find ISACA chapters →</a>
            </Card>

            <Card className="p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Regional Regulatory Monitoring
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                While the core frameworks are global, each region may have specific AI-related guidelines or emerging regulations. Designate regional leads to monitor local developments and share updates with the broader team.
              </p>
              <p className="text-xs text-slate-600">Quarterly regional updates recommended</p>
            </Card>

            <Card className="p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Cultural Context in AI Ethics
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                AI ethics and societal impact can have cultural nuances. Foster discussions within regional teams to understand and address these differences in the context of AI governance and auditing.
              </p>
              <p className="text-xs text-slate-600">Monthly regional discussion sessions</p>
            </Card>

            <Card className="p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Language & Accessibility
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Ensure that training materials and resources are accessible and, where necessary, available in local languages or supported by translation tools to facilitate understanding across the diverse team.
              </p>
              <p className="text-xs text-slate-600">Multilingual resources available</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Leads */}
      <section className="container py-16">
        <Card className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Recommended Regional Lead Structure</h2>
          <p className="text-slate-600 mb-6">
            Designate regional leads for each major region to coordinate training, monitor regulatory changes, and facilitate knowledge sharing within their region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Europe Lead</p>
                <p className="text-xs text-slate-600">EU AI Act expertise, GDPR integration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Americas Lead</p>
                <p className="text-xs text-slate-600">NIST AI RMF expertise, sector-specific guidance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Asia-Pacific Lead</p>
                <p className="text-xs text-slate-600">ISO 42001 expertise, local regulatory monitoring</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Global Coordinator</p>
                <p className="text-xs text-slate-600">Cross-regional alignment, certification tracking</p>
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
            Use this regional guidance to tailor the global roadmap to your team's specific contexts while maintaining alignment with international standards and best practices.
          </p>
          <Link href="/roadmap">
            <Button size="lg">Return to Roadmap</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
