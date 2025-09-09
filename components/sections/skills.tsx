import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: "/react-logo.png" },
      { name: "Next.js", logo: "/nextjs-logo.png" },
      { name: "TypeScript", logo: "/typescript-logo.png" },
      { name: "Tailwind CSS", logo: "/tailwind-css-logo.png" },
      { name: "Vue.js", logo: "/vuejs-logo.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "/nodejs-logo.png" },
      { name: "Python", logo: "/python-logo.png" },
      { name: "PostgreSQL", logo: "/postgresql-logo.png" },
      { name: "MongoDB", logo: "/mongodb-logo.png" },
      { name: "Redis", logo: "/redis-logo.png" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", logo: "/docker-logo.png" },
      { name: "AWS", logo: "/aws-logo.png" },
      { name: "Vercel", logo: "/vercel-logo.png" },
      { name: "GitHub Actions", logo: "/github-actions-logo.png" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: "/git-logo.jpg" },
      { name: "Figma", logo: "/figma-logo.png" },
      { name: "VS Code", logo: "/vscode-logo.png" },
      { name: "Postman", logo: "/postman-logo.jpg" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance px-2">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
          {skillCategories.map((category) => (
            <Card key={category.title} className="h-full">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center text-center group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <img
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
