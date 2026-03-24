import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-3">
              Get In Touch
            </h2>
            <h3 className="text-4xl font-serif font-medium text-stone-900 mb-6 leading-tight">
              Let&apos;s collaborate on your next project.
            </h3>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Whether you&apos;re looking for a creative communicator, a content
              creator, or someone to manage your brand&apos;s narrative,
              I&apos;m here to help. Reach out to discuss opportunities.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:sheenamkalra95@gmail.com"
                className="flex items-center text-stone-600 hover:text-stone-900 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-stone-200 mr-4 group-hover:border-stone-400 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">
                  sheenamkalra95@gmail.com
                </span>
              </a>
              <a
                href="tel:6280054398"
                className="flex items-center text-stone-600 hover:text-stone-900 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-stone-200 mr-4 group-hover:border-stone-400 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">6280054398</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sheenam-kalra-1a676835a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-stone-600 hover:text-stone-900 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-stone-200 mr-4 group-hover:border-stone-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-shadow"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-shadow"
                  placeholder="jane@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-shadow resize-none"
                  placeholder="How can we work together?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
