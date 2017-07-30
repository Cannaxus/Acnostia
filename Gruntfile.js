module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");
                       
    grunt.initConfig({
        less: {
            style: {
                files: {
                    "css/style.css": "less/main.less"
                }
            }
        },
        
        postcss: {
            option: {
                processors: [
                    require("autoprefixer")({browsers:
                        [
                        "last 1 version",
                        "last 2 Chrome versions",
                        "last 2 Firefox versions",
                        "last 2 Opera versions",
                        "last 2 Edge version"
                        ]})
                ]
                
            },
          
            style: {src: "css/*.css"} 
               
        },

        
        watch: {
            style: {
                files: ["less/**/*.less"],
                tasks: ["less", "postcss"]
            }
        },
        browsersync: {
            server: {
                bsFiles: {
                    src: ["*.html", "css/*.css"]
                },
                options: {
                    server: "."
                }
            }
        }
    })
};