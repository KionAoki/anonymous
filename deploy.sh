#!/usr/bin/env sh
# 打包
current_commit=$(git rev-parse HEAD | cut -c1-7)
commit_message="Deploy website version based on ${current_commit}"
npm run build
git clone git@github.com:KionAoki/anonymous.git deploy-temp
cd deploy-temp
git checkout origin/gh-pages
if [ $? -ne 0 ]; then
    git checkout --orphan gh-pages
    if [ $? -ne 0 ]; then
        echo "Error: Git checkout failed"
        exit 1
    fi
else
    git checkout -b gh-pages
    git branch --set-upstream-to=origin/gh-pages
fi
​
git rm -rf .
cd ../
cp -R dist/* deploy-temp
cd deploy-temp
git add --all
git commit -m "${commit_message}"
git push -f git@github.com:KionAoki/anonymous.git gh-pages
cd -
rm -rf deploy-temp