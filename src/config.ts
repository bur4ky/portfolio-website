import go from './assets/go.svg';
import typescript from './assets/typescript.svg';
import nodejs from './assets/nodejs.svg';
import mongodb from './assets/mongodb.svg';
import svelte from './assets/svelte.svg';
import react from './assets/react.svg';
import nextjs from './assets/nextjs.svg';
import sass from './assets/sass.svg';
import tailwindcss from './assets/tailwindcss.svg';

export default {
  name: 'Burak',
  about: 'Web developer and student from Turkey, focused on building web applications.',
  profession: 'Full Stack Developer',
  contactEmail: 'contact@buraky.dev',
  github: 'bur4ky',
  meta: {
    title: 'Burak',
    description: 'My portfolio website showing my web development projects and skills.',
    favicon: 'https://avatars.githubusercontent.com/u/59135244?size=64'
  },
  projects: [
    {
      title: 'Spitfire Launcher',
      description: 'A launcher app for Fortnite and Epic Games',
      thumbnail: 'https://cdn.buraky.dev/banners/spitfire-launcher.png',
      repository: 'https://github.com/bur4ky/spitfire-launcher',
      url: 'https://rookie-spitfire.xyz/launcher',
      tags: ['Svelte', 'Tauri', 'Rust']
    },
    {
      title: 'VidGet',
      description: 'Image, video and audio downloader for multiple platforms.',
      thumbnail: 'https://cdn.buraky.dev/banners/vidget.png',
      repository: 'https://github.com/bur4ky/VidGet',
      tags: ['Svelte', 'Tailwind CSS']
    }
  ],
  technologies: [
    { name: 'Go', icon: go },
    { name: 'TypeScript', icon: typescript },
    { name: 'Node.js', icon: nodejs },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Svelte', icon: svelte },
    { name: 'React', icon: react },
    { name: 'Next.js', icon: nextjs },
    { name: 'Sass', icon: sass },
    { name: 'Tailwind', icon: tailwindcss }
  ]
};
