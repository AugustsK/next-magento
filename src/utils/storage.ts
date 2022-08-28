interface StorageEntry {
    expire: number;
    data: unknown;
}

const C_KEY = 'nmApp';
const LIFETIME = 3600;
const SSR = !globalThis.document;

const key = (literals: string | readonly string[], ...args: string[]) => {
    if (typeof literals === 'string') {
        literals = [literals];
    }

    let result = literals[0];

    args.forEach((arg, i) => {
        result += arg;
        result += literals[i + 1];
    });

    return `${C_KEY}-${result}`;
};

export function read<T>(storageKey: string): T | null {
    if (SSR) return null;

    const storageEntryStr = globalThis.localStorage?.getItem(key(storageKey));

    if (!storageEntryStr) {
        return null;
    }

    const storageEntry = JSON.parse(storageEntryStr) as StorageEntry;
    const currentTimestamp = Date.now();

    if (storageEntry.expire > currentTimestamp) {
        return storageEntry.data as T;
    }

    return null;
}

export function store(storageKey: string, data: unknown, lifetime = LIFETIME): void {
    if (SSR) return;

    const toStore = JSON.stringify({
        expire: Date.now() + lifetime,
        data
    });

    globalThis.localStorage?.setItem(key(storageKey), toStore);
}

/**
 * Increase storage entry expiration from now + lifetime
 */
export function bump(storageKey: string, lifetime = LIFETIME): void {
    if (SSR) return;

    const data = read(storageKey);

    if (data) {
        store(storageKey, data, lifetime);
    }
}

export function remove(storageKey: string): void {
    if (SSR) return;

    globalThis.localStorage?.removeItem(key(storageKey));
}
