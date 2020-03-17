import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

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
        (process.env.NODE_ENV === 'production' && terser())
    ]
}