import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

vi.mock('animate.css', () => ({}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('App', () => {
  it('renders Navigation component', () => {
    renderWithRouter(<App />);
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('renders Header section on home page', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Hancer Mercedes/)).toBeInTheDocument();
  });

  it('renders About section', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/About me/)).toBeInTheDocument();
  });

  it('renders Tech Stack heading', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('heading', { name: /Tech Stack/i })).toBeInTheDocument();
  });

  it('renders Work Experience section', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Work Expirience/)).toBeInTheDocument();
  });

  it('renders Projects heading', () => {
    renderWithRouter(<App />);
    const projectsHeading = document.querySelector('#title');
    expect(projectsHeading).toBeInTheDocument();
  });

  it('renders Blog heading', () => {
    renderWithRouter(<App />);
    const blogSection = document.querySelector('#blog');
    expect(blogSection).toBeInTheDocument();
  });

  it('renders Contact section', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Contact Me/)).toBeInTheDocument();
  });

  it('renders Routes component', () => {
    renderWithRouter(<App />);
    const routes = document.querySelector('.container');
    expect(routes).toBeInTheDocument();
  });
});
