const gulp = require( 'gulp' ),
    del = require( 'del' ),
    wpPot = require( 'gulp-wp-pot' ),
    zip = require( 'gulp-zip' );
const { series, parallel } = require( 'gulp' );

// ZIP Path
var zipPath = [ './', './**', './build', './build/**', '!./src', '!./src/**', '!./output', '!./output/**', '!./.editorconfig', '!./.gitignore', '!./.editorconfig', '!./frontend.js', '!./gulpfile.js', '!./package.json', '!./package-lock.json', '!./composer.json', '!./composer.lock', '!./phpcs.xml', '!./node_modules', '!./node_modules/**' ];

// Clean CSS, JS and ZIP
function clean_files() {
    let cleanPath = [ './output/gutena-accordion.zip' ];
    return del( cleanPath, { force : true } ); 
}

// Create ZIP file
function create_zip() {
    return gulp.src( zipPath, { base : '../' } )
        .pipe( zip( 'gutena-accordion.zip' ) )
        .pipe( gulp.dest( './output/' ) )
}

exports.default = series( clean_files, create_zip );