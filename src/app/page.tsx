import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  Shield,
  BarChart3,
  Users,
  CheckCircle2,
  GitBranch,
  Terminal,
  Sparkles,
  Star,
  Quote,
  Check,
  Zap,
  Code,
  Github,
  Gitlab,
  MessageSquare
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Engineering Manager",
      company: "TechCorp",
      content: "Spec-Driven Development transformed how our team adopts AI. We've reduced code review cycles by 40% while maintaining quality.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "The governance and analytics features give us complete visibility into AI usage. It's exactly what we needed for compliance.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Lead Developer",
      company: "DevTeam Inc",
      content: "Finally, a structured approach to AI adoption. The prompt registry alone has saved us countless hours of duplicated work.",
      rating: 5,
    },
  ]

  const integrations = [
    { name: "VSCode", icon: Code },
    { name: "GitHub", icon: Github },
    { name: "GitLab", icon: Gitlab },
    { name: "Slack", icon: MessageSquare },
    { name: "CLI", icon: Terminal },
    { name: "API", icon: Zap },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "Basic prompt registry",
        "Standard analytics",
        "Community support",
        "VSCode integration",
      ],
      cta: "Start Free Trial",
      featured: false,
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "For growing teams scaling AI adoption",
      features: [
        "Up to 25 team members",
        "Advanced prompt registry",
        "Full analytics dashboard",
        "Policy engine",
        "Priority support",
        "All integrations",
        "Custom workflows",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations requiring full control",
      features: [
        "Unlimited team members",
        "Enterprise-grade security",
        "Advanced compliance",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise option",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ]

  const faqs = [
    {
      question: "What is Spec-Driven Development?",
      answer: "Spec-Driven Development is a methodology that requires teams to write specifications before using AI to generate code. This approach reduces cognitive debt, improves code quality, and ensures better understanding of the codebase.",
    },
    {
      question: "How does the prompt registry work?",
      answer: "Our prompt registry centralizes all AI prompts used across your organization. You can version control prompts, track usage, enforce policies, and share best practices across teams.",
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! We offer integrations with VSCode, GitHub, GitLab, Slack, and provide a CLI and API for custom integrations. Our platform is designed to fit seamlessly into your existing workflow.",
    },
    {
      question: "What analytics do you provide?",
      answer: "We track prompt usage, understanding scores, compliance metrics, team adoption rates, and ROI metrics. Our dashboard gives you complete visibility into how AI is being used across your organization.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial for both Starter and Professional plans. No credit card required to start.",
    },
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

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Development Teams
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what teams are saying about Spec-Driven Development
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="relative">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-muted-foreground/20 mb-2" />
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4">{testimonial.content}</p>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Seamless Integrations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Works with the tools you already use
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:border-primary transition-colors"
              >
                <integration.icon className="h-12 w-12 mb-3 text-muted-foreground" />
                <p className="text-sm font-medium">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that fits your team's needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.featured ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.featured ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/demo">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about Spec-Driven Development
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
