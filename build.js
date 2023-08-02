import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./h.js'],
  format: 'esm',
  target: 'es2022',
  platform: 'browser',
  outfile: './dist/index.js',
  sourcemap: 'linked',

  external: ['vanjs-core'],
  bundle: true,
});
