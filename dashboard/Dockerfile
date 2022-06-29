FROM node:14.19.3

WORKDIR /dashboard

COPY package*.json /dashboard//

RUN npm install

COPY . /dashboard/

EXPOSE 3000

CMD ["npm", "start"]