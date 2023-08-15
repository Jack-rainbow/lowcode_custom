#!/usr/bin/env sh
set -e

git pull origin dev
git checkout main
git merge dev


lerna publish --force-publish=* --exact --temp-tag
conventional-changelog -p angular -i CHANGELOG.md -s -r 0

# commit
git add -A
git commit -m "[build] $VERSION"

# publish
git push origin main
git checkout dev
git rebase main
git push origin dev
