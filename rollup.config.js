import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve'
export default {
    input: 'src/index.js',
    output:[
        {
            file: pkg.main,
            name: pkg.name,
            format: 'cjs'
        },
        {
            file: pkg.module,
            name: pkg.name,
            format: 'es'
        }
    ],
    plugins:[
        resolve(),
        commonjs(),
        json(),
        babel({
            exclude:'node_modules/**'
        }),
        (process.env.NODE_ENV === 'production' && terser()),
        serve({
            open: true, // 是否打开浏览器
            contentBase: 'docs/', // 入口HTML 文件位置
            historyApiFallback: true, // Set to true to return index.html instead of 404
            host: 'localhost',
            port: 10001,
        })
    ]
}