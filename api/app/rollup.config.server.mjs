import eslint from '@rollup/plugin-eslint';

export default {
    input: "src/controller.js",
    output: {
        file: "build/bundle.js",
        format: "cjs",
    },
    external: ['express', 'body-parser'],
    plugins: [
        eslint({
            throwOnError: true,
        }),
    ],
};
