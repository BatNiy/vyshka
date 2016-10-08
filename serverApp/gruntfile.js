var pathToSorse = "./";

module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        ts: {
            app: {
                files: [{
                    src: ["serverApp/src/**/*.ts", "!serverApp/src/.baseDir.ts", "!serverApp/src/_all.d.ts", "!node_modules/**"],
                    dest: "./application"
                }],
                options: {
                    module: "commonjs",
                    noLib: false,
                    target: "es6",
                    sourceMap: true
                }
            }
        },
        tslint: {
            options: {
                configuration: "./tslint.json"
            },
            files: {
                src: ["src/**/*.ts"]
            }
        },
        watch: {
            ts: {
                files: ["js/src/**/*.ts", "src/**/*.ts"],
                tasks: ["ts", "tslint"]
            }
        }
    });

    grunt.loadNpmTasks(pathToSorse + "grunt-contrib-watch");
    grunt.loadNpmTasks(pathToSorse + "grunt-ts");
    grunt.loadNpmTasks(pathToSorse + "grunt-tslint");

    grunt.registerTask("default", [
        "ts",
        "tslint"
    ]);

};