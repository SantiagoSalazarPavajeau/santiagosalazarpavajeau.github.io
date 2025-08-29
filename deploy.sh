#!/bin/zsh
# Deploy React app to GitHub Pages

# Exit on error
set -e

echo "Building the project..."
yarn build || npm run build

echo "Deploying to GitHub Pages..."
yarn deploy || npm run deploy

echo "Deployment complete!"
