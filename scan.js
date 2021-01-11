const jsdoc = require('jsdoc-api');
const vueDocs = require('vue-docgen-api');

let meta = jsdoc.explainSync({
    files: [
        './example/apps/users/store/index.js',
        './example/apps/users/store/actions.js',
        './example/apps/users/store/mutations.js',
        './example/apps/users/store/getters.js',
        './example/apps/users/store/plugins.js',
        './example/apps/users/repository.js',
    ],
});

// parse vue
vueDocs
    .parse('./example/apps/users/components/UserInput.vue')
    .then(console.log);

// parse js
console.log(meta);
