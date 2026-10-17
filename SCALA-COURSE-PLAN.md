# Scala — From Expressions to Reliable Applications

## Audience and prerequisites

For learners new to Scala who already recognise variables, conditions, loops, and functions in another language. Basic file and terminal familiarity is helpful and explained where needed. Java and advanced mathematics are not prerequisites. Introduce the JVM, Java APIs, and concurrency vocabulary locally; the Java and Apache Spark companion courses provide separate specialist depth.

Scope: Scala language foundations, functional composition, object and algebraic domain modelling, collections, explicit errors, reusable types, contextual abstraction, project organisation, testing, resource-safe I/O, Java interoperability, and asynchronous composition. The main path uses stable **Scala 3 on the JVM**. Introduce Scala CLI for small programs and sbt for structured projects. Use indentation syntax consistently and explain brace syntax for reading existing code. Scala 2 appears as bounded compatibility coverage, not a second interchangeable baseline.

Reference scope checked on **2026-10-17**. This plan does not assert a current patch release or universal dependency compatibility. Detailed runnable lessons must pin and record the compiler, JDK, Scala CLI, sbt, test framework, and dependencies together. Distinguish stable features from experimental compiler options; explicit-nulls mode is optional boundary awareness rather than a baseline assumption.

Target capability: construct and explain typed Scala programs; model valid domain states; compose transformations and failures; and justify type, resource, concurrency, and application-design choices from worked evidence. Completion does not establish assessed professional competence. Following examples is optional; submitted exercises, learner monitoring, and required deployments are outside scope.

Structure: **12 chapters, 77 sections**, distributed **6, 7, 6, 7, 7, 6, 7, 6, 6, 7, 7, and 5**. Counts reflect conceptual scope, not equal teaching duration.

## Learning spine

Observable execution → expressions and methods → functions → domain models → typed collections → explicit failures → reusable types → contextual abstraction → application evidence → I/O and interoperability → asynchronous composition → evolution.

Why this progression: a visible result anchors syntax and execution. Functions precede collection combinators; domain alternatives precede explicit error models; generics precede type classes. Basic result checks begin immediately, then project-level testing develops before external I/O. Resource ownership and failure composition precede concurrency. Compatibility and performance synthesis review decisions already encountered rather than introducing a detached feature catalogue.

Recurring example: an order-import and reporting application begins with one total, develops a typed domain, validates and aggregates records, crosses a file boundary, and enriches independent records asynchronously. Start with integer minor units under stated currency and range assumptions; introduce decimal arithmetic and explicit rounding when needed. Use labelled illustrative inputs and expected outputs. Secondary examples expose where the recurring model does not generalise.

Teaching method: objective → mental model → annotated code, diagram, or execution trace → contrasting failure/design → outcome → bridge. Keep material at course-plan level. Worked illustrations identify evidence for future lessons; they are not mandatory assignments or claims that code has already been executed.

## Chapter 1 — A First Program and Scala's Execution Model

Objective: Follow a small Scala program from source to observable output and distinguish tool roles and failure stages.

1. Source, compiler, JVM, and runtime
2. toolchain and version evidence
3. first program and entry point
4. REPL and feedback
5. indentation and braces
6. compile, runtime, and logic failures

Worked illustrations: Trace a small `@main` program calculating a total through source → compilation → JVM execution → printed output. Contrast running a source file through Scala CLI with starting a REPL session, then inspect tool version evidence. Show equivalent indentation and brace layouts without changing semantics. Compare a rejected type mismatch, a thrown exception, and a wrong-but-running total; locate the stage before choosing a debugging action. Explain downloaded tools/dependencies and the difference between trusted course code and arbitrary scripts before optional execution.

Outcome: Explain the source-to-result path, choose an initial workflow, and locate a failure at the appropriate stage.

Bridge: A visible result gives context for the values, expressions, and methods that express useful computations.

## Chapter 2 — Values, Expressions, and Methods

Objective: Trace expressions, names, control flow, and method calls while explaining type and numerical boundaries.

1. Values, variables, and scope
2. types and inference
3. arithmetic and numerical boundaries
4. strings and interpolation
5. conditions and expression results
6. loops and iteration
7. methods, parameters, and recursion

Worked illustrations: Trace `val` and `var` bindings, nested scope, an `if` expression, a terminating loop, and a method call with explicit and inferred types. Distinguish an immutable binding from deep immutability of its referenced object. Compare integer division, overflow, widening before arithmetic, and decimal rounding under stated assumptions. Show interpolation, default/named arguments, and a recursive base case; distinguish `Unit` from a useful calculated result. Introduce `Any`, `AnyVal`, `AnyRef`, and `Nothing` only far enough to read ordinary inferred types; revisit their design implications later.

