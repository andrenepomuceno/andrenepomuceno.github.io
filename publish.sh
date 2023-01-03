#!/bin/bash

set -e

git pull origin main
git push origin dev

git checkout main

git merge dev

git push origin main

git tag v$1
git push origin v$1

git checkout dev