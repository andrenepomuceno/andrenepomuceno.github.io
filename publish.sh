#!/bin/bash

set -e

git fetch

git checkout main
git merge origin/main

git merge dev
git push origin dev

git push origin main

git checkout dev