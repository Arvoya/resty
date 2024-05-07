# Component Based UI

## Getting Started

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your
environment.
Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your
Editor (not mandatory).

### Install

    git clone git@github.com:Arvoya/resty.git
    cd resty
    npm install

### Configure app

No Current Environmental Variables

### Start & watch

    npm run dev
    npm start

## Architecture

```bash
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.scss
│   ├── App.tsx
│   ├── Components
│   │   ├── Footer
│   │   │   ├── Footer.scss
│   │   │   └── index.tsx
│   │   ├── Form
│   │   │   ├── Form.scss
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   ├── Header.scss
│   │   │   └── index.tsx
│   │   └── Results
│   │       ├── Results.scss
│   │       └── index.tsx
│   └── main.tsx
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Languages & tools

- TypeScript
- Vite
- React

## Change Log

1.0.0

## Collaborators

John T. Gause III
Brock Britton
