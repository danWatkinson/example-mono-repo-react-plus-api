## Tests


```
chmod 777 ./launchTests.sh
./launchTests.sh
```

testing services individually

API:
```
cd ./joker-api
npm test
```

UI (NB this defaults to interactive testing for dev purposes):
```
cd ./joker-ui
npm test
```

## Quick start

```
chmod 777 ./launchApp.sh
./launchApp.sh
```

launching services individually

API:
```
cd ./joker-api
npm start
```

UI:
```
cd ./joker-ui
npm start
```

## Dev mode
### leaves Jest in --watch mode, so all tests within a service run whenever a change is detected..

```
chmod 777 ./launchDev.sh
./launchDev.sh
```

## React starter
https://codeburst.io/building-your-first-react-app-c1f6eb814205

## Express starter
https://expressjs.com/en/starter/generator.html

## cheap-and-cheesy API testing
https://www.npmjs.com/package/supertest
