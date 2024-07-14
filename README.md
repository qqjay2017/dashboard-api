

### 2. Setup PostgreSQL

```
npx prisma generate
npx prisma db push
```


```
npx prisma migrate deploy
npx prisma migrate dev
```
### 3. Start the REST API server

Execute this command to start the server:

```
npm run dev
```

### 打开可视化数据库

```
npx prisma studio
```


### .env

```
POSTGRES_PRISMA_URL="postgresql://postgres:mysecretpassword@localhost:5432/dashboard"
POSTGRES_URL_NON_POOLING="postgresql://postgres:mysecretpassword@localhost:5432/dashboard"
```


### 本地起一个mysql

```
docker run -d \
  --name mysql5 \
  -e MYSQL_ROOT_PASSWORD=mysecretpassword \
  -e MYSQL_USER=postgres \
  -e MYSQL_PASSWORD=mysecretpassword \
  -e MYSQL_DATABASE=dashboard \
  -p 3306:3306 \
  mysql:5.7
  ```