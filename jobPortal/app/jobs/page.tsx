"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { JobCard } from "@/components/JobCard"
import { SearchBar } from "@/components/SearchBar"
import { FilterSidebar } from "@/components/FilterSidebar"
import { Button } from "@/components/ui/Button"
import { AdjustmentsHorizontalIcon, Squares2X2Icon, ListBulletIcon } from "@heroicons/react/24/outline"

const mockJobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechNepal",
    location: "Kathmandu",
    type: "Full-time",
    salary: "Rs. 50,000 - 80,000",
    tags: ["React", "JavaScript", "CSS", "TypeScript"],
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
    tags: ["Writing", "SEO", "Marketing", "Content Strategy"],
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
    tags: ["Photoshop", "Illustrator", "Branding", "UI Design"],
    remote: false,
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "4",
    title: "Digital Marketing Specialist",
    company: "Growth Agency",
    location: "Kathmandu",
    type: "Full-time",
    salary: "Rs. 40,000 - 60,000",
    tags: ["Facebook Ads", "Google Ads", "Analytics", "Social Media"],
    remote: false,
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "5",
    title: "Backend Developer",
    company: "StartupNepal",
    location: "Remote",
    type: "Full-time",
    salary: "Rs. 60,000 - 90,000",
    tags: ["Node.js", "Python", "MongoDB", "AWS"],
    remote: true,
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "6",
    title: "Data Analyst",
    company: "FinTech Nepal",
    location: "Lalitpur",
    type: "Full-time",
    salary: "Rs. 45,000 - 70,000",
    tags: ["Excel", "Python", "SQL", "Tableau"],
    remote: false,
    logo: "/placeholder.svg?height=60&width=60",
  },
]

export default function JobsPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredJobs, setFilteredJobs] = useState(mockJobs)

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Find Your Perfect Job</h1>
            <p className="text-slate-600 mb-6">Discover {filteredJobs.length} opportunities waiting for you</p>
            <SearchBar />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="lg:hidden mb-4">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full">
                <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>

            <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <FilterSidebar onFilterChange={setFilteredJobs} jobs={mockJobs} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600">Showing {filteredJobs.length} jobs</p>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Squares2X2Icon className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <ListBulletIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Job Grid */}
            <motion.div
              layout
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                >
                  <JobCard job={job} />
                </motion.div>
              ))}
            </motion.div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <AdjustmentsHorizontalIcon className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">No jobs found</h3>
                <p className="text-slate-600">Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
