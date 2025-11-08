import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  Shield,
  BarChart3,
  GitBranch,
  Terminal,
  Lock,
  Activity,
  Zap,
  Code,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function ProductPage() {
  const principles = [
    {
      icon: FileText,
      title: "Specification First",
      description: "Every feature starts with a clear, documented specification. Understanding comes before implementation.",
      benefits: [
        "Reduces ambiguity and miscommunication",
        "Creates living documentation",
        "Enables better AI collaboration",
      ],
    },
    {
      icon: Shield,
      title: "Policy Enforcement",
      description: "Define rules and constraints for AI usage. Ensure compliance automatically before code reaches production.",
      benefits: [
        "Maintain security standards",
        "Enforce coding guidelines",
        "Audit AI-generated code",
      ],
    },
    {
      icon: Activity,
      title: "Continuous Measurement",
      description: "Track every interaction, measure understanding, and optimize workflows based on real data.",
      benefits: [
        "Identify knowledge gaps",
        "Optimize prompt effectiveness",
        "Demonstrate ROI",
      ],
    },
  ]

  const features = [
    {
      icon: Terminal,
      title: "Prompt Registry",
      description: "Centralized repository for all AI prompts used across your organization.",
      capabilities: [
        "Version control for prompts",
        "Usage analytics per prompt",
        "Team collaboration and sharing",
        "Prompt template library",
      ],
    },
    {
      icon: Lock,
      title: "Policy Engine",
      description: "Define and enforce policies for AI-generated code and developer workflows.",
      capabilities: [
        "Custom validation rules",
        "Pre-commit hooks integration",
        "Compliance reporting",
        "Automated code review",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive metrics and insights into your team's AI adoption journey.",
      capabilities: [
        "Prompt usage patterns",
        "Understanding scores",
        "Team performance metrics",
        "Cost tracking and optimization",
      ],
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Seamless integration with your existing development workflow.",
      capabilities: [
        "VSCode extension",
        "CLI tools",
        "GitHub Copilot integration",
        "API access",
      ],
    },
  ]

  const workflow = [
    {
      step: 1,
      title: "Write Specification",
      description: "Developer creates or updates a specification document describing the feature, requirements, and constraints.",
      icon: FileText,
    },
    {
      step: 2,
      title: "Generate with AI",
      description: "Use approved prompts from the registry to generate code. All interactions are tracked and logged.",
      icon: Zap,
    },
    {
      step: 3,
      title: "Policy Validation",
      description: "Automated policies check the generated code for compliance, security, and quality standards.",
      icon: Shield,
    },
    {
      step: 4,
      title: "Review & Understand",
      description: "Developer reviews changes, confirms understanding, and provides feedback for continuous improvement.",
      icon: CheckCircle2,
    },
    {
      step: 5,
      title: "Deploy",
      description: "Approved code is deployed with full audit trail and documentation automatically generated.",
      icon: GitBranch,
    },
  ]

  const integrations = [
    { name: "GitHub", status: "Available" },
    { name: "VSCode", status: "Available" },
    { name: "GitLab", status: "Coming Soon" },
    { name: "Jira", status: "Coming Soon" },
    { name: "Slack", status: "Planned" },
    { name: "Custom API", status: "Available" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4" variant="secondary">
              Product Overview
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Spec-Driven Development for AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A complete platform for responsible AI adoption. Apply proven software engineering principles to AI-assisted development.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/demo">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/use-cases">See Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Core Principles
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built on three fundamental principles for responsible AI adoption
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <CardHeader>
                  <principle.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    {principle.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Platform Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to govern, measure, and optimize AI adoption
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A structured workflow from specification to deployment
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {workflow.map((item, index) => (
                <div key={item.step} className="relative">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-center mb-4">
                        <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                      </div>
                      <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                      <CardTitle className="text-center text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Integrations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Works with your existing tools and workflows
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {integrations.map((integration) => (
                <Card key={integration.name} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{integration.name}</CardTitle>
                      <Badge
                        variant={integration.status === "Available" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {integration.status}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how Spec-Driven Development can transform your team's AI adoption
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
