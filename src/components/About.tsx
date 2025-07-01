export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "15+ Years Experience",
      description: "Extensive experience in the entire product development lifecycle, from concept to launch."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Technical Leadership",
      description: "Experience as technical leader, guiding architectural decisions and fostering knowledge-sharing within teams."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Full-Stack Expertise",
      description: "Proficient in .NET Core, Java, Node.js, TypeScript, GraphQL, Angular, React, and cloud technologies."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Clean Code Advocate",
      description: "Passionate about writing clean code, adhering to SOLID principles, and practicing Test-Driven Development."
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
            A seasoned software professional from São Paulo, Brazil, dedicated to creating innovative solutions and excellence in software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/photo.jpg" 
                  alt="Marcus Vinicius Ximenes" 
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
              Building Innovative Solutions Through Clean Code
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm Marcus Vinicius, a Staff Software Engineer from São Paulo, Brazil, with over 15 years of 
                experience in software development. I'm passionate about writing clean code, adhering to SOLID 
                principles, and practicing Test-Driven Development (TDD).
              </p>
              <p>
                My expertise spans a variety of technologies, including .NET Core, Java, Node.js, TypeScript, 
                GraphQL, Angular (4+), React, and vanilla JavaScript. I have extensive experience working with 
                microservices architectures, cloud platforms, and modern development practices.
              </p>
              <p>
                Throughout my career, I've had the privilege of working with leading companies like Gupy, GRIN, 
                The Luupe, and ThoughtWorks, where I've contributed to digital banking solutions, creator platforms, 
                and various innovative projects. I also have experience as a technical leader, guiding architectural 
                decisions and fostering knowledge-sharing within development teams.
              </p>
              <p>
                I'm fluent in Portuguese (native), English (full professional proficiency), and have limited working 
                proficiency in Spanish. I hold certifications in Microsoft .NET Framework.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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