import { PenTool, Megaphone, Laptop, Briefcase } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Content & Writing",
      icon: <PenTool className="h-8 w-8 text-stone-700" />,
      items: ["Content Creation & Copywriting", "News Writing & Reporting"],
    },
    {
      category: "Media & PR",
      icon: <Megaphone className="h-8 w-8 text-stone-700" />,
      items: [
        "Public Relations & Brand Communication",
        "Multimedia Storytelling",
        "Media Research",
      ],
    },
    {
      category: "Design & Technology",
      icon: <Laptop className="h-8 w-8 text-stone-700" />,
      items: [
        "Graphic Designing",
        "AI Prompt Writing",
        "AI-assisted Content Creation",
      ],
    },
    {
      category: "Management",
      icon: <Briefcase className="h-8 w-8 text-stone-700" />,
      items: ["Event Management", "On-ground Coordination"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-3">
            Expertise
          </h2>
          <h3 className="text-4xl font-serif font-medium text-stone-900 mb-6">
            My Core Competencies
          </h3>
          <p className="text-lg text-stone-600">
            A versatile skill set combining traditional journalism with modern
            digital communication and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h4 className="text-xl font-medium text-stone-900 mb-4">
                {skill.category}
              </h4>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-stone-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
