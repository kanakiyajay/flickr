module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat : {
			css : {
				src : ['css/bootstrap.min.css','css/common.css'],
				dest : 'css/combined.css'
			},
			js : {
				options:{
					seperator : ';'
				},
				src: ['js/libs/jquery.min.js','js/libs/angular.min.js','js/libs/angular-route.min.js','js/libs/EventEmitter.js','js/libs/eventie.js','js/libs/imagesloaded.js','js/libs/masonry.pkgd.min.js','js/libs/angular-masonry.min.js','js/app.js'],
				dest : 'js/combined.js'
			}
		},
		cssmin : {
			css : {
				src:'css/combined.css',
				dest : 'css/combined.min.css'
			}
		},
		uglify : {
			js : {
				files : {
					'js/combined.js' : ['js/combined.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js']);
};