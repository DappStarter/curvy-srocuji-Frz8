require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strong rice rural huge heavy end army gas'; 
let testAccounts = [
"0xb99de19c06f7310a46086db6790386f8fb8b5a647d4f52bfef3fb76df55fe857",
"0xbef5570222c284a9ffe8b76c9fddfa113352e4758723b31fdc3d46e56c25ba39",
"0x502dbd6359d4888f5618c5fc43ac20cca3133eaa2476d0be7dbfe6730352ba5b",
"0xf2210b3ad3901922141ac5552f01b0ba1147eb41e8f6ba30c867af06b0842bbe",
"0xf6386adbfdb32c81121ef69ea52656e1c5197981e31f26590153da016cd24b16",
"0xa2e09d831fcb7454b423396cf393838c5688eb8822957a8f70e4d3cbe79cce2c",
"0x8bd5f35705f873e21a1426015bd7bd1474969cedbb67b6319391c45d46fc6073",
"0x4742e5178a8848df8080dcbcf94a544d0462c849857a3eb482e5860cd5f6ad02",
"0x9983dd279062cb8fca11501d30a60bf6ada83a564fdd25a68eb12645857ebc60",
"0x93bc784d726e52de87f46499ac8555c6978597b9b077f43b12e80c4e56350914"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

