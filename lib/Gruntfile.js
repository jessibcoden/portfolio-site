module.exports = function (grunt) {
    
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-clean');
    
    
      grunt.initConfig({
        jshint: {
          options: {
            predef: ["document", "console", "firebase", "angular", "app", "$"],
            esnext: true,
            globalstrict: true,
            globals: {}
          },
          files: ['../app/**/*.js']
        },
        sass: {
          dist: {
            files: {
              '../styles/main.css': '../sass/main.scss'
            }
          }
        },
        watch: {
          options: {
            livereload: true,
          },
          sass: {
            files: ['../sass/**/*.scss'],
            tasks: ['sass']
          },
          javascripts: {
            files: ['../javascripts/**/*.js'],
            tasks: ['jshint']
          }
        },
        clean: {
          options: { force: true },
          public: ['../public']
        },
        copy: {
          dev: {
            files: [{
              expand: true,
              cwd: "../",
              src: [
                "index.html",
                "app/app.js",
                "images/**/*.*",
                "styles/**/*.css",
                "partials/**/*.html",
                "app/**/*.js",
                "js/materialize.js",
                "js/init.js",
                "css/materialize.css",
                "css/materialize.min.css",
                "css/style.css",
                "lib/node_modules/angular/angular.min.js",
                "lib/node_modules/angular-sanitize/angular-sanitize.min.js",
                "lib/node_modules/angular-animate/angular-animate.min.js",
                "lib/node_modules/angular-route/angular-route.min.js",
              ],
              dest: "../public/"
            }]
          }
        }
      });
    
      grunt.registerTask('default', ['jshint', 'sass', 'watch']);
      grunt.registerTask('deploy', ['sass', 'copy']);
      grunt.registerTask('cleanit', ['clean']);
    };