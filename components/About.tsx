import { Award, BookOpen, Mic } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <BookOpen className="h-6 w-6 text-stone-700" />,
      title: "Education",
      description:
        "Masters in Journalism and Mass Communication (2024-2026) & Bachelor of Arts (Honours) in Social Sciences (2020-2023) from Panjab University.",
    },
    {
      icon: <Mic className="h-6 w-6 text-stone-700" />,
      title: "Communication",
      description:
        "Strong communication and presentation skills, proven by my history as a winner of multiple public speaking competitions.",
    },
    {
      icon: <Award className="h-6 w-6 text-stone-700" />,
      title: "Versatility",
      description:
        "Proficient in English and Punjabi, blending journalistic storytelling with modern digital tools and AI-assisted workflows.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-3">
              About Me
            </h2>
            <h3 className="text-4xl font-serif font-medium text-stone-900 mb-6 leading-tight">
              A passionate storyteller bridging journalism and creative
              communication.
            </h3>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              As a post-graduate student in Journalism and Mass Communication
              with a foundation in Social Sciences, I have developed a keen eye
              for detail and a deep understanding of human narratives. My
              academic journey at Panjab University has equipped me with robust
              research methodologies and critical thinking skills.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Beyond the classroom, I am a dedicated content creator and graphic
              designer. I leverage AI-assisted workflows and digital tools to
              craft engaging campaigns, documentaries, and brand communications.
              My background in public speaking ensures that every message I
              craft is not only visually compelling but also articulately
              delivered.
            </p>
          </div>

          <div className="space-y-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100"
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-medium text-stone-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
