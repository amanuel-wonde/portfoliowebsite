import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-balance px-2">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="px-2 sm:px-0">
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions that make a difference. I
                specialize in modern web technologies and love turning complex
                problems into simple, beautiful designs.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or enjoying a good cup of
                coffee while sketching out my next big idea.
              </p>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Python",
                    "PostgreSQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">
                      13+
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Projects Completed
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">
                      4+
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Years Experience
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">
                      100%
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Client Satisfaction
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
