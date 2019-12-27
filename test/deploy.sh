#!/usr/bin/env sh
# 打包
current_commit=$(git rev-parse HEAD | cut -c1-7)
commit_message="Deploy website version based on ${current_commit}"
npm run build
git clone git@bitbucket.org:KionAoki/kionaoki.bitbucket.io.git deploy-temp
cd deploy-temp
git checkout origin/bb-pages
if [ $? -ne 0 ]; then
    git checkout --orphan bb-pages
    if [ $? -ne 0 ]; then
        echo "Error: Git checkout failed"
        exit 1
    fi
else
    git checkout -b bb-pages
    git branch --set-upstream-to=origin/bb-pages
fi
​
git rm -rf .
cd ../
cp -R dist/* deploy-temp
cd deploy-temp
git add --all
git commit -m "${commit_message}"
git push -f git@bitbucket.org:KionAoki/kionaoki.bitbucket.io.git bb-pages
cd -
rm -rf deploy-temp