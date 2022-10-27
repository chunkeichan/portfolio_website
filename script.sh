git add .
git status
read -p 'Comment: ' comment
git commit -m "$comment"
git push
npm run deploy