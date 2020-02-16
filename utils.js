export function log(...args) {
    if (process.env.DEBUG_NM_HOST) {
        console.log(...args);
    }
}

export function error(...args) {
    if (process.env.DEBUG_NM_HOST) {
        console.error(...args);
    }
}
