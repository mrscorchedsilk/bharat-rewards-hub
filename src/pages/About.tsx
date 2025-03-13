
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, ShieldCheck, Users } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive to deliver the highest quality in everything we do, from customer service to product selection."
    },
    {
      icon: Heart,
      title: "Member-First",
      description: "Our members are at the heart of every decision we make. Your satisfaction is our top priority."
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      description: "We believe in complete transparency in our pricing, policies, and communications."
    },
    {
      icon: Users,
      title: "Community",
      description: "We build a vibrant community of like-minded members who share and benefit together."
    }
  ];

  const milestones = [
    { year: "2020", title: "The Beginning", description: "Bharat Rewards was founded with a vision to create a rewards program that truly benefits Indian consumers." },
    { year: "2021", title: "First 1,000 Members", description: "Reached our first milestone of 1,000 active members, validating our member-first approach." },
    { year: "2022", title: "Bharat Power+ Launch", description: "Launched our unique bulk buying program, allowing members to access premium products at wholesale prices." },
    { year: "2023", title: "National Expansion", description: "Expanded operations across India, partnering with major retailers and brands." },
    { year: "2024", title: "18,000+ Members", description: "Grew our community to over 18,000 active members, with significant cashback and savings milestones." }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-bharat-700 to-bharat-900 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                About Bharat Rewards
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                We're on a mission to help every Indian consumer save more and get more value through the power of community.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Bharat Rewards began with a simple question: why aren't Indian consumers getting the same level of rewards and benefits that are standard in other countries? We saw a gap in the market – while Indians are some of the most value-conscious shoppers in the world, the existing rewards programs weren't delivering true value.
                </p>
                <p>
                  Founded in 2020, we set out to create a rewards ecosystem that would genuinely benefit members through multiple avenues – cashback on everyday purchases, discounted gift cards, and most uniquely, our collective buying power program that gives members access to premium products at wholesale prices.
                </p>
                <p>
                  What makes us different is our commitment to passing maximum value to our members. While traditional programs keep most of the benefits, we operate on razor-thin margins, ensuring that our members receive the lion's share of the value we create through our partnerships and negotiations.
                </p>
                <p>
                  Today, with over 18,000 active members and growing daily, Bharat Rewards has become India's fastest-growing rewards club. But we're just getting started on our mission to revolutionize how Indians shop and save.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4">
                      <div className="p-3 bg-bharat-100 rounded-lg">
                        <value.icon className="h-6 w-6 text-bharat-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Founder's Story</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?auto=format&fit=crop&q=80&w=300&h=300" 
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Raj Sharma</h3>
                    <p className="text-gray-600 mb-1">Founder & CEO</p>
                    <div className="prose">
                      <p>
                        As someone who grew up in a middle-class family in a small town in India, I always understood the value of money and the importance of making every rupee count. After spending several years working in tech companies and seeing the rewards ecosystems in other countries, I was struck by how Indian consumers weren't getting similar benefits.
                      </p>
                      <p>
                        The turning point came when I organized a group buy for premium electronics among friends and family. By pooling our orders, we secured a 25% discount from the distributor. That's when I realized the untapped potential of collective buying power in India.
                      </p>
                      <p>
                        I founded Bharat Rewards with the vision of creating a platform where every Indian consumer could access better deals through collective action. What started as a simple WhatsApp group has now grown into a nationwide community with thousands of members who save money every day through our platform.
                      </p>
                      <p>
                        My promise to our members remains the same: we will always put your interests first and work tirelessly to deliver exceptional value in everything we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bharat-200"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-bharat-500"></div>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                        <div className="inline-block bg-bharat-600 text-white px-3 py-1 rounded mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                      <div className="w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-lg mb-8">
                Be part of India's fastest-growing rewards community and start saving today.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-[#38b6ff] hover:bg-[#38b6ff]/90"
              >
                <Link to="/pricing">
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

export default About;
