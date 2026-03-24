import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-48 md:pb-32 bg-stone-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-stone-900 leading-tight mb-6">
            Sheenam Kalra: Journalism Post-Graduate & Creative Communicator.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl">
            I am a versatile content creator and graphic designer with practical
            experience in advertising communication. I blend journalistic
            storytelling with modern digital tools and AI-assisted workflows to
            craft compelling narratives and visual content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-900 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
