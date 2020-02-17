Simple Node Native Messaging Host
=================================

/!\ Work in progress, not ready for production usage /!\

This module aims to be a simple native messaging host for nodejs.

Usage:

```javascript
import initNativeMessagingHost from 'node-nm-host';

// Initialize
const nm = initNativeMessagingHost();

// Add a callback that will be fired each time a new message is
// received from the extension.
nm.addOnMessageListener(message => {
    console.log(`Received ${message} from extension`);
});


// Send a message to the extension
nm.send({ answer: 42 });

```
