export interface Skill {
    index: number;
    name: string;
    selected: boolean;
    category: string;
}

export interface ProficiencyLevel {
    level: string;
    skills: Skill[];
}

export const VERSION = 1;
export const proficiencyLevels: ProficiencyLevel[] = [
    {
        level: 'Beginner',
        skills: [
            { index: 0, name: 'Basic understanding of server-side programming', category: 'Server Fundamentals', selected: false },
            { index: 1, name: 'Familiarity with HTTP protocols and client-server architecture', category: 'Web Development Practices', selected: false },
            { index: 2, name: 'Set up a simple server (e.g., Flask, Express)', category: 'Server Fundamentals', selected: false },
            { index: 3, name: 'Basic CRUD operations in databases', category: 'Database Design & Management', selected: false },
            { index: 4, name: 'Awareness of RESTful APIs; creating simple endpoints', category: 'API Design & Integration', selected: false },
            { index: 5, name: 'Setting up a basic web server', category: 'Server Fundamentals', selected: false },
            { index: 6, name: 'User authentication and form handling', category: 'Security', selected: false },
            { index: 7, name: 'API endpoints that interact with databases', category: 'API Design & Integration', selected: false },
            { index: 8, name: 'Data validation and error handling', category: 'Web Development Practices', selected: false },
        ],
    },
    {
        level: 'Intermediate',
        skills: [
            { index: 9, name: 'Design and implement RESTful APIs', category: 'API Design & Integration', selected: false },
            { index: 10, name: 'Understand relational and NoSQL databases', category: 'Database Design & Management', selected: false },
            { index: 11, name: 'Middleware, routing, and file uploads', category: 'Web Development Practices', selected: false },
            { index: 12, name: 'OAuth, JWT, and session authentication', category: 'Security', selected: false },
            { index: 13, name: 'Experience with Git and CI/CD', category: 'Cloud & Infrastructure', selected: false },
            { index: 14, name: 'Develop user management APIs', category: 'API Design & Integration', selected: false },
            { index: 15, name: 'Use middleware for logging and security', category: 'Security', selected: false },
            { index: 16, name: 'Connect backends with external services', category: 'API Design & Integration', selected: false },
            { index: 17, name: 'Design database schemas and optimize queries', category: 'Database Design & Management', selected: false },
        ],
    },
    {
        level: 'Advanced',
        skills: [
            { index: 18, name: 'Robust authentication/authorization (e.g., SSO, RBAC)', category: 'Security', selected: false },
            { index: 19, name: 'Design microservices architecture', category: 'Cloud & Infrastructure', selected: false },
            { index: 20, name: 'Use messaging queues (RabbitMQ, Kafka)', category: 'Cloud & Infrastructure', selected: false },
            { index: 21, name: 'Cloud, Docker, and Kubernetes', category: 'Cloud & Infrastructure', selected: false },
            { index: 22, name: 'Caching, load balancing, and scaling systems', category: 'Cloud & Infrastructure', selected: false },
            { index: 23, name: 'Deploy microservices architectures', category: 'Cloud & Infrastructure', selected: false },
            { index: 24, name: 'Set up CI/CD pipelines', category: 'Cloud & Infrastructure', selected: false },
            { index: 25, name: 'Implement caching (e.g., Redis)', category: 'Cloud & Infrastructure', selected: false },
            { index: 26, name: 'Cloud and containerization for scalability', category: 'Cloud & Infrastructure', selected: false },
        ],
    },
    {
        level: 'Expert',
        skills: [
            { index: 27, name: 'Mastery of distributed systems and CAP theorem', category: 'Cloud & Infrastructure', selected: false },
            { index: 28, name: 'Backend architecture patterns (e.g., CQRS, serverless)', category: 'Team Leadership & Architecture', selected: false },
            { index: 29, name: 'Deep security knowledge and encryption', category: 'Security', selected: false },
            { index: 30, name: 'Database replication, sharding, high availability', category: 'Database Design & Management', selected: false },
            { index: 31, name: 'Lead backend teams and ensure code quality', category: 'Team Leadership & Architecture', selected: false },
            { index: 32, name: 'DevOps and Infrastructure as Code (IaC)', category: 'Cloud & Infrastructure', selected: false },
            { index: 33, name: 'Architect large-scale distributed systems', category: 'Team Leadership & Architecture', selected: false },
            { index: 34, name: 'Advanced security (e.g., end-to-end encryption)', category: 'Security', selected: false },
            { index: 35, name: 'Lead teams, define architecture, oversee deployments', category: 'Team Leadership & Architecture', selected: false },
        ],
    },
];

