var bundle = require('browserify')(),
    fs = require('fs'),
    uglify = require('uglify-js');

bundle.add('./simplewebrtc');
bundle.bundle({standalone: 'SimpleWebRTC'}, function (err, source) {
    if (err) console.error(err);
    fs.writeFileSync('simplewebrtc.bundle.js', source);
    
    fs.writeFileSync('simplewebrtc.bundle.min.js', uglify.minify(source, {fromString: true}).code);
});
