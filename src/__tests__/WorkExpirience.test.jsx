import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { WorkExpirience } from '../components/WorkExpirience';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('WorkExpirience', () => {
  it('renders Work Experience heading', () => {
    renderWithRouter(<WorkExpirience />);
    expect(screen.getByText(/Work Expirience/)).toBeInTheDocument();
  });

  it('renders experience container', () => {
    renderWithRouter(<WorkExpirience />);
    const container = document.querySelector('.workexpirience-container');
    expect(container).toBeInTheDocument();
  });

  it('renders companies list', () => {
    renderWithRouter(<WorkExpirience />);
    const list = document.querySelector('.companies-list');
    expect(list).toBeInTheDocument();
  });
});
