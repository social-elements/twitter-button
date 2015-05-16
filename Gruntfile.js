module.exports = function(grunt) {

  grunt.initConfig({
    'connect': {
      demo: {
        options: {
          open: true,
          keepalive: true
        }
      }
    },
    'gh-pages': {
      options: {
        clone: 'bower_components/twitter-button'
      },
      src: [
        'bower_components/**/*',
        '!bower_components/twitter-button/**/*',
        'src/*', 'index.html'
      ]
    },
    vulcanize: {
      default: {
        options: {
          //excludes: {
          //  imports: [
          //    'polymer.html'
          //  ]
          //}
        },
        files: {
          './dist/twitter-button.html': './src/twitter-button.html'
        }
      }
    },
    'replace': {
      example: {
        src: ['src/*'],
        dest: 'dist/',
        replacements: [{
          from: 'bower_components',
          to: '..'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-vulcanize');

  grunt.registerTask('build',  ['vulcanize']);
  grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('serve', ['connect']);
};
