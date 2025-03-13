
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PricingTier = ({ 
  title, 
  price, 
  duration, 
  cashbackRate, 
  features, 
  recommended = false,
  ctaText = "Get Started" 
}: { 
  title: string;
  price: string;
  duration: string;
  cashbackRate: string;
  features: string[];
  recommended?: boolean;
  ctaText?: string;
}) => (
  <Card className={`flex flex-col ${recommended ? 'border-bharat-500 shadow-lg relative' : ''}`}>
    {recommended && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bharat-500 text-white px-4 py-1 rounded-full text-sm font-medium">
        Recommended
      </div>
    )}
    <CardHeader className={`pb-8 ${recommended ? 'bg-bharat-50 rounded-t-lg' : ''}`}>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <div className="mt-4 flex items-baseline gap-x-2">
        <span className="text-4xl font-extrabold">₹{price}</span>
        <span className="text-gray-500">/{duration}</span>
      </div>
      <CardDescription className="mt-4 text-lg">
        <span className="font-semibold text-bharat-600">{cashbackRate}</span> cashback rate
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="pt-6">
      <Button 
        asChild
        className={`w-full ${recommended ? 'bg-bharat-600 hover:bg-bharat-700' : 'bg-[#38b6ff] hover:bg-[#38b6ff]/90'}`}
      >
        <Link to="/dashboard">
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-bharat-700 to-bharat-900 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Choose Your Membership Plan
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Select the perfect plan to start saving with Bharat Rewards
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PricingTier
                  title="Basic"
                  price="100"
                  duration="10 days"
                  cashbackRate="5%"
                  features={[
                    "5% cashback on all partner purchases",
                    "Access to all cashback offers",
                    "Basic access to Bulk Buying Groups",
                    "Standard customer support",
                    "Gift card purchases"
                  ]}
                  ctaText="Start with Basic"
                />
                
                <PricingTier
                  title="Premium"
                  price="250"
                  duration="1 month"
                  cashbackRate="10%"
                  features={[
                    "10% cashback on all partner purchases",
                    "Priority access to limited deals",
                    "Full access to Bulk Buying Groups",
                    "Priority customer support",
                    "Discounted gift card purchases",
                    "Exclusive weekly promotions"
                  ]}
                  recommended={true}
                  ctaText="Choose Premium"
                />
                
                <PricingTier
                  title="Elite"
                  price="500"
                  duration="3 months"
                  cashbackRate="50%"
                  features={[
                    "50% cashback on all partner purchases",
                    "First access to all new deals",
                    "VIP access to Bulk Buying Groups",
                    "24/7 premium customer support",
                    "Maximum gift card discounts",
                    "Exclusive monthly giveaways",
                    "Personal shopping assistant"
                  ]}
                  ctaText="Go Elite"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Detailed Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-6 text-gray-500 font-medium">Features</th>
                      <th className="py-4 px-6 text-gray-500 font-medium">Basic</th>
                      <th className="py-4 px-6 text-gray-500 font-medium">Premium</th>
                      <th className="py-4 px-6 text-gray-500 font-medium">Elite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Price</td>
                      <td className="py-4 px-6">₹100 / 10 days</td>
                      <td className="py-4 px-6">₹250 / 1 month</td>
                      <td className="py-4 px-6">₹500 / 3 months</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Cashback Rate</td>
                      <td className="py-4 px-6">5%</td>
                      <td className="py-4 px-6">10%</td>
                      <td className="py-4 px-6">50%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Withdrawal Minimum</td>
                      <td className="py-4 px-6">₹500</td>
                      <td className="py-4 px-6">₹250</td>
                      <td className="py-4 px-6">No minimum</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Processing Fee</td>
                      <td className="py-4 px-6">2%</td>
                      <td className="py-4 px-6">1%</td>
                      <td className="py-4 px-6">0%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Bulk Buying Access</td>
                      <td className="py-4 px-6">Basic</td>
                      <td className="py-4 px-6">Full</td>
                      <td className="py-4 px-6">VIP</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Gift Card Discounts</td>
                      <td className="py-4 px-6">Standard</td>
                      <td className="py-4 px-6">Enhanced</td>
                      <td className="py-4 px-6">Maximum</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Exclusive Giveaways</td>
                      <td className="py-4 px-6">
                        <span className="text-red-500">✗</span>
                      </td>
                      <td className="py-4 px-6">Weekly</td>
                      <td className="py-4 px-6">Weekly + Monthly</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6 font-medium">Customer Support</td>
                      <td className="py-4 px-6">Standard</td>
                      <td className="py-4 px-6">Priority</td>
                      <td className="py-4 px-6">24/7 Premium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What Our Members Say</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Priya Sharma",
                    location: "Mumbai",
                    testimonial: "I recovered my Premium membership fee in just two weeks with the cashback I earned. This is the best rewards program I've ever joined!",
                    plan: "Premium Member",
                    rating: 5
                  },
                  {
                    name: "Rahul Patel",
                    location: "Delhi",
                    testimonial: "The bulk buying groups are amazing. I got a high-end coffee maker for 30% less than the market price. Bharat Rewards pays for itself.",
                    plan: "Elite Member",
                    rating: 5
                  },
                  {
                    name: "Ananya Singh",
                    location: "Bangalore",
                    testimonial: "Started with Basic to test it out, then immediately upgraded to Elite. The 50% cashback is real and the support team is incredibly helpful.",
                    plan: "Elite Member",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gold-500 fill-gold-500" />
                        ))}
                      </div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location} • {testimonial.plan}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">"{testimonial.testimonial}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
              <p className="text-lg mb-8">
                Have questions about our membership plans? Find quick answers below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Button asChild variant="outline" className="justify-start">
                  <Link to="/faqs#cashback">How does cashback work?</Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link to="/faqs#bulk-buying">What is Bharat Power+?</Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link to="/faqs#general">Can I change my plan later?</Link>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <Link to="/faqs#gift-cards">How do gift cards work?</Link>
                </Button>
              </div>
              <div className="mt-8">
                <Button 
                  asChild
                  variant="link"
                  className="text-bharat-600"
                >
                  <Link to="/faqs">View all FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-bharat-700 to-bharat-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Start Saving Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of members who are already enjoying exclusive rewards and discounts
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-white text-bharat-800 hover:bg-gray-100"
              >
                <Link to="/dashboard">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
