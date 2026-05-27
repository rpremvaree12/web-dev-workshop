# web-dev-workshop

Build real websites from scratch — no experience needed. Over six one-hour sessions you'll learn HTML, CSS, and JavaScript by making projects that are actually about you.

---

## Before You Start

1. Create a free account at [github.com](https://github.com) if you don't have one
2. Click the **Fork** button at the top right of this page to get your own copy
3. Open your fork in GitHub Codespaces: click the green **Code** button → **Codespaces** → **Create codespace on main**
4. That's it — your editor is ready in the browser, nothing to install!
5. Here are the workshop [slides](https://docs.google.com/presentation/d/1PuRcmGhxZS-eKfx0XqDV3p0uWYPfVthA/edit?usp=sharing&ouid=103875033220228607197&rtpof=true&sd=true)

[internet quiz](./internet-quiz/five-levels.html)

---

## The Projects

| Workshop | Folder | What You'll Build | Skills |
|----------|--------|-------------------|--------|
| 1 & 2 | `about-me/` | A personal page with your name, a fun fact, and a link to your favorite site — then styled to match your personality | HTML, CSS |
| 3 | `link-hub/` | A centered card layout with links to your favorite places online — your own personal Linktree | CSS Flexbox |
| 4 | `vibe-check/` | Click a button and the whole page changes — colors, messages, all of it | JavaScript |
| 5 | `quiz/` | A scored quiz on any topic, with a high score that remembers you even after you close the tab | JavaScript, localStorage |
| 6 | `portfolio/` | A homepage that ties all your projects together, then published to a real URL | HTML, CSS, JS, GitHub Pages |

---

## Workshop Schedule

<details>
<summary><strong>Workshop 1 — How the Web Works + Your First Webpage</strong></summary>

**Folder:** `about-me/`

How does a webpage go from code on a screen to something anyone in the world can see in a browser? You'll get a mental model of browsers, servers, and HTML files — then write your first real HTML.

**You'll learn:** HTML tags (`h1`, `p`, `img`, `a`), how to preview a page in the browser, and how to navigate Codespaces.

**End of session — save your work:**
1. Click the **Source Control** icon in the left sidebar. <img src="images/source-control.svg" height="25">
2. Hover over **Changes** and click the **+** to stage all your files
3. Type a commit message like `add about me page` and click **Commit**
4. Click **Sync Changes** to push to GitHub
5. Since this is the first time you will need to type this once in the terminal:  
`git push -u origin main`  
This tells Git where to send your changes. After running it once, the Sync Changes button will work on its own for every session going forward.

</details>

<details>
<summary><strong>Workshop 2 — Making It Look Good (CSS Basics)</strong></summary>

**Folder:** `about-me/` (same folder, new file)

Why is it useful to keep a webpage's content and its appearance in separate files? You'll style the page you built in Workshop 1 — colors, fonts, spacing — and see how CSS and HTML work as a team.

**You'll learn:** Selectors, properties, values, the box model, and Google Fonts.

**End of session — save your work:**
1. Click the **Source Control** icon in the left sidebar
2. Hover over **Changes** and click the **+** to stage all your files
3. Type a commit message like `style about me page` and click **Commit**
4. Click **Sync Changes** to push to GitHub

</details>

<details>
<summary><strong>Workshop 3 — Layout & Structure (Flexbox)</strong></summary>

**Folder:** `link-hub/`

Why do web developers need special tools just to control where things sit on a page? You'll learn Flexbox — the layout system used in almost every real website.

**You'll learn:** `display: flex`, `justify-content`, `align-items`, `flex-direction`.

**End of session — save your work:**
1. Click the **Source Control** icon in the left sidebar
2. Hover over **Changes** and click the **+** to stage all your files
3. Type a commit message like `add link hub` and click **Commit**
4. Click **Sync Changes** to push to GitHub

</details>

<details>
<summary><strong>Workshop 4 — Making Things Happen (JavaScript)</strong></summary>

**Folder:** `vibe-check/`

What's the difference between a webpage that displays information and one that responds to you? You'll write your first JavaScript — variables, functions, and event listeners.

**You'll learn:** `querySelector`, `addEventListener`, DOM manipulation.

**End of session — save your work:**
1. Click the **Source Control** icon in the left sidebar
2. Hover over **Changes** and click the **+** to stage all your files
3. Type a commit message like `add vibe check page` and click **Commit**
4. Click **Sync Changes** to push to GitHub

</details>

<details>
<summary><strong>Workshop 5 — Logic & Memory</strong></summary>

**Folder:** `quiz/`

How do websites make decisions — and how do they remember things about you even after you close the tab? You'll combine conditionals, arrays, and localStorage to build a quiz that keeps score.

**You'll learn:** `if/else`, arrays, `localStorage.setItem`, `localStorage.getItem`.

**End of session — save your work:**
1. Click the **Source Control** icon in the left sidebar
2. Hover over **Changes** and click the **+** to stage all your files
3. Type a commit message like `add quiz with high score` and click **Commit**
4. Click **Sync Changes** to push to GitHub

</details>

<details>
<summary><strong>Workshop 6 — Putting It All Together + Going Live</strong></summary>

**Folder:** `portfolio/` + root `index.html`

What does it actually mean to publish something on the internet? You'll build a homepage linking all your projects, commit it, and flip the switch to make everything live.

**You'll learn:** Combining HTML, CSS, and JS, GitHub Pages deployment.

**End of session — deploy your site:**
1. Click the **Source Control** icon in the left sidebar
2. Hover over **Changes** and click the **+** to stage all your files
3. Type a commit message like `add portfolio and go live` and click **Commit**
4. Click **Sync Changes** to push to GitHub
5. Go to your repo on GitHub → **Settings** → **Pages**
6. Under **Branch**, select **main** and click **Save**
7. Wait about a minute, refresh the page, and your live URL will appear

Your site will be at `https://your-username.github.io/web-dev-workshops/` — share it with anyone.

</details>

---

## File Structure

```
web-dev-workshops/
├── README.md               ← you are here
├── index.html              ← your portfolio homepage (built in Workshop 6)
├── about-me/
│   ├── index.html          ← Workshop 1: HTML structure
│   └── style.css           ← Workshop 2: CSS styling
├── link-hub/
│   ├── index.html
│   └── style.css
├── vibe-check/
│   ├── index.html
│   └── script.js
├── quiz/
│   ├── index.html
│   └── script.js
└── portfolio/
    ├── index.html
    ├── style.css
    └── script.js
```

Each folder has starter files with comments that tell you exactly what to add and where. You don't need to create any new files — just open the right folder for the workshop you're in and start writing.

---

## Tips

- **Stuck?** Read the comment at the top of the file you're working in — it'll point you in the right direction
- **Broken page?** Open the browser console (right-click → Inspect → Console) and look for red error messages
- **Want to experiment?** Go for it — you can always undo with `Ctrl+Z` or ask for help
- **Done early?** Try adding something the project didn't ask for — a new color, an extra question, a different message

---

## Questions?

Bring them to the next session or drop a message in the class chat. There are no bad questions — if something isn't making sense, it's worth asking.
