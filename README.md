# Jaymar C. Lomocso — Personal CV Website

A responsive personal CV and portfolio for Jaymar C. Lomocso, an Information Technology student and aspiring web developer. It includes education, skills, three GitHub projects, student experience, contact links, project filtering, and a saved light/dark theme.

## Technologies

Pure HTML, CSS, and JavaScript. No frameworks, libraries, or build tools. Google Fonts supplies Manrope and DM Sans.

## Student

**Jaymar C. Lomocso**

## Live site

https://YOUR_VERCEL_PROJECT.vercel.app

## Profiles and featured repositories

- GitHub: https://github.com/lomocsojaymar-cmyk
- LinkedIn: https://www.linkedin.com/in/jaymar-lomocso-a37b16414/
- Email: LomocsoJaymar@gmail.com
- Facebook: https://web.facebook.com/white.08.29/
- Instagram: https://www.instagram.com/user_j6y/
- Lost and Found: https://github.com/lomocsojaymar-cmyk/Lost-and-Found-
- PointOFDish: https://github.com/lomocsojaymar-cmyk/PointOFDish
- Roulette: https://github.com/lomocsojaymar-cmyk/Roulette

## Folder structure

```text
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── profile.jpg              # Jaymar's photo
│   ├── project-lost-found.svg
│   ├── project-point-of-dish.svg
│   └── project-roulette.svg
└── README.md
```

## Before publishing

1. Replace every `YOUR_...` and `[YOUR ...]` placeholder in `index.html` and this README.
2. Your photo is installed as `assets/profile.jpg`. If it is removed, the page shows your initials.
3. The project cards link to your repositories. Replace the illustrations with screenshots and add live demo URLs if you have them. The site does not invent demo links or unverified technology details.
4. Update skill percentages to honestly reflect your experience.
5. Open `index.html` in a browser or serve the folder with a simple local server. No install step is needed.

## Suggested Git commit messages

1. `Add semantic CV page structure`
2. `Create responsive design tokens and typography`
3. `Style hero and profile photo fallback`
4. `Add education and experience sections`
5. `Build animated skills section`
6. `Add project cards and preview illustrations`
7. `Implement project category filtering`
8. `Add saved light and dark theme`
9. `Improve navigation and accessibility interactions`
10. `Document setup and deployment steps`

These are suggested milestones for future edits. Commit only changes you actually make; do not manufacture history for the current finished snapshot.

## Push to GitHub

1. Create an empty repository on GitHub, for example `jaymar-cv`.
2. In this folder, run `git init` if it is not already a repository.
3. Run `git add .` and `git commit -m "Add personal CV website"`.
4. Run `git branch -M main`.
5. Run `git remote add origin https://github.com/lomocsojaymar-cmyk/jaymar-cv.git` (or update an existing remote).
6. Run `git push -u origin main`.

## Deploy on Vercel

1. Sign in to Vercel with your GitHub account.
2. Choose **Add New → Project** and import the `jaymar-cv` repository.
3. Leave the framework preset as **Other** and the root directory as the repository root. No build command is needed.
4. Select **Deploy**, then copy the assigned URL into the Live site field above.
5. Future pushes to `main` will trigger deployments when the GitHub connection is enabled.

## Final checks

- Replace the remaining placeholders and confirm the GitHub, LinkedIn, Facebook, Instagram, email, and project source links open the intended destinations. Add demo links if available.
- Confirm the photo and every project preview load; verify the `JL` fallback appears when `profile.jpg` is missing.
- Try every navigation link, the mobile menu, theme toggle, project filters, and back-to-top button.
- Check the page at phone, tablet, laptop, and desktop widths for readable text, no horizontal overflow, and usable tap targets.
- Test keyboard focus and a reduced-motion setting.
