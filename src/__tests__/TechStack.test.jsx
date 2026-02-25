import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TechStack } from '../components/TechStack';

describe('TechStack', () => {
  it('renders HTML5 icon', () => {
    render(<TechStack />);
    const htmlIcon = document.querySelector('.devicon-html5-plain');
    expect(htmlIcon).toBeInTheDocument();
  });

  it('renders CSS3 icon', () => {
    render(<TechStack />);
    const cssIcon = document.querySelector('.devicon-css3-plain');
    expect(cssIcon).toBeInTheDocument();
  });

  it('renders JavaScript icon', () => {
    render(<TechStack />);
    const jsIcon = document.querySelector('.devicon-javascript-plain');
    expect(jsIcon).toBeInTheDocument();
  });

  it('renders TypeScript icon', () => {
    render(<TechStack />);
    const tsIcon = document.querySelector('.devicon-typescript-plain');
    expect(tsIcon).toBeInTheDocument();
  });

  it('renders React icon', () => {
    render(<TechStack />);
    const reactIcon = document.querySelector('.devicon-react-original');
    expect(reactIcon).toBeInTheDocument();
  });

  it('renders Node.js icon', () => {
    render(<TechStack />);
    const nodeIcon = document.querySelector('.devicon-nodejs-plain');
    expect(nodeIcon).toBeInTheDocument();
  });

  it('renders C# icon', () => {
    render(<TechStack />);
    const csharpIcon = document.querySelector('.devicon-csharp-plain');
    expect(csharpIcon).toBeInTheDocument();
  });

  it('renders PostgreSQL icon', () => {
    render(<TechStack />);
    const postgresIcon = document.querySelector('.devicon-postgresql-plain');
    expect(postgresIcon).toBeInTheDocument();
  });

  it('renders multiple tech items', () => {
    render(<TechStack />);
    const items = document.querySelectorAll('li');
    expect(items.length).toBeGreaterThan(5);
  });
});
