// Types
import { StorageData } from '../types/storage-data.type';

// Config
import { APP_CONFIG } from '../config/app.config';

export function getStorageData(): StorageData | undefined {
  return APP_CONFIG.storage.method.getItem(APP_CONFIG.storage.key)
    ? JSON.parse(APP_CONFIG.storage.method.getItem(APP_CONFIG.storage.key))
    : undefined;
}

export function setStorageData(storageData: StorageData): void {
  APP_CONFIG.storage.method.setItem(
    APP_CONFIG.storage.key,
    JSON.stringify(storageData)
  );
}
