export const extractRefreshToken = (LocalStorageCache) => {
    const storageCache = new LocalStorageCache();
    const key = storageCache.allKeys().find(key => key.includes('auth0spa'));
    const refresh_token_value = storageCache.get(key);
    return refresh_token_value?.body?.refresh_token;
}