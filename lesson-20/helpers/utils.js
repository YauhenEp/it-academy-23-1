class Utils {
    static poParser(arrayOfElements, pages) {
        const pageName = arrayOfElements[0];
        const element = arrayOfElements[arrayOfElements.length - 1];
        let objectPath = pages[pageName];

        for (let i = 1; i < arrayOfElements.length - 1; i += 1) {
            objectPath = objectPath[arrayOfElements[i]];
            if (!objectPath) {
                throw new Error(`Unable to find '${arrayOfElements[i]}' in ${JSON.stringify(arrayOfElements, null, ' ')}`);
            }
        }

        const locator = typeof objectPath === 'function' ? objectPath()[element] : objectPath[element];
        if (locator) {
            return locator;
        }
        throw new Error(`Unable to find locator for '${element}'`);
    }
}

module.exports = Utils