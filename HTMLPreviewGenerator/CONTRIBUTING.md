# Contributing to Group 20 Wheels Website

Thank you for your interest in contributing to South Africa's premier rim restoration website! This document provides guidelines for contributing to the project.

## Development Setup

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Set up environment variables (copy `.env.example` to `.env`)
5. Start development server: `npm run dev`

## Code Standards

### TypeScript
- Use strict TypeScript configuration
- Prefer interfaces over types for object definitions
- Use proper type annotations for function parameters and returns

### React Components
- Use functional components with hooks
- Follow naming convention: PascalCase for components
- Use TypeScript interfaces for props
- Implement proper error boundaries where needed

### Styling
- Use Tailwind CSS utility classes
- Follow responsive-first design principles
- Use semantic HTML elements
- Maintain consistent spacing and typography

### Database
- Use Drizzle ORM for all database operations
- Follow schema-first development
- Use proper TypeScript types from schema definitions
- Handle database errors gracefully

## Project Structure

```
client/src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── hooks/         # Custom React hooks
├── lib/           # Utilities and configurations
└── types/         # TypeScript type definitions

server/
├── routes.ts      # API endpoint definitions
├── storage.ts     # Database operations
└── services/      # External service integrations
```

## Commit Guidelines

- Use clear, descriptive commit messages
- Follow conventional commit format when possible
- Keep commits focused on single changes
- Test thoroughly before committing

## Pull Request Process

1. Create a feature branch from main
2. Make your changes following the code standards
3. Test your changes locally
4. Update documentation if needed
5. Submit pull request with clear description
6. Respond to code review feedback promptly

## Business Context

This website serves Group 20 Wheels, a professional rim restoration service in Johannesburg, South Africa. Key considerations:

- **Target Audience**: Vehicle owners with damaged or worn rims
- **Service Area**: Gauteng Province (Johannesburg, Pretoria, surrounding areas)
- **Core Services**: Diamond cutting, mirror polishing, curb damage repair
- **Contact Method**: WhatsApp-first communication (+27 78 548 2261)

## Testing

- Test all responsive breakpoints
- Verify WhatsApp integration works correctly
- Ensure all forms validate properly
- Test loading states and error handling
- Verify database operations work as expected

## Questions or Issues

For questions about contributing:
- Open an issue on GitHub
- Contact via WhatsApp: +27 78 548 2261
- Check existing documentation first

Thank you for helping improve South Africa's best rim restoration website!