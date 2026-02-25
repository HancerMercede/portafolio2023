import { describe, it, expect } from 'vitest';
import { posts } from '../db/posts';

describe('posts', () => {
  it('is an array', () => {
    expect(Array.isArray(posts)).toBe(true);
  });

  it('has posts data', () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it('each post has required fields', () => {
    posts.forEach(post => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('slug');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('excerpt');
      expect(post).toHaveProperty('content');
      expect(post).toHaveProperty('date');
      expect(post).toHaveProperty('author');
      expect(post).toHaveProperty('tags');
      expect(post).toHaveProperty('readTime');
    });
  });

  it('post slugs are unique', () => {
    const slugs = posts.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('each post has valid tags array', () => {
    posts.forEach(post => {
      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.tags.length).toBeGreaterThan(0);
    });
  });

  it('contains advanced csharp concepts post', () => {
    const csharpPost = posts.find(p => p.slug === 'advanced-csharp-concepts');
    expect(csharpPost).toBeDefined();
    expect(csharpPost.title).toContain('C#');
  });

  it('contains typescript best practices post', () => {
    const tsPost = posts.find(p => p.slug === 'typescript-best-practices-2024');
    expect(tsPost).toBeDefined();
    expect(tsPost.title).toContain('TypeScript');
  });

  it('contains react hooks post', () => {
    const reactPost = posts.find(p => p.slug === 'react-hooks-deep-dive');
    expect(reactPost).toBeDefined();
    expect(reactPost.title).toContain('React');
  });
});
