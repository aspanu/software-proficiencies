export interface Skill {
    index: number;
    name: string;
    selected: boolean;
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
            { index: 0, name: 'Basic understanding of server-side programming', selected: false },
            { index: 1, name: 'Familiarity with HTTP protocols and client-server architecture', selected: false },
            { index: 2, name: 'Set up a simple server (e.g., Flask, Express)', selected: false },
            { index: 3, name: 'Basic CRUD operations in databases', selected: false },
            { index: 4, name: 'Awareness of RESTful APIs; creating simple endpoints', selected: false },
            { index: 5, name: 'Setting up a basic web server', selected: false },
            { index: 6, name: 'User authentication and form handling', selected: false },
            { index: 7, name: 'API endpoints that interact with databases', selected: false },
            { index: 8, name: 'Data validation and error handling', selected: false },
        ],
    },
    {
        level: 'Intermediate',
        skills: [
            { index: 9, name: 'Design and implement RESTful APIs', selected: false },
            { index: 10, name: 'Understand relational and NoSQL databases', selected: false },
            { index: 11, name: 'Middleware, routing, and file uploads', selected: false },
            { index: 12, name: 'OAuth, JWT, and session authentication', selected: false },
            { index: 13, name: 'Experience with Git and CI/CD', selected: false },
            { index: 14, name: 'Develop user management APIs', selected: false },
            { index: 15, name: 'Use middleware for logging and security', selected: false },
            { index: 16, name: 'Connect backends with external services', selected: false },
            { index: 17, name: 'Design database schemas and optimize queries', selected: false },
        ],
    },
    {
        level: 'Advanced',
        skills: [
            { index: 18, name: 'Robust authentication/authorization (e.g., SSO, RBAC)', selected: false },
            { index: 19, name: 'Design microservices architecture', selected: false },
            { index: 20, name: 'Use messaging queues (RabbitMQ, Kafka)', selected: false },
            { index: 21, name: 'Cloud, Docker, and Kubernetes', selected: false },
            { index: 22, name: 'Caching, load balancing, and scaling systems', selected: false },
            { index: 23, name: 'Deploy microservices architectures', selected: false },
            { index: 24, name: 'Set up CI/CD pipelines', selected: false },
            { index: 25, name: 'Implement caching (e.g., Redis)', selected: false },
            { index: 26, name: 'Cloud and containerization for scalability', selected: false },
        ],
    },
    {
        level: 'Expert',
        skills: [
            { index: 27, name: 'Mastery of distributed systems and CAP theorem', selected: false },
            { index: 28, name: 'Backend architecture patterns (e.g., CQRS, serverless)', selected: false },
            { index: 29, name: 'Deep security knowledge and encryption', selected: false },
            { index: 30, name: 'Database replication, sharding, high availability', selected: false },
            { index: 31, name: 'Lead backend teams and ensure code quality', selected: false },
            { index: 32, name: 'DevOps and Infrastructure as Code (IaC)', selected: false },
            { index: 33, name: 'Architect large-scale distributed systems', selected: false },
            { index: 34, name: 'Advanced security (e.g., end-to-end encryption)', selected: false },
            { index: 35, name: 'Lead teams, define architecture, oversee deployments', selected: false },
        ],
    },
];
