---
description: How to deploy the portfolio to Vercel via GitHub
---

1. **Push your latest changes to GitHub** (You have already done this).
2. **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in (usually with your GitHub account).
3. **Add New Project**:
   - Click "Add New..." -> "Project" on your dashboard.
4. **Import Git Repository**:
   - Find `ivan-dankov-portfolio` in the list (you may need to search for it).
   - Click "Import".
5. **Configure Project**:
   - **Framework Preset**: Vercel should auto-detect "Vite".
   - **Root Directory**: `./` (default).
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `dist` (default).
   - **Install Command**: `npm install` (default).
6. **Deploy**:
   - Click "Deploy".
   - Vercel will build your site and provide you with a production URL (e.g., `ivan-dankov-portfolio.vercel.app`).

**Note**: Any future pushes to the `main` branch on GitHub will automatically trigger a new deployment on Vercel.
