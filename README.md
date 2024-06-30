

### 2. Setup PostgreSQL

```
npx prisma db push
```


```
npx prisma migrate deploy
```

- Lastly run the following command to generate Prisma Client.

```
npx prisma generate
```


```
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