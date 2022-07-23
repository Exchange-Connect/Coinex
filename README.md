# Exchange Connect

## Coinex Software Development Kit

### This is a module or a part of **Exchange Connect** project and you can use it seperatly for the Coinex Exchange

- You are allowed to interact with Advanced ( raw ) APIs through SDK functions
- Catching an well-defined error by type
- Integrating in your Javascript apps flawlessly
- No need to handling WebSocket connections by your own. it's already done!

## Usage

> It's currently under development and will be out soon
> 
> Stay tuned!

## API Refrence

See [API Refrence](https://exchange-connect.github.io/Coinex/) For more information on SDK.

## Folder Structure

src/                Source code
├─ constants/       Constant variables
├─ errors/          Classified-Errors folder
│  ├─ http/         Server-Generated HTTP Response Errors
│  ├─ stream/       Server-Generated Web Socket Errors
├─ http/            HTTP API Requests
│  ├─ account/      "account" Requests
│  ├─ futures/      "futures" Requests
│  ├─ market/       "market" Requests
│  ├─ spot/         "spot" Requests
│  ├─ trading/      "trading" Requests
├─ stream/          Web Socket Functionalities
│  ├─ futures/      Futures WS Functions
│  ├─ spot/         Spot WS Functions
docs/               JSDoc-Generated Documentations


## Roadmap

- [x] Full Rest API Support ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Account ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Futures ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Market ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Trading ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Spot ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)

- [x] Full WebSocket API Support ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Futures ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Spot ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)

- [x] Document All of the SDKs ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] HTTP API ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)
    - [x] Web Socket API ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)

- [ ] Error handling ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)

- [ ] Error types ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/10)

- [ ] Rate Limiter ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/0)


