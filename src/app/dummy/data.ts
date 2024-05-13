import {
  BlogOverviewProps,
  BlogPosts,
  FooterItems,
  HeroProps,
  NavItems,
  ProjectOverviewProps,
  ProjectPosts,
  TechListProps,
} from '../interfaces/components';

export const heroData: HeroProps = {
  firstName: 'Shaun',
  lastName: 'Visser',
  tagLine: 'Web Developer',
};

export const techList: TechListProps = {
  heading: 'What I use',
  techList: [
    {
      techName: 'React',
      techColor: '#29D8ff',
    },
    {
      techName: 'Next.js',
      techColor: '#fff',
    },
    {
      techName: 'GSAP',
      techColor: '#0AE448',
    },
  ],
};

export const blogPage: BlogOverviewProps = {
  heading: 'Blog',
  description: 'I write about what I`ve learned so others can benefit.',
  viewMoreText: 'Read More',
  fallbackImage: '/tech.jpg',
};

export const blogPosts: BlogPosts = {
  blogs: [
    {
      title: 'Mastering Javascript Animations',
      slug: 'mastering-javascript-animations',
      type: 'blog',
      date: new Date('2024-05-13T15:56:35.850Z'),
      hoverImage: '/tech.jpg',
      copy: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas placerat augue, sed pretium urna pretium nec. Praesent fermentum finibus lorem, non varius ante malesuada a. Proin malesuada ante nec velit condimentum dignissim. Etiam fringilla elit enim, quis pharetra ipsum faucibus a. Curabitur nec elit interdum, facilisis est et, congue eros. Integer nec lorem acmetus eleifend pellentesque. Sed nisl dui, imperdiet sit amet ligula ac, porttitor vestibulum eros. Mauris nunc ipsum, suscipit suscipit ligula sit amet, blandit fermentum nisl.Pellentesqueelementum ultricies nisl sit amet semper. </p><p>Mauris eget risus quis felis feugiat consequat. Donec dignissim erat quis lacinia consequat. Aliquam tempus dictum turpis. Vivamus mattis ligula et laoreet sodales. Nunc fringilla luctus laoreet.</p><p>Nulla facilisi. Etiam efficitur tempus vulputate. Vestibulum dolor purus, suscipit ut felis a, auctor accumsan sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliacurae; Donec d nunc eu lectus consequat rhoncus. Curabitur a justo metus.</p><p>Aliquam viverra interdum tellus, in molestie felis pellentesque vel. Nulla hendrerit, magna ac iaculis feugiat, eros eros accumsan nulla, nec malesuada ligula ligula quis erat. Aenean massa turpis, eleifend eu ante id, efficitur sollicitudin nibh.</p>',
      tags: ['React', 'Next.js'],
    },
    {
      title: 'Making cool CSS Art',
      slug: 'making-cool-css-art',
      type: 'blog',
      date: new Date('2024-05-13T15:56:35.850Z'),
      hoverImage: '/art.jpg',
      copy: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas placerat augue, sed pretium urna pretium nec. Praesent fermentum finibus lorem, non varius ante malesuada a. Proin malesuada ante nec velit condimentum dignissim. Etiam fringilla elit enim, quis pharetra ipsum faucibus a. Curabitur nec elit interdum, facilisis est et, congue eros. Integer nec lorem acmetus eleifend pellentesque. Sed nisl dui, imperdiet sit amet ligula ac, porttitor vestibulum eros. Mauris nunc ipsum, suscipit suscipit ligula sit amet, blandit fermentum nisl.Pellentesqueelementum ultricies nisl sit amet semper. </p><p>Mauris eget risus quis felis feugiat consequat. Donec dignissim erat quis lacinia consequat. Aliquam tempus dictum turpis. Vivamus mattis ligula et laoreet sodales. Nunc fringilla luctus laoreet.</p><p>Nulla facilisi. Etiam efficitur tempus vulputate. Vestibulum dolor purus, suscipit ut felis a, auctor accumsan sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliacurae; Donec d nunc eu lectus consequat rhoncus. Curabitur a justo metus.</p><p>Aliquam viverra interdum tellus, in molestie felis pellentesque vel. Nulla hendrerit, magna ac iaculis feugiat, eros eros accumsan nulla, nec malesuada ligula ligula quis erat. Aenean massa turpis, eleifend eu ante id, efficitur sollicitudin nibh.</p>',
      tags: ['CSS', 'Next.js'],
    },
  ],
};

export const projectPage: ProjectOverviewProps = {
  heading: 'Projects',
  description: `The tech projects I've created`,
  viewMoreText: 'View project',
  fallbackImage: '/tech.jpg',
};

export const projectPosts: ProjectPosts = {
  projects: [
    {
      title: 'Book Library App',
      slug: 'book-library-app',
      type: 'projects',
      date: new Date('2024-05-13T15:56:35.850Z'),
      hoverImage: '/library.jpg',
      copy: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas placerat augue, sed pretium urna pretium nec. Praesent fermentum finibus lorem, non varius ante malesuada a. Proin malesuada ante nec velit condimentum dignissim. Etiam fringilla elit enim, quis pharetra ipsum faucibus a. Curabitur nec elit interdum, facilisis est et, congue eros. Integer nec lorem acmetus eleifend pellentesque. Sed nisl dui, imperdiet sit amet ligula ac, porttitor vestibulum eros. Mauris nunc ipsum, suscipit suscipit ligula sit amet, blandit fermentum nisl.Pellentesqueelementum ultricies nisl sit amet semper. </p><p>Mauris eget risus quis felis feugiat consequat. Donec dignissim erat quis lacinia consequat. Aliquam tempus dictum turpis. Vivamus mattis ligula et laoreet sodales. Nunc fringilla luctus laoreet.</p><p>Nulla facilisi. Etiam efficitur tempus vulputate. Vestibulum dolor purus, suscipit ut felis a, auctor accumsan sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliacurae; Donec d nunc eu lectus consequat rhoncus. Curabitur a justo metus.</p><p>Aliquam viverra interdum tellus, in molestie felis pellentesque vel. Nulla hendrerit, magna ac iaculis feugiat, eros eros accumsan nulla, nec malesuada ligula ligula quis erat. Aenean massa turpis, eleifend eu ante id, efficitur sollicitudin nibh.</p>',
      tags: ['React', 'Next.js'],
    },
  ],
};

export const navItems: NavItems = {
  items: [
    {
      label: 'Shaun Visser',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'Projects',
      url: '/projects',
    },
  ],
  ctaLink: '#',
  ctaLabel: 'Test',
};

export const footerItems: FooterItems = {
  name: 'footer',
  items: [
    {
      label: 'Shaun Visser',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'Projects',
      url: '/projects',
    },
  ],
  githubLink: 'https://github.com/shaun-visser',
  twitterLink: 'https://twitter.com/R0dandReel',
  linkedinLink: 'https://www.linkedin.com/in/shaun-visser-6445736b/',
};
