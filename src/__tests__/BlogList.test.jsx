import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BlogList } from '../components/BlogList';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('BlogList', () => {
  it('renders blog title', () => {
    renderWithRouter(<BlogList />);
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders blog subtitle', () => {
    renderWithRouter(<BlogList />);
    expect(screen.getByText(/Thoughts on software development/)).toBeInTheDocument();
  });

  it('renders blog posts', () => {
    renderWithRouter(<BlogList />);
    expect(screen.getByText(/Advanced C# Concepts/)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript Best Practices/)).toBeInTheDocument();
    expect(screen.getByText(/React Hooks/)).toBeInTheDocument();
  });

  it('renders read more links', () => {
    renderWithRouter(<BlogList />);
    const readMoreLinks = screen.getAllByText(/Read more/);
    expect(readMoreLinks).toHaveLength(3);
  });
});
