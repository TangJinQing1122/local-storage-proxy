# about
Proxy you local-storage-data to obj.And autoupdate.


# npm install
```
npm i @tangjinqing/local-storage-proxy


import { LocalStorageProxy } from '@tangjinqing/local-storage-proxy';
```



# use
```
const key = 'localKey';
const defaultConfig = { someSetting: true };
const localStorageProxy = new LocalStorageProxy(key, defaultConfig);
const localKeyProxy = localStorageProxy.createProxy();
```