Outcome: Construct and explain small computations, predict scope and argument effects, and recognise arithmetic and termination boundaries.

Bridge: Methods now provide familiar computations that can be passed around and composed as function values.

## Chapter 3 — Functions and Composable Computation

Objective: Treat functions as values and explain how composition and evaluation choices affect observable behaviour.

1. Functions as values
2. lambdas and function types
3. higher-order functions
4. closures and captured state
5. multiple parameter lists and currying
6. purity, effects, and evaluation

Worked illustrations: Pass a pricing function into a calculation and trace its argument and result types. Contrast a method with a function value and show ordinary method-to-function use without a compiler-internals detour. Trace a closure before and after captured state changes, then replace the hidden input with an explicit parameter. Compare multiple parameter lists, partial application, and currying with small substitutions. Use a counter trace to distinguish eager arguments, repeated by-name evaluation, and a memoised `lazy val`; none is automatically asynchronous. Separate a pure calculation from printing and mutation.

Outcome: Compose function-based calculations and predict the effects of captured state and argument evaluation.

Bridge: Composable calculations need domain values whose structure communicates valid business meaning.

## Chapter 4 — Modelling Domains with Products and Alternatives

Objective: Choose products, alternatives, and object composition to represent domain meaning and preserve invariants.

1. Classes and constructors
2. objects and companions
3. case classes and copying
4. enums and sealed alternatives
5. pattern matching and exhaustiveness
6. traits and composition
7. equality, invariants, and mutation boundaries

Worked illustrations: Model an order as a case class and its status as a finite enum or sealed hierarchy. Trace construction, companion factory validation, pattern matching with guards, and an omitted alternative; explain what exhaustiveness checking can and cannot establish. Contrast a product of fields with a choice of variants. Compare trait-based composition with an inheritance hierarchy, explaining overrides and dynamic dispatch through a small object diagram. Show that case-class `copy` is shallow and can bypass intended validation if the API permits it; case classes alone do not enforce business invariants. Contrast structural equality with reference identity and mutable-field hazards.

Outcome: Explain domain-model choices, read dispatch and matching behaviour, and identify where invariants need explicit enforcement.

Bridge: A typed domain makes it possible to transform many records while retaining their meaning.

## Chapter 5 — Collections and Data Transformation

Objective: Construct and explain collection pipelines with deliberate ownership, evaluation, ordering, and cost choices.

1. Sequence, set, and map choices
2. immutable and mutable ownership
3. map, filter, and flatMap
4. folds and aggregation
5. for expressions and desugaring
6. iterators, views, and lazy evaluation
7. complexity, ordering, and empty cases

Worked illustrations: Transform three labelled orders through `map`, `filter`, `flatMap`, grouping, and `foldLeft`, showing intermediate values and an empty-input result. Desugar a simple `for ... yield` into combinators before later using the same notation for errors. Compare prepend/traversal/indexing choices for `List` and `Vector`, then maps and sets with explicit ordering assumptions. Treat complexity tables as operation-specific models, not measured runtime predictions. Trace a consumed iterator, a re-evaluated view, and a retained lazy sequence; lazy processing can alter side-effect timing and memory retention. Contrast an unsafe empty reduction with an explicit initial accumulator.

Outcome: Express and trace collection transformations and justify a collection/evaluation strategy for stated requirements.

Bridge: Collection pipelines reveal missing and invalid data that need explicit result models.

## Chapter 6 — Absence, Errors, and Validation

Objective: Model absence and failure explicitly and distinguish dependent composition from independent validation.

1. Option and safe access
2. Either and domain errors
3. Try and exception boundaries
4. composing dependent failures
5. fail-fast versus accumulating validation
6. total functions and partial-function hazards

Worked illustrations: Distinguish an absent optional discount from a malformed price and from an I/O exception. Trace `Option`, `Either[ImportError, Order]`, and `Try` through successful and failing branches; compare `map`, `flatMap`, and for-expression composition. Explain that `Try` captures non-fatal exceptions from its computation rather than every possible failure. Show fail-fast dependent parsing beside independent field checks collected into an error list using a small explicit data model. Contrast `.get`, unchecked indexing, and non-exhaustive matches with total alternatives. Explain `PartialFunction` and safe lifting without presenting ordinary function types as proof of totality.

Outcome: Choose meaningful absence/error representations and explain their composition and information trade-offs.

Bridge: The repeated shapes in values and results motivate reusable types and more precise contracts.

## Chapter 7 — Types for Reusable and Precise APIs

Objective: Use type parameters and domain types to express reusable contracts while recognising abstraction costs.

