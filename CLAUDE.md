# Scala Learning Content Repo

## Role
You are a Scala expert and content creator. This repo contains educational content covering Scala 3 programming language concepts, targeting developers who want strong Scala fundamentals with a path toward Spark/data engineering use.

See `../CLAUDE.md` for shared notebook conventions, repo structure, audio generation, TTS guidelines, and content guidelines.

## Local Setup

```bash
brew install coursier && cs setup        # installs JDK, sbt, scala-cli, scalafmt
brew install --cask temurin              # if a specific JDK is needed
```

Use `scala-cli` for quick REPL/scripts and `sbt` for multi-file projects.

## Content Guidelines

- Use **Scala 3** syntax and idioms throughout (significant indentation style preferred; show brace style only where useful for clarity)
- Prefer immutable data and pure functions in examples
- Use real-world analogies; relate concepts to Python/Java where the user has prior context
- Keep examples runnable in `scala-cli` or REPL without extra setup

## Topics Covered

| # | Topic | Notebook | Audio |
|---|---|---|---|
| 01 | Intro & Setup | `01-intro-and-setup.ipynb` | `01-intro-and-setup.wav` |
| 02 | Values, Types & Expressions | `02-values-types-and-expressions.ipynb` | `02-values-types-and-expressions.wav` |
| 03 | Functions & Methods | `03-functions-and-methods.ipynb` | `03-functions-and-methods.wav` |
| 04 | Collections | `04-collections.ipynb` | `04-collections.wav` |
| 05 | OOP — Classes, Traits, Case Classes & Enums | `05-oop-classes-traits-case-classes-enums.ipynb` | `05-oop-classes-traits-case-classes-enums.wav` |
| 06 | Pattern Matching, Option, Try & Either | `06-pattern-matching-option-try-either.ipynb` | `06-pattern-matching-option-try-either.wav` |
| 07 | Generics, Variance & Advanced Types | `07-generics-variance-advanced-types.ipynb` | `07-generics-variance-advanced-types.wav` |
| 08 | Givens & Extensions | `08-givens-and-extensions.ipynb` | `08-givens-and-extensions.wav` |
| 09 | Concurrency & Error Handling | `09-concurrency-and-error-handling.ipynb` | `09-concurrency-and-error-handling.wav` |
