"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, ClockIcon, CurrencyDollarIcon, BookmarkIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/24/solid"
import { Button } from "@/components/ui/Button"
import { Tag } from "@/components/ui/Tag"
import { useState } from "react"

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

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Image
            src={job.logo || "/placeholder.svg"}
            alt={`${job.company} logo`}
            width={48}
            height={48}
            className="rounded-xl"
          />
          <div>
            <h3 className="font-semibold text-slate-800 text-lg">{job.title}</h3>
            <p className="text-slate-600">{job.company}</p>
          </div>
        </div>
        <button onClick={() => setIsSaved(!isSaved)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
          {isSaved ? (
            <BookmarkSolidIcon className="w-5 h-5 text-amber-500" />
          ) : (
            <BookmarkIcon className="w-5 h-5 text-slate-400" />
          )}
        </button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-slate-600 text-sm">
          <MapPinIcon className="w-4 h-4 mr-2" />
          {job.location}
          {job.remote && (
            <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
              Remote
            </span>
          )}
        </div>

        <div className="flex items-center text-slate-600 text-sm">
          <ClockIcon className="w-4 h-4 mr-2" />
          {job.type}
        </div>

        <div className="flex items-center text-slate-600 text-sm">
          <CurrencyDollarIcon className="w-4 h-4 mr-2" />
          {job.salary}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.slice(0, 3).map((tag) => (
          <Tag key={tag} variant="secondary">
            {tag}
          </Tag>
        ))}
        {job.tags.length > 3 && <Tag variant="outline">+{job.tags.length - 3} more</Tag>}
      </div>

      <div className="flex space-x-2">
        <Link href={`/jobs/${job.id}`} className="flex-1">
          <Button className="w-full bg-gradient-to-r from-sky-500 to-rose-500 hover:from-sky-600 hover:to-rose-600">
            View Details
          </Button>
        </Link>
        <Button variant="outline" size="sm" className="px-4 bg-transparent">
          Apply
        </Button>
      </div>
    </motion.div>
  )
}
