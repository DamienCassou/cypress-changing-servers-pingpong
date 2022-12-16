#!/usr/bin/env bash

# Make sure you run "npm install" in both first-server and second-server first!

node first-server/index.js & node second-server/index.js &

cd first-server
npx cypress open --e2e
