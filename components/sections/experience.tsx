import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Digital Addis",
    role: "Senior Full-Stack Developer",
    period: "2025 - Present",
    description:
      "Lead development of scalable web applications serving 100k+ users.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Mentored 3 junior developers and established coding standards",
    ],
    logo: "/digital-addis-logo.webp",
  },
  {
    company: "Wegegta Technologies",
    role: "Full-Stack Developer and Project Manager",
    period: "2023 - 2025",
    description:
      "Developed and maintained multiple client projects using modern web technologies.",
    achievements: [
      "Built 15+ responsive web applications from concept to deployment",
      "Implemented automated testing reducing bugs by 60%",
    ],
    logo: "/wegegta_technologies_logo.jpeg",
  },
  {
    company: "Micro Sun And Solutions PLC",
    role: "Full-Stack Developer and Intern Supervisor",
    period: "2022 - 2023",
    description: "Created user interfaces for a fast-growing fintech startup.",
    achievements: [
      "Designed and implemented the company's design system",
      "Improved user engagement by 35% through UX improvements",
    ],
    logo: "/micro-sun.jpeg",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance px-2">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2">
                      <div>
                        <CardTitle className="text-lg sm:text-xl leading-tight">
                          {exp.role}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base font-medium text-accent">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="self-start text-xs sm:text-sm"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-accent mr-2 flex-shrink-0">
                          •
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
