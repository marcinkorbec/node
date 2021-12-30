const { mkdir } = require('fs').promises;

(async () => {
    await mkdir('./megaKurs/data/txt', {
        recursive: true,
    });
})();
