const cryptography = require('@liskhq/lisk-cryptography');

//Passphrase is used for signing of message so that it can be verified by other users to be untampered.
const passphraseUser = 'robust swift grocery peasant forget share enable convince deputy road keep cheap';

//Publickey is used to encrypt the message.
const publicKeyUser = '9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f';

//Message to be encrypted
const unencryptedMessage = 'Wat doet de tandenfee met al die tanden?';

encryptedMessage = cryptography.encryptMessageWithPassphrase(
    unencryptedMessage,
    passphraseUser,
    publicKeyUser
);

console.log(encryptedMessage);

//Expected result is random everytime, check with decrypt if it was done correctly.