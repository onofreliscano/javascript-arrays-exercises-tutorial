FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 breathecode-cli@1.2.73 -g
