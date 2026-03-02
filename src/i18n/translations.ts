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
            greeting: "Hello, I'm",
            roles: ['Staff Software Engineer', 'Technical Leader', 'Full-Stack Developer', 'Problem Solver'],
            prefix: "I'm a ",
            bio: 'A seasoned software developer with over 15 years of experience, well-versed in the entire product development lifecycle, from concept to launch. Passionate about clean code, SOLID principles, and Test-Driven Development.',
            viewWork: 'View My Work →',
            getInTouch: 'Get In Touch',
        },
        about: {
            title: 'About Me',
            subtitle:
                'A seasoned software professional from São Paulo, Brazil, dedicated to creating innovative solutions and excellence in software development',
            headline: 'Building Innovative Solutions Through Clean Code',
            p1: "I'm Marcus Vinicius, a Staff Software Engineer from São Paulo, Brazil, with over 15 years of experience in software development. I'm passionate about writing clean code, adhering to SOLID principles, and practicing Test-Driven Development (TDD).",
            p2: 'My expertise spans a variety of technologies, including .NET Core, Java, Node.js, TypeScript, GraphQL, Angular (4+), React, and vanilla JavaScript. I have extensive experience working with microservices architectures, cloud platforms, and modern development practices.',
            p3: "Throughout my career, I've had the privilege of working with leading companies like Gupy, GRIN, The Luupe, and ThoughtWorks, where I've contributed to digital banking solutions, creator platforms, and various innovative projects. I also have experience as a technical leader, guiding architectural decisions and fostering knowledge-sharing within development teams.",
            p4: "I'm fluent in Portuguese (native), English (full professional proficiency), and have limited working proficiency in Spanish. I hold certifications in Microsoft .NET Framework.",
            highlights: [
                {
                    title: '15+ Years Experience',
                    description:
                        'Extensive experience in the entire product development lifecycle, from concept to launch.',
                },
                {
                    title: 'Technical Leadership',
                    description:
                        'Experience as technical leader, guiding architectural decisions and fostering knowledge-sharing within teams.',
                },
                {
                    title: 'Full-Stack Expertise',
                    description:
                        'Proficient in .NET Core, Java, Node.js, TypeScript, GraphQL, Angular, React, and cloud technologies.',
                },
                {
                    title: 'Clean Code Advocate',
                    description:
                        'Passionate about writing clean code, adhering to SOLID principles, and practicing Test-Driven Development.',
                },
            ],
        },
        skills: {
            title: 'Technical Skills',
            subtitle: 'Technologies and tools I work with to bring ideas to life',
            hint: 'Click any card to see more details about my experience with the technology.',
            categories: [
                {
                    title: 'Languages',
                    skills: [
                        {
                            name: 'C#',
                            icon: 'simple-icons:csharp',
                            description:
                                'The language I used most in corporate environments, starting in 2008 with .Net 2.0. Primarily used for web development, I lived through the evolution of the ecosystem: ASP.NET Webforms, MVC, Web API, and .NET Core.',
                        },
                        {
                            name: 'TypeScript',
                            icon: 'simple-icons:typescript',
                            description:
                                "Today it's the language I use most in frontend and backend projects. I started with Angular 2.0 and gradually followed its adoption as the standard for web development.",
                        },
                        {
                            name: 'JavaScript',
                            icon: 'simple-icons:javascript',
                            description:
                                'I have used it since the early days of web development — from jQuery to modern microfrontend architectures.',
                        },
                        {
                            name: 'Java',
                            icon: 'lucide:coffee',
                            description:
                                'The language I used most in my academic background and in several consulting projects.',
                        },
                        {
                            name: 'Python',
                            icon: 'simple-icons:python',
                            description:
                                'Current focus on building <strong>Artificial Intelligence</strong> solutions. I previously used it heavily for automation and scripts, but today my focus is on AI.',
                        },
                        {
                            name: 'Kotlin',
                            icon: 'simple-icons:kotlin',
                            description:
                                'One of the most enjoyable languages to work with. I used it in a project building high-performance backend architecture, including credit systems and digital banking platforms.',
                        },
                    ],
                },
                {
                    title: 'Frameworks & APIs',
                    skills: [
                        {
                            name: 'React',
                            icon: 'simple-icons:react',
                            description:
                                'The framework I use most today. I have used it in projects of all sizes, from small personal projects to large enterprise applications.',
                        },
                        {
                            name: 'Angular',
                            icon: 'simple-icons:angular',
                            description:
                                'The first major framework I used in a corporate environment. I started with Angular 2.0 and followed its evolution.',
                        },
                        {
                            name: 'Node.js',
                            icon: 'simple-icons:nodedotjs',
                            description:
                                'The technology I use most today for backend, primarily with TypeScript. I have experience with NestJS, Express, Next.js, and Fastify.',
                        },
                        {
                            name: '.NET Core',
                            icon: 'simple-icons:dotnet',
                            description:
                                'The backend technology I enjoy the most. Its performance and ecosystem are outstanding.',
                        },
                        {
                            name: 'GraphQL',
                            icon: 'simple-icons:graphql',
                            description:
                                'I worked for a while on a product that used GraphQL and found it very interesting, especially for building BFF (Backend For Frontend) layers.',
                        },
                    ],
                },
                {
                    title: 'Infra & Cloud',
                    skills: [
                        {
                            name: 'AWS',
                            icon: 'lucide:cloud',
                            description:
                                'The cloud platform I have used the most. I have experience with S3, Kinesis, SQS, SNS, Lambda, ECS, EKS, RDS, and API Gateway. Currently studying for certification.',
                        },
                        {
                            name: 'Docker',
                            icon: 'simple-icons:docker',
                            description:
                                'A technology I use in virtually all my projects. It greatly simplifies development and deployment.',
                        },
                        {
                            name: 'Azure',
                            icon: 'simple-icons:microsoftazure',
                            description:
                                "Experience with Microsoft's cloud platform, mainly in corporate projects already using the Microsoft ecosystem.",
                        },
                        {
                            name: 'GCP',
                            icon: 'simple-icons:googlecloud',
                            description:
                                "Using Google Cloud Platform in projects that benefit from integration with Google's AI and data services.",
                        },
                    ],
                },
                {
                    title: 'Architecture & Practices',
                    skills: [
                        {
                            name: 'Microservices',
                            icon: 'lucide:network',
                            description:
                                'Leadership in designing and implementing <strong>microservices architectures</strong>. Hands-on experience in decomposing monoliths, defining API contracts, and managing inter-service communication.',
                        },
                        {
                            name: 'DevOps',
                            icon: 'lucide:infinity',
                            description:
                                'Culture of integration between development and operations. Experience building and maintaining <strong>CI/CD pipelines</strong>, deploy automation, and production system observability.',
                        },
                        {
                            name: 'TDD',
                            icon: 'lucide:test-tube',
                            description:
                                'I really enjoy using TDD in my projects. I believe it greatly improves code quality and makes maintenance much easier.',
                        },
                        {
                            name: 'SOLID',
                            icon: 'lucide:blocks',
                            description:
                                'A set of principles I use as a guiding compass in my implementations and code reviews.',
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
                    description:
                        "Leading technical initiatives at one of Brazil's leading HR tech companies, focusing on innovative recruitment solutions.",
                },
                {
                    title: 'Staff Software Engineer',
                    company: 'GRIN',
                    period: 'Dec 2023 - May 2024',
                    description:
                        'Implemented microfrontend architecture using React, led Facebook integration rewrite, contributed to Laravel backend optimization, and participated in architectural discussions for modernizing monolithic applications.',
                },
                {
                    title: 'Senior Software Engineer',
                    company: 'The Luupe',
                    period: 'Apr 2022 - Present',
                    description:
                        'Technology team member at a startup creating a global online platform and community of women and non-binary photographers collaborating to provide diverse content for brands.',
                },
                {
                    title: 'Lead Software Developer/Consultant',
                    company: 'ThoughtWorks',
                    period: 'Feb 2019 - Apr 2022',
                    description:
                        "Led development of digital banking solutions using Kotlin microservices architecture. Provided technical leadership through knowledge sharing, pair programming, and helped resolve technical and organizational challenges. Worked on microfrontend strategies for Brazil's largest cosmetics company.",
                },
                {
                    title: 'Solutions Architect',
                    company: 'Itaú Unibanco',
                    period: 'Nov 2018 - Feb 2019',
                    description:
                        "Solutions Architecture team member at Brazil's largest bank. Authored development guidelines, customized software for client hardware environments, and created migration strategies for architectural updates.",
                },
                {
                    title: 'Software Developer',
                    company: 'Netbiis',
                    period: 'Jun 2017 - Nov 2018',
                    description:
                        'Led early development of a labor compliance platform using .NET Core and WebAPI backend, Node.js services for background processing, and cross-platform mobile apps with Ionic.',
                },
            ],
            earlierJobs: [
                {
                    title: 'Software Engineer',
                    company: 'Crossover for Work',
                    period: 'Jun 2016 - Jun 2017',
                    description:
                        'Enhanced code quality and unit testing for various projects in C# and Java. Focused on code refactoring and creating automated and manual unit tests for legacy systems.',
                },
                {
                    title: 'Senior Software Developer',
                    company: 'Digitalmed',
                    period: 'Sep 2012 - Jun 2016',
                    description:
                        'Development team member for a large medical laboratory solution. Responsible for significant performance improvements and providing technical guidance to new team members. Developed complex applications using C#, ASP.Net (WebForms, MVC, Web.API), NHibernate, WCF, and various frontend frameworks.',
                },
                {
                    title: '.NET Developer/Analyst',
                    company: 'Adapt Solutions',
                    period: 'Jan 2011 - Sep 2012',
                    description:
                        'Developed and maintained software for managing public schools. Created a tool for generating dynamic reports using ASP.Net and Microsoft Report Definition Language. Played a key role in defining architecture and leading development of a new medical care application.',
                },
                {
                    title: '.NET Developer/Software Developer',
                    company: 'CWI Software',
                    period: 'Jun 2010 - Dec 2010',
                    description:
                        'Outsourced developer for a banking company, focusing on developing integrations between legacy systems and new applications. Development work utilized Service-Oriented Architecture (SOA) with WCF and WPF.',
                },
                {
                    title: 'Web Developer/.NET Developer',
                    company: 'Seeker Tecnologia',
                    period: '2008 - 2010',
                    description:
                        'Contributed to a comprehensive human resources platform. Designed and implemented an advanced Full-Text Search solution in SQL Server, greatly improving resume search capabilities. Developed features for large-scale applications using VB.Net, ASP.Net WebForms, and SQL Server.',
                },
                {
                    title: 'IT Support Analyst',
                    company: 'Colsan - Associação Beneficiente de Coleta de Sangue',
                    period: 'Jan 2006 - Aug 2008',
                    description:
                        'Provided IT support to internal users, including troubleshooting hardware and software issues on Windows operating systems and performing backup routines. Early career role that established foundation in technology support.',
                },
            ],
        },
        projects: {
            title: 'Featured Projects',
            subtitle: "Some of the projects I've worked on and personal experiments",
            items: [
                {
                    title: 'Digital Banking Platform',
                    description:
                        'Scalable microservices architecture for digital banking solutions, focusing on credit card services and backend systems.',
                    tags: ['Kotlin', 'Microservices', 'AWS', 'Docker'],
                },
                {
                    title: 'Creator Platform',
                    description:
                        'Global online platform connecting women and non-binary photographers with brands for diverse content creation.',
                    tags: ['React', 'TypeScript', 'Node.js', 'Cloud'],
                },
                {
                    title: 'Labor Compliance Platform',
                    description:
                        'Platform helping businesses monitor employee breaks and prevent violations, with real-time dashboards and mobile apps.',
                    tags: ['.NET Core', 'WebAPI', 'Ionic', 'Node.js'],
                },
            ],
        },
        footer: {
            tagline:
                'Software Developer & Tech Leader passionate about creating innovative solutions and mentoring the next generation of developers.',
            quickLinks: 'Quick Links',
            connect: 'Connect',
            builtWith: 'Built with Astro, React, and Tailwind CSS.',
        },
        contact: {
            title: 'Contact me',
            subtitle:
                "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development. Feel free to reach out!",
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
            greeting: 'Olá, sou',
            roles: ['Staff Software Engineer', 'Líder Técnico', 'Desenvolvedor Full-Stack', 'Solucionador de Problemas'],
            prefix: 'Sou ',
            bio: 'Um desenvolvedor de software com mais de 17 anos de experiência, familiarizado com todo o ciclo de vida de desenvolvimento de produtos, do conceito ao lançamento. Apaixonado por código limpo, princípios SOLID e Desenvolvimento Orientado a Testes.',
            viewWork: 'Ver Meu Trabalho →',
            getInTouch: 'Entre em Contato',
        },
        about: {
            title: 'Sobre Mim',
            subtitle:
                'Um profissional de software experiente de São Paulo, Brasil, dedicado a criar soluções inovadoras e excelência em desenvolvimento de software',
            headline: 'Construindo Soluções Inovadoras com Código Limpo',
            p1: 'Sou Marcus Vinicius, Staff Software Engineer de São Paulo, Brasil, com mais de 17 anos de experiência em desenvolvimento de software. Sou apaixonado por escrever código limpo, seguir os princípios SOLID e praticar Desenvolvimento Orientado a Testes (TDD).',
            p2: 'Minha expertise abrange diversas tecnologias, incluindo .NET Core, Java, Node.js, TypeScript, GraphQL, Angular (4+), React e JavaScript puro. Tenho ampla experiência com arquiteturas de microsserviços, plataformas de nuvem e práticas modernas de desenvolvimento.',
            p3: 'Ao longo da minha carreira, tive o privilégio de trabalhar com empresas de destaque como Gupy, GRIN, The Luupe e ThoughtWorks, onde contribuí com soluções de banking digital, plataformas para criadores de conteúdo e outros projetos inovadores. Também tenho experiência como líder técnico, guiando decisões arquiteturais e promovendo o compartilhamento de conhecimento em equipes de desenvolvimento.',
            p4: 'Sou fluente em português (nativo), inglês (proficiência profissional plena) e tenho proficiência limitada em espanhol. Possuo certificações em Microsoft .NET Framework.',
            highlights: [
                {
                    title: '15+ Anos de Experiência',
                    description:
                        'Vasta experiência em todo o ciclo de vida de desenvolvimento de produto, do conceito ao lançamento.',
                },
                {
                    title: 'Liderança Técnica',
                    description:
                        'Experiência como líder técnico, guiando decisões arquiteturais e promovendo o compartilhamento de conhecimento em equipes.',
                },
                {
                    title: 'Expertise Full-Stack',
                    description:
                        'Proficiente em .NET Core, Java, Node.js, TypeScript, GraphQL, Angular, React e tecnologias de nuvem.',
                },
                {
                    title: 'Defensor de Código Limpo',
                    description:
                        'Apaixonado por escrever código limpo, seguir os princípios SOLID e praticar Desenvolvimento Orientado a Testes.',
                },
            ],
        },
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Tecnologias e ferramentas que uso para dar vida às ideias',
            hint: 'Clique em qualquer card para ver mais detalhes sobre minha experiência com a tecnologia.',
            categories: [
                {
                    title: 'Linguagens',
                    skills: [
                        {
                            name: 'C#',
                            icon: 'simple-icons:csharp',
                            description:
                                'A linguagem que mais usei em ambientes corporativos, começando em 2008 com o .Net 2.0. Usei principalmente em ambiente web e vivi as modernizações do ecossistema passando por ASP.NET Webforms, MVC, Web API e .NET Core.',
                        },
                        {
                            name: 'TypeScript',
                            icon: 'simple-icons:typescript',
                            description:
                                'Hoje é a linguagem que mais uso em projetos frontend e backend. Comecei com Angular 2.0 e gradualmente fui acompanhando sua adoção como padrão para desenvolvimento web.',
                        },
                        {
                            name: 'JavaScript',
                            icon: 'simple-icons:javascript',
                            description:
                                'Uso desde os primórdios do desenvolvimento web, com jQuery, até arquiteturas modernas de microfrontend.',
                        },
                        {
                            name: 'Java',
                            icon: 'lucide:coffee',
                            description:
                                'A linguagem que mais usei na minha formação acadêmica e em alguns projetos que passei em consultorias.',
                        },
                        {
                            name: 'Python',
                            icon: 'simple-icons:python',
                            description:
                                'Foco atual na construção de soluções com <strong>Inteligência Artificial</strong>. Já usei muito em projetos de automação e scripts, mas hoje meu foco é em IA.',
                        },
                        {
                            name: 'Kotlin',
                            icon: 'simple-icons:kotlin',
                            description:
                                'Uma das linguagens mais divertidas de usar. Usei em um projeto para arquitetura backend de alta performance, incluindo sistemas de crédito e plataformas de banking digital.',
                        },
                    ],
                },
                {
                    title: 'Frameworks & APIs',
                    skills: [
                        {
                            name: 'React',
                            icon: 'simple-icons:react',
                            description:
                                'O framework que mais uso hoje em dia. Já usei em projetos de todos os tamanhos, desde pequenos projetos pessoais até grandes projetos corporativos.',
                        },
                        {
                            name: 'Angular',
                            icon: 'simple-icons:angular',
                            description:
                                'O primeiro grande framework que usei em ambiente corporativo. Comecei com Angular 2.0 e fui acompanhando sua evolução.',
                        },
                        {
                            name: 'Node.js',
                            icon: 'simple-icons:nodedotjs',
                            description:
                                'Tecnologia que mais uso hoje em dia para backend, principalmente com TypeScript. Tive experiência com NestJs, Express, NextJs e Fastify.',
                        },
                        {
                            name: '.NET Core',
                            icon: 'simple-icons:dotnet',
                            description:
                                'Considero a tecnologia que mais gosto de usar em backend. Sua performance e ecossistema são incríveis.',
                        },
                        {
                            name: 'GraphQL',
                            icon: 'simple-icons:graphql',
                            description:
                                'Trabalhei por um tempo em produto que usava GraphQL e achei bem interessante. Principalmente para construção de BFF (Backend For Frontend).',
                        },
                    ],
                },
                {
                    title: 'Infra & Cloud',
                    skills: [
                        {
                            name: 'AWS',
                            icon: 'lucide:cloud',
                            description:
                                'Plataforma Cloud que mais usei em projetos. Tive experiência com S3, Kinesis, SQS, SNS, Lambda, ECS, EKS, RDS e API Gateway. Atualmente estudando para certificação.',
                        },
                        {
                            name: 'Docker',
                            icon: 'simple-icons:docker',
                            description:
                                'Tecnologia que uso em praticamente todos os meus projetos. Facilita muito o desenvolvimento e deploy de aplicações.',
                        },
                        {
                            name: 'Azure',
                            icon: 'simple-icons:microsoftazure',
                            description:
                                'Experiência com a plataforma de cloud da Microsoft, principalmente em projetos corporativos que já utilizavam o ecossistema Microsoft.',
                        },
                        {
                            name: 'GCP',
                            icon: 'simple-icons:googlecloud',
                            description:
                                'Uso do Google Cloud Platform em projetos que se beneficiam da integração com serviços de IA e dados do ecossistema Google.',
                        },
                    ],
                },
                {
                    title: 'Arquitetura & Práticas',
                    skills: [
                        {
                            name: 'Microservices',
                            icon: 'lucide:network',
                            description:
                                'Liderança no design e implementação de <strong>arquiteturas de microsserviços</strong>. Experiência prática em decomposição de monólitos, definição de contratos de API e gestão de comunicação entre serviços.',
                        },
                        {
                            name: 'DevOps',
                            icon: 'lucide:infinity',
                            description:
                                'Cultura de integração entre desenvolvimento e operações. Experiência na criação e manutenção de <strong>pipelines de CI/CD</strong>, automação de deploys e observabilidade de sistemas em produção.',
                        },
                        {
                            name: 'TDD',
                            icon: 'lucide:test-tube',
                            description:
                                'Gosto muito de usar TDD em meus projetos. Acredito que seja uma prática que melhora muito a qualidade do código e facilita a manutenção.',
                        },
                        {
                            name: 'SOLID',
                            icon: 'lucide:blocks',
                            description:
                                'Conceito que gosto de usar como norteador nas minhas implementações e revisões de código.',
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
                    description:
                        'Liderança de iniciativas técnicas em uma das principais empresas de HR tech do Brasil, com foco em soluções inovadoras de recrutamento.',
                },
                {
                    title: 'Staff Software Engineer',
                    company: 'GRIN',
                    period: 'Dez 2023 - Mai 2024',
                    description:
                        'Implementei arquitetura de microfrontend com React, liderei a reescrita da integração com o Facebook, contribuí para a otimização do backend em Laravel e participei de discussões arquiteturais para modernização de aplicações monolíticas.',
                },
                {
                    title: 'Senior Software Engineer',
                    company: 'The Luupe',
                    period: 'Abr 2022 - Presente',
                    description:
                        'Membro do time de tecnologia de uma startup criando uma plataforma e comunidade global online de fotógrafas e pessoas não-binárias que colaboram para fornecer conteúdo diversificado para marcas.',
                },
                {
                    title: 'Lead Software Developer/Consultor',
                    company: 'ThoughtWorks',
                    period: 'Fev 2019 - Abr 2022',
                    description:
                        'Liderei o desenvolvimento de soluções de banking digital usando arquitetura de microsserviços com Kotlin. Proporcionei liderança técnica por meio de compartilhamento de conhecimento, programação em par e ajudei a resolver desafios técnicos e organizacionais. Trabalhei em estratégias de microfrontend para a maior empresa de cosméticos do Brasil.',
                },
                {
                    title: 'Arquiteto de Soluções',
                    company: 'Itaú Unibanco',
                    period: 'Nov 2018 - Fev 2019',
                    description:
                        'Membro do time de Arquitetura de Soluções do maior banco do Brasil. Autores de diretrizes de desenvolvimento, customização de softwares para ambientes de hardware de clientes e criação de estratégias de migração para atualizações arquiteturais.',
                },
                {
                    title: 'Desenvolvedor de Software',
                    company: 'Netbiis',
                    period: 'Jun 2017 - Nov 2018',
                    description:
                        'Liderei o desenvolvimento inicial de uma plataforma de conformidade trabalhista usando backend com .NET Core e WebAPI, serviços Node.js para processamento em background e apps mobile multiplataforma com Ionic.',
                },
            ],
            earlierJobs: [
                {
                    title: 'Engenheiro de Software',
                    company: 'Crossover for Work',
                    period: 'Jun 2016 - Jun 2017',
                    description:
                        'Melhorei a qualidade de código e testes unitários em vários projetos em C# e Java. Foco em refatoração de código e criação de testes automatizados e manuais para sistemas legados.',
                },
                {
                    title: 'Desenvolvedor de Software Sênior',
                    company: 'Digitalmed',
                    period: 'Set 2012 - Jun 2016',
                    description:
                        'Membro do time de desenvolvimento de uma grande solução para laboratórios médicos. Responsável por melhorias significativas de performance e orientação técnica para novos membros da equipe. Desenvolvi aplicações complexas usando C#, ASP.Net (WebForms, MVC, Web.API), NHibernate, WCF e diversos frameworks de frontend.',
                },
                {
                    title: 'Desenvolvedor/Analista .NET',
                    company: 'Adapt Solutions',
                    period: 'Jan 2011 - Set 2012',
                    description:
                        'Desenvolvi e mantive software para gestão de escolas públicas. Criei uma ferramenta para geração de relatórios dinâmicos com ASP.Net e Microsoft Report Definition Language. Tive papel fundamental na definição da arquitetura e liderança do desenvolvimento de uma nova aplicação de saúde.',
                },
                {
                    title: 'Desenvolvedor .NET/Desenvolvedor de Software',
                    company: 'CWI Software',
                    period: 'Jun 2010 - Dez 2010',
                    description:
                        'Desenvolvedor terceirizado para uma empresa bancária, com foco em integrações entre sistemas legados e novas aplicações. O trabalho utilizou Arquitetura Orientada a Serviços (SOA) com WCF e WPF.',
                },
                {
                    title: 'Desenvolvedor Web/Desenvolvedor .NET',
                    company: 'Seeker Tecnologia',
                    period: '2008 - 2010',
                    description:
                        'Contribuí para uma plataforma completa de recursos humanos. Projetei e implementei uma solução avançada de Full-Text Search no SQL Server, melhorando significativamente a busca de currículos. Desenvolvi funcionalidades para aplicações de grande escala usando VB.Net, ASP.Net WebForms e SQL Server.',
                },
                {
                    title: 'Analista de Suporte de TI',
                    company: 'Colsan - Associação Beneficiente de Coleta de Sangue',
                    period: 'Jan 2006 - Ago 2008',
                    description:
                        'Forneci suporte de TI a usuários internos, incluindo resolução de problemas de hardware e software em sistemas operacionais Windows e execução de rotinas de backup. Cargo de início de carreira que estabeleceu a base em suporte de tecnologia.',
                },
            ],
        },
        projects: {
            title: 'Projetos em Destaque',
            subtitle: 'Alguns dos projetos em que trabalhei e experimentos pessoais',
            items: [
                {
                    title: 'Plataforma de Banking Digital',
                    description:
                        'Arquitetura de microsserviços escalável para soluções de banking digital, com foco em serviços de cartão de crédito e sistemas de backend.',
                    tags: ['Kotlin', 'Microservices', 'AWS', 'Docker'],
                },
                {
                    title: 'Plataforma para Criadores',
                    description:
                        'Plataforma online global conectando fotógrafas e pessoas não-binárias com marcas para criação de conteúdo diversificado.',
                    tags: ['React', 'TypeScript', 'Node.js', 'Cloud'],
                },
                {
                    title: 'Plataforma de Conformidade Trabalhista',
                    description:
                        'Plataforma que auxilia empresas a monitorar intervalos de funcionários e evitar infrações, com dashboards em tempo real e apps mobile.',
                    tags: ['.NET Core', 'WebAPI', 'Ionic', 'Node.js'],
                },
            ],
        },
        footer: {
            tagline:
                'Desenvolvedor de Software e Líder Técnico apaixonado por criar soluções inovadoras e mentorar a próxima geração de desenvolvedores.',
            quickLinks: 'Links Rápidos',
            connect: 'Conecte-se',
            builtWith: 'Feito com Astro, React e Tailwind CSS.',
        },
        contact: {
            title: 'Fale Comigo',
            subtitle:
                'Estou sempre aberto a discutir novas oportunidades, projetos interessantes ou simplesmente conversar sobre tecnologia e desenvolvimento. Sinta-se à vontade para entrar em contato!',
        },
    },
} as const

export type Translations = (typeof translations)['en']
export default translations
