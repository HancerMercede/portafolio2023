import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TechStackList } from '../components/TechStackList';

describe('TechStackList', () => {
  it('renders Tech Stack heading', () => {
    render(<TechStackList />);
    expect(screen.getByText(/Tech Stack/)).toBeInTheDocument();
  });

  it('renders tech list container', () => {
    render(<TechStackList />);
    const container = document.querySelector('.tecthstack-container');
    expect(container).toBeInTheDocument();
  });

  it('renders tech list', () => {
    render(<TechStackList />);
    const list = document.querySelector('.techlist-container');
    expect(list).toBeInTheDocument();
  });
});
