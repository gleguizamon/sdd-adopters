"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const fadeIn = {
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
  const [email, setEmail] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Centered, Minimal */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Logo - Text only */}
          <motion.div variants={fadeIn} className="mb-12">
            <h1 className="text-2xl font-semibold tracking-tight">
              SDD Adopters
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={fadeIn} className="mb-8">
            <p className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              AI that empowers,
              <br />
              <span className="text-foreground/60">not replaces</span>
            </p>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Gamify your onboarding.
              <br />
              Join the early access.
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div variants={fadeIn} className="mb-8">
            <form
              action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
              method="POST"
              target="_blank"
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                name="emailAddress"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-foreground/5 border-0 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <Button
                type="submit"
                size="lg"
                className="gap-2 group bg-foreground text-background hover:bg-foreground/90"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Subtle badge */}
          <motion.div variants={fadeIn}>
            <p className="text-sm text-foreground/50">
              <Sparkles className="inline h-3 w-3 mr-1" />
              Be the first to experience the future of onboarding
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-8 text-center">
        <p className="text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} SDD Adopters. Building in public.
        </p>
      </footer>
    </div>
  )
}

