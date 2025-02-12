# Deployment Guide

## GitHub Pages Setup

1. Repository Settings:
   - Go to Settings > Pages
   - Source: GitHub Actions
   - Branch: gh-pages
   - Folder: / (root)

2. Environment Variables:
   Required secrets in GitHub repository:
   - VITE_EMAILJS_PUBLIC_KEY
   - VITE_EMAILJS_SERVICE_ID
   - VITE_EMAILJS_TEMPLATE_ID
   - VITE_GA_MEASUREMENT_ID
   - VITE_GITHUB_TOKEN

3. Base URL:
   - Site is deployed at: https://chymezy.github.io/chymezy-solutions/