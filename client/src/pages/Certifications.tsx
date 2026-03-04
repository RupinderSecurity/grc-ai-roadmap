import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Clock, DollarSign, Users } from "lucide-react";
import { Link } from "wouter";

export default function Certifications() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Certification Pathways</h1>
          <p className="text-lg text-slate-600">Tiered certifications aligned with team experience and career goals</p>
        </div>
      </div>

      {/* Certification Tiers */}
      <div className="container py-16">
        <div className="space-y-12">
          {/* Foundational Level */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Level 1: Foundational AI Knowledge</h2>
            <p className="text-lg text-slate-600 mb-8">Target Audience: All team members, especially those with less direct exposure to AI concepts</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ISACA AI Fundamentals */}
              <Card className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-xl font-bold text-slate-900 mb-4">ISACA Artificial Intelligence Fundamentals Certificate</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
                    <p className="text-sm text-slate-600">
                      This certificate provides a foundational understanding of AI principles, models, and their implications for business and GRC. It covers key AI concepts, ethical considerations, and how AI impacts organizational processes.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span><strong>Cost:</strong> US$160 (Member) / US$220 (Non-member)</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span><strong>Time:</strong> Self-paced, typically 10-15 hours</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span><strong>Provider:</strong> ISACA</span>
                  </div>
                </div>

                <a href="https://www.isaca.org/credentialing/artificial-intelligence-fundamentals-certificate" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full gap-2">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </Card>

              {/* Coursera/edX/LinkedIn Learning */}
              <Card className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-xl font-bold text-slate-900 mb-4">AI for Business/Compliance Courses</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
                    <p className="text-sm text-slate-600">
                      Introductory courses on AI for business leaders and compliance professionals, covering AI basics, ethical AI, and AI governance.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span><strong>Cost:</strong> Variable (some free options available)</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span><strong>Time:</strong> 10-30 hours per course</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span><strong>Providers:</strong> Coursera, edX, LinkedIn Learning</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-slate-900">Popular Courses:</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Coursera: AI for Business Specialization</li>
                    <li>• edX: AI Ethics for Professionals</li>
                    <li>• LinkedIn: Mastering Responsible AI</li>
                  </ul>
                </div>

                <Button size="sm" className="w-full gap-2" variant="outline">
                  Browse Courses
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>

          {/* Governance Level */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Level 2: AI Governance & Compliance Specialization</h2>
            <p className="text-lg text-slate-600 mb-8">Target Audience: All team members, building on foundational AI knowledge</p>
            
            <Card className="p-6 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
              <h3 className="text-xl font-bold text-slate-900 mb-4">IAPP AI Governance Professional (AIGP)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    The AIGP credential focuses on developing, integrating, and deploying trustworthy AI systems in line with emerging laws and policies. It covers AI development, ethical AI deployment, and best practices in AI management to ensure safety and trust.
                  </p>
                  <p className="text-sm text-slate-600">
                    This certification is globally recognized and highly relevant for compliance and governance roles.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
                      <DollarSign className="w-4 h-4 text-indigo-600" />
                      <span><strong>Cost:</strong> US$550-700 (exam fee, training extra)</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      <span><strong>Time:</strong> 2-3 days training + self-study</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Users className="w-4 h-4 text-indigo-600" />
                      <span><strong>Provider:</strong> IAPP (International Association of Privacy Professionals)</span>
                    </div>
                  </div>

                  <a href="https://iapp.org/certify/aigp" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full gap-2">
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Key Topics Covered</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• AI systems and their use cases</li>
                  <li>• Current and emerging AI laws and policies</li>
                  <li>• AI lifecycle and risk management</li>
                  <li>• Responsible AI governance frameworks</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Advanced Audit Level */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Level 3: Advanced AI Audit Specialization</h2>
            <p className="text-lg text-slate-600 mb-8">Target Audience: Team members with existing audit credentials (e.g., CISA, CIA) who will lead AI audit engagements</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ISACA AAIA */}
              <Card className="p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <h3 className="text-xl font-bold text-slate-900 mb-4">ISACA Advanced in AI Audit™ (AAIA™)</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
                    <p className="text-sm text-slate-600">
                      This advanced certification is specifically designed for IT auditors and advisors. It validates the ability to audit complex AI systems, assess and mitigate AI risks, ensure compliance, and leverage AI for organizational strategic goals.
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded p-3 mb-3">
                    <p className="text-xs font-semibold text-purple-900 mb-2">PREREQUISITE:</p>
                    <p className="text-xs text-purple-700">Active CISA® or another qualified advanced-auditing credential (e.g., CIA, CPA)</p>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                    <span><strong>Cost:</strong> Approximately US$2,995 (course + exam)</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span><strong>Time:</strong> 2 days instructor-led + self-study</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span><strong>Provider:</strong> ISACA</span>
                  </div>
                </div>

                <a href="https://www.isaca.org/credentialing/aaia" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full gap-2">
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </Card>

              {/* ISO/IEC 42001 Lead Auditor */}
              <Card className="p-6 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <h3 className="text-xl font-bold text-slate-900 mb-4">ISO/IEC 42001 Lead Auditor</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
                    <p className="text-sm text-slate-600">
                      This certification enables professionals to gain the necessary expertise to audit Artificial Intelligence Management Systems (AIMS) based on ISO/IEC 42001. It focuses on auditing principles, techniques, and the ability to manage an AIMS audit program.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                    <span><strong>Cost:</strong> US$2,000-3,500 (course + exam)</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span><strong>Time:</strong> 4-5 days instructor-led + self-study</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span><strong>Providers:</strong> PECB, Learning Tree, Certified InfoSec</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-slate-900">Training Providers:</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• <a href="https://trainingcamp.com/training/pecb-iso-42001-lead-auditor/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Training Camp</a></li>
                    <li>• <a href="https://www.learnquest.com/course-detail-v3.aspx?cnum=PECB-ISOIEC42001LA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LearnQuest</a></li>
                  </ul>
                </div>

                <Button size="sm" className="w-full gap-2" variant="outline">
                  Find Training Providers
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Timeline */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Recommended Certification Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 border border-slate-200">
              <div className="text-sm font-bold text-blue-600 mb-2">Q1-Q2</div>
              <h4 className="font-semibold text-slate-900 mb-3">Foundational</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• ISACA AI Fundamentals</li>
                <li>• Online AI Courses</li>
              </ul>
            </Card>
            <Card className="p-6 border border-slate-200">
              <div className="text-sm font-bold text-blue-600 mb-2">Q3</div>
              <h4 className="font-semibold text-slate-900 mb-3">Governance</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• IAPP AIGP</li>
                <li>• All team members</li>
              </ul>
            </Card>
            <Card className="p-6 border border-slate-200">
              <div className="text-sm font-bold text-blue-600 mb-2">Q4</div>
              <h4 className="font-semibold text-slate-900 mb-3">Advanced (Part 1)</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• ISACA AAIA™</li>
                <li>• Select team members</li>
              </ul>
            </Card>
            <Card className="p-6 border border-slate-200">
              <div className="text-sm font-bold text-blue-600 mb-2">Q4</div>
              <h4 className="font-semibold text-slate-900 mb-3">Advanced (Part 2)</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• ISO 42001 Lead Auditor</li>
                <li>• Select team members</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Investment */}
      <section className="container py-16">
        <Card className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Investment Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-sm text-slate-600 mb-1">Foundational Level (All Team)</p>
              <p className="text-2xl font-bold text-slate-900">US$160-220</p>
              <p className="text-xs text-slate-600">per person</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Governance Level (All Team)</p>
              <p className="text-2xl font-bold text-slate-900">US$550-700</p>
              <p className="text-xs text-slate-600">per person</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Advanced Level (Select Team)</p>
              <p className="text-2xl font-bold text-slate-900">US$2,000-3,500</p>
              <p className="text-xs text-slate-600">per person</p>
            </div>
          </div>
          <p className="text-slate-600">
            Total investment per team member ranges from US$710 (foundational + governance) to US$3,200+ (all three levels). This represents a significant upskilling opportunity for your global GRC team.
          </p>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Next Steps</h2>
          <p className="text-slate-600 mb-8">
            Ready to implement the certification pathway? Start with the foundational level and progress through the tiers as your team builds expertise.
          </p>
          <Link href="/roadmap">
            <Button size="lg">View Implementation Timeline</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
