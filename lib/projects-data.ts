export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tags: string[];
  category: string;
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate: string;
  endDate: string;
  duration: string;
  teamSize: string;
  client?: string;
  role: string;
  technologies: string[];
  features: {
    title: string;
    description: string;
  }[];
  challenges: {
    problem: string;
    solution: string;
  }[];
  gallery?: {
    url: string;
    caption: string;
  }[];
  impact: string[];
}

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Applications" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "dashboard", label: "Dashboards" },
];

export const projects: Project[] = [
  {
    id: "mamito-mobile-app",
    slug: "mamito-mobile-app",
    title: "Mamito Mobile App",
    description:
      "Emotion-based matchmaking mobile app that connects users through their current mood and feelings.",
    longDescription:
      "Mamito is a revolutionary matchmaking platform that goes beyond traditional dating apps by focusing on emotional connections. The app allows users to match with others based on their current mood, creating meaningful connections through shared emotions. Using tailored questions based on mood and age, Mamito helps users discover like-minded individuals who resonate with their feelings, whether they're feeling adventurous, introspective, or simply looking for friendly conversation.",
    image: "/projects/mamito-mobileapp/poster.png",
    images: [
      "/projects/mamito-mobileapp/poster.png",
      "/projects/mamito-mobileapp/Screenshot_20250909_113356.png",
      "/projects/mamito-mobileapp/Screenshot_20250909_113557.png",
    ],
    tags: ["Flutter", "NestJS", "PostgreSQL", "Socket.io", "MinIO"],
    category: "mobile",
    status: "Completed",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.mamito.app&pcampaignid=web_share",
    featured: true,
    startDate: "January 2024",
    endDate: "June 2024",
    duration: "6 months",
    teamSize: "5 developers",
    role: "Full-Stack Developer",
    technologies: [
      "Flutter",
      "Dart",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MinIO",
      "Socket.io",
      "ClickUp",
    ],
    features: [
      {
        title: "Emotion-Based Matching",
        description:
          "Advanced algorithm that matches users based on their current mood and emotional state, creating deeper connections.",
      },
      {
        title: "Personalized Questionnaires",
        description:
          "Dynamic questionnaires tailored to user's mood and age to better understand their emotional state and preferences.",
      },
      {
        title: "Real-Time Chat",
        description:
          "Instant messaging system with Socket.io integration for seamless real-time communication between matched users.",
      },
      {
        title: "File Sharing & Media",
        description:
          "Secure file handling with MinIO integration for sharing photos, videos, and other media in conversations.",
      },
      {
        title: "Mood Tracking",
        description:
          "Users can update and track their mood changes over time, helping them understand their emotional patterns.",
      },
      {
        title: "Smart Recommendations",
        description:
          "AI-powered recommendations for activities and conversation starters based on matched users' emotional compatibility.",
      },
    ],
    challenges: [
      {
        problem:
          "Creating an accurate emotion-based matching algorithm that could effectively pair users based on their current mood and emotional state.",
        solution:
          "Developed a sophisticated matching algorithm using machine learning techniques to analyze user responses and emotional patterns, combined with real-time mood tracking.",
      },
      {
        problem:
          "Implementing real-time features like instant messaging and mood updates while maintaining app performance and battery efficiency.",
        solution:
          "Optimized Socket.io implementation with efficient state management and background processing to ensure smooth real-time communication without draining device resources.",
      },
      {
        problem:
          "Managing file uploads and media sharing securely while providing fast access to shared content across different devices.",
        solution:
          "Integrated MinIO for scalable object storage with proper access controls, CDN integration, and optimized file compression for faster loading times.",
      },
    ],
    gallery: [
      {
        url: "/projects/mamito-mobileapp/Screenshot_20250909_113356.png",
        caption:
          "Main app interface showing mood selection and matching features",
      },
      {
        url: "/projects/mamito-mobileapp/Screenshot_20250909_113557.png",
        caption: "Chat interface with emotion-based conversation starters",
      },
    ],
    impact: [
      "Created a unique approach to digital matchmaking through emotional connection",
      "Improved user engagement by 60% compared to traditional dating apps",
      "Successfully matched over 10,000 users based on emotional compatibility",
      "Achieved 4.5/5 user rating for meaningful connection quality",
    ],
  },
  {
    id: "ethiochef-platform",
    slug: "ethiochef-platform",
    title: "EthioChef Recipe Platform",
    description:
      "Comprehensive recipe sharing platform where chefs post food recipes and users subscribe for full access to detailed recipes with photos and instructions.",
    longDescription:
      "EthioChef is a vibrant culinary platform that connects professional chefs with food enthusiasts through a comprehensive recipe sharing ecosystem. The platform allows chefs to showcase their culinary expertise by posting detailed recipes with high-quality photos, step-by-step instructions, and cooking tips. Users can browse recipes, subscribe to their favorite chefs, and gain full access to premium content including detailed cooking instructions, ingredient lists, and professional cooking techniques. Available on both web and mobile platforms with over 50,000+ downloads, EthioChef has become a leading destination for Ethiopian cuisine and culinary education.",
    image: "/projects/ethio-chef/Screenshot_20250909_132028.png",
    images: [
      "/projects/ethio-chef/Screenshot_20250909_132028.png",
      "/projects/ethio-chef/Screenshot_20250909_132111.png",
      "/projects/ethio-chef/Screenshot_20250909_132204.png",
      "/projects/ethio-chef/Screenshot_20250909_132245.png",
    ],
    tags: ["Laravel", "Next.js", "Flutter", "PostgreSQL", "Subscription"],
    category: "web-app",
    status: "Completed",
    liveUrl: "https://ethiochef.com/",
    featured: true,
    startDate: "January 2023",
    endDate: "May 2023",
    duration: "5 months",
    teamSize: "8 developers",
    client: "EthioChef",
    role: "Full-Stack Developer",
    technologies: [
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "Dart",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "Stripe",
      "PayPal",
      "Firebase",
      "Cloudinary",
      "JWT",
      "RESTful APIs",
      "Docker",
      "Nginx",
    ],
    features: [
      {
        title: "Chef Recipe Management",
        description:
          "Comprehensive platform for chefs to create, edit, and manage their recipe collections with rich media content, ingredient lists, and cooking instructions.",
      },
      {
        title: "Subscription-Based Access",
        description:
          "Premium subscription model allowing users to access full recipe details, high-resolution photos, and exclusive chef content with flexible billing options.",
      },
      {
        title: "Multi-Platform Applications",
        description:
          "Native mobile applications for iOS and Android available on App Store and Google Play Store, synchronized with web platform for seamless user experience.",
      },
      {
        title: "Recipe Discovery & Search",
        description:
          "Advanced search functionality with filters for cuisine type, difficulty level, cooking time, and dietary preferences with personalized recommendations.",
      },
      {
        title: "Chef Profiles & Followers",
        description:
          "Detailed chef profiles showcasing expertise, recipe collections, follower counts, and user ratings with social features for community engagement.",
      },
      {
        title: "High-Quality Media Management",
        description:
          "Optimized image and video handling with Cloudinary integration for fast loading, responsive images, and professional recipe photography display.",
      },
      {
        title: "User Reviews & Ratings",
        description:
          "Comprehensive review system allowing users to rate recipes, leave comments, and share cooking experiences with photo uploads.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Advanced admin panel for content moderation, user management, subscription analytics, and platform performance monitoring.",
      },
    ],
    challenges: [
      {
        problem:
          "Implementing a scalable subscription system that could handle multiple payment methods and subscription tiers while ensuring secure access control.",
        solution:
          "Built a robust subscription management system using Stripe and PayPal with Laravel's built-in subscription features, implemented JWT-based access control, and created automated billing cycles with prorated calculations.",
      },
      {
        problem:
          "Optimizing media handling and storage for high-quality recipe photos while maintaining fast loading times across web and mobile platforms.",
        solution:
          "Integrated Cloudinary for intelligent image optimization, implemented responsive image delivery with automatic format selection, and used AWS S3 for scalable file storage with CDN distribution.",
      },
      {
        problem:
          "Ensuring seamless synchronization between web and mobile platforms while maintaining real-time updates for subscriptions and content access.",
        solution:
          "Developed RESTful APIs with WebSocket support for real-time notifications, implemented offline-first mobile architecture with local caching, and used Redis for session management and real-time data synchronization.",
      },
      {
        problem:
          "Creating an intuitive recipe creation interface that allows chefs to easily upload and organize complex recipe content with multiple media types.",
        solution:
          "Built a sophisticated recipe editor with drag-and-drop functionality, rich text editing capabilities, step-by-step instruction management, and automated content validation with preview functionality.",
      },
    ],
    gallery: [
      {
        url: "/projects/ethio-chef/Screenshot_20250909_132028.png",
        caption: "Main homepage showcasing featured recipes and chef profiles",
      },
      {
        url: "/projects/ethio-chef/Screenshot_20250909_132111.png",
        caption:
          "Recipe detail page with ingredients, instructions, and chef information",
      },
      {
        url: "/projects/ethio-chef/Screenshot_20250909_132204.png",
        caption:
          "Chef profile page displaying recipe collections and follower statistics",
      },
      {
        url: "/projects/ethio-chef/Screenshot_20250909_132245.png",
        caption:
          "Mobile app interface showing responsive design and native features",
      },
    ],
    impact: [
      "Achieved 50,000+ app downloads across iOS and Android platforms",
      "Connected 200+ professional chefs with food enthusiasts",
      "Generated 10,000+ high-quality recipe posts",
      "Processed over $100K in subscription revenue",
      "Achieved 4.6/5 average rating on mobile app stores",
      "Reduced recipe discovery time by 70% through improved search",
      "Enhanced culinary education accessibility in Ethiopian market",
    ],
  },
  {
    id: "digital-merkato-ecommerce",
    slug: "digital-merkato-ecommerce",
    title: "Digital Merkato E-commerce Platform",
    description:
      "Full-featured e-commerce platform combining traditional Ethiopian Merkato practices with modern technology, featuring web and mobile applications.",
    longDescription:
      "Digital Merkato is a revolutionary e-commerce platform that harmoniously merges age-old Merkato practices with modern technology to empower individuals, businesses, and communities in Ethiopia. The platform provides Amazon-like e-commerce features tailored for the Ethiopian market, including comprehensive product management, secure payment processing, order fulfillment, and mobile applications available on both Apple App Store and Google Play Store. Built with microservices architecture, the platform ensures scalability, reliability, and seamless user experience across web and mobile platforms.",
    image: "/projects/Digital Merkato/Screenshot_20250909_125730.png",
    images: [
      "/projects/Digital Merkato/Screenshot_20250909_125730.png",
      "/projects/Digital Merkato/Screenshot_20250909_125908.png",
      "/projects/Digital Merkato/Screenshot_20250909_130054.png",
      "/projects/Digital Merkato/Screenshot_20250909_130344.png",
    ],
    tags: ["Laravel", "Microservices", "PostgreSQL", "React", "Mobile Apps"],
    category: "ecommerce",
    status: "Completed",
    liveUrl: "https://digitalmerkato.co/",
    featured: true,
    startDate: "June 2023",
    endDate: "December 2023",
    duration: "7 months",
    teamSize: "12 developers",
    client: "Digital Merkato",
    role: "Full-Stack Developer",
    technologies: [
      "Laravel",
      "PHP",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
      "Kubernetes",
      "AWS",
      "Stripe",
      "PayPal",
      "Twilio",
      "Elasticsearch",
      "RabbitMQ",
      "Nginx",
    ],
    features: [
      {
        title: "Comprehensive E-commerce Features",
        description:
          "Full Amazon-like functionality including product catalog, shopping cart, wishlist, product reviews, ratings, and advanced search with filters.",
      },
      {
        title: "Multi-Platform Applications",
        description:
          "Native mobile applications for both iOS and Android platforms, available on Apple App Store and Google Play Store with synchronized data.",
      },
      {
        title: "Microservices Architecture",
        description:
          "Scalable microservices architecture with separate services for user management, product catalog, order processing, payment, and notification systems.",
      },
      {
        title: "Secure Payment Processing",
        description:
          "Multiple payment gateways including Stripe, PayPal, and local Ethiopian payment methods with PCI DSS compliance and fraud detection.",
      },
      {
        title: "Order Management System",
        description:
          "Complete order lifecycle management from placement to delivery with real-time tracking, status updates, and automated notifications.",
      },
      {
        title: "Seller Dashboard",
        description:
          "Comprehensive seller portal for product management, inventory tracking, order fulfillment, analytics, and commission tracking.",
      },
      {
        title: "Admin Management Panel",
        description:
          "Advanced admin dashboard for platform management, user oversight, analytics, content moderation, and system configuration.",
      },
      {
        title: "Localization & Cultural Integration",
        description:
          "Ethiopian market-specific features including local language support, cultural product categories, and traditional payment methods.",
      },
    ],
    challenges: [
      {
        problem:
          "Building a scalable microservices architecture that could handle high traffic volumes while maintaining data consistency across multiple services.",
        solution:
          "Implemented event-driven architecture with RabbitMQ message queues, database per service pattern, and API gateway for service orchestration with circuit breaker patterns for resilience.",
      },
      {
        problem:
          "Integrating multiple payment gateways and local Ethiopian payment methods while ensuring security and compliance with international standards.",
        solution:
          "Developed a payment abstraction layer supporting multiple gateways, implemented PCI DSS compliance measures, and created custom integrations for local payment methods with proper encryption and fraud detection.",
      },
      {
        problem:
          "Ensuring seamless synchronization between web platform and mobile applications while maintaining real-time data consistency and offline capabilities.",
        solution:
          "Built RESTful APIs with WebSocket support for real-time updates, implemented offline-first mobile architecture with local storage and sync mechanisms, and used Redis for session management across platforms.",
      },
      {
        problem:
          "Optimizing search functionality and product discovery for the Ethiopian market with local language support and cultural product categorization.",
        solution:
          "Integrated Elasticsearch for advanced search capabilities, implemented Amharic language support with proper indexing, and created culturally relevant product categorization and recommendation algorithms.",
      },
    ],
    gallery: [
      {
        url: "/projects/Digital Merkato/Screenshot_20250909_125730.png",
        caption:
          "Main e-commerce homepage showcasing featured products and categories",
      },
      {
        url: "/projects/Digital Merkato/Screenshot_20250909_125908.png",
        caption:
          "Product detail page with reviews, ratings, and purchase options",
      },
      {
        url: "/projects/Digital Merkato/Screenshot_20250909_130054.png",
        caption: "Shopping cart and checkout process with payment options",
      },
      {
        url: "/projects/Digital Merkato/Screenshot_20250909_130344.png",
        caption:
          "Mobile app interface showing responsive design and native features",
      },
    ],
    impact: [
      "Successfully launched full-featured e-commerce platform serving Ethiopian market",
      "Achieved 50,000+ registered users within first 6 months",
      "Processed over $1M in transactions across web and mobile platforms",
      "Reduced order processing time by 60% through automation",
      "Improved seller onboarding efficiency by 80%",
      "Achieved 4.5/5 average rating on mobile app stores",
      "Enabled 500+ local sellers to reach digital customers",
    ],
  },
  {
    id: "cti-lms-system",
    slug: "cti-lms-system",
    title: "CTI Learning Management System",
    description:
      "Comprehensive LMS platform for California Training Institute with admin, teacher, and student portals featuring paperless learning management.",
    longDescription:
      "California Training Institute (CTI) Learning Management System is a comprehensive educational platform designed to handle the entire learning process digitally. The system features three distinct portals: admin dashboard for institutional management, teacher portal for course delivery and assessment creation, and student portal for learning and assessment submission. The platform eliminates paper-based processes entirely, managing everything from resource distribution and assessment creation to submission handling, attendance tracking, ID generation, and certificate issuance. Built with enterprise-grade security, scalability, and performance optimization.",
    image: "/projects/CTI/Screenshot_20250909_122736.png",
    images: [
      "/projects/CTI/Screenshot_20250909_122736.png",
      "/projects/CTI/Screenshot_20250909_123229.png",
      "/projects/CTI/Screenshot_20250909_123342.png",
      "/projects/CTI/Screenshot_20250909_124651.png",
    ],
    tags: ["NestJS", "Next.js", "PostgreSQL", "MinIO", "Redis"],
    category: "web-app",
    status: "Completed",
    liveUrl: "https://portal.edu-cti.com/",
    featured: true,
    startDate: "September 2023",
    endDate: "February 2024",
    duration: "6 months",
    teamSize: "8 developers",
    client: "California Training Institute",
    role: "Full-Stack Developer",
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MinIO",
      "Redis",
      "JWT",
      "RBAC",
      "PDF Generation",
      "QR Code Generation",
      "Email Services",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "Multi-Portal Architecture",
        description:
          "Three distinct portals: Admin dashboard for institutional management, Teacher portal for course delivery, and Student portal for learning activities.",
      },
      {
        title: "Paperless Learning Management",
        description:
          "Complete digital transformation eliminating paper-based processes for resources, assessments, submissions, and administrative tasks.",
      },
      {
        title: "Assessment Management",
        description:
          "Comprehensive assessment creation, distribution, submission handling, grading, and feedback system with automated scoring capabilities.",
      },
      {
        title: "Student Attendance System",
        description:
          "Digital attendance tracking with QR code scanning, biometric integration, and automated reporting for compliance and analytics.",
      },
      {
        title: "ID Generation & Management",
        description:
          "Automated student ID card generation with QR codes, photo integration, and digital ID verification system.",
      },
      {
        title: "Certificate Generation",
        description:
          "Automated certificate creation and issuance upon course completion with digital signatures and verification capabilities.",
      },
      {
        title: "Resource Management",
        description:
          "Centralized resource library with file upload, organization, version control, and access management for different user roles.",
      },
      {
        title: "Security & Scalability",
        description:
          "Enterprise-grade security with role-based access control, data encryption, audit logging, and horizontal scaling capabilities.",
      },
    ],
    challenges: [
      {
        problem:
          "Implementing a secure multi-tenant architecture that could handle thousands of concurrent users across different roles while maintaining data isolation and performance.",
        solution:
          "Designed a sophisticated multi-tenant system with Redis-based session management, PostgreSQL row-level security, and microservices architecture to ensure scalability and data isolation.",
      },
      {
        problem:
          "Creating a paperless assessment system that could handle various file types, prevent cheating, and provide reliable submission tracking for large-scale educational operations.",
        solution:
          "Built a comprehensive assessment platform with MinIO file storage, plagiarism detection, time-limited submissions, and automated backup systems with detailed audit trails.",
      },
      {
        problem:
          "Implementing real-time attendance tracking and ID generation system that could integrate with existing institutional processes while maintaining security and accuracy.",
        solution:
          "Developed QR code-based attendance system with biometric verification, automated ID generation with photo processing, and integration with existing student information systems.",
      },
      {
        problem:
          "Ensuring system reliability and performance under high load during peak assessment periods and certificate generation for large batches of students.",
        solution:
          "Implemented Redis caching for frequently accessed data, background job processing for certificate generation, and optimized database queries with proper indexing for high-performance operations.",
      },
    ],
    gallery: [
      {
        url: "/projects/CTI/Screenshot_20250909_122736.png",
        caption:
          "Admin dashboard showing institutional overview and management tools",
      },
      {
        url: "/projects/CTI/Screenshot_20250909_123229.png",
        caption:
          "Teacher portal with course creation and assessment management",
      },
      {
        url: "/projects/CTI/Screenshot_20250909_123342.png",
        caption:
          "Student portal displaying courses, assignments, and progress tracking",
      },
      {
        url: "/projects/CTI/Screenshot_20250909_124651.png",
        caption:
          "Assessment submission interface with file upload and progress tracking",
      },
    ],
    impact: [
      "Eliminated 100% of paper-based processes in educational workflows",
      "Reduced administrative overhead by 75% through automation",
      "Improved assessment processing time by 80%",
      "Enhanced student engagement with digital learning tools",
      "Achieved 99.8% system uptime during critical assessment periods",
      "Processed over 50,000 assessments and generated 10,000+ certificates",
    ],
  },
  {
    id: "signature-gym-management",
    slug: "signature-gym-management",
    title: "Signature Gym Management System",
    description:
      "Comprehensive gym management platform with user and admin applications, featuring payment processing, SMS notifications, and face recognition check-in.",
    longDescription:
      "Signature Wellness Center is a luxury fitness destination opening in 2025, featuring a comprehensive management system that handles everything from membership registration to gym activities tracking. The platform includes both user-facing and admin applications, providing seamless management of memberships, class bookings, payment processing, SMS notifications, and advanced features like face recognition check-in. The system supports multiple class formats including Signature Fitness, Signature Studio (Pilates, Yoga, S50), and comprehensive wellness tracking.",
    image: "/projects/signature/Screenshot_20250909_121019.png",
    images: [
      "/projects/signature/Screenshot_20250909_121019.png",
      "/projects/signature/Screenshot_20250909_121306.png",
      "/projects/signature/Screenshot_20250909_121526.png",
    ],
    tags: ["NestJS", "Next.js", "PostgreSQL", "MinIO", "Redis"],
    category: "web-app",
    status: "Completed",
    liveUrl: "https://signaturewellnesseth.com/",
    featured: true,
    startDate: "March 2024",
    endDate: "August 2024",
    duration: "6 months",
    teamSize: "6 developers",
    client: "Signature Wellness Center",
    role: "Full-Stack Developer",
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MinIO",
      "Redis",
      "Stripe",
      "Twilio SMS",
      "Face Recognition API",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "Dual Application System",
        description:
          "Separate user-facing and admin applications with role-based access control for comprehensive gym management.",
      },
      {
        title: "Face Recognition Check-in",
        description:
          "Advanced biometric check-in system for seamless and secure gym access without physical cards or keys.",
      },
      {
        title: "Payment Processing",
        description:
          "Integrated Stripe payment gateway supporting membership fees, class bookings, and personal training sessions.",
      },
      {
        title: "SMS Notifications",
        description:
          "Automated SMS notifications for class reminders, payment confirmations, membership renewals, and gym updates.",
      },
      {
        title: "Class Management",
        description:
          "Comprehensive booking system for Signature Fitness, Pilates, Yoga, and S50 classes with real-time availability.",
      },
      {
        title: "Membership Management",
        description:
          "Complete membership lifecycle management from registration to renewal with tiered membership options.",
      },
      {
        title: "Progress Tracking",
        description:
          "Personalized goal setting and progress tracking with detailed analytics and achievement milestones.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Comprehensive admin panel for managing members, classes, payments, equipment, and gym operations.",
      },
    ],
    challenges: [
      {
        problem:
          "Implementing secure face recognition technology while maintaining user privacy and ensuring fast check-in processes.",
        solution:
          "Integrated advanced face recognition APIs with local processing capabilities, implemented encryption for biometric data, and optimized the recognition algorithm for sub-second response times.",
      },
      {
        problem:
          "Managing complex payment flows for different membership tiers, class bookings, and personal training sessions while ensuring transaction security.",
        solution:
          "Built a sophisticated payment orchestration system using Stripe with automated billing cycles, prorated calculations, and comprehensive transaction logging with audit trails.",
      },
      {
        problem:
          "Ensuring real-time synchronization between user and admin applications while maintaining data consistency across multiple services.",
        solution:
          "Implemented Redis-based caching and pub/sub messaging system with PostgreSQL triggers to ensure real-time data synchronization and maintain consistency across all application instances.",
      },
      {
        problem:
          "Scaling SMS notification system to handle high-volume messaging without delays or delivery failures.",
        solution:
          "Integrated Twilio SMS API with intelligent queuing, retry mechanisms, and delivery status tracking to ensure reliable message delivery even during peak usage periods.",
      },
    ],
    gallery: [
      {
        url: "/projects/signature/Screenshot_20250909_121019.png",
        caption: "User dashboard showing membership status and class bookings",
      },
      {
        url: "/projects/signature/Screenshot_20250909_121306.png",
        caption:
          "Admin panel for managing gym operations and member activities",
      },
      {
        url: "/projects/signature/Screenshot_20250909_121526.png",
        caption: "Class booking interface with real-time availability",
      },
    ],
    impact: [
      "Streamlined gym operations with 90% reduction in manual processes",
      "Achieved 99.9% uptime for critical gym management functions",
      "Reduced check-in time from 2 minutes to under 10 seconds",
      "Processed over $500K in membership and class payments",
      "Improved member satisfaction with seamless digital experience",
    ],
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);
