import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "marcus@marcusvinicius.info",
      link: "mailto:marcus@marcusvinicius.info"
    },

    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      value: "/in/marcusvx",
      link: "https://linkedin.com/in/marcusvx"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: "GitHub",
      value: "/marcusvinicius",
      link: "https://github.com/marcusvinicius"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 128 128">
          <path d="M101.991,52.29L73.278,10.538l-8.994,6.08l28.714,41.751L101.991,52.29z M91.228,59.85L47.332,34.177L41.8,43.471l43.898,25.674L91.228,59.85z M84.803,72.195L35.589,59.077l-2.828,10.422l49.217,13.12L84.803,72.195z M81.455,86.279l-50.746-4.636l-0.999,10.749l50.747,4.632L81.455,86.279z M114.667,49.789L105.949,0L95.223,1.845l8.717,49.789L114.667,49.789z M80.229,110.913l-50.964,0.024l-0.004-10.793l50.962-0.026L80.229,110.913z"/>
          <polygon points="88.884,75.409 88.884,119.532 22.04,119.532 22.04,75.409 13.333,75.409 13.333,128 97.547,128 97.547,75.409"/>
        </svg>
      ),
      title: "Stack Overflow",
      value: "/marcusvinicius",
      link: "https://stackoverflow.com/users/1720847/marcusvinicius"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-brutal-bg border-t-3 border-brutal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-titulos text-brutal-text uppercase mb-4 tracking-tighter">
            Let's Work Together
          </h2>
          <p className="text-lg text-brutal-text leading-relaxed max-w-prose">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border-3 border-brutal-border p-8 bg-white rounded-none">
            <h3 className="text-2xl font-titulos text-brutal-text uppercase mb-6 tracking-tight">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brutal-text uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-brutal-border bg-white text-brutal-text focus:outline-none focus:border-brutal-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brutal-text uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-brutal-border bg-white text-brutal-text focus:outline-none focus:border-brutal-accent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-brutal-text uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-brutal-border bg-white text-brutal-text focus:outline-none focus:border-brutal-accent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brutal-accent text-white font-titulos py-3 px-6 uppercase hover:bg-brutal-text transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-titulos text-brutal-text uppercase mb-6 tracking-tight">
                Get in Touch
              </h3>
              <p className="text-brutal-text text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 border-2 border-brutal-border bg-white hover:bg-brutal-accent hover:text-white transition-colors duration-200 group"
                >
                  <div className="text-brutal-text group-hover:text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-bold text-brutal-text group-hover:text-white uppercase text-sm">
                      {info.title}
                    </p>
                    <p className="text-brutal-text group-hover:text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
