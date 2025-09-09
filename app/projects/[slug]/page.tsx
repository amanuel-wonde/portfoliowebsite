import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ImageModal } from "@/components/ui/image-modal";
import { projects } from "@/lib/projects-data";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{project.category}</Badge>
                <Badge variant="outline">{project.status}</Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button asChild size="lg">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="lg" asChild>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="relative">
              <ImageModal
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-96 rounded-lg overflow-hidden bg-muted"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </ImageModal>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Project Timeline
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Started: {project.startDate}</div>
                  <div>Completed: {project.endDate}</div>
                  <div>Duration: {project.duration}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Team & Role
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Team Size: {project.teamSize}</div>
                  <div>My Role: {project.role}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Challenges & Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {project.challenges.map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-destructive">
                    Challenge
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {challenge.problem}
                  </p>
                  <h3 className="font-semibold mb-3 text-green-600">
                    Solution
                  </h3>
                  <p className="text-muted-foreground">{challenge.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="space-y-2">
                  <ImageModal
                    src={image.url || "/placeholder.svg"}
                    alt={image.caption}
                    className="aspect-video rounded-lg overflow-hidden bg-muted"
                  >
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.caption}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </ImageModal>
                  {image.caption && (
                    <p className="text-sm text-muted-foreground text-center">
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Explore More Projects</h2>
          <Button asChild size="lg">
            <Link href="/#projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
