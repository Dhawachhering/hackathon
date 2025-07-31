"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Tag } from "@/components/ui/Tag"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  tags: string[]
  remote: boolean
  logo: string
}

interface FilterSidebarProps {
  jobs: Job[]
  onFilterChange: (filteredJobs: Job[]) => void
}

export function FilterSidebar({ jobs, onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState({
    jobType: [] as string[],
    location: [] as string[],
    remote: false,
    skills: [] as string[],
  })

  const jobTypes = ["Full-time", "Part-time", "Freelance", "Contract", "Internship"]
  const locations = ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Chitwan"]
  const allSkills = Array.from(new Set(jobs.flatMap((job) => job.tags)))

  useEffect(() => {
    let filtered = jobs

    // Filter by job type
    if (filters.jobType.length > 0) {
      filtered = filtered.filter((job) => filters.jobType.includes(job.type))
    }

    // Filter by location
    if (filters.location.length > 0) {
      filtered = filtered.filter((job) => filters.location.includes(job.location))
    }

    // Filter by remote
    if (filters.remote) {
      filtered = filtered.filter((job) => job.remote)
    }

    // Filter by skills
    if (filters.skills.length > 0) {
      filtered = filtered.filter((job) => filters.skills.some((skill) => job.tags.includes(skill)))
    }

    onFilterChange(filtered)
  }, [filters, jobs, onFilterChange])

  const handleFilterChange = (category: keyof typeof filters, value: string | boolean) => {
    setFilters((prev) => {
      if (category === "remote") {
        return { ...prev, [category]: value as boolean }
      }

      const currentValues = prev[category] as string[]
      const newValues = currentValues.includes(value as string)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value as string]

      return { ...prev, [category]: newValues }
    })
  }

  const clearFilters = () => {
    setFilters({
      jobType: [],
      location: [],
      remote: false,
      skills: [],
    })
  }

  const hasActiveFilters =
    filters.jobType.length > 0 || filters.location.length > 0 || filters.remote || filters.skills.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-md p-6 border border-slate-200"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <XMarkIcon className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Job Type */}
        <div>
          <h4 className="font-medium text-slate-700 mb-3">Job Type</h4>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.jobType.includes(type)}
                  onChange={() => handleFilterChange("jobType", type)}
                  className="rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                />
                <span className="ml-2 text-slate-600">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-medium text-slate-700 mb-3">Location</h4>
          <div className="space-y-2">
            {locations.map((location) => (
              <label key={location} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.location.includes(location)}
                  onChange={() => handleFilterChange("location", location)}
                  className="rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                />
                <span className="ml-2 text-slate-600">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Remote */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.remote}
              onChange={(e) => handleFilterChange("remote", e.target.checked)}
              className="rounded border-slate-300 text-sky-500 focus:ring-sky-500"
            />
            <span className="ml-2 text-slate-600 font-medium">Remote Only</span>
          </label>
        </div>

        {/* Skills */}
        <div>
          <h4 className="font-medium text-slate-700 mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {allSkills.slice(0, 12).map((skill) => (
              <Tag
                key={skill}
                variant={filters.skills.includes(skill) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFilterChange("skills", skill)}
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
