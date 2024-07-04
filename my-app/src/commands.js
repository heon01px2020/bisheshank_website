// src/commands.js

const languages = [
  'C/C++/C#',
  'Python',
  'Forge',
  'R',
  'Rust',
  'Javascript',
  'Tensorflow',
  'HTML',
  'SQL',
  'Racket',
  'Scripts',
];

const tools = [
  'Git',
  'Docker',
  'Vim',
  'Adobe CC Suite (Photoshop, Indesign, Illustrator)',
  'Latex',
  'Unity',
  'Unreal Engine',
  'Pygame',
  'Z3',
  'Alloy',
  'CVC5',
];

const formatTree = (title, items) => {
  return `${title}\n${items.map(item => `├── ${item}`).join('\n')}\n`;
};

export const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
  about: {
    description: 'About me.',
    usage: 'about',
    fn: () => 'Hi! I am Bisheshank. I am a rising junior at Brown University studying Mathematics-Computer Science. I also draw a little in my free time.'
  },
  resume: {
    description: 'Get a link to my resume.',
    usage: 'resume',
    fn: () => {
      window.open('https://www.bisheshank.com/resume.pdf', '_blank', 'noopener,noreferrer');
      return 'Opening resume...';
    }
  },
  linkedin: {
    description: 'Get a link to my LinkedIn profile.',
    usage: 'linkedin',
    fn: () => {
      window.open('https://www.linkedin.com/in/bisheshank/', '_blank', 'noopener,noreferrer');
      return 'Opening LinkedIn profile...';
    }
  },
  github: {
    description: 'Get a link to my GitHub profile.',
    usage: 'github',
    fn: () => {
      window.open('https://www.github.com/bisheshank/', '_blank', 'noopener,noreferrer');
      return 'Opening GitHub profile...';
    }
  },
  languages: {
    description: 'List the languages and tools I know.',
    usage: 'languages',
    fn: () => {
      return `${formatTree('Languages:', languages)}`;
    }
  },
  tools: {
    description: 'List the tools I know.',
    usage: 'tools',
    fn: () => {
      return `${formatTree('Tools:', tools)}`;
    }
  },
  setup: {
    description: 'My current setup.',
    usage: 'setup',
    fn: () => {
      return `
        Editor: Nvim\n
        OS: MacOS\n
        Terminal: Alacritty\n
        Browser: Qutebrowser\n
        Shell: Zsh\n
        WM: Yabai\n
        `;
    }
  },
};

