import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Project } from '../components/Project';

const mockProps = {
  image: '/assets/images/test-project.png',
  name: 'Test Project',
  Description: 'This is a test project description',
  Tools: 'React, TypeScript, Node.js',
  url: 'https://test-project.com'
};

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Project', () => {
  it('renders project name', () => {
    renderWithRouter(<Project props={mockProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    renderWithRouter(<Project props={mockProps} />);
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders project tools', () => {
    renderWithRouter(<Project props={mockProps} />);
    expect(screen.getByText('React, TypeScript, Node.js')).toBeInTheDocument();
  });

  it('renders project image with alt text', () => {
    renderWithRouter(<Project props={mockProps} />);
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
  });

  it('renders project link', () => {
    renderWithRouter(<Project props={mockProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://test-project.com');
  });

  it('has project-container class', () => {
    renderWithRouter(<Project props={mockProps} />);
    const container = document.querySelector('.project-container');
    expect(container).toBeInTheDocument();
  });
});
