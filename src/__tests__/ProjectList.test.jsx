import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProjectList } from '../components/ProjectList';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProjectList', () => {
  it('renders Projects heading', () => {
    renderWithRouter(<ProjectList />);
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
  });

  it('renders project list container', () => {
    renderWithRouter(<ProjectList />);
    const container = document.querySelector('.project-list-container');
    expect(container).toBeInTheDocument();
  });

  it('renders project list', () => {
    renderWithRouter(<ProjectList />);
    const list = document.querySelector('.project-list');
    expect(list).toBeInTheDocument();
  });
});
