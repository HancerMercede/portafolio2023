import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Header', () => {
  it('renders name', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText(/Hancer Mercedes/)).toBeInTheDocument();
  });

  it('renders profession', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();
  });

  it('renders LinkedIn link', () => {
    renderWithRouter(<Header />);
    const linkedIn = document.querySelector('.LinkedIn');
    expect(linkedIn).toBeInTheDocument();
    expect(linkedIn).toHaveAttribute('href', 'https://www.linkedin.com/in/hancer-mercedes-663766198/');
  });

  it('renders GitHub link', () => {
    renderWithRouter(<Header />);
    const github = document.querySelector('.GitHub');
    expect(github).toBeInTheDocument();
    expect(github).toHaveAttribute('href', 'https://github.com/HancerMercede');
  });

  it('renders Instagram link', () => {
    renderWithRouter(<Header />);
    const instagram = document.querySelector('.Instagram');
    expect(instagram).toBeInTheDocument();
  });

  it('renders Facebook link', () => {
    renderWithRouter(<Header />);
    const facebook = document.querySelector('.Facebook');
    expect(facebook).toBeInTheDocument();
  });

  it('has header-container class', () => {
    renderWithRouter(<Header />);
    const header = document.querySelector('.header-container');
    expect(header).toBeInTheDocument();
  });
});
