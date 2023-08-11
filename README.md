<h1 align="center">Welcome to @logmedaily/vittapada_janayitr 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D18.16.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D9.5.1-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/logmedaily" target="_blank">
    <img alt="Twitter: logmedaily" src="https://img.shields.io/twitter/follow/logmedaily.svg?style=social" />
  </a>
</p>


### ** Disclaimer: This is an experimental package and should not be used in production. The code is provided as-is and may contain bugs or security vulnerabilities. Use at your own risk.
> vittapada janayitr is experimental bip39 wallet phrase generator for rapid testing and prototyping, It is advised the code is reviewed and used at your own descretion & was built by author for some custom rapid experimentation. 

### 🏠 [Homepage](https://github.com/logmedaily/vittapada_janayitr)

## Prerequisites

- node >=18.16.0
- npm >=9.5.1

## Install

```sh
npm install @logmedaily/vittapada_janayitr
```

## usage

### Generate new mnemonic
```javascript

// Generate a new mnemonic
const vittapadaJanayitr = new VittapadaJanayitr();
const newMnemonic = {password: "password@123", unlock: 'passphrase'};
vittapadaJanayitr.initialize(newMnemonic);
const decrypted = vittapadaJanayitr.decrypt(newMnemonic)

console.log(decrypted); // => 'abandon ability abandon'

```
```javascript
const vittapadaJanayitr = new VittapadaJanayitr();
const existingMnemonic = {mnemonic: "",password: "password@123", unlock: 'passphrase'};
vittapadaJanayitr.initialize(existingMnemonic);
expect(vittapadaJanayitr.initialized).toBe(true);
existingMnemonic.unlock = 'passphrase';
const decrypted = vittapadaJanayitr.decrypt(existingMnemonic); // => 'abandon ability abandon'
```

## Run tests

```sh
npm run test
```

## Author

👤 **logmedaily**

* Website: https://github.com/logmedaily
* Twitter: [@logmedaily](https://twitter.com/logmedaily)
* Github: [@logmedaily](https://github.com/logmedaily)
* LinkedIn: [@logmedaily](https://linkedin.com/in/logmedaily)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/logmedaily/vittapada_janayitr). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_