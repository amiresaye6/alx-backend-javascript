#!/usr/bin/env bash

npx eslint *.js --fix // checking and fixing js code style
git status
git add .
git commit -m "$1"
git push
