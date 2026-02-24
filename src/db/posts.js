export const posts = [
  {
    id: 1,
    slug: "getting-started-with-csharp",
    title: "Getting Started with C#: A Beginner's Guide",
    excerpt: "Learn the fundamentals of C# programming language and start building your first applications.",
    content: `
# Getting Started with C#

C# is a powerful, modern programming language developed by Microsoft. Whether you want to build web applications, games, or desktop software, C# is an excellent choice.

## Why Learn C#?

- **Versatile**: Build web apps (ASP.NET), games (Unity), desktop apps (WPF), and more
- **In-demand**: One of the most popular programming languages in the industry
- **Strong typing**: Helps catch errors early in development
- **Great tooling**: Visual Studio provides an excellent development experience

## Your First C# Program

\`\`\`csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
\`\`\`

## Key Concepts to Master

1. **Variables and Data Types**: int, string, bool, double
2. **Control Flow**: if/else, switch, loops
3. **Methods**: Reusable blocks of code
4. **Classes and Objects**: Object-oriented programming fundamentals
5. **LINQ**: Language Integrated Query for data manipulation

## Next Steps

- Install Visual Studio or VS Code with C# extension
- Follow Microsoft's official C# documentation
- Practice with small projects
- Join communities like Stack Overflow and Reddit

Happy coding!
    `,
    date: "2024-01-15",
    author: "Harold Mora",
    tags: ["C#", "Beginner", "Programming"],
    readTime: "5 min"
  },
  {
    id: 2,
    slug: "typescript-best-practices-2024",
    title: "TypeScript Best Practices for 2024",
    excerpt: "Level up your TypeScript skills with these essential best practices and patterns.",
    content: `
# TypeScript Best Practices for 2024

TypeScript has become the standard for building scalable JavaScript applications. Here are the best practices you should follow in 2024.

## 1. Use Strict Mode

Always enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

## 2. Prefer Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
// Good - TypeScript infers 'string'
const name = "Harold";

// Avoid unnecessary type annotations
const name: string = "Harold";
\`\`\`

## 3. Use Utility Types

TypeScript provides powerful utility types:

\`\`\`typescript
type User = {
  id: number;
  name: string;
  email: string;
};

// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;
\`\`\`

## 4. Embrace Discriminated Unions

Use discriminated unions for type-safe state management:

\`\`\`typescript
type RequestState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
\`\`\`

## 5. Use the 'as' Syntax Carefully

Prefer type guards over type assertions:

\`\`\`typescript
// Good - Type guard
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Avoid
const value = someUnknown as string;
\`\`\`

## Conclusion

These practices will help you write more maintainable and type-safe code. Keep exploring TypeScript's advanced features like conditional types, mapped types, and template literal types.

Stay typed!
    `,
    date: "2024-01-20",
    author: "Harold Mora",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    readTime: "7 min"
  },
  {
    id: 3,
    slug: "react-hooks-deep-dive",
    title: "React Hooks: A Deep Dive into useState and useEffect",
    excerpt: "Master the fundamental React hooks and understand when to use each one effectively.",
    content: `
# React Hooks: A Deep Dive

React Hooks revolutionized how we write React components. Let's explore the most essential hooks.

## useState: Managing Component State

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

### Tips for useState

- Use multiple state variables for unrelated state
- Use functional updates: \`setCount(prev => prev + 1)\`
- Initialize state lazily for expensive computations

## useEffect: Handling Side Effects

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  return <div>{user?.name}</div>;
}
\`\`\`

### useEffect Dependencies

- **No dependency array**: Runs on every render
- **Empty array []**: Runs only on mount
- **With dependencies [x]**: Runs when x changes

## Custom Hooks: Reusable Logic

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
\`\`\`

## Conclusion

Understanding hooks deeply is essential for writing effective React applications. Practice these patterns and explore useReducer, useMemo, and useCallback for more advanced use cases.
    `,
    date: "2024-01-25",
    author: "Harold Mora",
    tags: ["React", "Hooks", "JavaScript"],
    readTime: "6 min"
  }
];
