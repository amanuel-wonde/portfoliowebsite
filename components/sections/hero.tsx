import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { ImageModal } from "@/components/ui/image-modal";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <ImageModal
              src="/professional-headshot.jpg"
              alt="Professional headshot"
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center"
            >
              <img
                src="/professional-headshot.jpg"
                alt="Professional headshot"
                className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover"
              />
            </ImageModal>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            {/* Text content container */}
            <div className="max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-balance">
                  Hi, I'm <span className="text-accent">Amanuel Wonde</span>
                </span>
                <br />
                <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
                  Full-Stack Developer
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                I create exceptional digital experiences through clean code,
                thoughtful design, and innovative solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 bg-transparent"
                asChild
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
