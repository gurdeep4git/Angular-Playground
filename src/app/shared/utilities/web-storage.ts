export class WebStorage {
  private readonly storage: Storage;
  private readonly hasStorage: boolean;

  constructor(storageType = StorageType.local) {
    this.storage = window[storageType];
    this.hasStorage = this.trySetItem();
  }

  public setData<T>(key: string, data: T) {
    if (this.hasStorage) {
      return this.trySetItem(key, JSON.stringify(data));
    }
    return false;
  }

  public getData<T>(key: string): T {
    if (this.hasStorage) {
      try {
        return JSON.parse(this.storage.getItem(key)) as T;
      } catch (e) {
        return null;
      }
    }

    return null;
  }

  removeData(key: string) {
    if (this.hasStorage) {
      this.storage.removeItem(key);
    }
  }

  clearAll() {
    if (this.hasStorage) {
      this.storage.clear();
    }
  }

  private trySetItem(key = '__storage_test__', value = '__storage_test__') {
    try {
      this.storage.setItem(key, value);

      if (key === '__storage_test__') {
        this.storage.removeItem(key);
      }

      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        this.storage.length !== 0
      );
    }
  }
}

enum StorageType {
  session = 'sessionStorage',
  local = 'localStorage',
}
