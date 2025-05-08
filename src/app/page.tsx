import Link from "next/link"
import { ArrowRight, BarChart2, Globe2, LineChart, Play, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WordRotate } from "@/components/magicui/word-rotate"
import { Marquee } from "@/components/magicui/marquee"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/NEW_FINAL-removebg-preview.png" alt="Golden Pocket Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">Golden Pocket</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#markets" className="transition-colors hover:text-primary">
              Markets
            </Link>
            <Link href="#demo" className="transition-colors hover:text-primary">
              Demo
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-primary">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-sm font-medium">Login</Button>
            <Button className="text-sm font-medium">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </div>

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    <div>
                      <WordRotate 
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                        words={["Track", "Analyze", "Improve"]} 
                        duration={2000}
                      />
                    </div>
                    <div>Your Trading</div>
                    <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                      Performance
                    </span>
                  </h1>
                  <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    A fully-automated trading journal built for DEX traders — no spreadsheets, no manual logging.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    Login
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">Free</h4>
                    <p className="text-sm text-muted-foreground">To Start</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">100%</h4>
                    <p className="text-sm text-muted-foreground">Automated</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">10+</h4>
                    <p className="text-sm text-muted-foreground">Growing Analytics</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
                <div className="relative bg-card rounded-2xl border p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
                      <BarChart2 className="h-24 w-24 text-primary/40" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-2">
                          <div className="h-2 rounded-full bg-primary/20" />
                          <div className="h-2 w-2/3 rounded-full bg-muted" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="compatible-dexes" className="py-16 bg-background">
          <div className="container space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compatible DEXes</h2>
              <p className="text-lg text-muted-foreground">
                We're starting with Jupiter Perps. More DEXes coming soon.
              </p>
            </div>
            
            <div className="mt-8 relative overflow-hidden">
              <Marquee className="py-4 [--duration:40s] [--gap:2rem]" repeat={4}>
                {/* Alternating Jupiter logo and question marks */}
                {[...Array(8)].map((_, i) => (
                  i % 3 === 0 ? (
                    <div key={`logo-${i}`} className="mx-10 flex items-center justify-center h-16">
                      <img 
                        src="/jupiter-ag-jup-logo.png" 
                        alt="Jupiter" 
                        className="h-12 w-auto"
                      />
                    </div>
                  ) : (
                    <div key={`question-${i}`} className="mx-10 flex items-center justify-center h-16">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted/70">
                        <HelpCircle className="h-7 w-7 text-muted-foreground/70" />
                      </div>
                    </div>
                  )
                ))}
              </Marquee>
              {/* Add gradient fade effect on edges */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
            </div>
          </div>
        </section>

        <section id="markets" className="bg-muted/50 py-24">
          <div className="container space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Markets We Cover
            </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <BarChart2 className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Perpetual Futures</h3>
                  <p className="text-sm text-muted-foreground">
                    Track and analyze your perpetual futures trades with precision on leading DEX platforms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <LineChart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Spot Trading</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive tracking and analysis for all your spot trading activity on decentralized exchanges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Globe2 className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Multi-Chain Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly track trades across multiple blockchains, including Solana, Ethereum, and more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="demo" className="py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See It In Action</h2>
              <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
                Watch how Golden Pocket automatically tracks and analyzes your DEX trading activity in real-time.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Golden Pocket Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="gap-2">
                <Play className="w-4 h-4" /> Get Started For Free
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2024 Golden Pocket. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}