const cryptography = require('@liskhq/lisk-cryptography');

//User
const passphraseUser = 'wagon stock borrow episode laundry kitten salute link globe zero feed marble';

//Get the public and private key from a passphrase.
const keys = cryptography.getPrivateAndPublicKeyFromPassphrase(passphraseUser);

console.log('Keys:');
console.log(keys);

//Expected result: {
//  privateKey: 'b4289e713326a364887a5ae9a65015edc6c9602f43d43b8f7ad53f07244fa18ec094ebee7ec0c50ebee32918655e089f6e1a604b83bcaa760293c61e0f18ab6f',
//  publicKey: 'c094ebee7ec0c50ebee32918655e089f6e1a604b83bcaa760293c61e0f18ab6f'
//}