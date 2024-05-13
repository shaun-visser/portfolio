import { StaticImageData } from 'next/image';

export interface HeroProps {
  firstName: string;
  lastName: string;
  tagLine: string;
}

export interface BoundedProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export interface AvatarProps {
  className?: string;
  image: string;
}

export interface TechProps {
  techName: string;
  techColor: string;
}

export interface TechListProps {
  className?: string;
  techList: TechProps[];
  heading: string;
}

export type ContentTypes = 'Blog' | 'Project';

export interface BlogOverviewProps {
  heading: string;
  description: string;
  viewMoreText: string;
  fallbackImage: string;
}

export interface ProjectOverviewProps {
  heading: string;
  description: string;
  viewMoreText: string;
  fallbackImage: string;
}

export interface ContentListProps {
  items: BlogPageProps[] | ProjectPageProps[];
  viewMoreText?: string;
}

export interface BlogPageProps {
  title: string;
  slug: string;
  type: string;
  date: Date;
  hoverImage: string;
  copy: string;
  tags: string[];
}

export interface BlogPosts {
  blogs: BlogPageProps[];
}

export interface ProjectPageProps {
  title: string;
  slug: string;
  type: string;
  date: Date;
  hoverImage: string;
  copy: string;
  tags: string[];
}

export interface ProjectPosts {
  projects: ProjectPageProps[];
}

export interface NavItem {
  label: string;
  url: string;
}

export interface NavItems {
  items: NavItem[];
  ctaLink: string;
  ctaLabel: string;
}

export interface FooterItem {
  label: string;
  url: string;
}

export interface FooterItems {
  name: string;
  items: FooterItem[];
  githubLink: string;
  twitterLink: string;
  linkedinLink: string;
}
