import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
import {name, main, module} from './package.json';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output:[
        {
            file: main,
            name,
            format: 'cjs'
        },
        {
            file: module,
            name,
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