# Bug repro of next.js issue with webpack 5 inlined and worker-loader

## Background

1. Next v10.0.6 inlined webpack https://github.com/vercel/next.js/pull/20598.
1. worker-loader has webpack as peer dep https://github.com/webpack-contrib/worker-loader/blob/v3.0.7/package.json#L40-L42.
1. worker-loader imports webpack https://github.com/webpack-contrib/worker-loader/blob/v3.0.7/src/index.js#L6-L35.
1. webpack 5 doesn't support multiple versions installed https://github.com/jantimon/html-webpack-plugin/issues/1451#issuecomment-711290356

## Bug repro

When using next.js with webpack 5 inlined and worker-loader an exception appears.

1. `yarn`
1. `yarn build`
1. Desired behaviour: build to succeed.
1. Current behaviour: exception
```
➜  bug-repro-next-w5-inline-worker git:(main) ✗ yarn build
yarn run v1.22.5
$ next build
info  - Creating an optimized production build
Failed to compile.

./lib/hello.worker.js
TypeError: The 'compilation' argument must be an instance of Compilation


> Build error occurred
Error: > Build failed because of webpack errors
    at /Users/ramirosilveyra/dev/personal/bug-repro-next-w5-inline-worker/node_modules/next/dist/build/index.js:15:918
    at async /Users/ramirosilveyra/dev/personal/bug-repro-next-w5-inline-worker/node_modules/next/dist/build/tracer.js:1:1441
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
