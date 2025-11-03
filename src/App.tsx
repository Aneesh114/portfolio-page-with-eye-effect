import { EyesFollow } from "./components/EyesFollow";
import "./App.css";
import LeetCode from "./components/LeetCode";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Database,
  Palette,
  Cloud,
  Server,
  GitBranch,
  TestTube,
  Wrench,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { CIcon } from "@coreui/icons-react";
import { cibLeetcode } from "@coreui/icons";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { useState } from "react";
import llmReportImage from "figma:asset/5c7b653f68052c5647ff108e64b4ba86762fcfe4.png";
import llmReportImage2 from "figma:asset/9ac7e98c2a209d4ba221a4e390cbcdb6e912723a.png";
import codeCanvasImage1 from "figma:asset/5cdb408ca94cdcdaea03d306bdafc5696e0dc226.png";
import codeCanvasImage2 from "figma:asset/38811c2acc6e6d4a4acb26ae901b7fdda78e53d9.png";
import codeCanvasImage3 from "figma:asset/ba0a0913ba9f514691a5bceb4bd579830b738e8c.png";
import codeCanvasImage4 from "figma:asset/943b6790b6371b957804f03956d591b63b79b8e5.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  code: string;
  demo: string;
  images: string[];
};

export default function App() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>(
    [],
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (project) =>
    setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const openGallery = (
    images: string[],
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setGalleryImages(images);
    setCurrentImageIndex(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setGalleryImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const downloadCV = () => {
    // Create a simple placeholder PDF (base64 encoded)
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/Resources <<
/Font <<
/F1 4 0 R
>>
>>
/MediaBox [0 0 612 792]
/Contents 5 0 R
>>
endobj
4 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj
5 0 obj
<<
/Length 100
>>
stream
BT
/F1 24 Tf
100 700 Td
(Aneesh Reddy Dasari - CV) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000262 00000 n
0000000341 00000 n
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
492
%%EOF`;

    const blob = new Blob([pdfContent], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Aneesh_Reddy_Dasari_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const skills = [
    // 💻 Programming & Frontend
    {
      name: "JavaScript / TypeScript",
      icon: Code2,
      logo: "/icons/javascript.png",
    },
    { name: "Java", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "C / C++", icon: Code2 },
    { name: "C#", icon: Code2 },

    // 🛢 Databases
    {
      name: "SQL & NoSQL (PostgreSQL, MongoDB)",
      icon: Database,
    },

    // ☁️ Cloud & DevOps
    { name: "AWS / Azure / GCP", icon: Cloud },
    { name: "Docker & Kubernetes", icon: Server },
    { name: "Git / CI-CD Pipelines", icon: GitBranch },

    // 🧪 Testing & QA
    { name: "JUnit / PyTest / Selenium", icon: TestTube },

    // 🛠 Tools
    { name: "JIRA / Postman / Agile Workflow", icon: Wrench },
  ];

  const projects = [
    {
      title: "Destinova",
      description:
        "Full-stack travel recommendation platform using genome-based categorization and similarity algorithms; empowered users to explore 100 personalized destinations based on climate, activities, and budget preferences, resulting in 2500 weekly active users. Architected end-to-end React + Next.js applications with real-time collaboration and ML-enhanced features.",
      desc: "Travel Recommendation Platform using genome-based categorization",
      tech: [
        "React.js",
        "Next.js",
        "MongoDB",
        "JavaScript",
        "HTML",
        "CSS",
        "REST API",
        "UI/UX Design",
        "Machine Learning",
        "Vercel",
        "Git",
        "Agile Development",
      ],
      code: "https://github.com/Aneesh114/destinova.git",
      demo: "https://destinova-iota.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1760817137560-f4062758bed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzYyMTgxNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1708892442858-187af554be24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBjaXR5JTIwc2t5bGluZSUyMHVyYmFufGVufDF8fHx8MTc2MjE4MTY5OXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1754972682993-5a6ee518134b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBtb3VudGFpbnMlMjBsYW5kc2NhcGUlMjBzY2VuaWN8ZW58MXx8fHwxNzYyMTgxNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    {
      title: "CodeCanvas",
      description:
        "Real-time collaboration web app with integrated code editor, whiteboard, and text tools using Liveblocks and Convex; enabled concurrent editing for up to 10 users per session. Built with TypeScript, Next.js, Clerk, React.js, and exploratory ML-powered sketch assistance.",
      desc: "Real-time collaboration web app with integrated code editor, whiteboard, and text tools using Liveblocks and Convex",
      tech: [
        "TypeScript",
        "Next.js",
        "Clerk",
        "Convex",
        "Liveblocks",
        "React.js",
        "WebSockets",
        "Collaboration Tools",
        "HTML",
        "CSS",
      ],
      code: "https://github.com/Aneesh114/CodeCanvasProject.git",
      demo: "https://your-live-site.com",
      images: [
        codeCanvasImage1,
        codeCanvasImage2,
        codeCanvasImage3,
        codeCanvasImage4,
      ],
    },
    {
      title: "LLM-Powered Report Generator",
      description:
        "Built and deployed an internal LLM-based summarization service using Java, Spring Boot, and REST APIs to convert time-series forecasts into natural language reports, leveraging prompt engineering and LLMs for automation.",
      desc: "Built and deployed an internal LLM-based summarization service using Java, Spring Boot, and REST APIs to convert time-series forecasts into natural language reports",
      tech: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "LLMs",
        "Prompt Engineering",
        "Time-Series Analysis",
      ],
      code: "https://github.com/Aneesh114/llm-report-service.git",
      demo: "https://your-live-site.com",
      images: [
        llmReportImage,
        llmReportImage2,
      ],
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b bg-gray-800">
        <nav className="max-w-6xl bg-gray-800 mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-gray-900"></div>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-gray-100 hover:text-green-300 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-100 hover:text-green-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-100 hover:text-green-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-100 hover:text-green-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl bg-teal-100 mx-auto px-6 py-20 text-center">
        <EyesFollow />
        <h1 className="mb-4 text-4xl font-bold">
          Hi fellow coders! I'm{" "}
          <span className="text-blue-600">
            Aneesh Reddy Dasari
          </span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          A passionate software engineer specializing in
          building{" "}
          <span className="text-green-600 text-xl">
            exceptional digital experiences
          </span>
          . I love
          <span className="text-green-700 text-xl">
            {" "}
            debugging complex problems.
          </span>
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="default"
            onClick={downloadCV}
            className="cursor-pointer"
          >
            Download CV
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 bg-teal-100"
      >
        <div className="grid md:grid-cols-2 gap-8 border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          {/* About Me */}
          <div className="relative p-6 bg-gray-900 text-white">
            <h2 className="bg-gray-800 px-4 py-2 rounded mb-4 text-center font-semibold text-lg">
              About Me
            </h2>
            <p className="leading-relaxed">
              Hi, I’m Aneesh Reddy Dasari. I'm the type of coder
              who dreams about a bug in my project, figures out
              the fix in my sleep, and then wakes up mid-night
              sprinting to my laptop to see if the logic I
              imagined actually works. Spoiler: it always
              does!!😂
              <br />
              <br />I build full-stack web applications, design
              scalable backend services, and explore AI/ML
              solutions using React, TypeScript, Node.js,
              Python, and cloud platforms like AWS and Azure,
              turning complex problems into clean, user-friendly
              solutions.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="relative p-6 bg-gray-900 text-white border-l border-gray-200">
            <h2 className="bg-gray-800 px-4 py-2 rounded mb-4 text-center font-semibold text-lg">
              Quick Facts
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>📍</span> Based in Austin, Tx (Open to
                relocation)
              </li>
              <li className="flex items-center gap-2">
                <span>🎓</span> MS in Computer Science
              </li>
              <li className="flex items-center gap-2">
                <span>💼</span> 3+ years as a Software Engineer
              </li>
              <li className="flex items-center gap-2">
                <span>🎮</span> Hardcore Gamer
              </li>
              <li className="flex items-center gap-2">
                <span>☕</span> Coffee enthusiast
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-teal-100 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-black-400 mb-8 text-3xl font-semibold text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center text-center transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-yellow-400 mb-3" />
                  {skill.logo && (
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 rounded"
                    />
                  )}
                  <span className="text-yellow-400 font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16  bg-teal-100"
      >
        <h2 className="text-gray-900 mb-12 text-center text-3xl font-semibold">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => handleOpenModal(project)}
              className="group perspective cursor-pointer"
            >
              {/* Card container */}
              <div className="relative w-full h-80 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
                {/* Front of the card */}
                <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden hover:shadow-2xl transition-shadow">
                  <h3 className="text-white text-xl font-bold mb-3 px-2 py-1 rounded bg-gray-800 inline-block">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-5">
                    {project.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Back of the card */}
                <div className="absolute w-full h-full bg-gray-900 text-white rounded-xl p-6 rotate-y-180 flex flex-col justify-between backface-hidden shadow-lg">
                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.code}
                      target="_blank"
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition"
                    >
                      View Code
                    </a>
                    {project.title === "Destinova" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button
                        onClick={(e) =>
                          openGallery(project.images, e)
                        }
                        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition"
                      >
                        View Pics
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting
            projects. Feel free to reach out!
          </p>
          <div className="flex gap-4 justify-center">
            {/* Email */}
            <a
              href="mailto:aneeshreddy114@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-gray-900"
              >
                <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zm2.25.75v13.5l7.5-6.75-7.5-6.75zm1.236-.616L12 12.018l6.264-6.384H5.736zm13.014.616l-7.5 6.75 7.5 6.75V4.5z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Aneesh114"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-200 hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="w-10 h-10"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aneesh-dasari/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-200 hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
            {/* LeetCode */}
            <a
              href="https://leetcode.com/AneeshDasari/"
              className="transform transition-transform duration-200 hover:scale-110"
            >
              <LeetCode className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>
            © 2025 Aneesh Reddy Dasari. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Image Gallery Modal */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-none">
          <DialogTitle className="sr-only">
            Project Image Gallery
          </DialogTitle>
          <DialogDescription className="sr-only">
            Browse through project screenshots. Use arrow
            buttons to navigate between images.
          </DialogDescription>
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
{galleryImages.length > 1 && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      prevImage();
    }}
    className="absolute left-6 z-50 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110"
    aria-label="Previous image"
  >
    <ChevronLeft className="w-8 h-8 text-white drop-shadow-md" />
  </button>
)}

            {/* Image */}
            {galleryImages.length > 0 && (
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            )}

           {/* Next Button */}
{galleryImages.length > 1 && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      nextImage();
    }}
    className="absolute right-6 z-50 bg-gradient-to-l from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110"
    aria-label="Next image"
  >
    <ChevronRight className="w-8 h-8 text-white drop-shadow-md" />
  </button>
)}

            {/* Image Counter */}
            {galleryImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}