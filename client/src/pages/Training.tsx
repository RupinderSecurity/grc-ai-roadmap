import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Zap, Users, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Training() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Training Modules & Resources</h1>
          <p className="text-lg text-slate-600">Continuous learning paths to support your team's development — by Rupinder Pal Singh</p>
        </div>
      </div>

      {/* Training Modules */}
      <div className="container py-16">
        <div className="space-y-12">
          {/* Module 1 */}
          <div>
            <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">1. General AI Literacy and Concepts</h2>
                  <p className="text-slate-600">Ensure all team members have a solid understanding of AI fundamentals</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Purpose</h3>
                  <p className="text-slate-600 text-sm">
                    To ensure all team members have a solid understanding of AI fundamentals, including different types of AI, machine learning concepts, data science basics, and the lifecycle of AI systems.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Recommended Resources</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Online Courses (Coursera, edX, LinkedIn Learning)</p>
                        <p className="text-xs text-slate-600 mt-1">Curated courses on "AI for Non-Technical Professionals," "Introduction to Machine Learning," or "Data Science for Business." Integrate into 3-5 hours/week commitment.</p>
                        <p className="text-xs text-slate-600 mt-1">Example: <a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google AI for Everyone (Coursera)</a></p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Internal Workshops</p>
                        <p className="text-xs text-slate-600 mt-1">Conduct regular internal workshops (e.g., monthly) led by team members who have completed foundational AI training or external experts. Topics could include "Understanding AI Algorithms," "AI Ethics in Practice," or "The AI Development Lifecycle."</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Reading Materials</p>
                        <p className="text-xs text-slate-600 mt-1">Curated articles, whitepapers, and books on AI trends, ethical AI, and AI's impact on business.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Module 2 */}
          <div>
            <Card className="p-8 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
              <div className="flex items-start gap-4 mb-6">
                <Zap className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">2. AI in GRC Tools (Drata, Vanta, Anecdotes)</h2>
                  <p className="text-slate-600">Familiarize the team with AI-integrated GRC platforms</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Purpose</h3>
                  <p className="text-slate-600 text-sm">
                    To familiarize the team with how AI is integrated into modern GRC platforms, enabling them to leverage these tools for automated evidence collection, continuous monitoring, and enhanced risk management.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Recommended Resources</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Vendor-Specific Training</p>
                        <p className="text-xs text-slate-600 mt-1">Once a GRC platform is selected, prioritize official training from the vendor. These platforms often provide dedicated modules or academies for auditors and compliance professionals.</p>
                        <ul className="text-xs text-slate-600 mt-2 ml-4 space-y-1">
                          <li>• <strong>Drata:</strong> <a href="https://help.drata.com/en/collections/16396695-understand-the-drata-platform" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Training videos and guides</a></li>
                          <li>• <strong>Vanta:</strong> NIST AI RMF and ISO 42001 features with automated evidence collection</li>
                          <li>• <strong>Anecdotes:</strong> <a href="https://www.anecdotes.ai/grc-workshops" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GRC workshops</a> and <a href="https://www.anecdotes.ai/webinars" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">webinars</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Hands-on Labs/Sandboxes</p>
                        <p className="text-xs text-slate-600 mt-1">If available, allow team members to experiment with the AI features of these platforms in a sandbox environment to understand their capabilities and limitations.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Module 3 */}
          <div>
            <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">3. Practical Application of AI GRC Frameworks</h2>
                  <p className="text-slate-600">Translate theory into practice within Nice's context</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Purpose</h3>
                  <p className="text-slate-600 text-sm">
                    To translate theoretical knowledge of the EU AI Act, ISO/IEC 42001, and NIST AI RMF into practical application within Nice's operational context.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Recommended Resources</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Case Studies and Simulations</p>
                        <p className="text-xs text-slate-600 mt-1">Develop or utilize case studies that simulate real-world AI GRC scenarios. For example, auditing an AI-powered hiring system against EU AI Act requirements or assessing an AI model's bias using NIST AI RMF principles.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Cross-Functional Collaboration</p>
                        <p className="text-xs text-slate-600 mt-1">Facilitate regular meetings or projects with AI development, legal, and data science teams within Nice. This will provide auditors with practical insights into AI system development and deployment, fostering a collaborative approach to AI governance.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Internal AI GRC Playbooks</p>
                        <p className="text-xs text-slate-600 mt-1">Develop internal playbooks and checklists based on the adopted frameworks, tailored to Nice's specific AI initiatives. This ensures consistent application of GRC principles.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Module 4 */}
          <div>
            <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">4. Continuous Learning & Community Engagement</h2>
                  <p className="text-slate-600">Foster a culture of continuous learning and networking</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Purpose</h3>
                  <p className="text-slate-600 text-sm">
                    To foster a culture of continuous learning and enable team members to stay abreast of the rapidly changing AI and GRC landscape.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Recommended Resources</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Industry Conferences & Webinars</p>
                        <p className="text-xs text-slate-600 mt-1">Encourage participation in relevant conferences (e.g., ISACA, IAPP, RSA) and webinars focusing on AI GRC, cybersecurity, and emerging regulations.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Professional Associations</p>
                        <p className="text-xs text-slate-600 mt-1">Active participation in local chapters of ISACA and IAPP. These chapters often host events, workshops, and networking opportunities that are invaluable for professional development.</p>
                        <p className="text-xs text-slate-600 mt-2">Links: <a href="https://www.isaca.org/membership/local-chapters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ISACA Local Chapters</a> | <a href="https://iapp.org/community/local-chapters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IAPP Local Chapters</a></p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Online Forums & Communities</p>
                        <p className="text-xs text-slate-600 mt-1">Encourage engagement in online communities dedicated to AI ethics, AI governance, and GRC to share insights, ask questions, and learn from peers globally.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Newsletters & Publications</p>
                        <p className="text-xs text-slate-600 mt-1">Subscribe to leading industry newsletters and publications that provide updates on AI regulations, cybersecurity threats, and GRC best practices.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Learning Schedule */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Suggested Weekly Schedule</h2>
          <Card className="p-6 border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Time Block</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Activity</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 text-slate-600">Monday</td>
                    <td className="py-3 px-4 text-slate-600">Online course or certification study</td>
                    <td className="py-3 px-4 text-slate-600">1-2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 text-slate-600">Wednesday</td>
                    <td className="py-3 px-4 text-slate-600">GRC platform training or hands-on labs</td>
                    <td className="py-3 px-4 text-slate-600">1-2 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 text-slate-600">Friday</td>
                    <td className="py-3 px-4 text-slate-600">Team knowledge sharing session or reading</td>
                    <td className="py-3 px-4 text-slate-600">1 hour</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-600">Monthly</td>
                    <td className="py-3 px-4 text-slate-600">Internal workshop or case study discussion</td>
                    <td className="py-3 px-4 text-slate-600">2 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-4">Total: 3-5 hours per week, flexible scheduling to accommodate regional time zones</p>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="container py-16">
        <Card className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Begin?</h2>
          <p className="text-slate-600 mb-6">
            Start with Module 1 (General AI Literacy) in Q1, and progressively add modules as your team advances through the roadmap. Each module builds on the previous one, creating a comprehensive learning journey.
          </p>
          <Link href="/roadmap">
            <Button size="lg">View Quarterly Timeline</Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
