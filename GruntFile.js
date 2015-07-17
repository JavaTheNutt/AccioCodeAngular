module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['src/resources/js/**/*.js'],
				dest: 'src/build/js/<%= pkg.name %>.js'
			},
			deps: {
				src: [
					'bower_components/modernizr/modernizr.js',
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js',
					'bower_components/angularjs/angular.js',
					'bower_components/angular-ui-router/release/angular-ui-router.js'
				],
				dest: 'src/build/js/<%= pkg.name %>-deps.js'
			},
			css: {
				src: ['src/resources/css/*.css'],
				dest: 'src/build/css/<%= pkg.name %>.css'
			},
			cssDeps:{
				src: ['bower_components/bootstrap/dist/css/bootstrap.css', 'bower_components/bootstrap/dist/css/bootstrap-theme.css'],
				dest: 'src/build/css/<%= pkg.name %>-deps.css'
			},
			move: {
				src: ['bower_components/angularjs/angular.min.js.map'],
				dest: 'src/angular.min.js.map'
			}
		},
		uglify: {
			files : {
                src : 'src/build/js/angularjstutorial.js',
                dest: 'src/build/js/angularjstutorial.min.js'
            }
		},
		sass: {
			dev: {
				files: {
					'src/resources/css/styles.css': 'src/resources/css/styles.scss'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/resources/js/**/*.js'],
				tasks: ['concat:dist']
			},
			/*styles: {
				files: ['src/resources/css/!*.scss'],
				tasks: ['sass']
			},*/
            css:{
                files: ['src/resources/css/styles.css'],
                tasks: ['concat:css']
            }
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngdocs');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);
    grunt.registerTask('concatDeps', '', ['concat:deps']);
    grunt.registerTask('concatStyle', '', ['concat:css']);
    grunt.registerTask('cssDeps', '', ['concat:cssDeps']);
    grunt.registerTask('jsMin', '', ['uglify']);
	grunt.registerTask('build', 'Build the application',
		['sass:dev',
		'concat'
		]);
};