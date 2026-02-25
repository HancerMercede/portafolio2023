import { describe, it, expect } from 'vitest';
import { companies } from '../db/companies';

describe('companies', () => {
  it('is an array', () => {
    expect(Array.isArray(companies)).toBe(true);
  });

  it('has companies data', () => {
    expect(companies.length).toBeGreaterThan(0);
  });

  it('each company has required fields', () => {
    companies.forEach(company => {
      expect(company).toHaveProperty('id');
      expect(company).toHaveProperty('company');
      expect(company).toHaveProperty('position');
      expect(company).toHaveProperty('logo');
      expect(company).toHaveProperty('years');
      expect(company).toHaveProperty('description');
    });
  });

  it('company ids are unique', () => {
    const ids = companies.map(c => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('contains Arroyo Consulting', () => {
    const arroyo = companies.find(c => c.company === 'Arroyo Consulting');
    expect(arroyo).toBeDefined();
    expect(arroyo.position).toBe('Software Engineer');
  });

  it('contains PACT', () => {
    const pact = companies.find(c => c.company === 'PACT');
    expect(pact).toBeDefined();
  });
});
