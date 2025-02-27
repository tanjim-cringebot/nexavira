"use client";
import { SiNextdotjs, SiDjango, SiPostgresql } from "react-icons/si";
import { FaPython, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "SSTU",
    image: "/projects/sstu/ss.png",
    tags: ["University", "Government"],
    description:
      "Developed the official website for Sunamganj Science and Technology University. It is a platform for students to get information about the university and its programs.",
    techStack: [SiNextdotjs, FaPython, SiDjango],
  },
  {
    title: "AI Community",
    image: "/projects/aicommunity/ss.png",
    tags: ["AI Platform", "Community"],
    description:
      "A vibrant community platform for AI enthusiasts, researchers, and professionals. Features include discussion forums, resource sharing, and collaborative learning spaces.",
    techStack: [SiNextdotjs, FaPython, SiDjango, SiPostgresql],
  },
  {
    title: "AMIRLab",
    image: "/projects/amirlab/ss.png",
    tags: ["Research", "Laboratory"],
    description:
      "Advanced Machine Intelligence Research Laboratory platform, facilitating cutting-edge research in AI and machine learning, with project management and collaboration tools.",
    techStack: [SiNextdotjs, FaPython, SiDjango],
  },
  {
    title: "AMIRACADEMY LMS",
    image: "/projects/amiracademy/ss.png",
    tags: ["E-Learning", "LMS"],
    description:
      "Comprehensive Learning Management System featuring course management, interactive content delivery, assessment tools, and student progress tracking.",
    techStack: [SiNextdotjs, FaPython, SiDjango],
  },
  {
    title: "JMS",
    image: "/projects/jms/ss.png",
    tags: ["Management", "System"],
    description:
      "Journal Management System for academic publications, featuring manuscript submission, peer review, and publication workflow management.",
    techStack: [SiNextdotjs, FaPython, SiDjango],
  },
  {
    title: "Arbab",
    image: "/projects/arbab/ss.png",
    tags: ["E-Commerce", "Platform"],
    description:
      "Modern e-commerce platform with advanced features including real-time inventory management, secure payment processing, and customer relationship management.",
    techStack: [SiNextdotjs, FaPython, SiDjango],
  },
];

export default function Projects() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="text-center mb-12">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Our Projects
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore our portfolio of innovative solutions that have helped
          businesses transform their digital presence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative h-[300px] overflow-hidden rounded-xl perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-black/40 group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="relative h-full transform transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front of card */}
              <div className="absolute inset-0">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <div className="h-full w-full backdrop-blur-[2px] bg-black/40 p-6 flex flex-col justify-end">
                    <h2 className="text-white text-2xl font-bold mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-green-500/20 backdrop-blur-md border border-green-500/20 text-green-400 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Back of card */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="h-full w-full bg-black/90 p-6 flex flex-col justify-between backdrop-blur-xl border border-green-500/20">
                  <div>
                    <h3 className="text-green-400 text-xl font-bold mb-3">
                      Project Overview
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-green-400 text-sm mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex gap-3">
                        {project.techStack.map((Icon, iconIndex) => (
                          <Icon
                            key={iconIndex}
                            className="text-xl text-gray-300 hover:text-green-400 transition-colors"
                          />
                        ))}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                    >
                      View Project <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
