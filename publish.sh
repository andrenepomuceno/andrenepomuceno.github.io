#!/bin/bash

git checkout main

git merge dev

git push origin main

git tag v$1
git push origin v$1

git checkout dev