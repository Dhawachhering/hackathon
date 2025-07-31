"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline"

export function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")

  const handleSearch = () => {
    // Handle search logic here
    console.log({ keyword, location, category })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-lg p-4 border border-slate-200"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Keyword Input */}
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Job title, skills, or company"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>

        {/* Location Input */}
        <div className="flex-1 relative">
          <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">All Locations</option>
            <option value="kathmandu">Kathmandu</option>
            <option value="pokhara">Pokhara</option>
            <option value="lalitpur">Lalitpur</option>
            <option value="bhaktapur">Bhaktapur</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        {/* Category Input */}
        <div className="flex-1 relative">
          <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="">All Categories</option>
            <option value="technology">Technology</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="writing">Writing</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="bg-gradient-to-r from-sky-500 to-rose-500 hover:from-sky-600 hover:to-rose-600 px-8"
        >
          <MagnifyingGlassIcon className="w-5 h-5 md:mr-2" />
          <span className="hidden md:inline">Search</span>
        </Button>
      </div>
    </motion.div>
  )
}
