// temp.js - Resume document matching the interviewReport schema

const mongoose = require("mongoose");

// This is a sample resume document that follows your schema structure
const resumeDocument = {
  jobDesctiption: `Senior Backend Developer
• 5+ years Node.js experience
• MongoDB expertise including Mongoose ODM and schema design
• RESTful API development
• Database optimization and indexing
• Team collaboration and mentoring`,

  resume: `JOHN DOE
Backend Developer | Node.js Specialist
San Francisco, CA | john.doe@email.com

EXPERIENCE
Senior Backend Developer - TechCorp Solutions (2022-Present)
• Designed MongoDB schemas using Mongoose ODM
• Developed RESTful APIs serving 10K+ users
• Optimized queries for 40% better performance

Backend Developer - InnovateTech Inc. (2019-2021)
• Built Node.js/Express services
• Implemented data validation and error handling
• Integrated third-party APIs

EDUCATION
MS Computer Science - Stanford University
BS Information Technology - UC Berkeley

SKILLS
Node.js, MongoDB, Mongoose, Express, REST APIs, Git, Docker, AWS`,

  selfDescription:
    "I'm a backend developer passionate about building scalable applications with Node.js and MongoDB. I enjoy designing efficient database schemas and optimizing performance. I've led multiple projects from conception to production and enjoy mentoring junior developers.",

  matchScore: 92,

  technicalQuestions: [
    {
      question:
        "How would you structure a Mongoose schema for a blog platform with users, posts, and comments?",
      intention:
        "To assess understanding of MongoDB schema design patterns and relationships",
      answer:
        "I would create separate collections for users and posts, but embed comments within posts since they're always accessed together. Users collection would have email (unique), name, and posts array referencing post IDs. Posts would include title, content, author reference, and embedded comments array with commenter info, text, and timestamps. I'd add indexes on frequently queried fields like email and createdAt.",
    },
    {
      question:
        "Explain how you'd implement validation in Mongoose for required fields and enums",
      intention:
        "To evaluate knowledge of schema validation and data integrity",
      answer:
        "In Mongoose, I use schema definition options: required: [true, 'Custom message'] for mandatory fields, enum arrays for restricted values like ['Low', 'Medium', 'High'], and custom validators for complex logic. I also use middleware (pre-save hooks) for validation that requires database lookups, and set timestamps: true for automatic createdAt/updatedAt.",
    },
    {
      question: "How do you optimize slow MongoDB queries?",
      intention: "To understand performance optimization techniques",
      answer:
        "First, I use .explain() to analyze query execution. Then I check for proper indexes - creating compound indexes for frequent query patterns. I also review aggregation pipelines to ensure $match stages come first. For large datasets, I implement pagination with limit() and skip() or cursor-based pagination. Finally, I consider schema refactoring if queries consistently need $lookup operations.",
    },
  ],

  behavioralQuestions: [
    {
      question:
        "Tell me about a time you had to debug a critical production issue",
      intention:
        "To assess problem-solving under pressure and debugging approach",
      answer:
        "Last year, our API started timing out after a deployment. I immediately rolled back while investigating. Using New Relic and MongoDB logs, I found a new query missing an index was causing full collection scans. I created the proper compound index, tested in staging, and redeployed. I then implemented automated index checks in our CI/CD pipeline to prevent recurrence.",
    },
    {
      question:
        "How do you handle disagreements with team members about technical approaches?",
      intention: "To evaluate collaboration and conflict resolution skills",
      answer:
        "I focus on data and tradeoffs. For example, when debating between embedded vs referenced documents, I created a small prototype measuring performance for our specific access patterns. I presented findings showing embedded was 3x faster for our reads. This data-driven approach helped the team make an informed decision while maintaining positive relationships.",
    },
    {
      question:
        "Describe a situation where you had to learn a new technology quickly",
      intention: "To assess adaptability and learning approach",
      answer:
        "When we needed to implement real-time features, I had to learn WebSockets and Socket.io within a week. I started with official docs, built a small chat app for practice, then created a proof of concept for our use case. I also shared findings with the team through a lunch & learn session. We successfully delivered the feature on schedule.",
    },
  ],

  skillGaps: [
    {
      skill: "GraphQL",
      severity: "Low",
    },
    {
      skill: "Kubernetes",
      severity: "Medium",
    },
    {
      skill: "TypeScript Advanced Types",
      severity: "Low",
    },
  ],

  preparationPlan: [
    {
      day: "Day 1-2",
      focus: "GraphQL Fundamentals",
      tasks: [
        "Complete Apollo Server tutorial with TypeScript",
        "Build a GraphQL wrapper around existing REST API",
        "Practice designing schemas for nested resources",
        "Implement authentication in GraphQL",
      ],
    },
    {
      day: "Day 3-4",
      focus: "Kubernetes Basics",
      tasks: [
        "Deploy a Node.js app to minikube locally",
        "Learn Pod, Service, and Deployment configurations",
        "Practice scaling and rolling updates",
        "Set up MongoDB StatefulSet",
      ],
    },
    {
      day: "Day 5",
      focus: "TypeScript Deep Dive",
      tasks: [
        "Study advanced types: unions, intersections, mapped types",
        "Refactor existing JavaScript code to TypeScript",
        "Practice generic constraints with MongoDB models",
        "Review utility types like Partial, Pick, and Omit",
      ],
    },
    {
      day: "Day 6",
      focus: "System Design Review",
      tasks: [
        "Practice designing scalable MongoDB schemas",
        "Review indexing strategies for common patterns",
        "Study sharding vs replication tradeoffs",
        "Prepare examples of past architecture decisions",
      ],
    },
    {
      day: "Day 7",
      focus: "Mock Interviews",
      tasks: [
        "Practice explaining Mongoose schema decisions",
        "Whiteboard API design for a social media app",
        "Review behavioral stories using STAR method",
        "Get feedback from peer on technical explanations",
      ],
    },
  ],
};

// Add timestamps manually to match schema
resumeDocument.createdAt = new Date();
resumeDocument.updatedAt = new Date();
