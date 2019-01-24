import typescript from 'rollup-plugin-typescript';

export default {
    input: './src/index.ts',
    plugins: [
        typescript()
    ],
    output: {
        format: 'esm',
        file: 'dist/bundle.esm.js'
    }
}