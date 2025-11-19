import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function App() {
  const [daysLeft, setDaysLeft] = useState(13)

  useEffect(() => {
    const end = new Date('2025-12-02T23:59:59').getTime()
    const timer = setInterval(() => {
      const left = Math.ceil((end - Date.now()) / (1000 * 60 * 60 * 24))
      setDaysLeft(left > 0 ? left : 0)
    }, 3600000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="min-h-screen bg-white text-dark font-sans">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
            poster="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-corridor-with-columns-31892-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <img 
              src="https://i.ibb.co/gbY4JfYQ/classic-homes-remodeling-logo.png" 
              alt="ClassicHomesRemodeling.com"
              className="mx-auto h-32 mb-8"
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              ClassicHomesRemodeling.com
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8">
              The #1 Domain in Luxury Home Remodeling</p>
            <Badge className="bg-gold hover:bg-gold/90 text-black text-xl px-8 py-4 mb-12">
              Only {daysLeft} Days Remaining – Ends December 2, 2025
            </Badge>
            <form className="max-w-2xl mx-auto bg-white/95 backdrop-blur p-10 rounded-2xl shadow-2xl">
              <h2 className="text-4xl font-bold mb-8">Make Your Confidential Offer</h2>
              <div className="space-y-4">
                <Input placeholder="Your Name" className="h-12 text-lg" required />
                <Input type="email" placeholder="Email Address" className="h-12 text-lg" required />
                <Input placeholder="Offer Amount ($USD)" className="h-12 text-lg" required />
              <Button className="w-full h-14 text-xl font-bold bg-gold hover:bg-dark text-black hover:text-gold transition">
                Submit Offer – Response in 24h
              </Button>
            </form>
          </div>
        </section>

        {/* Trust */}
        <section className="py-24 bg-light">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-5xl font-bold mb-12">100% Secure Transaction</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <Card className="p-8">
                <p className="text-6xl mb-4">Escrow.com</p>
                <p className="text-xl">Buyer & Seller Protected</p>
              </Card>
              <Card className="p-8">
                <p className="text-6xl mb-4">24-72h</p>
                <p className="text-xl">Fast Transfer</p>
              </Card>
              <Card className="p-8">
                <p className="text-6xl mb-4">Lease-to-Own</p>
                <p className="text-xl">From ~$18,500/mo</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparable Sales */}
        <section className="py-24 bg-gray-50">
          <h2 className="text-5xl font-bold text-center mb-16">Recent Comparable Sales</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div>
              <p className="text-5xl font-bold text-gold">HomeRemodeling.com</p>
              <p className="text-3xl mt-4">$325,000</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gold">LuxuryHomes.com</p>
              <p className="text-3xl mt-4">$460,000</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-gold">KitchenRemodel.com</p>
              <p className="text-3xl mt-4">$689,000</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-dark text-white text-center">
          <h2 className="text-6xl font-bold mb-8">
            Secure This Domain Before Your Competitor Does
          </h2>
          <Button className="bg-gold hover:bg-white text-black hover:text-dark px-16 py-8 text-2xl font-bold rounded-lg transition">
            Make Your Offer Now
          </Button>
        </section>
      </div>
    </>
  )
}
