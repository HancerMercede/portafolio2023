import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Company } from '../components/Company';

const mockProps = {
  logo: '/assets/images/test-logo.png',
  years: '2020 - Present',
  company: 'Test Company',
  position: 'Software Engineer',
  description: 'Test description for company'
};

describe('Company', () => {
  it('renders company name', () => {
    render(<Company props={mockProps} />);
    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });

  it('renders position', () => {
    render(<Company props={mockProps} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders years', () => {
    render(<Company props={mockProps} />);
    expect(screen.getByText('2020 - Present')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Company props={mockProps} />);
    expect(screen.getByText('Test description for company')).toBeInTheDocument();
  });

  it('renders company logo', () => {
    render(<Company props={mockProps} />);
    const logo = screen.getByAltText('Test Company');
    expect(logo).toBeInTheDocument();
  });

  it('has company-container class', () => {
    render(<Company props={mockProps} />);
    const container = document.querySelector('.company-container');
    expect(container).toBeInTheDocument();
  });
});
