// Site configuration constants
export const SITE_CONFIG = {
  name: "Sumit Singh",
  title: "Full Stack Developer",
  description: "Full Stack Developer specializing in Fintech, Data Analytics, and Machine Learning solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sumit-singh53.github.io/My_Portfolio",
  email: process.env.NEXT_PUBLIC_EMAIL || "sumitrsingh53@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 7620691559",
  github: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'sumit-singh53'}`,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/sumit-singh53",
}

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

// Skills categories
export const SKILLS = {
  frontend: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Python", "Django", "Node.js", "REST APIs"],
  data: ["Machine Learning", "Data Analytics", "Streamlit", "Python"],
  devops: ["Kubernetes", "Docker", "Microservices"],
  security: ["Quantum Cryptography", "Post-Quantum Security"],
  fintech: ["Banking Systems", "Payment Processing", "Fraud Detection"],
}

// Social media links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: SITE_CONFIG.github,
    icon: "github",
  },
  {
    name: "LinkedIn", 
    url: SITE_CONFIG.linkedin,
    icon: "linkedin",
  },
  {
    name: "Email",
    url: `mailto:${SITE_CONFIG.email}`,
    icon: "email",
  },
]