import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { BlogPost } from '../components/BlogPost';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('BlogPost', () => {
  it('renders back link', () => {
    renderWithRouter(<BlogPost />);
    const backLinks = screen.getAllByText(/← Back to Blog/);
    expect(backLinks.length).toBeGreaterThan(0);
  });

  it('renders post not found when slug does not match', () => {
    render(
      <MemoryRouter initialEntries={['/blog/invalid-slug']}>
        <Routes>
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Post not found/)).toBeInTheDocument();
  });

  it('renders post content when slug matches', () => {
    render(
      <MemoryRouter initialEntries={['/blog/advanced-csharp-concepts']}>
        <Routes>
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );
    const headings = screen.getAllByRole('heading', { name: /Advanced C# Concepts/i });
    expect(headings.length).toBeGreaterThan(0);
  });
});
