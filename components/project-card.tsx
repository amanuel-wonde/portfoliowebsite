import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, User } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/lib/projects-data"

interface ProjectCardProps {
  project: Project
  showFullDetails?: boolean
}

export function ProjectCard({ project, showFullDetails = false }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Featured</Badge>}
      </div>

      <CardHeader className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
          {showFullDetails && (
            <Badge variant="outline" className="text-xs whitespace-nowrap">
              {project.category.replace("-", " ").toUpperCase()}
            </Badge>
          )}
        </div>
        <CardDescription className="text-base leading-relaxed">
          {showFullDetails ? project.longDescription : project.description}
        </CardDescription>

        {showFullDetails && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Completed {new Date(project.completedDate).toLocaleDateString()}</span>
            </div>
            {project.client && (
              <div className="text-sm">
                <span className="text-muted-foreground">Client: </span>
                <span className="font-medium">{project.client}</span>
              </div>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, showFullDetails ? project.tags.length : 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {!showFullDetails && project.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tags.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex gap-3">
          <Button size="sm" asChild className="flex-1">
            <Link href={`/projects/${project.id}`}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View Details
            </Link>
          </Button>
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
