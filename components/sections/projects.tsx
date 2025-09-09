"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { projectCategories, getProjectsByCategory } from "@/lib/projects-data"
import { ProjectCard } from "@/components/project-card"

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = getProjectsByCategory(selectedCategory)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance px-2">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
            A showcase of my recent work, featuring full-stack applications and creative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="text-xs sm:text-sm"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 4 && (
          <div className="text-center px-2">
            <Button variant="outline" size="lg" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : `View All ${filteredProjects.length} Projects`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
