import esbuild from 'esbuild';
import path from 'node:path';

const examples = ['./helloworld/index.jsx'];

function build(input) {
  const fullPath = path.resolve(input);
  const dirName = path.dirname(fullPath);

  return esbuild.build({
    entryPoints: [{ in: input, out: 'bundle' }],
    // format: 'esm',
    bundle: true,
    jsxFactory: 'h',
    outdir: dirName,
    sourcemap: 'linked',
  });
}

Promise.all(examples.map(build));