1. Generic classes and methods
2. bounds and constraints
3. variance and substitutability
4. abstract type members
5. aliases and opaque domain types
6. union and intersection types
7. reading inference failures and choosing simpler APIs

Worked illustrations: Generalise a result wrapper and a transformation method, then trace type inference and useful explicit annotations. Explain covariance with a producer, contravariance with a consumer, and invariance with a value both consumed and produced; immutable does not by itself imply covariance. Use a small bound to justify available operations. Compare a type-parameter API with one abstract type member before choosing the simpler contract. Contrast a transparent alias with opaque `OrderId` and `CustomerId` types, explaining representation visibility and construction validation separately. Read a union by elimination through matching and an intersection as combined requirements; avoid implying casts or erased runtime checks enforce arbitrary generic distinctions.

Outcome: Read and design modest typed APIs, explain substitutability, and recognise when an abstraction obscures its contract.

Bridge: Reusable typed operations can request capabilities without fixing one implementation into every call.

## Chapter 8 — Contextual Abstraction and Type Classes

Objective: Explain compiler-supplied capabilities and build small type-class APIs with visible instance choices.

1. Extension methods
2. given instances and using parameters
3. contextual lookup and imports
4. type-class interfaces and instances
5. context bounds and generic algorithms
6. ambiguity, conversions, and API trade-offs

Worked illustrations: Define a small `Render[A]` capability, an explicit instance, a `given`, and a method accepting `using Render[A]`; show the same call with an explicit argument. Add an extension method and a context-bound generic renderer only after the underlying dictionary model is clear. Trace a missing instance and competing candidates using a small lexical/import diagram; do not imply a complete universal search-order algorithm. Contrast ordinary wildcard imports with given imports and explain companion implicit scope at an introductory level. Use `Ordering` as a second example. Prefer visible instances and explicit conversions; discuss implicit conversion hazards and keep derivation an optional continuation.

Outcome: Construct and explain a small capability-based API and diagnose missing or ambiguous contextual evidence.

Bridge: Contextual dependencies now need project boundaries and evidence that application behaviour remains understandable.

## Chapter 9 — Project Structure, Testing, and Build Evidence

Objective: Organise an application and use build, test, and diagnostic evidence to support its intended behaviour.

1. Packages, imports, and visibility
2. modules and dependency boundaries
3. sbt build and dependency versions
4. example-based tests and edge cases
5. property-based reasoning and generators
6. compiler diagnostics, debugging, and reproducible checks

Worked illustrations: Grow the running example into domain, parsing, and reporting packages with deliberate visibility and dependency direction. Read an annotated sbt build, source/test directories, Scala dependency cross-version notation, and a pinned test dependency; verify compatible versions when producing lessons. Use one Scala test framework consistently in lesson code, with its release explicitly recorded. Show passing/failing total and validation tests, then a property whose arithmetic assumptions matter. Compare a useful domain property with a test that merely repeats the implementation; generated examples do not constitute proof. Reproduce a failure from a clean build, inspect diagnostics and a stack trace, and document configuration needed to repeat it.

Outcome: Explain project boundaries and use reproducible build, test, and diagnostic evidence without overstating correctness.

Bridge: Tested pure components are ready to meet files and Java APIs through controlled boundaries.

## Chapter 10 — Files, Resources, and Java Interoperability

Objective: Cross file and Java boundaries with explicit parsing, null, failure, and resource-ownership policies.

1. Paths, encodings, and text input
2. parsing at an untrusted boundary
3. deterministic resource release
4. Java calls and exception translation
5. null and collection conversion boundaries
6. configuration and application entry points
7. separating pure logic from I/O

Worked illustrations: Trace a UTF-8 text import through path selection, bounded reading, parsing, validation, and reporting. Use a deliberately simple documented format; real CSV quoting requires an appropriate parser. Show resource acquisition, use, and release with `scala.util.Using`, including a parse failure and a close failure; read the returned failure rather than discarding it. Distinguish managed handles from APIs that read and close internally. Adapt a Java API, translate exceptions deliberately, and inspect a nullable return before constructing a domain value. Explain baseline null hazards and optional explicit-nulls checking without promising complete Java null safety. Contrast Java/Scala collection adapters with copies and identify shared mutation. Keep credentials out of examples and use named disposable paths for optional writes.

Outcome: Construct and explain an import boundary with deliberate resource release, validation, and Java adaptation.

Bridge: With boundary failures and ownership explicit, independent external work can be composed asynchronously.

## Chapter 11 — Concurrency with Futures and Promises

Objective: Trace asynchronous computations and reason about scheduling, failure, shared state, and lifecycle limits.

