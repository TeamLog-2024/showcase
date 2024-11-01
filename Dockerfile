FROM node:18.18.0
WORKDIR /teamlog_showcase
COPY ./package.json /teamlog_showcase
RUN yarn install
COPY . /teamlog_showcase
RUN yarn build
RUN mkdir -p ./public/ssr/_next
RUN cp -R ./.next/static ./public/ssr/_next/static
CMD yarn start