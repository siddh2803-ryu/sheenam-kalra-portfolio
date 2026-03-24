import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Documentary Film - Hooves of Healing",
      description:
        "Produced and developed a documentary exploring equine therapy and emotional well-being.",
      image: "https://picsum.photos/seed/horses/800/600",
      alt: "Horses in a field representing equine therapy",
      link: "https://drive.google.com/file/d/1tCM2uIY00z56D9dpkiRoCDFbF0ZfKW8P/view?usp=sharing",
    },
    {
      title: "Academic Dissertation",
      description:
        "A research study on the Role of Social Media in Promoting Small and Medium Businesses in the Tricity.",
      image: "https://picsum.photos/seed/research/800/600",
      alt: "Person working on a laptop representing academic research",
    },
    {
      title: "Soda Skool Creative Internship",
      description:
        "Developed creative concepts, designed visual content, and wrote scripts using AI tools for digital campaigns.",
      image: "https://picsum.photos/seed/creative/800/600",
      alt: "Creative workspace with design tools",
      link: "https://www.instagram.com/soda.skool?igsh=MTgzOWpwbm5ld3JrcQ==",
    },
    {
      title: "Punjab Equestrian Festival 2025",
      description: "Coordinated and executed on-ground event management.",
      image: "https://picsum.photos/seed/event/800/600",
      alt: "Equestrian event setup",
      link: "https://www.instagram.com/punjab_equestrian_festival?igsh=MWtzd2dmNW43MW5oaQ==",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-white border-y border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-4xl font-serif font-medium text-stone-900 mb-6">
            Projects & Experience
          </h3>
          <p className="text-lg text-stone-600">
            A selection of my recent work spanning documentary production,
            academic research, creative advertising, and event management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h4 className="text-2xl font-serif font-medium mb-2">
                  {project.title}
                </h4>
                <p className="text-stone-200 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-stone-300 hover:text-white transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <button className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-stone-300 hover:text-white transition-colors">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
