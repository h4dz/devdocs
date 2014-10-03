module.exports = function(grunt) {
  var config = {
    bower_path: 'bower_components',
    build_path: '.build',
    component_path: 'site_components',
    css: 'assets/css',
    js: 'assets/js',
    images: 'assets/img',
    fonts: 'assets/fonts',
  };
  grunt.registerTask('default', [ 'concat', 'copy', 'uglify', 'less', 'cssmin', 'clean' ]);
  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      bootstrap: {
        src: [
          /* Individually named to control the order in which they're compiled. Tooltip must be loaded before Popover. */
          '<%= config.bower_path %>/bootstrap/js/affix.js',
          '<%= config.bower_path %>/bootstrap/js/alert.js',
          '<%= config.bower_path %>/bootstrap/js/button.js',
          '<%= config.bower_path %>/bootstrap/js/carousel.js',
          '<%= config.bower_path %>/bootstrap/js/collapse.js',
          '<%= config.bower_path %>/bootstrap/js/dropdown.js',
          '<%= config.bower_path %>/bootstrap/js/modal.js',
          '<%= config.bower_path %>/bootstrap/js/tooltip.js',
          '<%= config.bower_path %>/bootstrap/js/popover.js',
          '<%= config.bower_path %>/bootstrap/js/scrollspy.js',
          '<%= config.bower_path %>/bootstrap/js/tab.js',
          '<%= config.bower_path %>/bootstrap/js/transition.js'
        ],
        dest: '<%= config.build_path %>/bootstrap.js'
      },
    },
    uglify: {
      options: {
        compress: true,
        mangle: false,
        warnings: false,
        preserveComments: 'some',
      },
      build: {
        files: [
          {
            expand: true,
            src: '**/*.js',
            dest: '<%= config.js %>',
            cwd: '<%= config.build_path %>',
            ext: '.min.js'
          },
          {
            expand: true,
            cwd: '<%= config.component_path %>/js/',
            src: ['*.js', '!*.min.js'],
            dest: '<%= config.js %>/',
            ext: '.min.js'
          }
        ]
      }
    },
    less: {
      bootstrap: {
        files: {
          "<%= config.build_path %>/bootstrap.css": "<%= config.bower_path %>/bootstrap/less/bootstrap.less"
        }
      },
    },
    copy: {
      main: {
        files: [
          {
            nonull: true,
            src: ['<%= config.bower_path %>/jquery/dist/jquery.min.js'],
            dest: '<%= config.js %>/jquery.min.js'
          },
          {
            nonull: true,
            expand: true,
            cwd: '<%= config.bower_path %>/typicons/src/font/',
            src: ['**/*'],
            dest: '<%= config.fonts %>'
          },
        ]
      }
    },
    cssmin: {
      minify: {
        files: [
          {
            expand: true,
            cwd: '<%= config.build_path %>/',
            src: ['*.css', '!*.min.css'],
            dest: '<%= config.css %>/',
            ext: '.min.css'
          },
          {
            expand: true,
            cwd: '<%= config.component_path %>/css/',
            src: ['*.css', '!*.min.css'],
            dest: '<%= config.css %>/',
            ext: '.min.css'
          }
        ]
      }
    },
    clean: {
      build: {
        src: [ '<%= config.build_path %>', '<%= config.fonts %>/demo.html', '<%= config.fonts %>/LICENCE.md', '<%= config.fonts %>/typicons.css' ]
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
};