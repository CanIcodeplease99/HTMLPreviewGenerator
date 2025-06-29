import { useState, useEffect } from "react";
import { Phone, MapPin, Star, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import beforeImage from "@assets/before_1751053394564.jpeg";
import afterImage from "@assets/after_1751053412924.jpeg";
import rimWork1 from "@assets/IMG_6137_1751054937545.jpeg";
import rimWork2 from "@assets/IMG_6139_1751054952515.jpeg";

const services = [
  {
    title: "Diamond Cut Restoration",
    description: "Precision machining for that factory-fresh two-tone finish",
    icon: "💎",
    gradient: "from-blue-400 to-purple-600"
  },
  {
    title: "Mirror Polish Finish",
    description: "Chrome-like shine that reflects perfection",
    icon: "✨",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Curb Damage Repair",
    description: "Expert restoration of scratches and scuffs",
    icon: "🔧",
    gradient: "from-green-400 to-blue-500"
  },
  {
    title: "Powder Coating",
    description: "Durable color finishes in any shade you want",
    icon: "🎨",
    gradient: "from-pink-400 to-red-500"
  },
  {
    title: "Wheel Straightening",
    description: "Fix bent rims for safer, smoother driving",
    icon: "⚡",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    title: "Custom Finishes",
    description: "Matte, satin, or specialty coatings available",
    icon: "🎯",
    gradient: "from-indigo-400 to-cyan-500"
  }
];

const testimonials = [
  {
    name: "Michael S.",
    location: "Randburg",
    rating: 5,
    text: "Amazing work on my BMW rims! They look better than new. Professional service and fair pricing.",
    service: "Diamond Cut"
  },
  {
    name: "Sarah K.",
    location: "Sandton",
    rating: 5,
    text: "Fixed my curb damage perfectly. You can't even tell where the damage was. Highly recommend!",
    service: "Curb Repair"
  },
  {
    name: "David M.",
    location: "Johannesburg CBD",
    rating: 5,
    text: "Quick turnaround and excellent results. My alloys have that mirror finish I was looking for.",
    service: "Mirror Polish"
  }
];

const beforeAfterImages = [
  {
    id: 1,
    service: "Diamond Cut Restoration",
    description: "Scratched alloy restored to factory finish",
    gradient: "from-red-500 to-green-500"
  },
  {
    id: 2,
    service: "Curb Damage Repair", 
    description: "Severe curb rash completely eliminated",
    gradient: "from-orange-500 to-blue-500"
  },
  {
    id: 3,
    service: "Mirror Polish",
    description: "Dull surface transformed to mirror shine",
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function Landing() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/27785482261?text=Hi! I'm interested in rim repair services from Group 20 Wheels", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+27785482261");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-sm shadow-2xl sticky top-0 z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                <span className="text-white font-bold text-lg">G20</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">Group 20 Wheels</h1>
                <p className="text-xs text-purple-200">Rim Restoration Specialists</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleCallClick}
                className="hidden sm:flex glass-effect text-white border-white/30 hover:bg-white/20 transition-all duration-300"
                variant="outline"
                size="sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Workshop Background */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Workshop Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900">
          {/* Workshop texture overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, transparent 20%, rgba(100, 116, 139, 0.4) 21%, rgba(100, 116, 139, 0.4) 34%, transparent 35%, transparent),
              linear-gradient(0deg, rgba(71, 85, 105, 0.3) 50%, transparent 50%),
              radial-gradient(circle at 80% 50%, transparent 20%, rgba(71, 85, 105, 0.4) 21%, rgba(71, 85, 105, 0.4) 34%, transparent 35%, transparent)
            `,
            backgroundSize: '75px 50px, 20px 20px, 75px 50px'
          }}></div>
          {/* Tool shadows and workshop elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full blur-sm"></div>
            <div className="absolute top-20 right-20 w-24 h-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-8 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-full blur-sm"></div>
          </div>
          {/* Animated workshop lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-red-500/10 to-pink-500/10 animate-shimmer"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 px-6 py-2 text-sm font-bold animate-pulse">
              🏆 Johannesburg's #1 Rim Specialists
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Restore Your Rims to
              <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse"> Perfection</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              South Africa's premier rim restoration specialists. Expert diamond cutting, custom finishes, and professional repairs. 
              Transform damaged wheels into showroom quality with industry-leading techniques and guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-10 py-4 text-xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Get Free Quote on WhatsApp
              </Button>
              <Button
                onClick={handleCallClick}
                size="lg"
                className="glass-effect text-white border-2 border-white/30 hover:bg-white/20 px-10 py-4 text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3" />
                +27 78 548 2261
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">Free Quotes</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">Same Day Service</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">12 Month Warranty</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-semibold">Mobile Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery - Real Customer Results */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              See Our Amazing Results
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Real transformations from our Johannesburg workshop
            </p>
          </div>
          
          {/* Featured Before/After - Your Actual Work */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border-0">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Before Image */}
                  <div className="relative group">
                    <img
                      src={beforeImage}
                      alt="Damaged rim before restoration"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20"></div>
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                      BEFORE
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-effect text-white p-3 rounded-lg">
                        <p className="font-semibold">Damaged & Worn Rim</p>
                        <p className="text-sm opacity-90">Scratched, dull surface needing restoration</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative group">
                    <img
                      src={afterImage}
                      alt="Restored rim after professional treatment"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                      AFTER
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-effect text-white p-3 rounded-lg">
                        <p className="font-semibold">Perfectly Restored</p>
                        <p className="text-sm opacity-90">Mirror finish, like-new appearance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Center Arrow - Removed per user request */}
                
                {/* Bottom CTA */}
                <div className="p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    This Could Be Your Rim!
                  </h3>
                  <p className="text-purple-100 mb-6 text-lg">
                    Professional restoration that brings your wheels back to life
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* More of Our Work - Real Photos */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
              More of Our Expert Work
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-white to-gray-50 border-0 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={rimWork1}
                      alt="Professional rim restoration work"
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      QUALITY WORK
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Restoration</h4>
                    <p className="text-gray-600 mb-4">Expert craftsmanship delivering perfect results</p>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Similar Work Done
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-white to-gray-50 border-0 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={rimWork2}
                      alt="High-quality rim repair service"
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      EXPERT FINISH
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Diamond Cut Restoration</h4>
                    <p className="text-gray-600 mb-4">Attention to detail that makes the difference</p>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>


        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Our Rim Restoration Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Professional wheel repair and customization in Johannesburg
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50 border-0 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className={`text-5xl mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white inline-block transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Quote on Request</span>
                    </div>
                    <Button
                      onClick={handleWhatsAppClick}
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-lg py-6`}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Over 500+ satisfied customers across Gauteng Province
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 shadow-xl bg-gradient-to-br from-white to-gray-50 border-0 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-bold text-gray-900">5/5</span>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Absolutely incredible work! My damaged BMW rims look better than new. 
                The diamond cut finish is flawless. Best rim repair in Johannesburg!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Mthembu</p>
                  <p className="text-gray-600">Sandton • BMW Owner</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-xl bg-gradient-to-br from-white to-gray-50 border-0 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-bold text-gray-900">5/5</span>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Professional service with same-day turnaround! My Mercedes rims had severe curb damage - now they're perfect. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-900">Michael van der Merwe</p>
                  <p className="text-gray-600">Randburg • Mercedes Owner</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-xl bg-gradient-to-br from-white to-gray-50 border-0 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-bold text-gray-900">5/5</span>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Outstanding quality and fair pricing. They came to my office for collection and delivery. Excellent customer service throughout!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  T
                </div>
                <div>
                  <p className="font-bold text-gray-900">Thabo Mokone</p>
                  <p className="text-gray-600">Midrand • Audi Owner</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">500+</div>
                <p className="text-gray-700 font-semibold">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">5★</div>
                <p className="text-gray-700 font-semibold">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">12</div>
                <p className="text-gray-700 font-semibold">Month Warranty</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">8+</div>
                <p className="text-gray-700 font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              We Service All of Gauteng
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Mobile collection and delivery available across the province
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Johannesburg Metro</h3>
              <p className="text-gray-600 text-sm">Sandton • Randburg • Rosebank • Fourways • Midrand</p>
            </Card>

            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pretoria Areas</h3>
              <p className="text-gray-600 text-sm">Centurion • Pretoria CBD • Hatfield • Menlyn • Brooklyn</p>
            </Card>

            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">East & West Rand</h3>
              <p className="text-gray-600 text-sm">Bedfordview • Kempton Park • Roodepoort • Krugersdorp</p>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Collection & Delivery</h3>
            <p className="text-gray-700 text-lg mb-6">We come to you! Free pickup and delivery within 25km of Johannesburg CBD</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-600">
              <span>• No transport hassles</span>
              <span>• Same day turnaround available</span>
              <span>• Fully insured transport</span>
              <span>• Professional handling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Restore Your Rims?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 500+ satisfied customers. Get your free quote today and experience South Africa's best rim restoration service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-10 py-6 text-xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp: +27 78 548 2261
            </Button>
            <Button
              onClick={handleCallClick}
              size="lg"
              className="glass-effect text-white border-2 border-white/30 hover:bg-white/20 px-10 py-6 text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">G20</span>
                </div>
                <div>
                  <h3 className="font-bold text-2xl">Group 20 Wheels</h3>
                  <p className="text-purple-200 text-sm">South Africa's Premier Rim Specialists</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                South Africa's leading rim restoration specialists. Expert diamond cutting, mirror polishing, and professional repairs with industry-leading techniques and guaranteed results.
              </p>
              <div className="flex space-x-4 mb-6">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button
                  onClick={handleCallClick}
                  variant="outline"
                  size="sm"
                  className="text-white border-purple-400 hover:bg-purple-500/20"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  12 Month Warranty
                </div>
                <div className="flex items-center text-blue-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Free Collection
                </div>
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Same Day Service
                </div>
                <div className="flex items-center text-yellow-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  500+ Happy Customers
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Our Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">• Diamond Cut Restoration</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Mirror Polish Finish</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Curb Damage Repair</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Rim Straightening</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Custom Powder Coating</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Wheel Refurbishment</li>
                <li className="hover:text-white transition-colors cursor-pointer">• Alloy Wheel Repair</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Contact & Areas</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center hover:text-white transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  <div>
                    <p className="font-semibold">+27 78 548 2261</p>
                    <p className="text-sm text-gray-400">WhatsApp & Calls</p>
                  </div>
                </div>
                <div className="flex items-center hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="font-semibold">Johannesburg, SA</p>
                    <p className="text-sm text-gray-400">Serving all Gauteng</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold text-white mb-3">Service Areas:</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>• Johannesburg Metro</p>
                  <p>• Pretoria & Centurion</p>
                  <p>• East & West Rand</p>
                  <p>• Sandton & Randburg</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2025 Group 20 Wheels. All rights reserved. | South Africa's Leading Rim Restoration Specialists
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-white transition-colors cursor-pointer">Warranty Info</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full w-16 h-16 shadow-2xl animate-bounce hover:animate-pulse transform hover:scale-110 transition-all duration-300"
          size="lg"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
}