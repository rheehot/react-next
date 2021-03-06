
# React Next

1. yarn 설치
```bash
git clone https://github.com/Yuni-Q/react-next.git
cd react-next
yarn install
```

2. 시작
```bash
yarn run dev
```

3. 배포
```bash
yarn run deploy production
```

4. 테스트
```bash
yarn run test
```

5. Coverage Report
```bahs
yarn run test:cov
open coverage/index.html
```

6. SnapShot Update
```bahs
yarn run test:update
```

7. heroku 배포
```bash
heroku login
heroku create test
git push heroku master
heroku logs --tail
```

8. PWA
```bash
yarn install -g pwa-manifest-cli if-got-cli
pwa-manifest ./static --icons=$(if-got icons search --query="facebook react react icon" --maximun_size=512 --count=1)
```
