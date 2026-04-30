# Report

## Approach
Vibe-coded with Claude Code. The UI was reconstructed from screenshots without ever pulling source code or content from the original site. Iterative refinement was used to nail layout, colors, and the podium/expanded-row interactions.

## Tools & Techniques
- Claude Code (agentic IDE) for code generation and refactor passes
- Stack: Vite + React + TypeScript + Tailwind CSS + lucide-react
- Static deployment via GitHub Actions to GitHub Pages

## Data Replacement Strategy
- All employee names are invented (no resemblance to any real person).
- Titles come from a generic, role-based pool.
- Department codes preserve the original's shape (e.g., `ZX.U1.D1.G1`) but use synthetic two-letter region codes that do **not** map to real ISO country codes.
- Avatars are generated via DiceBear from deterministic seeds — no real photos.
- Activity titles are invented around three category prefixes (`[TALK]`, `[LEARN]`, `[PARTNER]`) and bear no relation to any real activity.
- All data is static, hand-curated, and deterministic across reloads.

## Categories
- Education (graduation cap)
- Public Speaking (lectern/podium)
- University Partners (smile)

## Deployment
GitHub Actions workflow builds on every push to `main` and deploys `dist/` to GitHub Pages.
