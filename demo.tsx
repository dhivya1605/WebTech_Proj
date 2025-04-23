"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Mic, Calendar, MapPin, Users, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AnchoringWorks() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sahithya B A
            </motion.span>
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent">
            Anchoring & Hosting Works
          </h1>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          I've hosted numerous events, from intimate gatherings to large-scale conferences with thousands of attendees.
          My experience spans technical events, cultural programs, corporate functions, and podcasts.
        </p>

        <Tabs defaultValue="events" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:max-w-md mx-auto">
            <TabsTrigger value="events">Live Events</TabsTrigger>
            <TabsTrigger value="podcast">Podcast</TabsTrigger>
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {liveEvents.map((event, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <EventCard
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    location={event.location}
                    audience={event.audience}
                    highlight={event.highlight}
                    imageUrl={event.imageUrl}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="podcast" className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeIn} className="md:col-span-2">
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=300"
                            alt="Sahithya Versatile's Voices"
                            width={300}
                            height={300}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent">
                          Sahithya Versatile's Voices
                        </h2>
                        <p className="text-muted-foreground mt-2">
                          A podcast exploring life, technology, and storytelling through engaging conversations and
                          narratives.
                        </p>

                        <div className="mt-4 space-y-4">
                          <div>
                            <h3 className="font-medium">About the Show</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Sahithya Versatile's Voices is a podcast where I conceptualize engaging episode topics
                              exploring life, tech, and storytelling. I craft compelling narratives on tech innovation
                              and work-life balance, share motivational stories inspiring listeners to embrace life's
                              diversity, and manage end-to-end production, fostering an engaged listener community.
                            </p>
                          </div>

                          <div>
                            <h3 className="font-medium">Platform</h3>
                            <p className="text-sm text-muted-foreground mt-1">Available on Spotify for Podcasters</p>
                          </div>

                          <div>
                            <h3 className="font-medium">Recent Episodes</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="text-sm">
                                <span className="font-medium">Episode 10:</span> Balancing Tech Career and Creative
                                Pursuits
                              </li>
                              <li className="text-sm">
                                <span className="font-medium">Episode 9:</span> The Power of Storytelling in
                                Professional Growth
                              </li>
                              <li className="text-sm">
                                <span className="font-medium">Episode 8:</span> Finding Your Voice in a Digital World
                              </li>
                            </ul>
                          </div>

                          <Button
                            className="bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] hover:from-[#7c3aed] hover:to-[#a855f7]"
                            asChild
                          >
                            <Link href="https://open.spotify.com" target="_blank">
                              Listen on Spotify
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} className="md:col-span-2 mt-8">
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Featured Podcast Episode</h3>
                    <div className="aspect-video w-full bg-black rounded-md overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10">
                        <div className="text-center">
                          <Play className="h-16 w-16 text-[#8b5cf6] mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Video placeholder - Episode: Finding Your Voice in a Digital World
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {podcastEpisodes.map((episode, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10 p-3 flex-shrink-0">
                          <Mic className="h-5 w-5 text-[#8b5cf6]" />
                        </div>
                        <div>
                          <h3 className="font-bold">{episode.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{episode.description}</p>
                          <div className="flex items-center mt-3 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{episode.date}</span>
                            <span className="mx-2">•</span>
                            <span>{episode.duration}</span>
                          </div>
                          {episode.guest && (
                            <Badge className="mt-3 bg-gradient-to-r from-[#8b5cf6]/20 to-[#c084fc]/20 text-[#8b5cf6] hover:from-[#8b5cf6]/30 hover:to-[#c084fc]/30 border-none">
                              Guest: {episode.guest}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {corporateEvents.map((event, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <EventCard
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    location={event.location}
                    audience={event.audience}
                    highlight={event.highlight}
                    company={event.company}
                    imageUrl={event.imageUrl}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function EventCard({
  title,
  description,
  date,
  location,
  audience,
  highlight,
  company,
  imageUrl = "/placeholder.svg?height=200&width=300",
}: {
  title: string
  description: string
  date: string
  location: string
  audience: string
  highlight?: string
  company?: string
  imageUrl?: string
}) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-gradient-to-r from-[#8b5cf6]/10 to-[#c084fc]/10 p-3 flex-shrink-0">
            <Mic className="h-5 w-5 text-[#8b5cf6]" />
          </div>
          <div>
            <h3 className="font-bold">{title}</h3>
            {company && <p className="text-sm font-medium text-[#8b5cf6]">{company}</p>}
            <p className="text-sm text-muted-foreground mt-1">{description}</p>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{audience}</span>
              </div>
            </div>

            {highlight && (
              <div className="mt-3">
                <Badge className="bg-gradient-to-r from-[#8b5cf6]/20 to-[#c084fc]/20 text-[#8b5cf6] hover:from-[#8b5cf6]/30 hover:to-[#c084fc]/30 border-none">
                  {highlight}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const liveEvents = [
  {
    title: "Annual Tech Conference",
    description: "Hosted the main stage presentations and panel discussions for this major tech event.",
    date: "June 2023",
    location: "Chennai Convention Center",
    audience: "3,500+ attendees",
    highlight: "Flagship Event",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Women in Tech Summit",
    description: "Emceed the full-day program featuring keynote speakers and breakout sessions.",
    date: "March 2023",
    location: "Tech Park Auditorium",
    audience: "1,200+ attendees",
    highlight: "Featured Event",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "College Cultural Festival",
    description: "Main stage host for the three-day cultural extravaganza featuring performances and competitions.",
    date: "February 2022",
    location: "University Campus",
    audience: "4,500+ attendees",
    highlight: "Multi-day Event",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Startup Pitch Competition",
    description: "Hosted the pitch event where startups presented their ideas to potential investors.",
    date: "November 2022",
    location: "Innovation Hub",
    audience: "500+ attendees",
    highlight: "High-profile Judges",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Literary Festival",
    description: "Moderated author discussions and book launch events throughout the weekend.",
    date: "September 2022",
    location: "City Central Library",
    audience: "800+ attendees",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Technical Symposium",
    description: "Hosted the opening and closing ceremonies plus technical competitions.",
    date: "August 2021",
    location: "Engineering College",
    audience: "2,000+ attendees",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

const podcastEpisodes = [
  {
    title: "The Intersection of Technology and Creativity",
    description: "Exploring how technology enables new forms of creative expression and storytelling.",
    date: "May 15, 2024",
    duration: "45 min",
    guest: "Tech Creative Director",
  },
  {
    title: "Finding Balance in a Digital World",
    description: "Discussing strategies for maintaining work-life balance in an always-connected environment.",
    date: "April 30, 2024",
    duration: "38 min",
    guest: "Wellness Coach",
  },
  {
    title: "The Future of Work",
    description: "Examining how remote work and digital tools are reshaping our professional lives.",
    date: "April 15, 2024",
    duration: "42 min",
    guest: "HR Director",
  },
  {
    title: "Building Community Through Content",
    description: "How content creators can foster meaningful connections with their audience.",
    date: "March 30, 2024",
    duration: "40 min",
  },
]

const corporateEvents = [
  {
    title: "Annual Leadership Summit",
    description:
      "Hosted the company's flagship leadership event featuring executive presentations and strategy sessions.",
    date: "December 2023",
    location: "Corporate Headquarters",
    audience: "250+ executives",
    company: "Fortune 500 Technology Company",
    highlight: "Executive Event",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Product Launch Event",
    description: "Emceed the launch of a major new product line with live demonstrations and customer testimonials.",
    date: "October 2023",
    location: "Luxury Hotel Ballroom",
    audience: "500+ attendees",
    company: "Leading Software Company",
    highlight: "Media Coverage",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Employee Recognition Gala",
    description: "Hosted the annual awards ceremony celebrating employee achievements and milestones.",
    date: "February 2023",
    location: "Five-star Hotel",
    audience: "300+ employees",
    company: "Multinational Corporation",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Client Appreciation Event",
    description: "Emceed an evening of networking, entertainment, and recognition for key clients.",
    date: "November 2022",
    location: "Exclusive Venue",
    audience: "150+ VIP clients",
    company: "Financial Services Firm",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]
