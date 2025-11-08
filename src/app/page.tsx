import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Shield,
  BarChart3,
  Users,
  CheckCircle2,
  GitBranch,
  Terminal,
  Sparkles
} from "lucide-react"

export default function Home() {
  const valueProps = [
    {
      icon: FileText,
      title: "Spec-Driven Development",
      description: "Enforce specifications before code generation. Build understanding before implementation, reducing cognitive debt and improving AI collaboration.",
    },
    {
      icon: Shield,
      title: "AI Governance",
      description: "Centralized prompt registry and policy engine. Track usage, enforce compliance, and maintain control over AI-generated code.",
    },
    {
      icon: BarChart3,
      title: "Measurable Outcomes",
      description: "Analytics dashboard to measure prompt frequency, track understanding, and optimize AI adoption across your organization.",
    },
    {
      icon: Users,
      title: "Developer Enablement",
      description: "Guide your team through understanding-first workflows with built-in training, reflection prompts, and best practices.",
    },
  ]

  const features = [
    {
      title: "Prompt Registry",
      description: "Centralize and version control all AI prompts used across your organization.",
      icon: Terminal,
    },
    {
      title: "Policy Engine",
      description: "Define and enforce policies for AI usage, ensuring compliance and security.",
      icon: Shield,
    },
    {
      title: "Analytics Dashboard",
      description: "Track metrics, understand patterns, and optimize your AI workflows.",
      icon: BarChart3,
    },
    {
      title: "VSCode & CLI Integration",
      description: "Seamless integration with your existing development tools and workflows.",
      icon: GitBranch,
    },
  ]

  const benefits = [
    "Reduce cognitive debt with understanding-first development",
    "Maintain security and compliance across AI tools",
    "Measure and optimize AI adoption ROI",
    "Accelerate onboarding with structured workflows",
    "Build transparent, auditable AI processes",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="mr-1 h-3 w-3" />
              Now in Beta
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Bring Structure to AI Adoption
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Empower your team to use AI responsibly with Spec-Driven Development.
              Centralize prompts, enforce policies, and measure understanding across your organization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Join Beta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Spec-Driven Development?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Structure and governance for responsible AI adoption in your organization
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <Card key={prop.title} className="relative overflow-hidden">
                <CardHeader>
                  <prop.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {prop.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Complete AI Governance Platform
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to adopt AI tools responsibly and measurably.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-3">
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <Terminal className="h-5 w-5" />
                    <span className="font-mono text-sm">Spec-Driven Workflow</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">1. Write specification</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">2. Generate with AI</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">3. Review & validate</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground">4. Deploy with confidence</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-xs font-mono text-muted-foreground">
                      Policy compliance: ✓ Verified
                      <br />
                      Understanding score: 94%
                      <br />
                      Prompt usage: Within limits
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Benefits for Your Team
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Structure Your AI Adoption?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join forward-thinking teams building responsible AI workflows
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/product">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
