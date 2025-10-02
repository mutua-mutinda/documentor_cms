#!/bin/bash

cd ~/documentor_api/documentor_cms
eval "$(ssh-agent -s)"
source ~/.bashrc

npm install pm2 -g

git reset --hard @{u} && git pull origin
pm2 kill -a
cd ~/documentor_api/documentor_cms

npm i
NODE_ENV=production npm run build
pm2 start "npm run start" --name dev_admin
