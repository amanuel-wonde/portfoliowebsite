import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Your Name</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer passionate about creating exceptional digital
              experiences through clean code and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/amanuel-wonde"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/amanuel-wonde"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="mailto:amanuelwt@gmail.com"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Your Name. All rights reserved. Built with Next.js
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
