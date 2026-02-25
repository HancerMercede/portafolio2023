import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Navigation } from '../components/Navigation';

vi.mock('react-intersection-observer', () => ({
  useInView: () => ([
    vi.fn(),
    true
  ])
}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders navigation', () => {
    renderWithRouter(<Navigation />);
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('renders logo', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText('HM')).toBeInTheDocument();
  });

  it('renders Home nav item', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });

  it('renders About nav item', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText(/About/)).toBeInTheDocument();
  });

  it('renders Tech Stack nav item', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText(/Tech Stack/)).toBeInTheDocument();
  });

  it('renders Experience nav item', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText(/Experience/)).toBeInTheDocument();
  });

  it('renders Projects nav item', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
  });

  it('renders Blog nav item as link', () => {
    renderWithRouter(<Navigation />);
    const blogLink = screen.getByRole('link', { name: /Navigate to Blog/i });
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', '/blog');
  });

  it('renders Contact nav item', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
  });
});
