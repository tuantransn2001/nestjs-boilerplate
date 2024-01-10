##############################
# BUILD
##############################
# prepare image for build
FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


##############################
# PRODUCTION
##############################
# minimize production image
FROM node:18 as production
WORKDIR /app
COPY package*.json ./
ENV PORT=4000
ENV NODE_ENV=Production
RUN npm install
COPY --from=builder /app/dist ./dist
EXPOSE ${PORT}

CMD [ "npm", "run", "start:prod" ]