import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

vi.mock('react-notifications-component', () => ({
  ReactNotifications: () => <div data-testid="notifications" />
}));

vi.mock('animate.css', () => ({}));

describe('main.jsx', () => {
  it('renders App component without errors', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
