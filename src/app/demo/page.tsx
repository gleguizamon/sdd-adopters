import { DemoForm } from "@/components/demo-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Users,
  Video,
  CheckCircle2,
  Clock,
  MessageSquare,
} from "lucide-react"

export default function DemoPage() {
  const benefits = [
    {
      icon: Video,
      title: "Personalized Demo",
      description: "See the platform in action with a demo tailored to your use case",
    },
    {
      icon: MessageSquare,
      title: "Expert Consultation",
      description: "Discuss your specific AI adoption challenges with our team",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for your team",
    },
    {
      icon: Users,
      title: "Team Onboarding",
      description: "Learn how to get your entire team started quickly",
    },
  ]

  const whatToExpect = [
    "Platform walkthrough (15 minutes)",
    "Discussion of your specific use cases (10 minutes)",
    "Q&A session (15 minutes)",
    "Next steps and pricing (10 minutes)",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4" variant="secondary">
              <Clock className="mr-1 h-3 w-3" />
              Response within 24 hours
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Bring Spec-Driven AI to Your Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Schedule a personalized demo to see how our platform can transform your AI adoption journey.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-3">
                <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and What to Expect */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <DemoForm />
            </div>

            {/* What to Expect */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What to Expect</CardTitle>
                  <CardDescription>
                    Your demo session will include:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatToExpect.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Who Should Attend?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Engineering Managers</li>
                    <li>• CTOs / VPs of Engineering</li>
                    <li>• Developer Experience Leads</li>
                    <li>• Security / Compliance Officers</li>
                    <li>• Team Leads</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Join the Beta</CardTitle>
                  <CardDescription>
                    Get early access to the platform and help shape its future
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Free during beta period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Priority feature requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Direct access to founders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Discounted pricing when we launch</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by forward-thinking teams
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm">Beta Requests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm">Active Teams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
