
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const generalFaqs = [
    {
      question: "What is Bharat Rewards?",
      answer: "Bharat Rewards is India's fastest-growing rewards club that helps members save money through cashback offers, discounted gift cards, and our unique bulk buying program called Bharat Power+."
    },
    {
      question: "How do I become a member?",
      answer: "You can become a member by signing up on our platform and choosing one of our membership plans: Basic (₹100 for 10 days), Premium (₹250 for 1 month), or Elite (₹500 for 3 months). Each plan offers different cashback rates and benefits."
    },
    {
      question: "Can I try Bharat Rewards before committing to a membership?",
      answer: "Currently, we don't offer a free trial, but we do have a 10-day Basic membership for just ₹100, which is a great way to experience our platform before committing to a longer plan."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team via email at support@bharatrewards.com or through the Help section in your dashboard once you've logged in. We typically respond within 24 hours."
    }
  ];

  const cashbackFaqs = [
    {
      question: "How does the cashback program work?",
      answer: "When you shop through our affiliate links, you earn cashback at the specified rate for that retailer. The cashback is tracked automatically and credited to your Bharat Rewards wallet once the purchase is confirmed by the retailer, usually within 30-60 days."
    },
    {
      question: "What are the cashback rates?",
      answer: "Cashback rates vary by membership tier and retailer. Basic members earn 5% cashback, Premium members earn 10% cashback, and Elite members earn up to 50% cashback on eligible purchases through our partner retailers."
    },
    {
      question: "When and how can I withdraw my cashback?",
      answer: "Once your cashback balance reaches the minimum threshold of ₹250, you can withdraw it directly to your UPI account through your dashboard. Withdrawals are processed within 3-5 business days."
    },
    {
      question: "Why hasn't my cashback been credited yet?",
      answer: "Cashback typically takes 30-60 days to be confirmed by retailers. This waiting period allows for potential returns or cancellations. If it's been longer than 60 days, please contact our support team with your order details."
    }
  ];

  const bulkBuyingFaqs = [
    {
      question: "What is Bharat Power+?",
      answer: "Bharat Power+ is our unique bulk buying program where we negotiate on behalf of our members collectively to secure substantial discounts on high-quality products. We operate on a small margin (as low as 10%) to pass maximum savings to our members."
    },
    {
      question: "How do bulk buying groups work?",
      answer: "Members can join specific product campaigns in our Bulk Buying section. Once enough members join a campaign, we negotiate directly with manufacturers or distributors to secure wholesale prices. Members then pay for their orders, and products are delivered directly to them."
    },
    {
      question: "What kinds of products are available through Bharat Power+?",
      answer: "We offer a wide range of products including groceries, electronics, home appliances, and wellness products. Our selection constantly evolves based on member demand and seasonal availability."
    },
    {
      question: "How much can I save through bulk buying groups?",
      answer: "Savings typically range from 15-30% off retail prices, depending on the product category and the number of members participating in each campaign."
    }
  ];

  const giftCardFaqs = [
    {
      question: "How do I purchase gift cards?",
      answer: "You can browse and purchase gift cards from the Gift Cards section in your dashboard after logging in. Simply select the brand, denomination, and quantity, then complete the payment process."
    },
    {
      question: "How are gift cards delivered?",
      answer: "Digital gift cards are delivered instantly to your registered email address and are also accessible in your dashboard. Physical gift cards, if available, are shipped to your registered address within 3-5 business days."
    },
    {
      question: "Can I get a refund for gift cards?",
      answer: "Due to the digital nature of most gift cards, we generally do not offer refunds. However, if you encounter any issues with your purchase, please contact our support team immediately."
    },
    {
      question: "Do gift cards have an expiration date?",
      answer: "Gift card expiration policies vary by brand. The expiration date, if any, will be clearly indicated on the gift card itself or in the gift card details before purchase."
    }
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
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Find answers to the most common questions about Bharat Rewards
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <a href="#general" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-lg font-semibold">General</span>
                </a>
                <a href="#cashback" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-lg font-semibold">Cashback</span>
                </a>
                <a href="#bulk-buying" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-lg font-semibold">Bulk Buying</span>
                </a>
                <a href="#gift-cards" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-lg font-semibold">Gift Cards</span>
                </a>
              </div>

              <div id="general" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">General Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {generalFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`general-item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div id="cashback" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Cashback Rewards</h2>
                <Accordion type="single" collapsible className="w-full">
                  {cashbackFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`cashback-item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div id="bulk-buying" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Bharat Power+ (Bulk Buying)</h2>
                <Accordion type="single" collapsible className="w-full">
                  {bulkBuyingFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`bulk-item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div id="gift-cards" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Gift Cards</h2>
                <Accordion type="single" collapsible className="w-full">
                  {giftCardFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`gift-item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-lg mb-8">
                We're here to help! Get in touch with our customer support team for assistance.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-[#38b6ff] hover:bg-[#38b6ff]/90"
              >
                <Link to="/contact">
                  Contact Support
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

export default FAQs;
