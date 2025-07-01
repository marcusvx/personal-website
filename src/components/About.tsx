export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "15+ Years Experience",
      description: "Proven track record in software development and technical leadership."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored developers across multiple projects."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Modern Tech Stack",
      description: "Expert in cutting-edge technologies including React, TypeScript, and cloud platforms."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/photo.jpg" 
                  alt="Marcus Ximenes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm Marcus, a seasoned software developer from São Paulo, Brazil, with a passion for creating 
                robust, scalable solutions that make a real difference. Over the past 15+ years, I've had the 
                privilege of working with cutting-edge technologies and leading talented teams.
              </p>
              <p>
                My journey spans from early .NET development to modern cloud-native applications using React, 
                TypeScript, and microservices architectures. I believe in writing clean, maintainable code 
                and following best practices like TDD and SOLID principles.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, mentoring fellow developers, 
                or enjoying time with my family. I'm also a music enthusiast and love playing drums in my 
                spare time.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 