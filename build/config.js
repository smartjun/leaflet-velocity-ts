const path = require('path')
const typescript = require('rollup-plugin-typescript')

function configFactory (opt) {
    return {
        input: path.resolve(__dirname, '../src/index.ts'),
        plugins: [
            typescript()
        ],
        'external': [
            'leaflet'
        ],
        output: {
            format: opt.format,
            file: path.resolve(__dirname, `../dist/bundle.${opt.format}.js`)
        }
    }
}

const opts = [
    {
        format: 'cjs'
    }, {
        format: 'es'
    }
]

module.exports = {
    opts,
    configFactory
}