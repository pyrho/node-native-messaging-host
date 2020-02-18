Simple Node Native Messaging Host
=================================

A [native messaging](https://wiki.developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
host for Chrome and Firefox with a simple API and no dependencies.

# Install

```
npm i node-native-messaging-host
```

# Usage

```javascript
import initNativeMessagingHost from 'node-native-messaging-host';

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

# Used by

- [alfred-firefoxtabswitch](https://github.com/pyrho/alfred-firefoxtabswitch)

# Todo
- [ ] tests
