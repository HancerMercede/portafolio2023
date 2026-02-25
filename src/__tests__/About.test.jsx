import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '../components/About';

describe('About', () => {
  it('renders About heading', () => {
    render(<About />);
    expect(screen.getByText(/About me/)).toBeInTheDocument();
  });

  it('renders about content text', () => {
    render(<About />);
    expect(screen.getByText(/10 years of experience/)).toBeInTheDocument();
  });

  it('renders tech stack mention', () => {
    render(<About />);
    expect(screen.getByText(/C# · .NET Core/)).toBeInTheDocument();
  });

  it('renders clean architecture mention', () => {
    render(<About />);
    expect(screen.getByText(/Clean Architecture/)).toBeInTheDocument();
  });

  it('has about-container class', () => {
    render(<About />);
    const container = document.querySelector('.about-container');
    expect(container).toBeInTheDocument();
  });
});
