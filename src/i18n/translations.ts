export type Locale = 'en' | 'pt'

export const defaultLocale: Locale = 'en'

const translations = {
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi, I'm",
            roles: ['Staff Software Engineer', 'Technical Leader', 'Full-Stack Developer', 'Problem Solver'],
            prefix: "I'm a ",
            bio: "I’ve been building software for 16+ years. I’ve worked on products from early prototypes to systems handling real traffic in production. I care about code that stays readable six months later, not just code that works today.",
            viewWork: 'Check out my work →',
            getInTouch: 'Get in touch',
        },
        about: {
            title: 'A bit about me',
            subtitle: "Staff Engineer based in São Paulo, focused on building reliable systems and helping teams make better technical decisions.",
            headline: "Building Systems That Scale and Survive Refactoring",
            p1: "I’m Marcus Vinicius, a Staff Software Engineer based in São Paulo. With 16+ years of experience, I focus on writing code that is simple, testable, and easy to evolve. SOLID and TDD are tools I use daily, not decorations for a slide deck.",
            p2: "I’ve worked across .NET, Java, Node.js, and TypeScript, and I’m comfortable moving between backend and frontend when needed. I’ve designed and evolved microservices, dealt with legacy systems, and worked in cloud-native environments.",
            p3: "I've had the chance to work with great teams at companies like Gupy, GRIN, and ThoughtWorks. More than just coding, I enjoy leading technical decisions, mentoring, and fostering a culture of knowledge-sharing within engineering teams.",
            p4: "I'm a native Portuguese speaker, fluent in English, and have limited working proficiency in Spanish. I also hold a few Microsoft .NET certifications from back in the day.",
            highlights: [
                {
                    title: '16+ Years of Experience',
                    description: 'Hands-on experience across startups and large enterprises.'
                },
                {
                    title: 'Technical Leadership',
                    description: 'Driving architectural decisions and mentoring engineers.'
                },
                {
                    title: 'Full-Stack Experience',
                    description: 'Strong backend foundation with practical frontend experience.'
                },
                {
                    title: 'Quality-Focused',
                    description: 'Tests and maintainability are part of the definition of done.'
                }
            ],
        },
        skills: {
            title: 'Technical Skills',
            subtitle: "The tech stack I use to bring ideas to life",
            hint: 'Click any card to see more details about my experience with the technology.',
            categories: [
                {
                    title: 'Languages',
                    skills: [
                        {
                            name: 'C#',
                            icon: 'simple-icons:csharp',
                            description: 'My main language in corporate environments since 2008 (.Net 2.0). I’ve lived through the whole evolution: Webforms, MVC, Web API, and now .NET Core.',
                        },
                        {
                            name: 'TypeScript',
                            icon: 'simple-icons:typescript',
                            description: "My current favorite for both frontend and backend. I started back with Angular 2.0 and watched it become the web standard.",
                        },
                        {
                            name: 'JavaScript',
                            icon: 'simple-icons:javascript',
                            description: 'I’ve used it since the early days, from the jQuery era to modern micro-frontend architectures.',
                        },
                        {
                            name: 'Java',
                            icon: 'lucide:coffee',
                            description: 'A key part of my academic background and several high-scale consulting projects.',
                        },
                        {
                            name: 'Python',
                            icon: 'simple-icons:python',
                            description: 'Current focus on building **Artificial Intelligence** solutions. I previously used it for automation, but now my focus is on AI and LLMs.',
                        },
                        {
                            name: 'Kotlin',
                            icon: 'simple-icons:kotlin',
                            description: 'One of the most enjoyable languages to work with. Used it for high-performance banking and credit systems.',
                        },
                    ],
                },
                {
                    title: 'Frameworks & APIs',
                    skills: [
                        {
                            name: 'React',
                            icon: 'simple-icons:react',
                            description: 'The framework I use most today, from small experiments to large enterprise-scale apps.',
                        },
                        {
                            name: 'Angular',
                            icon: 'simple-icons:angular',
                            description: 'My first major corporate framework. I started with 2.0 and followed its entire evolution.',
                        },
                        {
                            name: 'Node.js',
                            icon: 'simple-icons:nodedotjs',
                            description: 'My primary choice for backend today, usually paired with TypeScript. Experienced with NestJS, Express, and Fastify.',
                        },
                        {
                            name: '.NET Core',
                            icon: 'simple-icons:dotnet',
                            description: 'The backend tech I enjoy most. Its performance and ecosystem are hard to beat.',
                        },
                        {
                            name: 'GraphQL',
                            icon: 'simple-icons:graphql',
                            description: 'Great for building efficient BFF (Backend For Frontend) layers. Used it extensively in product-focused roles.',
                        },
                    ],
                },
                {
                    title: 'Infra & Cloud',
                    skills: [
                        {
                            name: 'AWS',
                            icon: 'lucide:cloud',
                            description: 'The cloud provider I know best. Hands-on with S3, Lambda, ECS, EKS, and RDS. Currently prepping for certification.',
                        },
                        {
                            name: 'Docker',
                            icon: 'simple-icons:docker',
                            description: 'A staple in my workflow. Simplifies everything from local dev to production deployments.',
                        },
                        {
                            name: 'Azure',
                            icon: 'simple-icons:microsoftazure',
                            description: 'Mainly used in corporate projects deep within the Microsoft ecosystem.',
                        },
                        {
                            name: 'GCP',
                            icon: 'simple-icons:googlecloud',
                            description: 'Using it for projects that benefit from Google’s AI and data-heavy services.',
                        },
                    ],
                },
                {
                    title: 'Architecture & Practices',
                    skills: [
                        {
                            name: 'Microservices',
                            icon: 'lucide:network',
                            description: 'Leading the design and implementation of distributed systems. Experienced in decomposing monoliths and defining API contracts.',
                        },
                        {
                            name: 'DevOps',
                            icon: 'lucide:infinity',
                            description: 'It’s a culture, not just a role. Experienced in building CI/CD pipelines and production observability.',
                        },
                        {
                            name: 'TDD',
                            icon: 'lucide:test-tube',
                            description: 'I’m a big fan of TDD. It improves code quality and makes maintenance a breeze.',
                        },
                        {
                            name: 'SOLID',
                            icon: 'lucide:blocks',
                            description: 'The North Star for my implementations and code reviews.',
                        },
                    ],
                },
            ],
        },
        experience: {
            title: 'Professional Experience',
            subtitle: 'A journey through my career highlights and key achievements',
            showEarlier: 'Show Earlier Experience',
            hideEarlier: 'Hide Earlier Experience',
            jobs: [
                {
                    title: 'Staff Software Engineer',
                    company: 'Gupy',
                    period: 'May 2024 - Present',
                    description: "Leading technical initiatives at one of Brazil's leading HR tech companies, focusing on innovative recruitment solutions.",
                },
                {
                    title: 'Staff Software Engineer',
                    company: 'GRIN',
                    period: 'Dec 2023 - May 2024',
                    description: 'Implemented micro-frontend architecture using React, led a major Facebook integration rewrite, and optimized legacy backends.',
                },
                {
                    title: 'Senior Software Engineer',
                    company: 'The Luupe',
                    period: 'Apr 2022 - Present',
                    description: 'Building a global platform for diverse content creators using a modern React and Node.js stack.',
                },
                {
                    title: 'Lead Software Developer / Consultant',
                    company: 'ThoughtWorks',
                    period: 'Feb 2019 - Apr 2022',
                    description: "Led digital banking solutions with Kotlin microservices. Provided technical leadership, mentoring, and worked on micro-frontend strategies for Brazil's largest cosmetics company.",
                },
                {
                    title: 'Solutions Architect',
                    company: 'Itaú Unibanco',
                    period: 'Nov 2018 - Feb 2019',
                    description: "Defined development guidelines and architectural migration strategies for Brazil's largest bank.",
                },
                {
                    title: 'Software Developer',
                    company: 'Netbiis',
                    period: 'Jun 2017 - Nov 2018',
                    description: 'Initial development of a labor compliance platform using .NET Core, Node.js, and Ionic.',
                },
            ],
            earlierJobs: [
                {
                    title: 'Software Engineer',
                    company: 'Crossover for Work',
                    period: 'Jun 2016 - Jun 2017',
                    description: 'Enhanced code quality and unit testing for legacy C# and Java systems globally.',
                },
                {
                    title: 'Senior Software Developer',
                    company: 'Digitalmed',
                    period: 'Sep 2012 - Jun 2016',
                    description: 'Developed complex medical laboratory solutions using C#, ASP.Net, and NHibernate with focus on performance.',
                },
                {
                    title: '.NET Developer/Analyst',
                    company: 'Adapt Solutions',
                    period: 'Jan 2011 - Sep 2012',
                    description: 'Developed software for public school management and new medical care applications.',
                },
                {
                    title: '.NET Developer',
                    company: 'CWI Software',
                    period: 'Jun 2010 - Dec 2010',
                    description: 'Banking integrations and Service-Oriented Architecture (SOA) with WCF and WPF.',
                },
                {
                    title: 'Web Developer / .NET Developer',
                    company: 'Seeker Tecnologia',
                    period: '2008 - 2010',
                    description: 'HR platforms and advanced Full-Text Search solutions in SQL Server.',
                },
                {
                    title: 'IT Support Analyst',
                    company: 'Colsan',
                    period: 'Jan 2006 - Aug 2008',
                    description: 'Foundation in tech support and infrastructure.',
                },
            ],
        },
        projects: {
            title: 'Featured Projects',
            subtitle: "Some of the projects I've worked on and personal experiments",
            items: [
                {
                    title: 'Digital Banking Platform',
                    description: 'Scalable microservices for banking and credit systems.',
                    tags: ['Kotlin', 'Microservices', 'AWS', 'Docker'],
                },
                {
                    title: 'Creator Platform',
                    description: 'Global platform connecting creators and brands for diverse content creation.',
                    tags: ['React', 'TypeScript', 'Node.js', 'Cloud'],
                },
                {
                    title: 'Labor Compliance Platform',
                    description: 'Real-time monitoring and dashboards for labor law compliance.',
                    tags: ['.NET Core', 'WebAPI', 'Ionic', 'Node.js'],
                },
            ],
        },
        footer: {
            tagline: 'Staff Software Engineer & Tech Leader passionate about clean code and mentoring.',
            quickLinks: 'Quick Links',
            connect: 'Connect',
            builtWith: 'Built with Astro, React, and Tailwind CSS.',
        },
        contact: {
            title: 'Get in touch',
            subtitle: "Open to discussing interesting problems, technical challenges, or leadership roles.",
        },
    },

    pt: {
        nav: {
            about: 'Sobre',
            experience: 'Experiência',
            skills: 'Skills',
            projects: 'Projetos',
            contact: 'Contato',
        },
        hero: {
            greeting: 'Olá, eu sou o',
            roles: ['Staff Software Engineer', 'Líder Técnico', 'Dev Full-Stack', 'Problem Solver'],
            prefix: 'Sou ',
            bio: "Desenvolvedor há mais de 16 anos. Já trabalhei desde protótipos até sistemas em produção com alto volume. Meu foco é escrever código que continue fácil de entender e evoluir com o tempo.",
            viewWork: 'Veja meu trabalho →',
            getInTouch: 'Bora conversar?',
        },
        about: {
            title: 'Um pouco sobre mim',
            subtitle: "Staff Engineer em São Paulo, com foco em sistemas confiáveis e decisões técnicas bem fundamentadas.",
            headline: "Construindo sistemas que escalam e continuam sustentáveis",
            p1: "Sou Marcus Vinicius, Staff Software Engineer. Com mais de 16 anos de experiência, trabalho para manter o código simples, testável e evolutivo. SOLID e TDD fazem parte da prática diária, não apenas do discurso.",
            p2: "Atuo com .NET, Java, Node.js e TypeScript, transitando entre backend e frontend quando necessário. Tenho experiência em arquitetura de microsserviços, modernização de sistemas legados e ambientes em nuvem.",
            p3: 'Passei por empresas como Gupy, GRIN e ThoughtWorks. Além de codar, atuo como líder técnico, guiando decisões de arquitetura e incentivando a troca de conhecimento entre o time.',
            p4: 'Falo português (nativo), inglês fluente e me viro no espanhol. Também carrego algumas certificações Microsoft .NET no currículo.',
            highlights: [
                {
                    title: '16+ anos de experiência',
                    description: 'Atuação prática em startups e grandes empresas.'
                },
                {
                    title: 'Liderança técnica',
                    description: 'Condução de decisões arquiteturais e mentoria de desenvolvedores.'
                },
                {
                    title: 'Experiência full-stack',
                    description: 'Base sólida em backend com vivência real em frontend.'
                },
                {
                    title: 'Qualidade como padrão',
                    description: 'Testes e manutenibilidade fazem parte do critério de entrega.'
                }
            ],
        },
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Tecnologias que uso para dar vida às ideias.',
            hint: 'Clique em qualquer card para ver mais detalhes sobre minha experiência com a tecnologia.',
            categories: [
                {
                    title: 'Linguagens',
                    skills: [
                        {
                            name: 'C#',
                            icon: 'simple-icons:csharp',
                            description: 'Minha principal linguagem em ambientes corporativos desde 2008. Vivi toda a evolução do ecossistema .NET.',
                        },
                        {
                            name: 'TypeScript',
                            icon: 'simple-icons:typescript',
                            description: 'O que mais uso hoje em frontend e backend. Comecei com Angular 2.0 e vi a linguagem virar o padrão da web.',
                        },
                        {
                            name: 'JavaScript',
                            icon: 'simple-icons:javascript',
                            description: 'Uso desde os tempos do jQuery até as arquiteturas modernas de microfrontends.',
                        },
                        {
                            name: 'Java',
                            icon: 'lucide:coffee',
                            description: 'Base da minha formação acadêmica e muito usada em projetos de consultoria de alto volume.',
                        },
                        {
                            name: 'Python',
                            icon: 'simple-icons:python',
                            description: 'Foco atual em **Inteligência Artificial**. Já usei muito para scripts, mas hoje o foco é em IA e LLMs.',
                        },
                        {
                            name: 'Kotlin',
                            icon: 'simple-icons:kotlin',
                            description: 'Uma das linguagens mais divertidas de usar. Apliquei em sistemas de crédito e banking digital.',
                        },
                    ],
                },
                {
                    title: 'Frameworks & APIs',
                    skills: [
                        {
                            name: 'React',
                            icon: 'simple-icons:react',
                            description: 'O framework que mais uso hoje, de pequenos projetos pessoais a aplicações enterprise.',
                        },
                        {
                            name: 'Angular',
                            icon: 'simple-icons:angular',
                            description: 'Primeiro grande framework corporativo que usei. Acompanho desde a versão 2.0.',
                        },
                        {
                            name: 'Node.js',
                            icon: 'simple-icons:nodedotjs',
                            description: 'Minha escolha para backend hoje, com NestJS, Express ou Fastify.',
                        },
                        {
                            name: '.NET Core',
                            icon: 'simple-icons:dotnet',
                            description: 'A tecnologia que mais gosto no backend. Performance e ecossistema incríveis.',
                        },
                        {
                            name: 'GraphQL',
                            icon: 'simple-icons:graphql',
                            description: 'Muito útil para criar camadas de BFF (Backend For Frontend) eficientes.',
                        },
                    ],
                },
                {
                    title: 'Infra & Cloud',
                    skills: [
                        {
                            name: 'AWS',
                            icon: 'lucide:cloud',
                            description: 'A nuvem que mais usei. Experiência com S3, Lambda, ECS, EKS e RDS.',
                        },
                        {
                            name: 'Docker',
                            icon: 'simple-icons:docker',
                            description: 'Uso em quase tudo. Facilita muito o desenvolvimento e o deploy.',
                        },
                        {
                            name: 'Azure',
                            icon: 'simple-icons:microsoftazure',
                            description: 'Experiência em projetos corporativos dentro do ecossistema Microsoft.',
                        },
                        {
                            name: 'GCP',
                            icon: 'simple-icons:googlecloud',
                            description: 'Uso em projetos que pedem integração com serviços de IA e dados do Google.',
                        },
                    ],
                },
                {
                    title: 'Arquitetura & Práticas',
                    skills: [
                        {
                            name: 'Microservices',
                            icon: 'lucide:network',
                            description: 'Design e implementação de sistemas distribuídos e decomposição de monólitos.',
                        },
                        {
                            name: 'DevOps',
                            icon: 'lucide:infinity',
                            description: 'Foco em CI/CD, automação de deploys e observabilidade de sistemas.',
                        },
                        {
                            name: 'TDD',
                            icon: 'lucide:test-tube',
                            description: 'Prática indispensável para manter a qualidade e facilitar a manutenção.',
                        },
                        {
                            name: 'SOLID',
                            icon: 'lucide:blocks',
                            description: 'Meu guia principal para implementações e revisões de código.',
                        },
                    ],
                },
            ],
        },
        experience: {
            title: 'Experiência Profissional',
            subtitle: 'Uma jornada pelos destaques da minha carreira e conquistas principais',
            showEarlier: 'Mostrar Experiência Anterior',
            hideEarlier: 'Ocultar Experiência Anterior',
            jobs: [
                {
                    title: 'Staff Software Engineer',
                    company: 'Gupy',
                    period: 'Mai 2024 - Presente',
                    description: 'Liderança de iniciativas técnicas em uma das principais empresas de HR tech do Brasil, com foco em soluções inovadoras de recrutamento.',
                },
                {
                    title: 'Staff Software Engineer',
                    company: 'GRIN',
                    period: 'Dez 2023 - Mai 2024',
                    description: 'Implementei arquitetura de microfrontend com React, liderei a reescrita da integração com o Facebook e otimizei backends legados.',
                },
                {
                    title: 'Senior Software Engineer',
                    company: 'The Luupe',
                    period: 'Abr 2022 - Presente',
                    description: 'Membro do time de tecnologia de uma startup global focada em criadores de conteúdo usando React e Node.js.',
                },
                {
                    title: 'Lead Software Developer / Consultor',
                    company: 'ThoughtWorks',
                    period: 'Fev 2019 - Abr 2022',
                    description: 'Liderança técnica em soluções de banking digital e estratégias de microfrontend para grandes empresas.',
                },
                {
                    title: 'Arquiteto de Soluções',
                    company: 'Itaú Unibanco',
                    period: 'Nov 2018 - Fev 2019',
                    description: 'Definição de diretrizes de desenvolvimento e estratégias de migração arquitetural no maior banco do país.',
                },
                {
                    title: 'Desenvolvedor de Software',
                    company: 'Netbiis',
                    period: 'Jun 2017 - Nov 2018',
                    description: 'Desenvolvimento inicial de plataforma de conformidade usando .NET Core, Node e Ionic.',
                },
            ],
            earlierJobs: [
                {
                    title: 'Engenheiro de Software',
                    company: 'Crossover for Work',
                    period: 'Jun 2016 - Jun 2017',
                    description: 'Melhoria de qualidade de código e testes unitários em larga escala para sistemas C# e Java.',
                },
                {
                    title: 'Desenvolvedor Sênior',
                    company: 'Digitalmed',
                    period: 'Set 2012 - Jun 2016',
                    description: 'Desenvolvimento de soluções complexas para laboratórios usando .NET e NHibernate com foco em performance.',
                },
                {
                    title: 'Desenvolvedor .NET',
                    company: 'Adapt Solutions',
                    period: 'Jan 2011 - Set 2012',
                    description: 'Software de gestão educacional e novas aplicações de saúde.',
                },
                {
                    title: 'Desenvolvedor .NET',
                    company: 'CWI Software',
                    period: 'Jun 2010 - Dez 2010',
                    description: 'Integrações bancárias e Arquitetura Orientada a Serviços (SOA) com WCF e WPF.',
                },
                {
                    title: 'Desenvolvedor Web',
                    company: 'Seeker Tecnologia',
                    period: '2008 - 2010',
                    description: 'Plataformas de RH e soluções de busca avançada em SQL Server.',
                },
                {
                    title: 'Analista de Suporte',
                    company: 'Colsan',
                    period: 'Jan 2006 - Ago 2008',
                    description: 'Onde tudo começou: suporte de TI e infraestrutura.',
                },
            ],
        },
        projects: {
            title: 'Projetos em Destaque',
            subtitle: 'Alguns dos projetos em que trabalhei e experimentos pessoais',
            items: [
                {
                    title: 'Banking Digital',
                    description: 'Microsserviços escaláveis para crédito e serviços bancários.',
                    tags: ['Kotlin', 'Microservices', 'AWS', 'Docker'],
                },
                {
                    title: 'Plataforma para Criadores',
                    description: 'Plataforma global conectando fotógrafos e marcas para criação de conteúdo.',
                    tags: ['React', 'TypeScript', 'Node.js', 'Cloud'],
                },
                {
                    title: 'Conformidade Trabalhista',
                    description: 'Monitoramento em tempo real e dashboards para prevenção de infrações.',
                    tags: ['.NET Core', 'WebAPI', 'Ionic', 'Node.js'],
                },
            ],
        },
        footer: {
            tagline: 'Staff Software Engineer apaixonado por código limpo e mentoria.',
            quickLinks: 'Links Rápidos',
            connect: 'Conecte-se',
            builtWith: 'Feito com Astro, React e Tailwind CSS.',
        },
        contact: {
            title: 'Bora conversar?',
            subtitle: 'Sempre aberto a falar sobre novas oportunidades, projetos ou tecnologia. Só chamar!',
        },
    },
} as const

export type Translations = (typeof translations)['en']
export default translations