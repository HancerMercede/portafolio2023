import { describe, it, expect } from 'vitest';
import { projects } from '../db/projects';

describe('projects', () => {
  it('is an array', () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  it('has projects data', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each project has required fields', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('image');
      expect(project).toHaveProperty('Description');
      expect(project).toHaveProperty('Tools');
      expect(project).toHaveProperty('url');
    });
  });

  it('project ids are unique', () => {
    const ids = projects.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('contains Cinepolis project', () => {
    const cinepolis = projects.find(p => p.name === 'Cinepolis');
    expect(cinepolis).toBeDefined();
    expect(cinepolis.Tools).toContain('React.js');
  });

  it('contains Gif Expert project', () => {
    const gifExpert = projects.find(p => p.name === 'Gif Expert');
    expect(gifExpert).toBeDefined();
  });

  it('contains Budget Tracker project', () => {
    const budgetTracker = projects.find(p => p.name === 'Budget-Tracker-app');
    expect(budgetTracker).toBeDefined();
    expect(budgetTracker.Tools).toContain('React Testing Library');
  });
});
