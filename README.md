![Logo](https://i.ibb.co/WkG6YYK/Screenshot-2023-12-15-at-06-33-59.png)

# Barakah Board

Muslim-Friendly Tech Job Board 🚀

Elevate your career in the Tech Industry while staying true to your faith.

Connect with like-minded employers who won't make you compromise on your Islamic principles.

Your journey to meaningful professional growth starts here.

## Authors

- [@ObaidUr-Rahmaan](https://www.github.com/ObaidUr-Rahmaan) - Tech Lead
- [@zaktech96](https://www.github.com/zaktech96) - Frontend Engineer
- [@EpicIbby101](https://www.github.com/EpicIbby101) - Frontend Engineer

## Prerequisites

Node - 20.10.0 LTS

## Running Locally

Clone the project

```bash
  git clone
```

Go to the project directory

```bash
  cd barakah-board
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Contributing

See the CONTRIBUTING.md file for more details on how to effectively contribute to this project.

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter. It enforces a consistent style by parsing your code

Before pushing any changes, format the project locally by running:

```bash
npm run format:fix
```

### Linting

[ESLint](https://eslint.org/) is an automation tool, used to save time by making sure everyone's code is following the
same standards. By using ESLint we can avoid wasting time on code reviews for simple things like formatting and naming
conventions.

Linting configuration lives in eslint `.eslintrc.json`

Before pushing any changes, lint the project locally by running:

```bash
npm run lint
```

Worth watching - https://youtu.be/Cd-gBxzcsdA - Difference between Prettier and ESLint

## Running Tests

[//]: # (TODO: Add tests)

## Deployment

Deployments for this project are automated using Vercel's CI pipeline. DevOps knowledge is not required to be productive
in this codebase. Vercel listens to changes to this repo on every commit.

- Open Pull Request commits automatically generate preview environments.
- Merged Pull Requests trigger Vercel's pipeline to deploy the app to prod.

You can monitor deployments here - https://github.com/ObaidUr-Rahmaan/barakah-board/deployments
