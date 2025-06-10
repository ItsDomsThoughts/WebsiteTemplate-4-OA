import { ArrowRight, BookOpen, Brain, ChevronRight, Database, FileText, Sparkles, Upload } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroAnimation } from "@/components/hero-animation"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { PricingCard } from "@/components/pricing-card"
import { ClientLogos } from "@/components/client-logos"
import { DemoSearchBar } from "@/components/demo-search-bar"
import { AnimatedGradient } from "@/components/animated-gradient"
import { UploadFeatureShowcase } from "@/components/upload-feature-showcase"

export const metadata = {
  title: "AI Research Assistant | Discover, Summarize, and Analyze Research Papers",
  description:
    "AI-powered research assistant that helps you discover, summarize, and analyze research papers with ease",
  openGraph: {
    title: "AI Research Assistant | Discover, Summarize, and Analyze Research Papers",
    description:
      "AI-powered research assistant that helps you discover, summarize, and analyze research papers with ease",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Research Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Research Assistant | Discover, Summarize, and Analyze Research Papers",
    description:
      "AI-powered research assistant that helps you discover, summarize, and analyze research papers with ease",
    images: ["/og-image.png"],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-32">
        <AnimatedGradient />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Research Assistant for Academic Excellence
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover, summarize, and analyze research papers with our intelligent AI assistant. Save hours of
                  research time.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="group">
                    Start Researching Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Search Bar */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Try it yourself</h2>
            <p className="text-muted-foreground md:text-xl">
              Enter a research topic to see how our AI assistant can help you
            </p>
            <DemoSearchBar />
          </div>
        </div>
      </section>

      {/* Upload Feature Showcase */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Upload & Chat with Your Papers
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Upload your own research papers to get AI-powered summaries and insights
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <UploadFeatureShowcase />
          </div>
          <div className="mt-8 text-center">
            <Link href="/upload">
              <Button size="lg" className="group">
                <Upload className="mr-2 h-4 w-4" />
                Upload Your Paper
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Benefits</h2>
            <p className="text-muted-foreground md:text-xl">
              Our AI research assistant helps you work smarter, not harder
            </p>
          </div>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <FeatureCard
              icon={<Brain className="h-10 w-10" />}
              title="AI-Powered Retrieval"
              description="Find relevant papers across multiple databases with semantic search"
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10" />}
              title="Smart Summarization"
              description="Get concise, accurate summaries of complex research papers"
            />
            <FeatureCard
              icon={<Database className="h-10 w-10" />}
              title="Citation Analysis"
              description="Understand connections between papers and identify key references"
            />
            <FeatureCard
              icon={<Sparkles className="h-10 w-10" />}
              title="Personalized Recommendations"
              description="Discover new papers based on your research interests"
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10" />}
              title="Full-Text Access"
              description="Read and analyze complete papers without leaving the platform"
            />
            <FeatureCard
              icon={<ChevronRight className="h-10 w-10" />}
              title="Export & Share"
              description="Save your findings as PDFs or share with colleagues"
            />
          </div>
        </div>
      </section>

      {/* Testimonials & Logos */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Researchers</h2>
            <p className="text-muted-foreground md:text-xl">
              Join thousands of academics and researchers who use our platform
            </p>
          </div>
          <ClientLogos />
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <TestimonialCard
              quote="This tool has revolutionized how I approach literature reviews. I've saved countless hours."
              author="Dr. Sarah Chen"
              role="Professor of Computer Science"
              avatarSrc="/placeholder.svg?height=40&width=40"
            />
            <TestimonialCard
              quote="The AI summaries are remarkably accurate and help me quickly understand complex papers."
              author="James Wilson"
              role="PhD Candidate, MIT"
              avatarSrc="/placeholder.svg?height=40&width=40"
            />
            <TestimonialCard
              quote="I've discovered connections between research papers that I would have missed otherwise."
              author="Dr. Michael Rodriguez"
              role="Research Scientist"
              avatarSrc="/placeholder.svg?height=40&width=40"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground md:text-xl">Choose the plan that fits your research needs</p>
          </div>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
            <PricingCard
              title="Free"
              price="$0"
              description="Perfect for casual research"
              features={[
                "10 paper summaries per month",
                "Basic search functionality",
                "Export to PDF",
                "Email support",
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            <PricingCard
              title="Premium"
              price="$29"
              description="For serious researchers"
              features={[
                "Unlimited paper summaries",
                "Advanced search across all databases",
                "Citation network analysis",
                "Custom exports and integrations",
                "Priority support",
              ]}
              buttonText="Start Free Trial"
              buttonVariant="default"
              popular={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to transform your research?
            </h2>
            <p className="md:text-xl">
              Join thousands of researchers who are already saving time and discovering new insights
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="group">
                  Start Researching Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
