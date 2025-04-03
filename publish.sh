#!/bin/bash

set -e

git fetch

git checkout main
git merge origin/main

git merge dev
git push origin dev

git tag v$1
git push origin v$1

git push origin main