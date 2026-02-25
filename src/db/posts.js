export const posts = [
  {
    id: 1,
    slug: "advanced-csharp-concepts",
    title: "Advanced C# Concepts Every Developer Should Know",
    excerpt:
      "Take your C# skills to the next level with advanced patterns, async programming, and performance optimization.",
    image: "/assets/images/CSharpAdvance.png",
    content: `
As a C# developer, mastering advanced concepts will help you write more efficient, maintainable, and scalable applications. Let's dive into some essential advanced topics.

## 1. Async/Await Deep Dive

Async programming is essential for building responsive applications:

\`\`\`csharp
public async Task<User> GetUserAsync(int id)
{
    return await _userRepository.FindByIdAsync(id);
}

// Async with multiple parallel operations
public async Task<(User User, List<Order> Orders)> GetUserWithOrdersAsync(int userId)
{
    var userTask = _userRepository.FindByIdAsync(userId);
    var ordersTask = _orderRepository.GetOrdersByUserIdAsync(userId);
    
    await Task.WhenAll(userTask, ordersTask);
    
    return (userTask.Result, ordersTask.Result);
}
\`\`\`

## 2. Pattern Matching

Modern C# pattern matching is powerful:

\`\`\`csharp
// Switch expressions
public string GetDescription(object value) => value switch
{
    int i when i > 0 => $"Positive integer: {i}",
    int i => $"Non-positive integer: {i}",
    string s => $"String of length {s.Length}",
    null => "Null value",
    _ => "Unknown type"
};

// Property patterns
bool IsValidEmail(Person person) => person switch
{
    { Email: string email } when email.Contains('@') => true,
    _ => false
};
\`\`\`

## 3. Records (C# 9+)

Value equality and immutability made easy:

\`\`\`csharp
public record User(int Id, string Name, string Email);

var user1 = new User(1, "John", "john@email.com");
var user2 = new User(1, "John", "john@email.com");

// Value equality - true!
Console.WriteLine(user1 == user2);

// With expressions (immutable updates)
var user3 = user1 with { Name = "Jane" };
\`\`\`

## 4. Source Generators

Generate code at compile time:

\`\`\`csharp
[Generator]
public partial class MyGenerator : ISourceGenerator
{
    public void Initialize(GeneratorInitializationContext context)
    {
        // Register for initialization
    }
    
    public void Execute(GeneratorExecutionContext context)
    {
        var source = @"namespace Generated 
        { 
            public class HelloWorld 
            { 
                public string Greet() => ""Hello from generated code!""; 
            } 
        }";
        
        context.AddSource("helloWorld.g.cs", source);
    }
}
\`\`\`

## 5. Memory Management & Span<T>

For high-performance scenarios:

\`\`\`csharp
public int CountWords(ReadOnlySpan<char> text)
{
    int count = 0;
    for (int i = 0; i < text.Length; i++)
    {
        if (char.IsWhiteSpace(text[i]) && 
            (i == 0 || !char.IsWhiteSpace(text[i - 1])))
        {
            count++;
        }
    }
    return count;
}

// Usage without allocation
Span<char> buffer = stackalloc char[256];
\`\`\`

## 6. Dependency Injection Best Practices

\`\`\`csharp
// Interface segregation
public interface IUserReader
{
    Task<User> GetByIdAsync(int id);
}

public interface IUserWriter
{
    Task SaveAsync(User user);
}

// Register with quality of life
services.AddScoped<IUserReader, UserRepository>();
services.AddScoped<IUserWriter, UserRepository>();

// FromKeyedServices (C# 12+)
services.AddKeyedSingleton<ICache, RedisCache>("redis");
services.AddKeyedSingleton<ICache, MemoryCache>("memory");
\`\`\`

## Conclusion

These advanced concepts will help you write more professional C# code. Keep practicing and exploring the .NET ecosystem for even more advanced topics like Source Generators, System.Text.Json customization, and performance profiling.

Happy coding!
    `,
    date: "2024-01-15",
    author: "Harold Mora",
    tags: ["C#", "Advanced", "Programming"],
    readTime: "8 min",
  },
  {
    id: 2,
    slug: "typescript-best-practices-2024",
    title: "TypeScript Best Practices for 2024",
    excerpt:
      "Level up your TypeScript skills with these essential best practices and patterns.",
    image: "/assets/images/TSBP.png",
    content: `

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
    readTime: "7 min",
  },
  {
    id: 3,
    slug: "react-hooks-deep-dive",
    title: "React Hooks: A Deep Dive into useState and useEffect",
    excerpt:
      "Master the fundamental React hooks and understand when to use each one effectively.",
    image: "/assets/images/ReactHooks.png",
    content: `

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
    readTime: "6 min",
  },
];
