import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contact } from '../components/Contact';

vi.mock('@emailjs/browser', () => ({
  sendForm: vi.fn().mockResolvedValue({ status: 200 })
}));

vi.mock('react-intersection-observer', () => ({
  useInView: () => ([
    vi.fn(),
    true
  ])
}));

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact heading', () => {
    render(<Contact />);
    expect(screen.getByText(/Contact Me/)).toBeInTheDocument();
  });

  it('renders contact info section', () => {
    render(<Contact />);
    expect(screen.getByText(/Get in Touch/)).toBeInTheDocument();
  });

  it('renders name input field', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
  });

  it('renders email input field', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  it('renders message textarea', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument();
  });

  it('updates form data on input change', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/Name/);
    await user.type(nameInput, 'John Doe');
    
    expect(nameInput).toHaveValue('John Doe');
  });

  it('displays contact email', () => {
    render(<Contact />);
    expect(screen.getByText(/hancermercedes@gmail.com/)).toBeInTheDocument();
  });

  it('displays location', () => {
    render(<Contact />);
    expect(screen.getByText(/Santiago, Dominican Republic/)).toBeInTheDocument();
  });
});
