var path = require('path'),
    fs = require('fs'),
    yaml = require('js-yaml');

var patchConfig = function (e) {
    var filepath = path.join(e.project.root, 'bookmarks.yml');
    if (fs.existsSync(filepath)) {
        try {
            e.options.places = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
            console.log('[Places] Loaded bookmarks from', filepath);
        } catch (e) {
            console.log('[Places] Unable to load bookmarks from', filepath);
            e.options.places = [];
        }
    }
    e.options.places = e.options.places.concat(this.userConfig.bookmarks || []);
};

exports.Plugin = function (config) {
    config.addJS('/node_modules/kosmtik-places/front.js');
    config.addCSS('/node_modules/kosmtik-places/front.css');
    config.on('project:tofront', patchConfig);
};
