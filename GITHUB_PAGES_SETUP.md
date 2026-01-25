# GitHub Pages Setup Instructions

If you're seeing a 404 error at https://farazsamie.github.io/fc/, follow these steps:

## Enable GitHub Pages

1. Go to your repository: https://github.com/Farazsamie/fc
2. Click **Settings** (top right)
3. Scroll down to **"Pages"** section on the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main" (or "main" + "/ (root)")
5. Click **Save**

## Wait for Deployment

GitHub Pages will deploy automatically. You should see:
- A message saying "Your site is live at https://farazsamie.github.io/fc/"
- This may take 30 seconds to a few minutes

## Troubleshooting

If still seeing 404:
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Wait a few minutes for GitHub Pages to rebuild
4. Check the "Actions" tab in your repository to see deployment status

## Files Included

- `index.html` - Main application (all content in one file)
- `styles.css` - Complete styling
- `.nojekyll` - Tells GitHub Pages to serve files as-is
- `README.md` - Documentation

All set! The app should now be accessible.
