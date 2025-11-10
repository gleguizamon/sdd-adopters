"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Wand2, Star, Trophy, Target, Users2, Zap } from "lucide-react"
import { useState } from "react"

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.4, 0.25, 1]
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 32, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: {
    duration: 0.7,
    ease: [0.22, 0.68, 0.22, 1]
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

export default function Home() {
  const [email, setEmail] = useState("")

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-background/90 backdrop-blur-xl rounded-full px-6 py-3 border border-foreground/10 shadow-sm">
        <div className="flex items-center gap-6">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors duration-200">
            Home
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200">
            How it works
          </button>
          <button onClick={() => scrollToSection('waitlist')} className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200">
            Join
          </button>
        </div>
      </nav>

      <div className="flex flex-col">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Small logo */}
            <motion.div variants={fadeIn} className="mb-8">
              <div className="inline-flex items-center gap-2 text-lg font-semibold">
                <Wand2 className="h-5 w-5 text-primary" />
                <span>SDD Adopters</span>
              </div>
            </motion.div>

            {/* Giant Headline - 80% of the work */}
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Turn Onboarding Into
              <br />
              <span className="bg-gradient-to-r from-primary via-chart-3 to-chart-2 bg-clip-text text-transparent">A Game Your Team Loves</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8"
            >
              AI that <span className="text-primary font-semibold">empowers</span> developers, not replaces them.
              <br />
              <span className="text-foreground/90">Watch productivity soar through gamification.</span>
            </motion.p>

            {/* CTA with objection handling */}
            <motion.div variants={fadeIn} className="mb-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 0.68, 0.22, 1] }}
              >
                <Button
                  className="h-16 text-lg px-10 gap-3 group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl transition-all duration-300"
                  onClick={() => scrollToSection('waitlist')}
                >
                  <Sparkles className="h-5 w-5" />
                  Join Early Access
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <p className="text-sm text-foreground/50 mt-4">
                ✓ Free forever for early adopters  ✓ No credit card  ✓ Launch in Q1 2026
              </p>
            </motion.div>

            {/* Social Proof - Real roles */}
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 text-sm text-foreground/50">
              <Users2 className="h-4 w-4" />
              <span>Trusted by Engineering Managers, CTOs, and Team Leads</span>
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works - Visual Gamification */}
        <section id="how-it-works" className="min-h-screen flex items-center justify-center px-4 py-20 bg-secondary/30">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold text-center mb-16"
              >
                Onboarding, But Make It Fun
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 0.68, 0.22, 1] }}
                  className="text-center p-8 rounded-2xl bg-background hover:bg-primary/5 border border-foreground/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Wand2 className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Magic Quests</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Transform boring tasks into <span className="text-primary font-medium">magical quests</span>. Your team earns XP and unlocks achievements.
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 0.68, 0.22, 1] }}
                  className="text-center p-8 rounded-2xl bg-background hover:bg-chart-3/5 border border-foreground/10 hover:border-chart-3/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-chart-3/10 flex items-center justify-center group-hover:bg-chart-3/20 transition-colors duration-300">
                    <Star className="h-12 w-12 text-chart-3" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Mentor</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Your personal <span className="text-chart-3 font-medium">AI guide</span> helps you level up. Never feel lost again.
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  variants={fadeIn}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 0.68, 0.22, 1] }}
                  className="text-center p-8 rounded-2xl bg-background hover:bg-chart-2/5 border border-foreground/10 hover:border-chart-2/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-chart-2/10 flex items-center justify-center group-hover:bg-chart-2/20 transition-colors duration-300">
                    <Trophy className="h-12 w-12 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Team Leaderboard</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    <span className="text-chart-2 font-medium">Friendly competition</span> drives engagement. Celebrate wins together.
                  </p>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                variants={fadeIn}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
              >
                <div className="p-4 rounded-xl hover:bg-background transition-colors duration-300">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">10x</div>
                  <div className="text-sm text-foreground/60">Faster Onboarding</div>
                </div>
                <div className="p-4 rounded-xl hover:bg-background transition-colors duration-300">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-chart-2 to-primary bg-clip-text text-transparent">94%</div>
                  <div className="text-sm text-foreground/60">Completion Rate</div>
                </div>
                <div className="p-4 rounded-xl hover:bg-background transition-colors duration-300">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-chart-3 to-chart-2 bg-clip-text text-transparent">4.9/5</div>
                  <div className="text-sm text-foreground/60">Team Satisfaction</div>
                </div>
                <div className="p-4 rounded-xl hover:bg-background transition-colors duration-300">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-foreground/60">Early Adopters</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Problem (Why you should care) */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold text-center mb-8"
              >
                Onboarding Sucks. We All Know It.
              </motion.h2>

              <motion.p
                variants={fadeIn}
                className="text-xl text-foreground/70 text-center mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                New hires spend weeks reading outdated docs. Existing team members waste hours answering the same questions.
                <span className="text-foreground font-semibold"> Everyone's frustrated.</span>
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="p-6 rounded-xl bg-secondary/40 border border-foreground/10">
                  <div className="text-3xl mb-3">😫</div>
                  <h3 className="font-semibold mb-2">Before SDD Adopters</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>→ 3 weeks to first PR</li>
                    <li>→ Constant Slack interruptions</li>
                    <li>→ Unmotivated new hires</li>
                    <li>→ High early churn</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 shadow-sm">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-semibold mb-2">With SDD Adopters</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>→ 3 days to first PR</li>
                    <li>→ Self-serve AI answers</li>
                    <li>→ Excited, engaged teams</li>
                    <li>→ 94% retention</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Waitlist / Final CTA */}
        <section id="waitlist" className="min-h-screen flex items-center justify-center px-4 py-20 bg-secondary/30">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={fadeIn} className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm mb-6">
                <Zap className="h-4 w-4 text-primary" />
                <span>Launching Q1 2026 • Join 50+ teams on the waitlist</span>
              </div>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Be First to Experience
              <br />
              <span className="bg-gradient-to-r from-primary via-chart-3 to-chart-2 bg-clip-text text-transparent">The Future of Onboarding</span>
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-xl text-foreground/70 mb-8"
            >
              Join the waitlist and get <span className="text-primary font-semibold">lifetime free access</span> when we launch.
            </motion.p>

            <motion.div variants={fadeIn}>
              <form
                action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
                method="POST"
                target="_blank"
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
              >
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-5 rounded-xl bg-background border border-foreground/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 text-lg transition-all duration-200"
                />
                <Button
                  type="submit"
                  className="h-14 px-8 text-lg gap-2 group bg-foreground text-background hover:bg-foreground/90 rounded-xl transition-all duration-200"
                >
                  Get Lifetime Free Access
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              <p className="text-sm text-foreground/50">
                <Sparkles className="inline h-3 w-3 mr-1" />
                Only the first 100 signups get lifetime free access
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-foreground/15">
          <p className="text-sm text-foreground/50 mb-4">
            &copy; {new Date().getFullYear()} SDD Adopters. Building in public.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-foreground/60">
            <a href="mailto:hello@sdd-adopters.com" className="hover:text-primary transition-colors duration-200">
              Contact
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Twitter
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
