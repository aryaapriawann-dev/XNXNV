# CONTRIBUTION WORKFLOW - 1000 Contributions Goal

## Strategy
- **Small commits**: Setiap fitur/fix → commit terpisah
- **Conventional commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `perf:`, `test:`, `style:`
- **Frequent pushes**: Push setiap commit ke remote

## Commit Message Format
```
<type>: <short description>

[optional body]
[optional footer]
```

### Types
- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Dokumentasi (README, comments, etc)
- `refactor`: Code refactoring (tidak change behavior)
- `chore`: Maintenance tasks (config, deps, etc)
- `perf`: Performance improvement
- `test`: Add/modify tests
- `style`: Code style changes (formatting, semicolons, etc)
- `ci`: CI/CD changes
- `build`: Build system changes

## Workflow Steps

1. Buat branch baru: `git checkout -b feat/<feature-name>` atau `fix/<issue>`
2. Lakukan perubahan
3. Stage file: `git add <files>`
4. Commit: `git commit -m "type: description"`
5. Push: `git push -u origin <branch>`
6. Buka PR/MR (optional, bisa langsung ke main kalau small change)

## Small Contribution Ideas (Easy to Commit Frequently)

### Code Quality
- [ ] Add missing TypeScript types
- [ ] Fix lint warnings
- [ ] Add JSDoc comments to functions
- [ ] Rename variables untuk readability
- [ ] Extract magic numbers/strings ke constants
- [ ] Remove unused imports/variables
- [ ] Add error boundaries
- [ ] Add loading states

### Documentation
- [ ] Update README dengan setup steps
- [ ] Add comments untuk complex logic
- [ ] Fix typos/grammar
- [ ] Tambahkan contoh penggunaan
- [ ] Update changelog

### Testing
- [ ] Add unit tests untuk components
- [ ] Add integration tests
- [ ] Add e2e tests (cypress/playwright)
- [ ] Fix broken tests

### Config/Setup
- [ ] Update dependencies ke latest version
- [ ] Add .env.example
- [ ] Configure ESLint/Prettier rules
- [ ] Optimize build config
- [ ] Add GitHub Actions workflows

### UX/Accessibility
- [ ] Add alt text ke images
- [ ] Fix keyboard navigation
- [ ] Add ARIA labels
- [ ] Optimize color contrast
- [ ] Add skip-to-content link

### Performance
- [ ] Lazy load images
- [ ] Optimize bundle size
- [ ] Add caching headers
- [ ] Minify assets

### Content
- [ ] Update portfolio items
- [ ] Add new blog post
- [ ] Update team member profiles
- [ ] Tambahkan FAQ baru
- [ ] Update pricing info

## Quick Start Commands

```bash
# Branch baru
git checkout -b feat/tiny-improvement

# Setelah work
git add .
git commit -m "feat: add missing alt text to hero images"
git push -u origin feat/tiny-improvement
```

## Tracking
Setiap commit = 1 contribution. Target: 1000 contributions.
Cheat: small commits yang legit (tidak spammy) tetap dihitung.
