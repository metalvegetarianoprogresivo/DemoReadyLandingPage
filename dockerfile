# image to use
FROM node:8

ENV WORKDIR=/app

# set working directory
WORKDIR ${WORKDIR}

# copy package.json
COPY yarn.lock ${WORKDIR}/yarn.lock
COPY package.json ${WORKDIR}/package.json

#  install dependencies
RUN yarn

#copy project into app
ADD . /app

# open ports
EXPOSE 3000

#start app
CMD ["yarn","start"]