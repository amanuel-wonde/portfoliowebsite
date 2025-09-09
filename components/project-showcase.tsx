"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal } from "lucide-react"
import { projects, projectCategories } from "@/lib/projects-data"
import { ProjectCard } from "@/components/project-card"

export function ProjectShowcase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

  // Filter projects based on search, category, and tags
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedTags([])
  }

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Tag Filter */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by Technology</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent/10 transition-colors"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Active Filters & Clear */}
        {(searchTerm || selectedCategory !== "all" || selectedTags.length > 0) && (
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </span>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">No projects found matching your criteria</div>
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
