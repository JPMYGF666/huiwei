const gulp = require('gulp');

const cssmin = require('gulp-cssmin');

const autoprefixer = require('gulp-autoprefixer');

const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const htmlmin = require('gulp-htmlmin')

const del = require('del')

const webserver = require("gulp-webserver")

const cssHandler = ()=>{
    return gulp.src('./src/css/*.css')   //找到src目录里面下的css目录下的所有后缀为.css的文件
    .pipe(autoprefixer())           //把css代码自动添加前缀
    .pipe(cssmin())   //压缩css代码
    .pipe(gulp.dest('./dist/css'))  //压缩完毕以后的css代码放在dist目录中的css文件夹里面
}

const jsHanlder = ()=>{
    return gulp.src('./src/js/*.js')   //找到src目录里面下的js目录下的所有后缀为.js的文件
    .pipe(babel({
        presets: ['@babel/env']
    }))    //转码es6转换成es5了,就可以压缩了
    .pipe(uglify())  //压缩
    .pipe(gulp.dest('./dist/js'))  //把压缩完毕的放入文件夹
}

const htmlHandler = ()=>{
    return gulp.src(['./src/html/*.html','./src/html/*.htm'])   //找到src目录里面下的html目录下的所有后缀为.html的文件
    .pipe(htmlmin({
        "removeAttributeQuotes":true,   //移除属性上的双引号
        "removeComments":true,    //移除注释
        "collapseBooleanAttributes":true,  //把值为布尔值的属性简写
        "collapseWhitespace":true, //移除所有空格,变成一行代码
        "minifyCSS":true, //把页面里面的style标签里面的css样式也去空格
        "minifyJS":true,  //把页面里面的script标签里面的js代码也去空格
    })) //压缩
    .pipe(gulp.dest('./dist/html'))  //把压缩完毕的放到一个指定目录
}

const imgHandler = ()=>{
    return gulp.src('./src/img/**')  //img文件夹下的所有文档
    .pipe(gulp.dest('./dist/img'))   //放到指定的目录就可以了
}

const libHandler = ()=>{
    return gulp.src('./src/lib/**') 
    .pipe(gulp.dest('./dist/lib'))   //放到指定的目录就可以了


}

const delHandler = ()=>{
    return del(['./dist'])
}

const watchHandler = ()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHanlder);
    gulp.watch('./src/html/*.html',htmlHandler);
    gulp.watch('./src/lib/**',libHandler);
    gulp.watch('./src/img/**',imgHandler)
}

const serverHandler = ()=>{
    return gulp.src('./dist') //找到我要打开网页的文件夹,把这个文件夹当做网站根目录
    .pipe(webserver({//需要一些配置项
        port:'8080', //端口号,0-65535,尽量不使用0-1023
        open:'./html/index.html', //你默认打开的首页,从dist下面根目录开始书写
        livereload:true,//自动刷新浏览器,热重启
    }))
}


//2.4 导出这个任务
// module.exports.css = cssHandler;
// //3.4 导出这个任务
// module.exports.js = jsHanlder;
// //4.3 导出这个任务
// module.exports.html = htmlHandler;
// //5.2 导出这个任务
// module.exports.img = imgHandler;
// //6.2 导出这个任务
// module.exports.lib = libHandler

// //7.3 导出这个任务
// module.exports.del = delHandler;
// //8.2 导出这个任务
// module.exports.watch = watchHandler;

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler,jsHanlder,htmlHandler,imgHandler,libHandler),
    serverHandler,
    watchHandler
)