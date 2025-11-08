import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Users,
  GitBranch,
  Shield,
  TrendingUp,
  Globe,
  Code,
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Responsibility First",
      description: "AI adoption must prioritize security, compliance, and ethical use above speed.",
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "Tools should enhance understanding and capability, not replace thinking.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "Every decision should be backed by data and concrete outcomes.",
    },
    {
      icon: Globe,
      title: "Open & Transparent",
      description: "Build in public, share learnings, and contribute to the community.",
    },
  ]

  const journey = [
    {
      phase: "The Problem",
      icon: Lightbulb,
      description: "Managing AI onboarding at scale revealed a pattern: teams struggled with governance, understanding, and measuring impact.",
      year: "2023",
    },
    {
      phase: "The Insight",
      icon: Target,
      description: "Traditional software engineering principles—specs, reviews, documentation—were missing from AI-assisted development.",
      year: "2024",
    },
    {
      phase: "The Solution",
      icon: Code,
      description: "Apply Spec-Driven Development to AI adoption: structure, governance, and understanding-first workflows.",
      year: "2024",
    },
    {
      phase: "The Mission",
      icon: Rocket,
      description: "Enable every organization to adopt AI responsibly with proven frameworks and measurable outcomes.",
      year: "Now",
    },
  ]

  const principles = [
    "Understanding must come before implementation",
    "Every AI interaction should be traceable and auditable",
    "Policies should be enforced automatically, not manually",
    "Teams should learn and improve from AI usage patterns",
    "AI tools should enhance, not replace, human judgment",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4" variant="secondary">
              About Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Enable Responsible AI Adoption
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're building the platform to help organizations adopt AI tools through structure, governance, and understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Enable responsible AI adoption through structure and understanding. We believe AI tools should enhance developer capabilities while maintaining security, compliance, and transparency.
              </p>
            </div>
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  We're solving a critical problem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-muted-foreground">
                  Organizations rush to adopt AI tools like GitHub Copilot and ChatGPT, but lack the frameworks to govern, measure, and optimize their use. This leads to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2">Security Risks</div>
                    <p className="text-sm text-muted-foreground">
                      Ungoverned AI usage creates compliance and security vulnerabilities
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2">Cognitive Debt</div>
                    <p className="text-sm text-muted-foreground">
                      Developers generate code without understanding it
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2">Unknown ROI</div>
                    <p className="text-sm text-muted-foreground">
                      No way to measure or optimize AI tool effectiveness
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story / Journey */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From observing AI adoption challenges to building a comprehensive solution
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div key={item.phase} className="relative">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}>
                    <div className={index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"}>
                      <Badge className="mb-2">{item.year}</Badge>
                      <h3 className="text-2xl font-bold mb-3">{item.phase}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className={index % 2 === 0 ? "md:pl-12 md:col-start-2 md:row-start-1" : "md:pr-12"}>
                      <div className="flex items-center justify-center">
                        <div className="rounded-full bg-primary/10 p-6">
                          <item.icon className="h-12 w-12 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we build
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg bg-primary/10 p-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Vision
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A world where every organization can confidently adopt AI tools, knowing they have the governance, transparency, and measurement needed to succeed.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Guiding Principles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {principles.map((principle, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <div className="h-5 w-5 flex items-center justify-center text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <span className="text-base">{principle}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Build in Public */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <GitBranch className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Building in Public
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in transparency and community. Follow our journey, contribute ideas, and help shape the future of responsible AI adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="#">View on GitHub</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Join Our Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Help us build the future of responsible AI adoption
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/demo">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/product">Explore the Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
