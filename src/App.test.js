import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Portfolio from './pages/Portfolio';
import HeroMinimal from './components/HeroMinimal';

test('introduces the current role and links to work', () => {
  render(<MemoryRouter><HeroMinimal /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: /UX and product leadership/i })).toBeInTheDocument();
  expect(screen.getByText(/Head of Creative and Associate Vice President at Photon/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '/portfolio');
});

test('lists all fifteen approved articles and excludes older unreviewed copy', () => {
  render(<MemoryRouter><Blogs /></MemoryRouter>);
  expect(screen.getAllByRole('article')).toHaveLength(15);
  expect(screen.getByRole('heading', { name: /GPT-6.1 Sol for UX teams/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Claude Opus 5.5 for UX teams/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Gemini 3.8 Flash for UX teams/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Finance UX that explains affordability/i })).toBeInTheDocument();
  expect(screen.queryByText(/UX Maturity in an Organization/i)).not.toBeInTheDocument();
});

test('describes Hekla and Beetle as builder prototypes', () => {
  render(<MemoryRouter><Portfolio /></MemoryRouter>);
  expect(screen.getByText(/validated proof of concept for an AI app builder/i)).toBeInTheDocument();
  expect(screen.getByText(/visual low-code builder prototype/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /EMIdaddy/i })).toHaveAttribute('href', '/portfolio/emidaddy');
  expect(screen.getByRole('link', { name: /realIQ/i })).toHaveAttribute('href', '/portfolio/realiq');
  expect(screen.queryByText(/AI financial adviser|public trial/i)).not.toBeInTheDocument();
});
