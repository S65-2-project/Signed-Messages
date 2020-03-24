const cryptography = require('@liskhq/lisk-cryptography');

//Passphrase that is linked to the publickey.
const passphraseUser = 'robust swift grocery peasant forget share enable convince deputy road keep cheap';

//Publickey that was used to encrypt the message.
const publicKeyUser = '9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f';

//The encrypted text in string format.
var cypherText = 'c794d5865ed47f1014a771fa8cd886ca8f5f257c021ff115ae314a9a36400bac4f772e963c1925d6ac9404d9f8373d81f0c55403bdbc43bd';

//The Nonce used to create the hash.
var nonce = '0cb10ab2dbbe9bd73fa5063c8b17146c867e36a3ebaabeeb';

//Decrypts the message
const decryptedMessage = cryptography.decryptMessageWithPassphrase(
    cypherText,
    nonce,
    passphraseUser,
    publicKeyUser
);

console.log('\nDecrytpedMessage:');
console.log(decryptedMessage);

//Expected result: 'Wat doet de tandenfee met al die tanden?'