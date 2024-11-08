// import imgmin from 'gulp-imagemin'// 压缩图片
import gulp from 'gulp';
import clean from 'gulp-clean'; // 打包之前，先清空原来的文件
import gulpRemoveHtml from 'gulp-remove-html'; // 标签清除
import removeEmptyLines from 'gulp-remove-empty-lines'; // 清除空白行
import htmlmin from 'gulp-htmlmin'; // html压缩组件
import minifycss from 'gulp-minify-css'; // 压缩CSS为一行
import sass from 'gulp-sass';
import minifyCSS from 'gulp-minify-css'
import uglify from 'gulp-uglify'; // 获取 uglify 模块（用于压缩 JS）
import babel from 'gulp-babel'; // 将ES6编译成ES5
import ts from 'gulp-typescript'
import replace from 'gulp-string-replace'
const distBasePath = 'lib/'; //构建输出的目录
const comPath = 'components/'

const tsProject = ts.createProject('tsconfig.json', { declaration: true, "removeComments": true });

//删除dist文件
gulp.task('task1-clean', function () {
  return gulp.src('lib', { allowEmpty: true }) //src 匹配文件
    .pipe(clean()); //清除dist目录
});

//html压缩
gulp.task('task2-html', function () {
  let options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  return gulp.src(comPath + '**/*.html')
    .pipe(gulpRemoveHtml()) //清除特定标签
    .pipe(removeEmptyLines({
      removeComments: true
    })) //清除空白行
    .pipe(htmlmin(options))
    .pipe(gulp.dest(distBasePath));
})

// 压缩 css 文件
gulp.task('task3-css', function () {
  return gulp.src([comPath + '**/*.css'])
    .pipe(minifycss())
    .pipe(gulp.dest(distBasePath + 'css'));
})


//ts转js->压缩js
let first = true;
gulp.task('task4-ts', () => {
  return tsProject.src([comPath + '**/*.js']).pipe(tsProject())
    .pipe(replace('var long;', function () {//替换第一行文本
      if (first) {
        first = false;
        return "window.long = {};";
      }
      else
        return "";
    }, { logs: { enabled: false } }))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(distBasePath));
})

// 压缩图片
gulp.task('task5-image', function () {
  return gulp.src([comPath + 'img/**/*'])
    // .pipe(imgmin())
    .pipe(gulp.dest(distBasePath + 'img'))
})

gulp.task("task6-scss", async function () {
  return gulp.src(comPath + "/css/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest(distBasePath + "/css"))
})

// 三方库复制
gulp.task('task7-copy', function () {
  return gulp.src([
    comPath + '**/*.vue',
    comPath + '**/*.scss',
    comPath + '**/*.json',
    comPath + '**/*.md',
    comPath+'**/*.ts'
  ])
    // .pipe(imgmin())
    .pipe(gulp.dest(distBasePath))
})

gulp.task('default', gulp.series(
  'task1-clean',
  // 'task2-html',
  // 'task3-css',
  // 'task4-ts',
  // 'task5-image',
  // 'task6-scss',
  'task7-copy'
)
)
