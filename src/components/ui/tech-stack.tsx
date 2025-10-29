import React from 'react';
import { motion } from 'framer-motion';

type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const ReactLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <circle cx="12" cy="12" r="1.6" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
  </svg>
);

const NodeLogo: Icon = (props) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path fill="currentColor" d="M64 0 5 32v64l59 32 59-32V32L64 0zm0 14 47 25v50L64 114 17 89V39L64 14z"/>
    <path fill="currentColor" d="M88 75c0 11-8 17-24 17-10 0-18-3-23-8l10-6c3 3 8 5 13 5 7 0 11-3 11-8 0-4-3-6-12-8-15-4-22-8-22-18 0-10 9-17 23-17 9 0 16 2 22 7l-9 7c-4-3-8-4-13-4-6 0-10 2-10 7 0 4 4 6 13 8 14 3 22 8 22 18z"/>
  </svg>
);

const PythonLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 2c5 0 5 3 5 5v2H7c-3 0-5 2-5 5s2 5 5 5h3v-3H8c-2 0-3-1-3-2s1-2 3-2h9c3 0 5-2 5-5s-2-5-5-5h-2V2h-3z"/>
    <circle cx="9" cy="6" r="1" fill="currentColor"/>
    <circle cx="15" cy="18" r="1" fill="currentColor"/>
  </svg>
);

const AWSLogo: Icon = (props) => (
  <svg viewBox="0 0 64 24" {...props}>
    <path fill="currentColor" d="M2 18l5-14h3l5 14h-3l-1-3H6L5 18H2zm5-6h3L9.5 7 7 12zM28 4h3l-4 14h-3l-2-9-3 9h-3L12 4h3l2 9 3-9h3l2 9 3-9zM36 7c2-2 6-3 9-3 5 0 7 2 7 6v8h-3v-2c-1 1-3 2-6 2-4 0-7-2-7-5 0-3 3-5 8-5 2 0 4 .4 5 1v-1c0-2-2-3-5-3-2 0-4 .4-6 1l-2-2zm14 7c0-2-2-3-5-3s-5 1-5 3 2 3 5 3 5-1 5-3z"/>
  </svg>
);

const GCPLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 3a9 9 0 019 9h-4a5 5 0 00-10 0H3a9 9 0 019-9zm0 18a9 9 0 01-9-9h4a5 5 0 0010 0h4a9 9 0 01-9 9z"/>
  </svg>
);

const AzureLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M3 18l7-14h4l-7 14H3zm8 0l6-10 4 10h-10z"/>
  </svg>
);

const PostgresLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 3c5 0 9 3 9 7 0 3-2 6-5 7l-1 4-3-2-3 2-1-4c-3-1-5-4-5-7 0-4 4-7 9-7zm0 2c-3 0-7 2-7 5s2 5 5 6l.6.2L11 19l1-1 1 1 .4-2.8.6-.2c3-1 5-3 5-6s-4-5-7-5z"/>
  </svg>
);

const MongoLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 2s6 5 6 11-3 9-6 9-6-3-6-9 6-11 6-11z"/>
  </svg>
);

const DockerLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M3 13h18c0 4-3 7-8 7H9c-4 0-6-3-6-7zm3-6h3v3H6V7zm4 0h3v3h-3V7zm4 0h3v3h-3V7z"/>
  </svg>
);

const KubeLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.3L5 8v8l7 3.7L19 16V8l-7-3.7z"/>
  </svg>
);

const TSLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M3 4h18v16H3V4zm7 4H7v2h2v6h2V10h2V8h-2zm9 9c-1 1-2 1-3 1-2 0-3-1-3-2 0-2 2-2 3-2l1-1c0-.5-.5-1-1.5-1-1 0-2 .4-2.5 1l-1-1C14 10 15.5 9 17.5 9s3.5 1 3.5 2.8V16z"/>
  </svg>
);

const GraphQLLogo: Icon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
    <path d="M12 2l10 18H2L12 2z" fill="none" stroke="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const techStack: { name: string; icon: Icon; description: string }[] = [
  { name: 'React', icon: ReactLogo, description: 'JS/TS + React' },
  { name: 'Node.js', icon: NodeLogo, description: 'MERN Stack' },
  { name: 'Python', icon: PythonLogo, description: 'FastAPI/Django' },
  { name: 'AWS', icon: AWSLogo, description: 'Cloud Infra' },
  { name: 'GCP', icon: GCPLogo, description: 'Google Cloud' },
  { name: 'Azure', icon: AzureLogo, description: 'Microsoft' },
  { name: 'PostgreSQL', icon: PostgresLogo, description: 'SQL Database' },
  { name: 'MongoDB', icon: MongoLogo, description: 'NoSQL DB' },
  { name: 'Docker', icon: DockerLogo, description: 'Containers' },
  { name: 'Kubernetes', icon: KubeLogo, description: 'Orchestration' },
  { name: 'TypeScript', icon: TSLogo, description: 'TS + React' },
  { name: 'GraphQL', icon: GraphQLLogo, description: 'API Query' }
];

export const TechStack: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-r from-orange-500/5 to-orange-600/5"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Tech Stack</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies powering enterprise-grade solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="w-20 h-20 rounded-full bg-gray-800/50 flex flex-col items-center justify-center group-hover:bg-gradient-to-r group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300 border border-gray-700/50 group-hover:border-orange-500/30 backdrop-blur-sm group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                <tech.icon className="w-6 h-6 mb-1 text-gray-300 group-hover:text-orange-400 transition-all duration-300 group-hover:scale-110" />
                <span className="text-[8px] font-bold text-orange-400 group-hover:text-orange-300 transition-all duration-300 text-center leading-tight px-1">
                  {tech.name}
                </span>
                <span className="text-[6px] font-medium text-gray-400 group-hover:text-gray-300 transition-all duration-300 text-center leading-tight px-1">
                  {tech.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};
