import { localStore } from 'dz-storage';
import { Reactive, reactive, watch } from 'vue';

interface ConfigInterface {
  [key: string]: any;
}

export class LocalStorageProxy<T extends ConfigInterface> {
  private key: string;
  private defaultConfig: T;

  constructor(key: string, defaultConfig: T) {
    this.key = key;
    this.defaultConfig = defaultConfig;
    
    if (localStore.get(this.key) == null) {
      localStore.set(this.key, this.defaultConfig);
    }
  }

  public createProxy():Reactive<T> {
    const storedConfig = localStore.get(this.key) as T;
    const proxyConfig = reactive(storedConfig);

    watch(
      () => proxyConfig,
      (newConfig) => {
        localStore.set(this.key, newConfig);
      },
      {
        deep: true,
      }
    );

    return proxyConfig;
  }
}