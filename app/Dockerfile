#builder
From node:12 as builder
user root

workdir /code
copy . /code

run npm install
run npm run test


# deploy box
FROM node:12

COPY --from=builder /code/* /code/

EXPOSE 8080

CMD ["npm", "start"]

