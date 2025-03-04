"use client"

import logo from "@/assets/logo.png";
import resumePreview from "@/assets/resume-preview.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>(Array(3).fill(false));

  const toggleAnswer = (index: number) => {
    setVisibleAnswers((prev) => {
      const newVisibleAnswers = [...prev];
      newVisibleAnswers[index] = !newVisibleAnswers[index];
      return newVisibleAnswers;
    });
  };

  return (
    <main className="min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 px-5 py-12 text-center text-gray-900 md:flex-row md:text-start lg:gap-12">
      <div className=" flex-col md:flex-row">
        <div className=" items-center justify-center space-y-3 flex flex-col">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto md:ms-0"
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Create the{" "}
            <span className="inline-block bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Perfect Resume
            </span>{" "}
            in Minutes
          </h1>
          <p className="text-lg text-gray-500">
            With our <strong className="font-bold">AI Resume Builder</strong>, crafting a professional resume has never been easier! 
            Whether you're a seasoned professional or just starting out, our intuitive tool guides you through the process, 
            ensuring your resume stands out. 
            <Link href="/how-it-works" className="text-blue-600 underline cursor-pointer"> Discover how it works and get started today!</Link>
          </p>
          <Button asChild size="lg" variant="premium">
            <Link href="/resumes">Get Started</Link>
          </Button>


        </div>
        <div className="mt-6 md:mt-0 flex items-center justify-center">
          <Image
            src={resumePreview}
            alt="Resume preview"
            width={600}
            className="shadow-md lg:rotate-[1.5deg]"
          />
        </div>

        <div>

          <section className="mt-16">
                  <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                      title="AI-Powered"
                      description="Our AI analyzes your input to create tailored resumes."
                      icon="🤖"
                    />
                    <FeatureCard
                      title="ATS-Friendly"
                      description="Ensure your resume passes Applicant Tracking Systems."
                      icon="✅"
                    />
                    <FeatureCard
                      title="Multiple Formats"
                      description="Download your resume in PDF, DOCX, or TXT formats."
                      icon="📄"
                    />
                  </div>
                  <p className="text-lg text-gray-500 mt-6">
                    With our <strong className="font-bold">AI Resume Builder</strong>, crafting a professional resume has never been easier! 
                    Whether you're a seasoned professional or just starting out, our intuitive tool guides you through the process, 
                    ensuring your resume stands out. 
                    <Link href="/how-it-works" className="text-blue-600 underline cursor-pointer"> Discover how it works and get started today!</Link>
                  </p>
                </section>

                <section className="mt-16">
                  <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard
                      quote="ResumeGenius AI helped me land my dream job! The AI-generated resume was spot-on."
                      author="Sarah K., Software Engineer"
                    />
                    <TestimonialCard
                      quote="I was skeptical at first, but the quality of the resume blew me away. Highly recommended!"
                      author="John D., Marketing Manager"
                    />
                    <TestimonialCard
                      quote="The ATS-friendly feature is a game-changer. I'm getting more callbacks than ever before."
                      author="Emily R., Recent Graduate"
                    />
                  </div>
                </section>

                <section className="mt-16">
                  <h2 className="text-3xl font-bold text-center mb-8">Simple Pricing</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingCard
                      title="Basic"
                      price="$9.99"
                      features={[
                        "1 AI-generated resume",
                        "1 format (PDF)",
                        "Basic ATS optimization",
                      ]}
                    />
                    <PricingCard
                      title="Pro"
                      price="$19.99"
                      features={[
                        "Unlimited AI-generated resumes",
                        "Multiple formats (PDF, DOCX, TXT)",
                        "Advanced ATS optimization",
                        "Cover letter generation",
                      ]}
                    />
                    <PricingCard
                      title="Premium"
                      price="$29.99"
                      features={[
                        "All Pro features",
                        "LinkedIn profile optimization",
                        "Priority customer support",
                        "Resume performance analytics",
                      ]}
                    />
                  </div>
                </section>

                <section className="mt-16">
                  <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                  <div className="max-w-2xl mx-auto space-y-4">
                    <div className="border rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold cursor-pointer hover:text-blue-600" onClick={() => toggleAnswer(0)}>
                        How does ResumeGenius AI work?
                      </h3>
                      <p className={`text-gray-600 ${visibleAnswers[0] ? '' : 'hidden'}`} id="answer-0">
                        ResumeGenius AI uses advanced machine learning algorithms to analyze your input and generate a tailored, professional resume. It considers industry standards, job requirements, and best practices to create an optimized resume for you.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold cursor-pointer hover:text-blue-600" onClick={() => toggleAnswer(1)}>
                        Is my information secure?
                      </h3>
                      <p className={`text-gray-600 ${visibleAnswers[1] ? '' : 'hidden'}`} id="answer-1">
                        Yes, we take data security very seriously. All your information is encrypted and stored securely. We never share your personal data with third parties without your explicit consent.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold cursor-pointer hover:text-blue-600" onClick={() => toggleAnswer(2)}>
                        Can I edit my resume after it's generated?
                      </h3>
                      <p className={`text-gray-600 ${visibleAnswers[2] ? '' : 'hidden'}`} id="answer-2">
                        While our AI generates a great starting point, you have full control to edit, customize, and refine your resume to make it perfect for your needs.
                      </p>
                    </div>
                  </div>
                </section>
        </div>
          
      </div>

      
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="italic mb-4">"{quote}"</p>
        <p className="text-right font-semibold">- {author}</p>
      </CardContent>
    </Card>
  );
}

function PricingCard({ title, price, features }: { title: string; price: string; features: string[] }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-3xl font-bold mb-4">{price}<span className="text-sm font-normal">/month</span></p>
        <ul className="list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
        <Button className="w-full mt-4">Choose Plan</Button>
      </CardContent>
    </Card>
  );
}