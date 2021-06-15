require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind mixture gesture oppose obscure sock'; 
let testAccounts = [
"0x51b949bf5bbf5cc0083013dd493604a0ad6928593ece38cec469f922dbd705d4",
"0x734e0b759ed9a72c2451d0f37c62b0bea6c887221983ecad35943a863c6930ce",
"0x5bf498ac9a51a5b345b836b6a4dbf41650ed0e5e4d2b82c79562253e7664a842",
"0xd41b89c5bc53d32ab01649ca2271563f7486ac1a44bd5267e7004d16204b4677",
"0x33ccb282982d0bb51c82915150445ef860b06402ca52f9380d41fb54149d9aba",
"0x0dc77ea0bfe5537dadf08205dac79465bb35de05b0683c4822bf0e0a01403822",
"0x8f50173ff8eba2fa7719f69e2bba70422adfdc7bb1c687f1ab8e4ba32e8af99b",
"0x38824b8d2633b3224c0ea878052e0e5704dd870724c26f21ae6a7662bf93e15e",
"0xa8125e53de1f770fb5b5b6fb47718bb519124a4d8a45d3134eca06b6daedae39",
"0xbf56213fa33bb5239ea904ca2c175316d2befc5c46ab32ce96e3d7e63711e90b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

