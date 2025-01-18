# Bejasc's Monorepo Template

A modern monorepo template with full TypeScript and linting support, streamlined apps/packages management, and shared configs and dependencies using pnpm.

You can use this template as a starting point for your own structured monorepo projects, improving code quality, ensuring consistency across projects, optiomzing build and development workflows, and sharing types, configurations and dependencies.

A typical usecase for this template is to create a monorepo for a web application with multiple client and server applications, sharing common types, configurations, and dependencies.

## Features

- 📦 Multiple apps and packages support
- 🔄 Shared dependencies management with pnpm
- 📘 Full TypeScript support
- 🔨 Consistent tooling across projects
- 🚀 Optimized build and development workflow
- 📊 Shared configurations (ESLint, TypeScript, etc.)

## Structure

```
.
├── apps/                 # Application projects, as required
│ ├── client/
│ └── api/
├── packages/             # Shared packages/libraries, as required
│ ├── types/
├── pnpm-workspace.yaml
└── package.json          # Root package.json
```

## Prerequisites

- Node.js (v20 or higher recommended)
- pnpm (v7 or higher)

## Getting Started

1. Clone this template:

`git clone https://github.com/bejasc/bejasc-monorepo-template.git new-project`
`cd new-projecte`

2. Install dependencies:

`pnpm install`

3. Build all packages:

`pnpm build`

4. Start development:

`pnpm dev`

## Working with the Monorepo

### Creating New Packages

1. Create a new directory in `packages/`
2. Initialize package.json
3. Add the package to the workspace in `package.json`

#### Notes

- Either add to the package.json in the root or in specific apps or packages.
- All apps and packages will automatically be added to the workspace.

### Creating New Apps

1. Create a new directory in `apps/`
2. Initialize package.json

#### Notes

- The `pnpm dev` and `pnpm build` commands will automatically pick up new apps and packages.
- Consider sharing tsconfiig.json for consistency.

## Best Practices

- Keep shared code in the `packages/` directory
- Maintain consistent versioning across packages
- Use TypeScript for type safety
- Follow the established code style and linting rules

## Scripts

- `pnpm build`: Build all packages and apps
- `pnpm dev`: Start development servers

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Support

For support, please open an issue in the repository.
