FROM node as production
WORKDIR AppTest
COPY package.json .
RUN npm install --only-production
COPY . .
CMD ["npm","start"]
EXPOSE 4000


FROM node as developement
WORKDIR AppTest
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run","start_dev"]
EXPOSE 4000