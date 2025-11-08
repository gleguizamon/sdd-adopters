import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Shield,
  BookOpen,
  Target,
  Zap,
  Clock,
  DollarSign,
  AlertTriangle,
} from "lucide-react"

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Building2,
      title: "Enterprise AI Onboarding",
      subtitle: "Streamline AI adoption with governance and training",
      problem: "Organizations struggle to adopt AI tools safely and effectively across teams.",
      solution: "Implement structured onboarding with built-in guardrails, training, and compliance.",
      benefits: [
        "Reduce time to productive AI usage by 60%",
        "Ensure compliance from day one",
        "Minimize security risks",
        "Track adoption metrics across departments",
      ],
      features: [
        {
          icon: Shield,
          title: "Policy Guardrails",
          description: "Enforce security and compliance policies automatically",
        },
        {
          icon: BookOpen,
          title: "Training Programs",
          description: "Guided learning paths for different roles and experience levels",
        },
        {
          icon: BarChart3,
          title: "Adoption Analytics",
          description: "Track usage, understanding, and ROI across the organization",
        },
      ],
      stats: [
        { label: "Faster Onboarding", value: "60%" },
        { label: "Compliance Rate", value: "100%" },
        { label: "Developer Adoption", value: "85%" },
      ],
    },
    {
      icon: Users,
      title: "Developer Teams",
      subtitle: "Build understanding-first AI workflows",
      problem: "Developers use AI without understanding the code it generates, creating technical debt.",
      solution: "Enforce spec-driven workflows that prioritize understanding before implementation.",
      benefits: [
        "Reduce cognitive debt and maintenance costs",
        "Improve code quality and consistency",
        "Build team knowledge base",
        "Accelerate code reviews",
      ],
      features: [
        {
          icon: Target,
          title: "Spec-First Development",
          description: "Require specifications before AI-generated code",
        },
        {
          icon: CheckCircle2,
          title: "Understanding Verification",
          description: "Ensure developers understand changes before commit",
        },
        {
          icon: Zap,
          title: "Prompt Library",
          description: "Share and reuse proven prompts across the team",
        },
      ],
      stats: [
        { label: "Less Tech Debt", value: "40%" },
        { label: "Faster Reviews", value: "50%" },
        { label: "Code Quality", value: "+35%" },
      ],
    },
    {
      icon: BarChart3,
      title: "Engineering Managers",
      subtitle: "Track and optimize AI usage across projects",
      problem: "Managers lack visibility into how teams use AI tools and their impact on productivity.",
      solution: "Comprehensive analytics and insights into AI adoption, costs, and outcomes.",
      benefits: [
        "Measure AI ROI with concrete metrics",
        "Identify high-performing patterns",
        "Optimize prompt usage and costs",
        "Make data-driven decisions",
      ],
      features: [
        {
          icon: TrendingUp,
          title: "Usage Analytics",
          description: "Track prompt frequency, patterns, and team adoption",
        },
        {
          icon: DollarSign,
          title: "Cost Optimization",
          description: "Monitor and optimize AI tool spending",
        },
        {
          icon: AlertTriangle,
          title: "Risk Management",
          description: "Identify and address compliance issues early",
        },
      ],
      stats: [
        { label: "Cost Savings", value: "30%" },
        { label: "Productivity Gain", value: "45%" },
        { label: "Visibility", value: "100%" },
      ],
    },
  ]

  const industries = [
    {
      name: "Financial Services",
      challenges: ["Strict compliance requirements", "Security concerns", "Audit trails"],
      solutions: ["Policy enforcement", "Complete audit logs", "Compliance reporting"],
    },
    {
      name: "Healthcare",
      challenges: ["Data privacy (HIPAA)", "Quality assurance", "Risk mitigation"],
      solutions: ["Privacy-first workflows", "Quality validation", "Risk tracking"],
    },
    {
      name: "Technology",
      challenges: ["Rapid scaling", "Code quality", "Knowledge retention"],
      solutions: ["Structured onboarding", "Quality gates", "Documentation automation"],
    },
    {
      name: "E-commerce",
      challenges: ["Fast development cycles", "Team coordination", "Technical debt"],
      solutions: ["Agile workflows", "Team collaboration", "Debt prevention"],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4" variant="secondary">
              Use Cases
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI Adoption for Every Role
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how Spec-Driven Development solves real challenges for enterprises, developers, and managers
            </p>
          </div>
        </div>
      </section>

      {/* Main Use Cases */}
      {useCases.map((useCase, index) => (
        <section
          key={useCase.title}
          className={index % 2 === 0 ? "py-20 sm:py-24 bg-muted/50" : "py-20 sm:py-24"}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <useCase.icon className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tight">{useCase.title}</h2>
                </div>
                <p className="text-xl text-muted-foreground mb-8">{useCase.subtitle}</p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground">{useCase.problem}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      The Solution
                    </h3>
                    <p className="text-muted-foreground">{useCase.solution}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Benefits</h3>
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {useCase.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="space-y-4">
                  {useCase.features.map((feature) => (
                    <Card key={feature.title}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="rounded-lg bg-primary/10 p-3">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-base">{feature.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {feature.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Industries */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Industry Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored approaches for different industry requirements
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card key={industry.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                      Challenges
                    </h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <AlertTriangle className="h-3 w-3 text-orange-500 flex-shrink-0 mt-1" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                      Our Solutions
                    </h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Find Your Use Case
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how Spec-Driven Development can solve your specific challenges
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/demo">Schedule a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/product">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
