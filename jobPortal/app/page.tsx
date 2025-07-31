"use client"

import { motion } from "framer-motion"
import { SearchBar } from "@/components/SearchBar"
import { JobCard } from "@/components/JobCard"
import { Button } from "@/components/ui/Button"
import { ArrowRightIcon, BriefcaseIcon, UsersIcon, MapPinIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const featuredJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechNepal",
    location: "Kathmandu",
    type: "Full-time",
    salary: "Rs. 50,000 - 80,000",
    tags: ["React", "JavaScript", "CSS"],
    remote: false,
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "2",
    title: "Content Writer",
    company: "Digital Agency",
    location: "Remote",
    type: "Freelance",
    salary: "Rs. 25,000 - 40,000",
    tags: ["Writing", "SEO", "Marketing"],
    remote: true,
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "Creative Studio",
    location: "Pokhara",
    type: "Part-time",
    salary: "Rs. 30,000 - 45,000",
    tags: ["Photoshop", "Illustrator", "Branding"],
    remote: false,
    logo: "/placeholder.svg?height=60&width=60",
  },
]

const stats = [
  { icon: BriefcaseIcon, label: "Active Jobs", value: "2,500+" },
  { icon: UsersIcon, label: "Job Seekers", value: "15,000+" },
  { icon: MapPinIcon, label: "Cities", value: "25+" },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Work. <br />
              <span className="text-amber-200">Find Yourself.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Connecting Nepali youth to opportunities that matter</p>
            <div className="max-w-2xl mx-auto">
              <SearchBar />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-400 to-rose-400 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</h3>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Opportunities</h2>
            <p className="text-xl text-slate-600">Hand-picked jobs perfect for young professionals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/jobs">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-rose-500 hover:from-sky-600 hover:to-rose-600"
              >
                View All Jobs
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Your journey to the perfect job starts here</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Profile",
                description: "Build your professional profile and showcase your skills",
                color: "from-sky-400 to-sky-600",
              },
              {
                step: "02",
                title: "Find Jobs",
                description: "Browse thousands of opportunities tailored for you",
                color: "from-rose-400 to-rose-600",
              },
              {
                step: "03",
                title: "Get Hired",
                description: "Apply with confidence and land your dream job",
                color: "from-amber-400 to-amber-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl mb-6`}
                >
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-slate-300 mb-8">Join thousands of young professionals finding their path</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-rose-500 hover:from-sky-600 hover:to-rose-600"
                >
                  Get Started Today
                </Button>
              </Link>
              <Link href="/jobs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
                >
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
