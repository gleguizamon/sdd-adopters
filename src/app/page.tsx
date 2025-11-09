"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  FileText,
  Shield,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Minus
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const features = [
    {
      icon: FileText,
      title: "Spec-Driven Development",
      description: "Enforce specifications before code generation. Build understanding before implementation.",
    },
    {
      icon: Shield,
      title: "AI Governance",
      description: "Centralized prompt registry and policy engine. Track usage and enforce compliance.",
    },
    {
      icon: BarChart3,
      title: "Measurable Outcomes",
      description: "Analytics dashboard to measure prompt frequency and optimize AI adoption.",
    },
    {
      icon: Users,
      title: "Developer Enablement",
      description: "Guide your team through understanding-first workflows with built-in best practices.",
    },
  ]

  const benefits = [
    "Reduce cognitive debt with understanding-first development",
    "Maintain security and compliance across AI tools",
    "Measure and optimize AI adoption ROI",
    "Accelerate onboarding with structured workflows",
    "Build transparent, auditable AI processes",
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small teams",
      features: [
        "Up to 5 team members",
        "Basic prompt registry",
        "Standard analytics",
        "Community support",
      ],
    },
    {
      name: "Professional",
      price: "149",
      description: "For growing teams",
      features: [
        "Up to 25 team members",
        "Advanced prompt registry",
        "Full analytics dashboard",
        "Priority support",
        "All integrations",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations",
      features: [
        "Unlimited team members",
        "Enterprise-grade security",
        "Advanced compliance",
        "Dedicated support",
        "Custom integrations",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-1.5 text-sm text-foreground/60">
                <Minus className="h-3 w-3" />
                Now in Beta
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-semibold tracking-tight sm:text-7xl mb-6"
            >
              Bring Structure to AI Adoption
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground/60 leading-relaxed mb-10"
            >
              Empower your team to use AI responsibly with Spec-Driven Development.
              Centralize prompts, enforce policies, and measure understanding.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-4"
            >
              <Button size="lg" className="gap-2 group" asChild>
                <Link href="/demo">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/product">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full border-0 bg-foreground/5 backdrop-blur transition-colors hover:bg-foreground/[0.07]">
                  <CardHeader className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
                      <feature.icon className="h-5 w-5 text-foreground/70" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-foreground/60 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-2xl"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-semibold mb-12 text-center"
            >
              Benefits for Your Team
            </motion.h2>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 rounded-lg bg-foreground/5 p-4 backdrop-blur transition-colors hover:bg-foreground/[0.07]"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-foreground/70" />
                  <p className="leading-relaxed text-foreground/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-semibold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-foreground/60">
                Choose the plan that fits your team
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <motion.div key={plan.name} variants={fadeInUp}>
                  <Card
                    className={`h-full border-0 bg-foreground/5 backdrop-blur transition-all ${
                      plan.featured ? "bg-foreground/[0.07]" : ""
                    }`}
                  >
                    <CardHeader className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                        <p className="text-sm text-foreground/60">
                          {plan.description}
                        </p>
                      </div>

                      <div className="flex items-baseline gap-1">
                        {plan.price === "Custom" ? (
                          <span className="text-3xl font-semibold">Custom</span>
                        ) : (
                          <>
                            <span className="text-sm text-foreground/60">$</span>
                            <span className="text-3xl font-semibold">{plan.price}</span>
                            <span className="text-sm text-foreground/60">/month</span>
                          </>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Minus className="h-4 w-4 flex-shrink-0 mt-0.5 text-foreground/60" />
                            <span className="text-foreground/70">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full"
                        variant={plan.featured ? "default" : "ghost"}
                        asChild
                      >
                        <Link href="/demo">
                          {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Structure Your AI Adoption?
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Join forward-thinking teams building responsible AI workflows
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="gap-2 group" asChild>
                <Link href="/demo">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/product">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
