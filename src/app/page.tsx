"use client"

import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Shield,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  Building2,
  GitBranch,
  BarChart3,
  Sparkles
} from "lucide-react"
import { useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const stats = [
    { value: "10x", label: "Faster AI Adoption" },
    { value: "94%", label: "Developer Satisfaction" },
    { value: "50+", label: "Enterprise Teams" },
  ]

  const problems = [
    {
      title: "Your team is struggling with AI tools",
      description: "Developers generate code without understanding it. Technical debt piles up. Review cycles slow to a crawl."
    },
    {
      title: "No governance, no compliance",
      description: "You have no visibility into what AI is being used. Security risks lurk. Compliance teams are worried."
    },
    {
      title: "ROI is unclear",
      description: "You've invested in AI tools but can't measure impact. Management wants numbers. You have none."
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Spec-First Development",
      description: "Force understanding before code generation. No more blind copy-paste. Every line has context.",
      benefit: "Reduce technical debt by 70%"
    },
    {
      icon: GitBranch,
      title: "Centralized Prompt Registry",
      description: "Version control for AI prompts. Track what works. Share best practices across teams.",
      benefit: "Stop reinventing the wheel"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "See exactly how AI is used. Measure understanding scores. Prove ROI to leadership.",
      benefit: "Get the data you need"
    },
    {
      icon: Zap,
      title: "Policy Enforcement",
      description: "Set rules once. Enforce everywhere. Automatic compliance checks before code ships.",
      benefit: "Sleep better at night"
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Engineering",
      company: "TechCorp",
      image: "/avatars/sarah.jpg",
      content: "We cut code review time by 40% and our team actually understands what they're shipping now. Game changer.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      image: "/avatars/michael.jpg",
      content: "Finally have the governance we needed for SOC 2. The analytics dashboard sold our board on AI investment.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Engineering Manager",
      company: "DevTeam Inc",
      image: "/avatars/emily.jpg",
      content: "The prompt registry alone saved us 20 hours a week. Everyone shares their best practices now.",
      rating: 5,
    },
  ]

  const companyLogos = [
    "Company A", "Company B", "Company C", "Company D", "Company E", "Company F"
  ]

  return (
    <div ref={containerRef} className="flex flex-col overflow-hidden">
      {/* Hero Section - 100vh */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="mx-auto max-w-4xl text-center relative z-10"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-5 py-2 text-sm text-foreground/70 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Trusted by 50+ engineering teams
            </span>
          </motion.div>

          {/* Headline - The Hook */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Stop Guessing.
            <br />
            <span className="text-foreground/60">Start Measuring</span>
            <br />
            Your AI Adoption
          </motion.h1>

          {/* Subheadline - The Problem */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-foreground/60 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Your team uses AI to write code. But you have no idea if they understand it.
            <span className="text-foreground/90 font-medium"> We fix that.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 gap-3 group bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="/demo">
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-lg px-8 py-6 gap-3 group"
              asChild
            >
              <Link href="/demo">
                <Play className="h-5 w-5" />
                Watch Demo (2 min)
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof - Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof - Logos */}
      <section className="py-12 border-y border-foreground/10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-foreground/50 mb-8 uppercase tracking-wider">
            Trusted by engineering teams at
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-40">
            {companyLogos.map((company) => (
              <div key={company} className="text-sm font-semibold">
                <Building2 className="h-8 w-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Sound Familiar?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground/60 max-w-2xl mx-auto"
            >
              You're not alone. Here's what we hear from engineering leaders every day:
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-3"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-0 bg-foreground/5 backdrop-blur p-6 hover:bg-foreground/[0.07] transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">❌</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{problem.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Here's How We Solve It
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground/60 max-w-2xl mx-auto"
            >
              Four powerful features that transform how your team uses AI
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-0 bg-background/50 backdrop-blur p-8 hover:shadow-2xl transition-all">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground/10 mb-4">
                      <feature.icon className="h-7 w-7 text-foreground/80" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/50 font-medium uppercase tracking-wide">
                      {feature.benefit}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Don't Take Our Word For It
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground/60 max-w-2xl mx-auto"
            >
              Here's what engineering leaders say after using SDD Adopters
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-0 bg-foreground/5 backdrop-blur p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-foreground/60" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-foreground/[0.02]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Ready to Take Control of Your AI Adoption?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto"
            >
              Join 50+ engineering teams who've transformed how they use AI.
              Start your free trial today — no credit card required.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="text-lg px-10 py-7 gap-3 group bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/demo">
                  Start Free Trial — It's Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-foreground/50 mt-6"
            >
              ✓ 14-day free trial  ✓ No credit card required  ✓ Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
