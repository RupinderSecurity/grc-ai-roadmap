import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, BookOpen, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GRC</span>
            </div>
            <span className="font-semibold text-slate-900">Nice AI Roadmap</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#trends" className="text-sm text-slate-600 hover:text-slate-900 transition">Trends</a>
            <a href="#frameworks" className="text-sm text-slate-600 hover:text-slate-900 transition">Frameworks</a>
            <a href="#roadmap" className="text-sm text-slate-600 hover:text-slate-900 transition">Roadmap</a>
            <a href="#certifications" className="text-sm text-slate-600 hover:text-slate-900 transition">Certifications</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            One-Year Transformation Plan
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transform Your GRC Team for the AI Era
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            A comprehensive roadmap to equip your global team with AI governance expertise, certifications, and frameworks needed to audit, manage, and ensure compliance with AI systems across all jurisdictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/roadmap">
              <Button size="lg" className="gap-2">
                View Full Roadmap
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/frameworks">
              <Button size="lg" variant="outline">
                Explore Frameworks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <p className="text-slate-600">Quarterly Phases</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-slate-600">Core Frameworks</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-slate-600">Certifications</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
              <p className="text-slate-600">Global Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section id="trends" className="container py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Key GRC + AI Trends</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl">
          Understanding the landscape that's reshaping governance, risk, and compliance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "AI Governance as Board Priority",
              desc: "AI governance is now a strategic board-level imperative, requiring robust frameworks for bias management and accountability."
            },
            {
              icon: TrendingUp,
              title: "Continuous Compliance",
              desc: "Real-time monitoring and continuous compliance checks are replacing traditional periodic audits."
            },
            {
              icon: Users,
              title: "Third-Party AI Risk",
              desc: "Expanded vendor risk management now includes AI-specific risks like model integrity and ethical practices."
            },
            {
              icon: Zap,
              title: "AI-Powered GRC Tools",
              desc: "Platforms like Drata, Vanta, and Anecdotes automate evidence collection and risk assessments."
            },
            {
              icon: BookOpen,
              title: "Regulatory Evolution",
              desc: "New regulations like EU AI Act and standards like ISO/IEC 42001 are setting global compliance requirements."
            },
            {
              icon: TrendingUp,
              title: "Cyber + AI Convergence",
              desc: "AI presents both new threats (AI-powered attacks) and opportunities (automated threat detection)."
            }
          ].map((trend, i) => {
            const Icon = trend.icon;
            return (
              <Card key={i} className="p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{trend.title}</h3>
                <p className="text-sm text-slate-600">{trend.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="bg-slate-900 text-white py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Core AI GRC Frameworks</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl">
            Three globally recognized frameworks your team must master
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "EU AI Act",
                desc: "Landmark regulation for AI governance in Europe with risk-based classification and compliance requirements.",
                focus: ["Risk Classification", "High-Risk AI Requirements", "Post-Market Monitoring", "Data Governance"]
              },
              {
                name: "ISO/IEC 42001",
                desc: "International standard for AI Management Systems, providing auditable controls for responsible AI.",
                focus: ["AIMS Framework", "AI Policies & Objectives", "Risk Assessment & Treatment", "Continuous Improvement"]
              },
              {
                name: "NIST AI RMF 1.0",
                desc: "Voluntary framework with four core functions: Govern, Map, Measure, and Manage.",
                focus: ["Govern", "Map", "Measure", "Manage"]
              }
            ].map((fw, i) => (
              <Card key={i} className="bg-slate-800 border-slate-700 p-8">
                <h3 className="text-xl font-bold mb-3">{fw.name}</h3>
                <p className="text-slate-300 mb-6 text-sm">{fw.desc}</p>
                <div className="space-y-2">
                  {fw.focus.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/frameworks">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Deep Dive into Frameworks
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section id="roadmap" className="container py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">12-Month Transformation</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl">
          A structured quarterly approach to building AI GRC expertise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              quarter: "Q1",
              title: "Foundational Literacy",
              items: ["AI Fundamentals Certificate", "Online AI Courses", "GRC Platform Evaluation", "Weekly Knowledge Sharing"]
            },
            {
              quarter: "Q2",
              title: "Framework Deep Dive",
              items: ["EU AI Act Study", "NIST AI RMF Mastery", "Platform Selection", "Internal Policies Draft"]
            },
            {
              quarter: "Q3",
              title: "Governance Specialization",
              items: ["IAPP AIGP Certification", "GRC Platform Training", "Cross-Functional Engagement", "Audit Area Identification"]
            },
            {
              quarter: "Q4",
              title: "Advanced Implementation",
              items: ["AAIA/ISO 42001 Certs", "Pilot AI Audits", "Playbook Development", "Team Readiness"]
            }
          ].map((phase, i) => (
            <Card key={i} className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <div className="text-sm font-bold text-blue-600 mb-2">{phase.quarter}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/roadmap">
            <Button size="lg" className="gap-2">
              View Detailed Roadmap
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certification Pathways</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">
            Tiered certifications aligned with team experience and career goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Foundational Level</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">ISACA AI Fundamentals</p>
                  <p className="text-sm text-slate-600 mb-2">US$160-220 • 10-15 hours</p>
                  <p className="text-sm text-slate-600">Core AI concepts and business implications</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900 mb-1">Coursera/edX/LinkedIn Learning</p>
                  <p className="text-sm text-slate-600 mb-2">Variable • 10-30 hours</p>
                  <p className="text-sm text-slate-600">AI for Business, AI Ethics, Responsible AI paths</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Governance Level</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">IAPP AIGP</p>
                  <p className="text-sm text-slate-600 mb-2">US$550-700 • 2-3 days + study</p>
                  <p className="text-sm text-slate-600">AI governance, ethical deployment, policy frameworks</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border border-slate-200 md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Advanced Audit Level</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">ISACA AAIA™</p>
                  <p className="text-sm text-slate-600 mb-2">US$2,995 • 2 days + study</p>
                  <p className="text-sm text-slate-600">Advanced AI audit, risk assessment, compliance verification</p>
                  <p className="text-xs text-slate-500 mt-2">Requires CISA or equivalent</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">ISO/IEC 42001 Lead Auditor</p>
                  <p className="text-sm text-slate-600 mb-2">US$2,000-3,500 • 4-5 days + study</p>
                  <p className="text-sm text-slate-600">AIMS audit, control assessment, audit program management</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-12">
            <Link href="/certifications">
              <Button size="lg" variant="outline" className="gap-2">
                Explore All Certifications
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Team?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Access the complete roadmap with detailed timelines, resource links, and implementation guides for your global GRC team.
          </p>
          <Link href="/roadmap">
            <Button size="lg" variant="secondary" className="gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">GRC</span>
                </div>
                <span className="font-semibold text-white">Nice AI Roadmap</span>
              </div>
              <p className="text-sm">Transforming GRC teams for the AI era</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#trends" className="hover:text-white transition">Trends</a></li>
                <li><a href="#frameworks" className="hover:text-white transition">Frameworks</a></li>
                <li><a href="#roadmap" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/certifications">Certifications</Link></li>
                <li><Link href="/training">Training</Link></li>
                <li><Link href="/regions">Regional Info</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">About</h4>
              <p className="text-sm">A comprehensive one-year plan for Nice's global GRC team to master AI governance, compliance, and auditing.</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-center">© 2026 Nice GRC + AI Readiness Plan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
