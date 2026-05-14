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
| 04 | Collections Essentials | `04-collections-essentials.ipynb` | `04-collections-essentials.wav` |
| 05 | Collection Operations | `05-collection-operations.ipynb` | `05-collection-operations.wav` |
| 06 | Classes, Objects & Traits | `06-classes-objects-and-traits.ipynb` | `06-classes-objects-and-traits.wav` |
| 07 | Case Classes & Enums | `07-case-classes-and-enums.ipynb` | `07-case-classes-and-enums.wav` |
| 08 | Pattern Matching | `08-pattern-matching.ipynb` | `08-pattern-matching.wav` |
| 09 | Option, Try & Either | `09-option-try-either.ipynb` | `09-option-try-either.wav` |
| 10 | Generics & Variance | `10-generics-and-variance.ipynb` | `10-generics-and-variance.wav` |
| 11 | Givens & Extensions | `11-givens-and-extensions.ipynb` | `11-givens-and-extensions.wav` |
| 12 | Advanced Types | `12-advanced-types.ipynb` | `12-advanced-types.wav` |
| 13 | Futures & Concurrency | `13-futures-and-concurrency.ipynb` | `13-futures-and-concurrency.wav` |
| 14 | Error Handling & Resources | `14-error-handling-and-resources.ipynb` | `14-error-handling-and-resources.wav` |
| 15 | Scala for Spark | `15-scala-for-spark.ipynb` | `15-scala-for-spark.wav` |
