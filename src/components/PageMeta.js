import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import articles from '../generated/blogs.json';

const pages = {
  '/': ['Naresh Pentapati | UX & Product Leadership', 'UX and product leadership, from idea to implementation.'],
  '/about': ['About | Naresh Pentapati', 'Learn about Naresh Pentapati’s experience across product discovery, UX design, frontend development and leadership.'],
  '/portfolio': ['Work | Naresh Pentapati', 'Explore product, enterprise UX and public safety work by Naresh Pentapati.'],
  '/vision': ['Vision & Philosophy | Naresh Pentapati', 'Naresh Pentapati’s perspective on design and product leadership.'],
  '/contact': ['Contact | Naresh Pentapati', 'Get in touch with Naresh Pentapati about product, UX and frontend work.'],
  '/blogs': ['Articles & Writing | Naresh Pentapati', 'Writing on product thinking, UX design and implementation by Naresh Pentapati.']
};
const projectTitles = {
  emidaddy: 'EMIdaddy', realiq: 'realIQ', hekla: 'Hekla', beetle: 'Beetle',
  'crowd-management': 'Crowd Management', 'disaster-management': 'Disaster Management',
  'patrol-management': 'Patrol Management', 'crime-analytics': 'Crime Analytics',
  'investigation-analytics': 'Investigation Analytics', 'suspect-tracking': 'Suspect Tracking',
  'women-safety': 'Women Safety', 'crum-underwriting': 'Crum & Forster Underwriting',
  'tal-service-portal': 'TAL Service Portal', 'asb-ux-assessment': 'ASB UX Assessment'
};

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const article = pathname.startsWith('/blogs/') && articles.find(item => `/blogs/${item.slug}` === pathname.replace(/\/$/, ''));
    const projectName = pathname.startsWith('/portfolio/') && projectTitles[pathname.split('/')[2]];
    const [title, description] = article ? [`${article.title} | Naresh Pentapati`, article.summary]
      : projectName ? [`${projectName} | Naresh Pentapati`, `Explore ${projectName}, a project by Naresh Pentapati.`]
      : (pages[pathname] || pages['/']);
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = description;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `https://nareshpentapati.in${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = canonical?.href || `https://nareshpentapati.in${pathname}`;
  }, [pathname]);

  return null;
}
