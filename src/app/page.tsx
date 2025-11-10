"use client"

import { Button } from "@/components/ui/button"
import { Sword, Bot, Trophy, Users2, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { animate } from "animejs/animation"
import { stagger } from "animejs/utils"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const heroRef = useRef<HTMLDivElement>(null)
  const devNinjaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero entrance animation with anime.js
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll('.animate-fade-in'), {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(100, {start: 200}),
        duration: 800,
        ease: 'out-cubic'
      })
    }

    // Dev ninja illustration animation
    if (devNinjaRef.current) {
      animate(devNinjaRef.current, {
        opacity: [0, 1],
        rotate: [-5, 0],
        duration: 600,
        delay: 400,
        ease: 'out-cubic'
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-[960px] mx-auto px-6 py-20 md:py-32">
        <div ref={heroRef} className="text-center">
          {/* Brand */}
          <div className="animate-fade-in mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium tracking-wide">
              <span className="text-foreground">ONBOARDING LAYER</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground">
            Turn Onboarding Into a Game Your Team Actually Loves
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-in text-xl md:text-2xl text-foreground/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Gamify onboarding with missions & badges. Cut training time by 40% while boosting retention.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in mb-8">
            <Button
              className="h-14 px-8 text-lg bg-foreground text-background hover:bg-foreground/90 rounded-md transition-all group"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Join Early Access
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Line */}
          <p className="animate-fade-in text-sm text-foreground/50">
            Free forever for early adopters · No credit card · Launching Q1 2026
          </p>

          {/* Dev Ninja Illustration */}
          <div ref={devNinjaRef} className="mt-16 opacity-0">
            <div className="inline-flex items-center justify-center w-32 h-32 border-2 border-foreground/20 rounded-full">
              <Sword className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Onboarding Fails Section */}
      <section className="max-w-[960px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Onboarding Sucks. We All Know It.
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            New hires spend weeks reading outdated docs. Mentors waste hours answering the same questions. Everyone's frustrated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="p-8 border-2 border-foreground/10 rounded-md">
            <div className="text-4xl mb-4">😩</div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Before Onboarding Layer</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>→ 3 weeks to first PR</li>
              <li>→ Slack interruptions</li>
              <li>→ High churn</li>
            </ul>
          </div>

          {/* After */}
          <div className="p-8 border-2 border-primary rounded-md bg-primary/5">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">With Onboarding Layer</h3>
            <ul className="space-y-3 text-foreground">
              <li>→ 3 days to first PR</li>
              <li>→ Self-serve AI answers</li>
              <li>→ 94% retention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[960px] mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Onboarding, But Make It Fun
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Magic Quests */}
          <div className="group cursor-pointer">
            <div className="p-8 border-2 border-foreground/10 rounded-md hover:border-primary transition-all duration-200 hover:scale-105">
              <div className="text-5xl mb-6">🗡</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Magic Quests</h3>
              <p className="text-foreground/70 leading-relaxed">
                Turn boring setup into magical quests — your team earns XP and badges.
              </p>
            </div>
          </div>

          {/* AI Mentor */}
          <div className="group cursor-pointer">
            <div className="p-8 border-2 border-foreground/10 rounded-md hover:border-primary transition-all duration-200 hover:scale-105">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI Mentor</h3>
              <p className="text-foreground/70 leading-relaxed">
                Your AI guide helps new hires self-learn faster without bugging the team.
              </p>
            </div>
          </div>

          {/* Team Leaderboard */}
          <div className="group cursor-pointer">
            <div className="p-8 border-2 border-foreground/10 rounded-md hover:border-primary transition-all duration-200 hover:scale-105">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Team Leaderboard</h3>
              <p className="text-foreground/70 leading-relaxed">
                Celebrate progress. Friendly competition keeps devs engaged.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-center text-sm text-foreground/60">
          <div className="font-semibold">10× Faster Onboarding</div>
          <div>·</div>
          <div className="font-semibold">94% Completion Rate</div>
          <div>·</div>
          <div className="font-semibold">50+ Early Adopters</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-[960px] mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          How It Works
        </h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Join your team</h3>
              <p className="text-foreground/70">Add members and choose vertical (front/back/internal).</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Complete missions</h3>
              <p className="text-foreground/70">Setup, culture, tech docs → XP + badges.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Level up your team</h3>
              <p className="text-foreground/70">Track progress and reduce buddy hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Social Proof Section */}
      <section id="waitlist" className="max-w-[960px] mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-sm text-foreground/60 mb-6">
            Launching Q1 2026 · Join 50+ teams on the waitlist
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Lifetime Free Access
          </h2>

          <p className="text-lg text-foreground/70 mb-8">
            Only the first 100 signups get lifetime access.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 h-12 px-4 border-2 border-foreground/20 rounded-md bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-6 bg-foreground text-background hover:bg-foreground/90 rounded-md transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-sm text-primary font-medium mt-4">
                ✓ Success! Check your email for confirmation.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="text-sm text-destructive font-medium mt-4">
                ✗ Something went wrong. Please try again.
              </p>
            )}
          </form>

          <p className="text-sm text-foreground/50">
            Trusted by Engineering Managers & CTOs
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-12">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <p className="text-sm text-foreground/40 mb-4">
            © 2025 Onboarding Layer — Building in public.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-foreground/40">
            <a href="mailto:hello@onboardinglayer.com" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Optional: XP Counter */}
      <div className="fixed bottom-6 right-6 px-4 py-2 bg-foreground/90 text-background rounded-md text-sm font-medium shadow-lg">
        👾 Teams have earned 12,000 XP so far
      </div>
    </div>
  )
}
