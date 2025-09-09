"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance px-2">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
            Ready to start your next project? Let's discuss how we can work
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto px-2 sm:px-0">
          {/* Contact Form */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">
                Send me a message
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              {submitStatus === "success" && (
                <Alert className="mb-4 sm:mb-6 border-green-200 bg-green-50 text-green-800">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Thank you for your message! I'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="mb-4 sm:mb-6 border-red-200 bg-red-50 text-red-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Something went wrong. Please try again or contact me
                    directly.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-xs sm:text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-xs sm:text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-xs sm:text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-xs sm:text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Let's connect
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you're a company looking to hire, or
                you're a fellow developer wanting to collaborate, I'd love to
                hear from you.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">Email</div>
                  <div className="text-muted-foreground text-sm">
                    amanuelwt@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">Phone</div>
                  <div className="text-muted-foreground text-sm">
                    +251 972 285 268
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">
                    Location
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Addis Ababa, Ethiopia
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20">
              <div className="text-center">
                <div className="text-base sm:text-lg font-medium mb-2">
                  Response Time
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">
                  &lt; 24 hours
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Average response time
                </div>
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-xs sm:text-sm">
                  Available for new projects
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Currently accepting new freelance and contract opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
