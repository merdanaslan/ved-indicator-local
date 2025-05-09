import Link from "next/link"
import { ArrowRight, BarChart2, Globe2, LineChart, Play, HelpCircle, ArrowDownToLine, Clock, LayoutDashboard, User, Link2, PenTool } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WordRotate } from "@/components/magicui/word-rotate"
import { Marquee } from "@/components/magicui/marquee"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
            <Link href="#compatible-dexes" className="transition-colors hover:text-primary">
              DEXes
            </Link>
            <Link href="#features" className="transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#get-started" className="transition-colors hover:text-primary">
              Get Started
            </Link>
            <Link href="#faq" className="transition-colors hover:text-primary">
              FAQ
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
                    <p className="text-sm text-muted-foreground">Start Instantly</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compatible Futures Exchanges</h2>
              <p className="text-lg text-muted-foreground">
                We're starting with Jupiter Perps. More DEXes coming soon.
              </p>
            </div>
            
            <div className="mt-8 relative overflow-hidden">
              <Marquee className="py-4 [--duration:90s] [--gap:2.5rem]" repeat={8}>
                {/* Create a consistent pattern - 1 Jupiter logo followed by 3 question marks */}
                {[...Array(4)].map((_, groupIndex) => (
                  <React.Fragment key={`group-${groupIndex}`}>
                    {/* Jupiter Logo */}
                    <div className="mx-8 flex items-center justify-center h-20">
                      <img 
                        src="/jupiter-ag-jup-logo.png" 
                        alt="Jupiter" 
                        className="h-12 w-auto"
                      />
                    </div>
                    {/* Three Question Marks */}
                    {[...Array(3)].map((_, i) => (
                      <div key={`qmark-${groupIndex}-${i}`} className="mx-8 flex items-center justify-center h-20">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted/70">
                          <HelpCircle className="h-7 w-7 text-muted-foreground/70" />
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </Marquee>
              {/* Add gradient fade effect on edges */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted/50 py-16">
          <div className="container space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trade Smarter, Trade Better
              </h2>
              <p className="text-lg text-muted-foreground">
                More features are rolled out regularly — so you're always ahead of the curve.
              </p>
            </div>
            
            <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <LineChart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Gain insights with detailed performance metrics, profit/loss analysis, and trading patterns visualization.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-2">
                  <ArrowDownToLine className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Automatic Trade Import</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter your wallet and automatically import all your trades from supported DEXes. No manual entry required.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Clock className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Trade History Timeline</h3>
                  <p className="text-sm text-muted-foreground">
                    View your complete trading history with detailed information on each transaction in a chronological timeline.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-2">
                  <LayoutDashboard className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">DEX-First by Design</h3>
                  <p className="text-sm text-muted-foreground">
                    GoldenPocket is built with a DEX-first architecture — fully optimized for decentralized trading workflows.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="get-started" className="py-16 bg-background">
          <div className="container space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Started In Just A Few Minutes</h2>
            </div>
            
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className="flex items-center justify-center">
                    <User className="h-20 w-20 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold">Create an account</h3>
                </div>
                
                {/* Horizontal line 1 - between account and exchange */}
                <div className="absolute hidden md:block h-[1px] bg-gray-200 top-10 left-[26%] w-[15%]"></div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className="flex items-center justify-center">
                    <Link2 className="h-20 w-20 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold">Link your exchanges</h3>
                </div>
                
                {/* Horizontal line 2 - between exchange and tracking */}
                <div className="absolute hidden md:block h-[1px] bg-gray-200 top-10 right-[26%] w-[15%]"></div>
                
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className="flex items-center justify-center">
                    <PenTool className="h-20 w-20 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold">Start tracking</h3>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="px-8 text-base font-medium bg-primary hover:bg-primary/90">
                Get Started for Free
              </Button>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-background">
          <div className="container space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">FAQ</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-medium">
                    Is GoldenPocket free to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes!
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-medium">
                    Which exchanges are supported?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We currently support Jupiter Perpetuals. More integrations are on the way.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-medium">
                    Can I connect more than one wallet?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We currently support one wallet connection at a time. Multi-wallet support is planned for a future release.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-medium">
                    How does GoldenPocket sync my trades?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    GoldenPocket combines onchain data parsing with exchange API integrations to accurately detect, match, and sync your trading history — no manual input required.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-xl font-medium">
                    How far back can you import my trading history?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Currently, GoldenPocket syncs trade data starting from January 1st, 2025. We're working on extending this window in future versions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="cta" className="py-24 bg-muted/50">
          <div className="container max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Become The Trader You Always Wanted To Be</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trade with clarity, consistency, and confidence.
              </p>
            </div>
            
            <div>
              <Button size="lg" className="px-8 py-6 text-lg font-medium">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Golden Pocket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}