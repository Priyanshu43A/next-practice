type Blog = {
  id: string;
  title: string;
  author: string;
  content: string;
  category: string;
  tags: string[];
  publishedDate: Date;
  updatedDate: Date;
  isPublished: boolean;
  likes: number;
  comments: { user: string; comment: string; date: Date }[];
  reviews: { reviewer: string; rating: number; review: string }[];
  thumbnailUrl: string;
  readTime: number;
};

const blogs: Blog[] = [
  {
    id: "1",
    title: "Understanding TypeScript",
    author: "John Doe",
    content: `
  TypeScript extends JavaScript by adding types. Learn how to use TypeScript effectively.
  
  JavaScript has been the backbone of web development for years. However, as projects grew in complexity, developers started encountering challenges in maintaining codebases and catching errors early. This is where TypeScript comes into play. TypeScript, a superset of JavaScript, adds static typing to the language, allowing developers to write more predictable and maintainable code. In this blog, we’ll explore what makes TypeScript so powerful and how to use it effectively in your projects.
  
  ### What is TypeScript?
  TypeScript is an open-source programming language developed and maintained by Microsoft. It builds upon JavaScript by adding optional static types. This means you can define types for your variables, function parameters, and return values, making your code easier to understand and debug.
  
  For example, in JavaScript, you might write:
  
  \`\`\`javascript
  function add(a, b) {
    return a + b;
  }
  \`\`\`
  
  This code works, but there’s no guarantee that \`a\` and \`b\` are numbers. With TypeScript, you can enforce that:
  
  \`\`\`typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  \`\`\`
  
  ### Why Use TypeScript?
  1. **Type Safety**: TypeScript catches type-related errors during development, reducing runtime bugs.
  2. **Improved IDE Support**: Modern IDEs offer features like IntelliSense, autocomplete, and inline error checking with TypeScript.
  3. **Better Documentation**: Types serve as a form of documentation, making it easier for teams to understand code.
  4. **Scalability**: TypeScript helps manage large codebases by providing clear type definitions, making refactoring safer and easier.
  
  ### Getting Started with TypeScript
  #### Installation
  To use TypeScript, install it globally via npm:
  \`\`\`bash
  npm install -g typescript
  \`\`\`
  
  #### Writing and Compiling TypeScript
  Create a file named \`example.ts\`:
  \`\`\`typescript
  const message: string = "Hello, TypeScript!";
  console.log(message);
  \`\`\`
  
  Compile it to JavaScript:
  \`\`\`bash
  tsc example.ts
  \`\`\`
  
  The output will be a \`example.js\` file that can run in any JavaScript environment.
  
  ### Core TypeScript Features
  1. **Basic Types**: TypeScript provides common types such as \`string\`, \`number\`, \`boolean\`, and more.
  2. **Interfaces**: Define the shape of objects:
     \`\`\`typescript
     interface User {
       name: string;
       age: number;
     }
  
     const user: User = { name: "John", age: 30 };
     \`\`\`
  3. **Enums**: Represent a set of named constants:
     \`\`\`typescript
     enum Direction {
       Up,
       Down,
       Left,
       Right,
     }
     \`\`\`
  4. **Generics**: Create reusable components that work with various types:
     \`\`\`typescript
     function identity<T>(arg: T): T {
       return arg;
     }
     \`\`\`
  
  ### Best Practices
  1. **Enable Strict Mode**: Use the \`--strict\` flag in your \`tsconfig.json\` for a stricter type-checking experience.
  2. **Use Type Aliases and Interfaces**: For consistent and readable code, define types explicitly.
  3. **Leverage Utility Types**: TypeScript includes utility types like \`Partial<T>\` and \`Readonly<T>\` for common scenarios.
  4. **Keep JavaScript Interoperability in Mind**: TypeScript works well with JavaScript, but ensure your team understands both languages for a smooth development process.
  
  ### Conclusion
  TypeScript empowers developers to write robust, maintainable, and error-free code by extending JavaScript with static typing. Whether you’re working on a small project or a large enterprise application, adopting TypeScript can significantly improve your development experience.
  
  Now that you have an understanding of TypeScript, try integrating it into your next project. Happy coding!
    `,
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Programming"],
    publishedDate: new Date("2024-01-01"),
    updatedDate: new Date("2024-01-01"),
    isPublished: true,
    likes: 120,
    comments: [
      { user: "Alice", comment: "Great article!", date: new Date("2024-01-02") },
    ],
    reviews: [
      {
        reviewer: "TechReview",
        rating: 4.5,
        review: "Comprehensive and well-written.",
      },
    ],
    thumbnailUrl: "https://example.com/images/typescript.jpg",
    readTime: 5,
  },  
  {
    id: "2",
    title: "Top 10 React Libraries",
    author: "Jane Smith",
    content: "A curated list of must-know libraries for React developers.",
    category: "Web Development",
    tags: ["React", "Libraries", "Web Development"],
    publishedDate: new Date("2024-01-05"),
    updatedDate: new Date("2024-01-06"),
    isPublished: true,
    likes: 200,
    comments: [
      { user: "Bob", comment: "Very helpful, thanks!", date: new Date("2024-01-07") },
    ],
    reviews: [
      { reviewer: "DevExperts", rating: 5, review: "A must-read for React enthusiasts." },
    ],
    thumbnailUrl: "https://example.com/images/react-libraries.jpg",
    readTime: 8,
  },
  {
    id: "3",
    title: "Getting Started with Node.js",
    author: "Mark Wilson",
    content: "A beginner-friendly guide to setting up a Node.js project.",
    category: "Backend Development",
    tags: ["Node.js", "Backend", "JavaScript"],
    publishedDate: new Date("2024-01-10"),
    updatedDate: new Date("2024-01-11"),
    isPublished: true,
    likes: 150,
    comments: [
      { user: "Charlie", comment: "Easy to follow!", date: new Date("2024-01-12") },
    ],
    reviews: [
      { reviewer: "CodeBeginners", rating: 4, review: "Good for beginners, but could use more examples." },
    ],
    thumbnailUrl: "https://example.com/images/nodejs.jpg",
    readTime: 7,
  },
  {
    id: "4",
    title: "CSS Grid Layout Mastery",
    author: "Emily Davis",
    content: "Master the CSS Grid layout system to create responsive designs effortlessly.",
    category: "Web Design",
    tags: ["CSS", "Grid", "Web Design"],
    publishedDate: new Date("2024-01-15"),
    updatedDate: new Date("2024-01-16"),
    isPublished: true,
    likes: 180,
    comments: [
      { user: "Sophia", comment: "Clear and concise!", date: new Date("2024-01-17") },
    ],
    reviews: [
      { reviewer: "DesignGurus", rating: 4.7, review: "Detailed and practical." },
    ],
    thumbnailUrl: "https://example.com/images/css-grid.jpg",
    readTime: 6,
  },
  {
    id: "5",
    title: "Mastering Python for Data Science",
    author: "Michael Brown",
    content: "Explore Python libraries like pandas and NumPy for data analysis.",
    category: "Data Science",
    tags: ["Python", "Data Science", "Programming"],
    publishedDate: new Date("2024-01-20"),
    updatedDate: new Date("2024-01-21"),
    isPublished: true,
    likes: 220,
    comments: [
      { user: "Liam", comment: "Very informative!", date: new Date("2024-01-22") },
    ],
    reviews: [
      { reviewer: "DataPros", rating: 5, review: "Perfect for aspiring data scientists." },
    ],
    thumbnailUrl: "https://example.com/images/python-ds.jpg",
    readTime: 9,
  },
  {
    id: "6",
    title: "Docker for Beginners",
    author: "Natalie White",
    content: "Learn how to use Docker to containerize your applications.",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containers"],
    publishedDate: new Date("2024-01-25"),
    updatedDate: new Date("2024-01-26"),
    isPublished: true,
    likes: 170,
    comments: [
      { user: "Ella", comment: "Simplified Docker concepts!", date: new Date("2024-01-27") },
    ],
    reviews: [
      { reviewer: "DevOpsDaily", rating: 4.8, review: "Essential for DevOps beginners." },
    ],
    thumbnailUrl: "https://example.com/images/docker.jpg",
    readTime: 7,
  },
  {
    id: "7",
    title: "GraphQL vs REST APIs",
    author: "Robert Chen",
    content: "Compare GraphQL and REST approaches for building modern APIs.",
    category: "Backend Development",
    tags: ["GraphQL", "REST", "API", "Backend"],
    publishedDate: new Date("2024-01-28"),
    updatedDate: new Date("2024-01-29"),
    isPublished: true,
    likes: 190,
    comments: [
      { user: "Tom", comment: "Great comparison!", date: new Date("2024-01-30") },
    ],
    reviews: [
      { reviewer: "APIWeekly", rating: 4.6, review: "Balanced and insightful comparison." },
    ],
    thumbnailUrl: "https://example.com/images/graphql-rest.jpg",
    readTime: 8,
  },
  {
    id: "8",
    title: "Introduction to AWS Lambda",
    author: "Sarah Johnson",
    content: "Getting started with serverless computing using AWS Lambda.",
    category: "Cloud Computing",
    tags: ["AWS", "Serverless", "Lambda"],
    publishedDate: new Date("2024-01-31"),
    updatedDate: new Date("2024-02-01"),
    isPublished: true,
    likes: 160,
    comments: [
      { user: "Mike", comment: "Finally understood Lambda!", date: new Date("2024-02-02") },
    ],
    reviews: [
      { reviewer: "CloudExperts", rating: 4.7, review: "Perfect introduction to serverless." },
    ],
    thumbnailUrl: "https://example.com/images/aws-lambda.jpg",
    readTime: 6,
  },
  {
    id: "9",
    title: "Vue.js 3 Composition API",
    author: "Alex Kim",
    content: "Learn how to use Vue 3's Composition API for better code organization.",
    category: "Web Development",
    tags: ["Vue.js", "JavaScript", "Frontend"],
    publishedDate: new Date("2024-02-03"),
    updatedDate: new Date("2024-02-04"),
    isPublished: true,
    likes: 175,
    comments: [
      { user: "Nina", comment: "Amazing tutorial!", date: new Date("2024-02-05") },
    ],
    reviews: [
      { reviewer: "VueWeekly", rating: 4.9, review: "Excellent coverage of Composition API." },
    ],
    thumbnailUrl: "https://example.com/images/vue3.jpg",
    readTime: 7,
  },
  {
    id: "10",
    title: "Machine Learning with TensorFlow",
    author: "David Lee",
    content: "Build your first neural network using TensorFlow and Keras.",
    category: "Machine Learning",
    tags: ["TensorFlow", "ML", "Python"],
    publishedDate: new Date("2024-02-06"),
    updatedDate: new Date("2024-02-07"),
    isPublished: true,
    likes: 230,
    comments: [
      { user: "Rachel", comment: "Best ML tutorial I've found!", date: new Date("2024-02-08") },
    ],
    reviews: [
      { reviewer: "AIDaily", rating: 4.8, review: "Clear explanation of complex concepts." },
    ],
    thumbnailUrl: "https://example.com/images/tensorflow.jpg",
    readTime: 10,
  },
  {
    id: "11",
    title: "Securing Your Node.js Application",
    author: "Emma Wilson",
    content: "Learn best practices for securing Node.js applications in production.",
    category: "Security",
    tags: ["Security", "Node.js", "Backend"],
    publishedDate: new Date("2024-02-09"),
    updatedDate: new Date("2024-02-10"),
    isPublished: true,
    likes: 195,
    comments: [
      { user: "James", comment: "Essential security tips!", date: new Date("2024-02-11") },
    ],
    reviews: [
      { reviewer: "SecurityWeekly", rating: 4.9, review: "Comprehensive security guide." },
    ],
    thumbnailUrl: "https://example.com/images/nodejs-security.jpg",
    readTime: 8,
  },
  {
    id: "12",
    title: "Redux Toolkit Deep Dive",
    author: "Chris Anderson",
    content: "Master modern Redux with Redux Toolkit and TypeScript.",
    category: "Web Development",
    tags: ["Redux", "React", "TypeScript"],
    publishedDate: new Date("2024-02-12"),
    updatedDate: new Date("2024-02-13"),
    isPublished: true,
    likes: 185,
    comments: [
      { user: "Peter", comment: "Finally understanding Redux!", date: new Date("2024-02-14") },
    ],
    reviews: [
      { reviewer: "ReactDaily", rating: 4.7, review: "In-depth coverage of Redux Toolkit." },
    ],
    thumbnailUrl: "https://example.com/images/redux-toolkit.jpg",
    readTime: 9,
  },
  {
    id: "13",
    title: "MongoDB Best Practices",
    author: "Lisa Chen",
    content: "Optimize your MongoDB database for performance and scalability.",
    category: "Database",
    tags: ["MongoDB", "Database", "Backend"],
    publishedDate: new Date("2024-02-15"),
    updatedDate: new Date("2024-02-16"),
    isPublished: true,
    likes: 165,
    comments: [
      { user: "Kevin", comment: "Great optimization tips!", date: new Date("2024-02-17") },
    ],
    reviews: [
      { reviewer: "DBWeekly", rating: 4.6, review: "Practical MongoDB optimization guide." },
    ],
    thumbnailUrl: "https://example.com/images/mongodb.jpg",
    readTime: 7,
  },
  {
    id: "14",
    title: "Kotlin for Android Development",
    author: "Ryan Park",
    content: "Build modern Android apps using Kotlin and Jetpack Compose.",
    category: "Mobile Development",
    tags: ["Kotlin", "Android", "Mobile"],
    publishedDate: new Date("2024-02-18"),
    updatedDate: new Date("2024-02-19"),
    isPublished: true,
    likes: 175,
    comments: [
      { user: "Anna", comment: "Perfect for beginners!", date: new Date("2024-02-20") },
    ],
    reviews: [
      { reviewer: "AndroidWeekly", rating: 4.8, review: "Excellent Kotlin introduction." },
    ],
    thumbnailUrl: "https://example.com/images/kotlin-android.jpg",
    readTime: 8,
  },
  {
    id: "15",
    title: "Testing React Components",
    author: "Maria Garcia",
    content: "Learn how to write effective tests for React components.",
    category: "Testing",
    tags: ["React", "Testing", "Jest"],
    publishedDate: new Date("2024-02-21"),
    updatedDate: new Date("2024-02-22"),
    isPublished: true,
    likes: 155,
    comments: [
      { user: "Steve", comment: "Finally understanding testing!", date: new Date("2024-02-23") },
    ],
    reviews: [
      { reviewer: "TestingPros", rating: 4.5, review: "Practical testing scenarios covered." },
    ],
    thumbnailUrl: "https://example.com/images/react-testing.jpg",
    readTime: 6,
  },
  {
    id: "16",
    title: "Microservices with Spring Boot",
    author: "Daniel Kim",
    content: "Build scalable microservices using Spring Boot and Spring Cloud.",
    category: "Backend Development",
    tags: ["Spring Boot", "Microservices", "Java"],
    publishedDate: new Date("2024-02-24"),
    updatedDate: new Date("2024-02-25"),
    isPublished: true,
    likes: 190,
    comments: [
      { user: "Helen", comment: "Excellent microservices guide!", date: new Date("2024-02-26") },
    ],
    reviews: [
      { reviewer: "JavaWeekly", rating: 4.7, review: "Comprehensive microservices tutorial." },
    ],
    thumbnailUrl: "https://example.com/images/spring-boot.jpg",
    readTime: 9,
  },
  {
    id: "17",
    title: "CI/CD with GitHub Actions",
    author: "Paul Martinez",
    content: "Set up automated CI/CD pipelines using GitHub Actions.",
    category: "DevOps",
    tags: ["CI/CD", "GitHub", "DevOps"],
    publishedDate: new Date("2024-02-27"),
    updatedDate: new Date("2024-02-28"),
    isPublished: true,
    likes: 170,
    comments: [
      { user: "Diana", comment: "Simplified CI/CD setup!", date: new Date("2024-02-29") },
    ],
    reviews: [
      { reviewer: "DevOpsInsider", rating: 4.6, review: "Clear and practical CI/CD guide." },
    ],
    thumbnailUrl: "https://example.com/images/github-actions.jpg",
    readTime: 7,
  },
]

export default blogs;