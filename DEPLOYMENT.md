# Deployment Checklist

## Pre-deployment Steps

- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run build` to test the production build locally
- [ ] Test the app functionality in production mode
- [ ] Verify all pages load correctly
- [ ] Check that localStorage persists data across page refreshes

## Netlify Deployment

- [ ] Push code to your Git repository (GitHub, GitLab, etc.)
- [ ] Connect repository to Netlify
- [ ] Verify build settings (automatically configured via netlify.toml):
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: 20.17.0
- [ ] Deploy and test the live site

## Post-deployment Testing

- [ ] Verify all pages load correctly
- [ ] Test exercise routines and progress tracking
- [ ] Confirm localStorage functionality works
- [ ] Check responsive design on mobile devices
- [ ] Test offline functionality (after first visit)

## Troubleshooting

### Common Netlify Issues:

1. **"next: not found" error**:

   - Disable Netlify's Next.js plugin in the Netlify dashboard
   - Go to Site Settings > Build & Deploy > Plugins and disable "@netlify/plugin-nextjs"
   - Our app uses static export, not server-side rendering

2. **Build failures**:

   - Check Node version is set to 20.17.0 in netlify.toml
   - Clear Netlify's build cache and redeploy
   - Ensure all dependencies are in package.json

3. **Manual Plugin Disable**:
   - In Netlify dashboard: Site Settings > Build & Deploy > Plugins
   - Find "@netlify/plugin-nextjs" and click "Disable"
   - This prevents conflicts with our static export configuration

If deployment fails:

1. **Check Node version**: Ensure Netlify is using Node 20.17.0
2. **Clear cache**: Clear Netlify's build cache and redeploy
3. **Check build logs**: Look for specific error messages in Netlify's build logs
4. **Test locally**: Ensure `npm run build` works locally first

## Configuration Files

- `.nvmrc` - Specifies Node version 20.17.0 for Netlify
- `netlify.toml` - Netlify build configuration
- `next.config.ts` - Next.js configuration for static export
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
