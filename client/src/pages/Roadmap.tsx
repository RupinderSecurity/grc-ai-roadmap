import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Clock, Users } from "lucide-react";
import { Link } from "wouter";

export default function Roadmap() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">12-Month Roadmap</h1>
          <p className="text-lg text-slate-600">A structured quarterly approach to building AI GRC expertise</p>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="container py-16">
        <div className="space-y-12">
          {/* Q1 */}
          <div className="relative">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">Q1</div>
                <div className="w-1 h-32 bg-blue-200 mt-4" />
              </div>
              <div className="flex-1 pb-8">
                <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Foundational AI Literacy & GRC Basics</h2>
                  <p className="text-slate-600 mb-6">Months 1-3: Establish a common understanding of AI fundamentals and introduce core AI GRC concepts</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        All Team Members
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Complete ISACA AI Fundamentals Certificate (10-15 hours total, 1-2 hours/week)</li>
                        <li>• Begin foundational AI course on Coursera, edX, or LinkedIn Learning (2-3 hours/week)</li>
                        <li>• Participate in weekly 1-hour knowledge sharing sessions</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Team Lead/Manager
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Research and evaluate GRC platforms (Drata, Vanta, Anecdotes)</li>
                        <li>• Focus on AI capabilities and training resources</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Deliverables:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>✓ ISACA AI Fundamentals Certificate completion by all team members</li>
                      <li>✓ Progress reports on online AI courses</li>
                      <li>✓ Shortlist of preferred GRC platforms with AI features</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Q2 */}
          <div className="relative">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">Q2</div>
                <div className="w-1 h-32 bg-blue-200 mt-4" />
              </div>
              <div className="flex-1 pb-8">
                <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Deep Dive into AI GRC Frameworks</h2>
                  <p className="text-slate-600 mb-6">Months 4-6: Understand the specifics of EU AI Act, ISO/IEC 42001, and NIST AI RMF</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        All Team Members
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Dedicated study of EU AI Act (2-3 hours/week)</li>
                        <li>• In-depth study of NIST AI RMF 1.0 (2-3 hours/week)</li>
                        <li>• Focus on risk classification and compliance requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Team Lead/Manager
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Engage with GRC platform vendors for demos</li>
                        <li>• Discuss AI compliance features and auditor training programs</li>
                        <li>• Conduct internal workshops on framework application</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Deliverables:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>✓ Detailed internal summaries/checklists for EU AI Act and NIST AI RMF</li>
                      <li>✓ Decision on preferred GRC platform</li>
                      <li>✓ Initial draft of internal AI GRC policy or guideline</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Q3 */}
          <div className="relative">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">Q3</div>
                <div className="w-1 h-32 bg-blue-200 mt-4" />
              </div>
              <div className="flex-1 pb-8">
                <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">AI Governance & Compliance Specialization</h2>
                  <p className="text-slate-600 mb-6">Months 7-9: Formalize AI governance expertise and begin practical application with chosen GRC tools</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        All Team Members
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Pursue IAPP AI Governance Professional (AIGP) certification (3-5 hours/week)</li>
                        <li>• Begin training on selected GRC platform (2-3 hours/week)</li>
                        <li>• Focus on AI-powered features for evidence collection and monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Cross-Functional
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Initiate collaborative sessions with internal AI development teams</li>
                        <li>• Understand their projects and identify potential AI GRC audit areas</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Deliverables:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>✓ Completion of IAPP AIGP certification by all team members</li>
                      <li>✓ Proficiency in using AI features of chosen GRC platform</li>
                      <li>✓ Identification of 1-2 internal AI projects for initial GRC assessment</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Q4 */}
          <div className="relative">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">Q4</div>
              </div>
              <div className="flex-1">
                <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Advanced AI Audit & Practical Implementation</h2>
                  <p className="text-slate-600 mb-6">Months 10-12: Develop advanced AI audit capabilities and apply knowledge to real-world scenarios</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Select Team Members (with CISA/CIA)
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Pursue ISACA Advanced in AI Audit™ (AAIA™) certification (3-5 hours/week)</li>
                        <li>• Pursue ISO/IEC 42001 Lead Auditor certification (3-5 hours/week)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        All Team Members
                      </h3>
                      <ul className="space-y-2 ml-7 text-slate-600">
                        <li>• Conduct pilot AI GRC audits on identified internal AI projects</li>
                        <li>• Apply learned frameworks and utilize GRC platform</li>
                        <li>• Formalize internal AI GRC playbooks, audit programs, and reporting templates</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Deliverables:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>✓ Completion of AAIA and/or ISO/IEC 42001 Lead Auditor certifications</li>
                      <li>✓ Completion of 1-2 pilot AI GRC audits with findings and recommendations</li>
                      <li>✓ Finalized internal AI GRC playbooks and audit methodologies</li>
                      <li>✓ Team fully prepared for ongoing AI GRC responsibilities</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Commitment Summary */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Weekly Time Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { quarter: "Q1", hours: "3-5 hours/week", focus: "Foundations" },
              { quarter: "Q2", hours: "4-6 hours/week", focus: "Framework Study" },
              { quarter: "Q3", hours: "5-8 hours/week", focus: "Certification + Platform" },
              { quarter: "Q4", hours: "5-8 hours/week", focus: "Advanced Certs + Audits" }
            ].map((item, i) => (
              <Card key={i} className="p-6 border border-slate-200">
                <div className="text-sm font-bold text-blue-600 mb-2">{item.quarter}</div>
                <div className="text-2xl font-bold text-slate-900 mb-2">{item.hours}</div>
                <p className="text-sm text-slate-600">{item.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="container py-16">
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start?</h2>
          <p className="text-slate-600 mb-6">
            This roadmap is designed to integrate seamlessly with your team's existing workload. Each quarter builds on the previous one, ensuring progressive learning and practical application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/certifications">
              <Button size="lg">Explore Certifications</Button>
            </Link>
            <Link href="/training">
              <Button size="lg" variant="outline">View Training Resources</Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