1. Concurrency, parallelism, and shared state
2. Future creation and execution contexts
3. composition and start-order effects
4. failures and recovery
5. combining independent results
6. blocking, timeouts, and cancellation limits
7. Promise completion and lifecycle ownership

Worked illustrations: Draw timelines for dependent enrichment and separately started independent requests, showing when `Future.apply` schedules work. Trace `map`, `flatMap`, recovery, and `Future.sequence` with success and failure; result ordering need not equal completion order. Explain the supplied `ExecutionContext` using the contextual model already established. Contrast immutable results with unsafe shared mutable counters. Show why wrapping blocking work in a future does not make the underlying operation non-blocking; isolate blocking work and bound fan-out. A timeout or failed aggregate does not imply cancellation of started work. Trace competing `Promise.trySuccess`/`tryFailure` completions and owned executor shutdown; ordinary futures do not supply structured resource lifetime management.

Outcome: Compose futures and explain start order, failure propagation, blocking risk, and lifecycle responsibilities.

Bridge: Asynchronous behaviour completes the application model and motivates a final compatibility and design review.

## Chapter 12 — Compatibility, Design Review, and Continued Practice

Objective: Review a complete application and make bounded compatibility, performance, and ecosystem decisions.

1. Reading Scala 2 code
2. source/binary/dependency compatibility
3. end-to-end application synthesis
4. performance evidence and design trade-offs
5. ecosystem choices and continued study

Worked illustrations: Read a small Scala 2 fragment with braces, wildcard syntax, and `implicit` definitions, then explain its Scala 3 intent without promising mechanical migration. Inspect compiler, binary artifact suffixes, JDK constraints, and dependency release evidence before claiming interoperability; source compatibility and binary compatibility are separate questions. Walk one report from configuration through parsing, domain validation, transformation, enrichment, and output, including a rejected record and external failure. Compare a clearer implementation with a speculative optimisation using allocation/cost reasoning and measured-evidence requirements. Orient learners to effect systems, streaming, actors, Spark, and alternate backends as distinct next-study choices, each requiring its own compatibility and conceptual preparation.

Outcome: Explain the whole application, assess compatibility evidence, and justify design or further-study choices within stated limits.

Bridge: Continue with small independently reviewed applications, deliberate failure investigations, and measurement-led refinements. Recheck tool and library compatibility for each project. Choose a focused companion path—advanced functional effects, streaming, service development, Spark, or deeper JVM study—after identifying the new prerequisites and operational responsibilities.

## Sources and scope

The [Scala 3 Book](https://docs.scala-lang.org/scala3/book/introduction.html) provides the broad language and tooling map. Focused checks include [variance](https://docs.scala-lang.org/scala3/book/types-variance.html), [context parameters](https://docs.scala-lang.org/scala3/book/ca-context-parameters.html), and [given imports](https://docs.scala-lang.org/scala3/book/ca-given-imports.html). These support the introductory type and contextual models; this plan is not an exhaustive language-reference audit.

Application references include [Scala CLI getting started](https://scala-cli.virtuslab.org/docs/getting_started/), [building and testing with sbt](https://docs.scala-lang.org/scala3/book/tools-sbt.html), [collection performance characteristics](https://docs.scala-lang.org/overviews/collections-2.13/performance-characteristics.html), [Using API](https://www.scala-lang.org/api/current/scala/util/Using$.html), and [Java interaction](https://docs.scala-lang.org/scala3/book/interacting-with-java.html). The collection guide's 2.13 label identifies the collection generation also relevant to Scala 3; it does not make all Scala 2 code interchangeable. The API's current URL is moving, so runnable lessons must record their resolved library version.

[Futures and Promises](https://docs.scala-lang.org/overviews/core/futures.html) and the [migration compatibility overview](https://docs.scala-lang.org/scala3/guides/migration/compatibility-intro.html) inform asynchronous and compatibility boundaries. Follow the appropriate language-version examples and verify dependency support separately.

Book comparison used publisher material for [Programming in Scala, fifth edition](https://www.artima.com/shop/programming_in_scala_5ed) and [Functional Programming in Scala, second edition](https://www.manning.com/books/functional-programming-in-scala-second-edition), not full-book inspection. Their broad language and deeper functional perspectives inform scope and progression respectively. Older Scala texts are historical context rather than current semantic authority. Detailed research limits and coverage mapping are maintained in the repository README.

Outside scope: advanced macros/metaprogramming, compiler plugins, deep dependent and match types, Scala.js/Native implementation, framework-specific services, Spark pipelines, actor-system engineering, and full Cats Effect/ZIO/streaming curricula. Type-class derivation is an optional continuation after explicit instances. Testing is an engineering topic, not learner assessment. This document specifies planned explanations and illustrations; it does not deliver lessons, compiled examples, or a production implementation.
