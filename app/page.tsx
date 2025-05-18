import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/testimonial-card";
import ServiceCard from "@/components/service-card";
import GallerySection from "@/components/gallery-section";
import ContactForm from "@/components/contact-form";
import FaqSection from "@/components/faq-section";
import HeroImage from "@/public/a.jpg";
import BImage from "@/public/b.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
            <span className="text-xl font-semibold tracking-tight">
              Forever After
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Gallery
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Testimonials
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#packages"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Packages
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              FAQ
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </nav>
          <Button
            asChild
            className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600 shadow-sm shadow-pink-500/20 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <Link href="/consultation" className="flex items-center gap-2">
              Book a Consultation
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/90 to-white/80"></div>
          <div className="container px-4 md:px-6 relative mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center w-fit space-x-1 rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 ring-1 ring-inset ring-pink-300/20">
                  <span>Creating Unforgettable Moments</span>
                  <div className="h-1 w-1 rounded-full bg-pink-500"></div>
                  <span>Since 2014</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Creating Your <span className="text-pink-500">Perfect</span>{" "}
                    Wedding Day
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    We turn your wedding dreams into reality with personalized
                    planning, attention to detail, and a touch of magic.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/20 transition-all duration-300 hover:translate-y-[-2px]">
                    Book a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="group border-pink-200 hover:border-pink-300 transition-all duration-300"
                  >
                    View Our Work
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl shadow-2xl shadow-pink-500/10 transition-all duration-300 hover:shadow-pink-500/20 relative">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink-100 opacity-70"></div>
                  <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-pink-100 opacity-70"></div>
                  <Image
                    src={HeroImage}
                    width={1280}
                    height={720}
                    alt="Wedding planning hero image"
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 relative"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pink-50 rounded-bl-[100px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pink-50 rounded-tr-[100px] opacity-50"></div>
          <div className="container px-4 md:px-6 relative mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Wedding Planning
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From full-service planning to day-of coordination, we offer
                  customized services to fit your needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <ServiceCard
                title="Full Planning"
                description="Comprehensive planning from engagement to honeymoon, handling every detail so you can enjoy the journey."
                icon="Calendar"
                features={[
                  "Vendor Selection",
                  "Budget Management",
                  "Timeline Creation",
                  "Full Day Coordination",
                ]}
              />
              <ServiceCard
                title="Partial Planning"
                description="Perfect for couples who've started planning but need professional guidance to bring it all together."
                icon="ClipboardList"
                features={[
                  "Vendor Recommendations",
                  "Planning Assistance",
                  "Month-of Coordination",
                  "Timeline Management",
                ]}
              />
              <ServiceCard
                title="Day-of Coordination"
                description="We'll ensure your wedding day runs smoothly while you focus on creating memories that last a lifetime."
                icon="Clock"
                features={[
                  "Vendor Coordination",
                  "Ceremony Rehearsal",
                  "Timeline Execution",
                  "Emergency Kit",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-pink-50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Meet Your Wedding Planning Team
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With over 10 years of experience and 200+ weddings planned,
                    our passionate team is dedicated to creating unforgettable
                    celebrations that reflect your unique love story.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-pink-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Certified Wedding Planners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-pink-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Award-Winning Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-pink-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Personalized Approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-pink-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Stress-Free Experience</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-pink-500 hover:bg-pink-600">
                    Meet The Team
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={BImage}
                    width={600}
                    height={600}
                    alt="Wedding planner team"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
                  Our Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Beautiful Weddings We&apos;ve Created
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our gallery of real weddings and get inspired
                  for your special day.
                </p>
              </div>
            </div>
            <GallerySection />
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-100 opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-pink-100 opacity-50"></div>
          <div className="container px-4 md:px-6 relative mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Couples Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don&apos;t just take our word for it. Hear from the couples
                  whose wedding dreams we&apos;ve brought to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <TestimonialCard
                quote="They made our dream wedding a reality! Every detail was perfect, and we didn't have to worry about a thing."
                couple="Sarah & Michael"
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Working with Forever After was the best decision we made. They understood our vision and executed it flawlessly."
                couple="Jessica & David"
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Our wedding day was stress-free thanks to their incredible organization and attention to detail."
                couple="Emily & James"
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        <section id="packages" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Wedding Planning Packages
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the package that best fits your needs and budget. All
                  packages can be customized.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-transparent h-1/3" />
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-2xl font-bold">Day-of Coordination</h3>
                    <div className="text-5xl font-bold">$1,200</div>
                    <p className="text-gray-500">
                      Perfect for couples who&apos;ve planned everything but
                      want a professional to execute.
                    </p>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Pre-wedding consultation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Ceremony rehearsal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>10 hours of coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Vendor coordination</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-pink-500 hover:bg-pink-600">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden border-pink-500">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-transparent h-1/3" />
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-2xl font-bold">Partial Planning</h3>
                    <div className="text-5xl font-bold">$3,500</div>
                    <p className="text-gray-500">
                      For couples who need help with specific aspects of their
                      wedding planning.
                    </p>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>All day-of services</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Vendor recommendations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Design assistance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Monthly check-ins</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Budget management</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-pink-500 hover:bg-pink-600">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-transparent h-1/3" />
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-2xl font-bold">Full Planning</h3>
                    <div className="text-5xl font-bold">$7,500</div>
                    <p className="text-gray-500">
                      Comprehensive planning from engagement to honeymoon for a
                      stress-free experience.
                    </p>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>All partial planning services</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Unlimited consultations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Full vendor management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>RSVP management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-pink-500"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Honeymoon planning assistance</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-pink-500 hover:bg-pink-600">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-gray-500">
                All packages can be customized to fit your specific needs.
                Contact us for a custom quote.
              </p>
              <Button
                variant="link"
                className="text-pink-500 hover:text-pink-600"
              >
                Request Custom Package
              </Button>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our wedding planning
                  services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <FaqSection />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80"></div>
          <div className="container px-4 md:px-6 relative mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Let&apos;s Plan Your{" "}
                    <span className="text-pink-500">Perfect</span> Day
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ready to start planning your dream wedding? Get in touch
                    with our team for a free consultation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors duration-300">
                      <Phone className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="group-hover:text-pink-500 transition-colors duration-300">
                      (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="group-hover:text-pink-500 transition-colors duration-300">
                      hello@foreverafter.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-pink-500" />
                    </div>
                    <span className="group-hover:text-pink-500 transition-colors duration-300">
                      123 Wedding Lane, Suite 101, Loveville, CA 90210
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-100 hover:text-pink-500 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-100 hover:text-pink-500 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-100 hover:text-pink-500 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-100 hover:text-pink-500 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-100 hover:text-pink-500 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border bg-background p-6 shadow-lg shadow-pink-500/5 backdrop-blur-sm">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-border bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-8 md:px-6 mx-auto">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="text-lg font-semibold tracking-tight">
              Forever After
            </span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:text-pink-500 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs hover:text-pink-500 transition-colors"
            >
              Privacy
            </Link>
          </nav>
          <div className="md:ml-auto flex gap-4">
            <p className="text-xs text-gray-500">
              © 2024 Forever After. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
