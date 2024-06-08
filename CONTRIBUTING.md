# Contributing to `auto-palette-web`

This project welcomes contributions from the community. Below are guidelines on how to participate effectively.

## Issues

This project uses [GitHub Issues](https://github.com/t28hub/auto-palette-web/issues) to track bugs and enhancement requests.  
Please search the existing issues before filing new issues to avoid duplicates.

## Pull Requests

### Setup the Project

1. Fork and clone the repository
1. Install the latest LTS version of [Node.js](https://nodejs.org/)
1. Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
1. Install dependencies using `pnpm install`
1. Start the development server using `pnpm dev`

### Create a Pull Request

Please follow these steps to contribute to the project:

1. Fork and clone the repository
1. Create a new branch for your changes
1. Make your changes and write tests

When writing tests, please ensure that you cover all new functionalities and bug fixes. The tests should be comprehensive and check for both expected and unexpected inputs.

> [!TIP]
> This project provides the following scripts to help you with development:
>
> - `pnpm dev`: Starts the development server
> - `pnpm clean`: Cleans the project
> - `pnpm build`: Builds the project
> - `pnpm test`: Runs unit tests
> - `pnpm lint`: Lints the codebase
> - `pnpm format`: Formats the codebase
> For more information, see the [package.json](package.json) file.

### Code Style

This project uses [Biome](https://biomejs.dev/) for JavaScript, TypeScript, JSX and JSON code formatting.  
Ensure consistency by following general JavaScript style guidelines, and run the following command before creating a pull request:

```sh
pnpm lint
```

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.
The commit message should be structured `<type>[optional scope]: <description>` where `category` is one of the following:

- `fix`: A commit of the type `fix` patches a bug in your codebase.
- `feat`: A commit of the type `feat` introduces a new feature to the codebase.
- `refactor`: A commit of the type `refactor` makes changes to the codebase that neither fixes a bug nor adds a feature.
- `style`: A commit of the type `style` makes changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `test`: A commit of the type `test` adds missing tests or corrects existing tests.
- `perf`: A commit of the type `perf` improves performance.
- `docs`: A commit of the type `docs` makes changes to the documentation of the codebase.
- `build`: A commit of the type `build` makes changes to the build process or auxiliary tools and libraries such as documentation generation.
- `ci`: A commit of the type `ci` makes changes to the CI configuration files and scripts.
- `chore`: A commit of the type `chore` makes changes to the codebase that do not affect the meaning of the code (e.g. updating dependencies).

### Code Review

Once your pull request is created, it will be reviewed by the maintainers.  
Review comments may request some changes, improvements or provide other feedback.  
Please respond to these in a timely manner and push your updates to the same branch on your fork.

## License

By contributing to this project, you agree that your contributions will be licensed under the [LICENSE](LICENSE) file in this repository.
