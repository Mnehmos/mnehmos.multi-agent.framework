# Contributing to the Advanced Multi-Agent AI Framework

Thank you for your interest in improving this framework.

This repository is designed as a reusable, public GitHub template for building structured, production-ready multi-agent systems. Contributions should strengthen its clarity, safety, portability, and adherence to the core contracts that make it a reliable template for others.

## Scope and Principles

When contributing, optimize for:

- Template usability for a broad range of runtimes and organizations.
- Clear, enforceable contracts over ad-hoc prompt tricks.
- Safe automation:
  - One-tool-per-message (or equivalent atomic) execution.
  - Scoped, minimal, reviewable edits.
  - Boomerang-style task returns (structured, auditable results).
- Documentation that is neutral and platform-agnostic.

Do not introduce company-specific policies, proprietary dependencies, or behavior that makes the template unusable for general public/open-source consumption.

## How to Propose Changes

Use GitHub Issues and Pull Requests:

1. Open an Issue:
   - Use issues to report problems, request improvements, or propose new patterns.
   - Be explicit about:
     - The contract or file affected (for example: [`templates/custom_modes.yaml`](templates/custom_modes.yaml), [`templates/custom-instructions-for-all-modes.md`](templates/custom-instructions-for-all-modes.md), [`slash-commands/`](slash-commands/)).
     - The rationale (safety, clarity, compatibility, maintainability).

2. Open a Pull Request:
   - Keep changes minimal and well-scoped.
   - Reference the relevant Issue when applicable.
   - Clearly describe:
     - What you changed.
     - Why it aligns with the framework’s goals.
     - Any implications for downstream template users.

3. Style and Structure:
   - Follow existing patterns and tone in this repo.
   - Prefer additive/extensible patterns over breaking changes.
   - Keep markdown link style consistent using direct clickable references like:
     - [`CONTRIBUTING.md`](CONTRIBUTING.md)
     - [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

## Expectations for Downstream Template Users

If you fork or use this repository as a template for your own projects:

- You are free to:
  - Change names, branding, and runtime wiring.
  - Add organization-specific instructions and policies.
  - Extend modes, slash-commands, and workflows.

- You SHOULD:
  - Preserve or clearly document deviations from the core contracts:
    - One-tool-per-message / atomic tool calls.
    - Scoped Worker edits (workspace_path + file_patterns).
    - Boomerang-style structured task return payloads.
    - Orchestrator / Worker / Reviewer role separation.
  - If you intentionally change these behaviors:
    - Explicitly document the new rules in your own README/AGENTS/docs so that automated agents and contributors cannot misinterpret expectations.

- You MUST NOT:
  - Present modified rules as if they are the original upstream defaults.
  - Introduce ambiguous or conflicting instructions that make agent behavior unsafe or non-deterministic without clearly calling out those changes.

## Code of Conduct

This project follows a standard, inclusive Code of Conduct to keep collaboration respectful and productive.

By participating, you agree to uphold the guidelines described in:
- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

## License

Contributions to this repository are made under the terms of the MIT License:

- [`LICENSE`](LICENSE)