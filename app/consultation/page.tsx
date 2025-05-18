import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Heart, MapPin, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConsultationForm from "@/components/consultation-form";
import ConsultationFaq from "@/components/consultation-faq";
import ConsultationTestimonial from "@/components/consultation-testimonial";

export default function ConsultationPage() {
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
              href="/#services"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/#gallery"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Gallery
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Testimonials
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/#packages"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Packages
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              FAQ
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-pink-500 transition-colors relative group"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600 shadow-sm shadow-pink-500/20 transition-all duration-300 hover:translate-y-[-2px]">
            Book Consultation
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
        <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80"></div>
          <div className="container px-4 md:px-6 relative mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-pink-500 hover:text-pink-600 transition-colors mb-6 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-1 w-fit rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 ring-1 ring-inset ring-pink-300/20">
                  <span>Free 30-Minute Consultation</span>
                  <div className="h-1 w-1 rounded-full bg-pink-500"></div>
                  <span>No Obligation</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Book Your{" "}
                    <span className="text-pink-500">Wedding Planning</span>{" "}
                    Consultation
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Take the first step toward your dream wedding. Our
                    consultation is a chance to discuss your vision, ask
                    questions, and see if we&apos;re the right fit for your
                    special day.
                  </p>
                </div>
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <Clock className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">30-Minute Session</h3>
                      <p className="text-sm text-gray-500">
                        Complimentary, no-obligation consultation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <Calendar className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Flexible Scheduling</h3>
                      <p className="text-sm text-gray-500">
                        Weekday, evening, and weekend appointments available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                      <MapPin className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Multiple Options</h3>
                      <p className="text-sm text-gray-500">
                        In-person, phone, or video consultation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl shadow-2xl shadow-pink-500/10 transition-all duration-300 hover:shadow-pink-500/20 relative">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink-100 opacity-70"></div>
                  <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-pink-100 opacity-70"></div>
                  <Image
                    src="/placeholder.svg?height=720&width=1280&text=Wedding+Consultation"
                    width={1280}
                    height={720}
                    alt="Wedding consultation"
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                  What to Expect
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Your Consultation Experience
                </h2>
                <p className="text-gray-500 md:text-lg">
                  Our consultation is designed to be informative, inspiring, and
                  tailored to your needs.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-lg shadow-pink-500/5 border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-100 rounded-full opacity-30 scale-[1.2] blur-md"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <span className="text-xl font-bold text-pink-500">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Get to Know Each Other</h3>
                <p className="text-gray-500">
                  We&apos;ll start by learning about you as a couple, your love
                  story, and your wedding vision.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-lg shadow-pink-500/5 border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-100 rounded-full opacity-30 scale-[1.2] blur-md"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <span className="text-xl font-bold text-pink-500">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Discuss Your Needs</h3>
                <p className="text-gray-500">
                  We&apos;ll explore your wedding priorities, budget
                  considerations, and the level of support you&apos;re looking
                  for.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-lg shadow-pink-500/5 border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-100 rounded-full opacity-30 scale-[1.2] blur-md"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <span className="text-xl font-bold text-pink-500">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Explore Next Steps</h3>
                <p className="text-gray-500">
                  We&apos;ll outline how we can help, answer your questions, and
                  discuss potential packages and availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-pink-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                  Consultation Options
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Choose Your Preferred Format
                </h2>
                <p className="text-gray-500 md:text-lg">
                  We offer multiple ways to connect, making it convenient for
                  you to meet with us.
                </p>
              </div>
            </div>

            <Tabs defaultValue="in-person" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-pink-50 p-1 grid grid-cols-3 h-auto">
                  <TabsTrigger
                    value="in-person"
                    className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm py-3 px-4"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>In-Person</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="video"
                    className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm py-3 px-4"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Video className="h-5 w-5" />
                      <span>Video Call</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="phone"
                    className="data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm py-3 px-4"
                  >
                    <div className="flex flex-col items-center gap-2">
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Phone Call</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="in-person" className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Meet at Our Studio
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Visit our beautiful planning studio where you can see
                        our design samples, photo albums, and get a feel for our
                        style in person.
                      </p>
                      <ul className="space-y-2">
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
                          <span>See design samples and inspiration boards</span>
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
                          <span>Browse through our portfolio albums</span>
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
                          <span>Enjoy a complimentary beverage</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">
                          <strong>Location:</strong> 123 Wedding Lane, Suite
                          101, Loveville, CA 90210
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>Hours:</strong> Monday-Friday 9am-6pm,
                          Saturday 10am-4pm
                        </p>
                      </div>
                    </div>
                    <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Our+Studio"
                        fill
                        alt="Our wedding planning studio"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="video" className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Virtual Consultation
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Connect with us from anywhere in the world via Zoom,
                        Google Meet, or your preferred video platform.
                      </p>
                      <ul className="space-y-2">
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
                          <span>Face-to-face conversation from your home</span>
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
                          <span>Screen sharing for portfolio review</span>
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
                          <span>Digital presentation of our services</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">
                          <strong>Platforms:</strong> Zoom, Google Meet,
                          Microsoft Teams, FaceTime
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>Hours:</strong> Flexible scheduling including
                          evenings and weekends
                        </p>
                      </div>
                    </div>
                    <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Video+Call"
                        fill
                        alt="Video consultation"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="phone" className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Phone Consultation
                      </h3>
                      <p className="text-gray-500 mb-4">
                        A convenient option when you&apos;re on the go or prefer
                        a voice conversation to discuss your wedding plans.
                      </p>
                      <ul className="space-y-2">
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
                          <span>Quick and convenient from anywhere</span>
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
                          <span>Follow-up email with digital materials</span>
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
                          <span>Perfect for initial discussions</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">
                          <strong>Phone:</strong> (555) 123-4567
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>Hours:</strong> Flexible scheduling including
                          evenings and weekends
                        </p>
                      </div>
                    </div>
                    <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600&text=Phone+Call"
                        fill
                        alt="Phone consultation"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-pink-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="space-y-4 mb-8">
                  <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                    Book Your Session
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Schedule Your Consultation
                  </h2>
                  <p className="text-gray-500">
                    Fill out the form to request your preferred consultation
                    time and format. We&apos;ll confirm your appointment within
                    24 hours.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <ConsultationForm />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                    Consultation FAQ
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Common Questions
                  </h2>
                  <p className="text-gray-500">
                    Find answers to frequently asked questions about our
                    consultation process.
                  </p>
                </div>
                <ConsultationFaq />
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                    Client Experiences
                  </div>
                  <h3 className="text-2xl font-bold">What Our Clients Say</h3>
                </div>
                <div className="grid gap-4">
                  <ConsultationTestimonial
                    quote="Our consultation was so helpful! We went in feeling overwhelmed and left with a clear vision and excitement for our wedding."
                    couple="Rebecca & Thomas"
                    image="/placeholder.svg?height=100&width=100"
                  />
                  <ConsultationTestimonial
                    quote="The team was so attentive during our consultation. They asked all the right questions and really understood what we wanted."
                    couple="Aisha & James"
                    image="/placeholder.svg?height=100&width=100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 ring-1 ring-inset ring-pink-300/20">
                Ready to Begin?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Start Your Wedding Planning Journey Today
              </h2>
              <p className="text-gray-500 md:text-lg">
                Book your consultation and take the first step toward creating
                the wedding of your dreams.
              </p>
              <Button className="mt-4 bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/20 transition-all duration-300 hover:translate-y-[-2px] text-lg px-8 py-6 h-auto">
                Book Your Consultation Now
              </Button>
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
