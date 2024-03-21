import esbuild from 'esbuild';
import swc from '@swc/core';
import fs from 'node:fs';
await esbuild.build({
    entryPoints: ['./index.ts'],
    outdir: "dist",
    treeShaking: true,
    bundle: true,
    loader: {
        '.js': "js",
        '.ts': "ts",
        '.jsx': "jsx",
        '.tsx': "tsx",
    },
    plugins: [
        {
            name: "swc-loader",
            setup(build) {
                build.onLoad({ filter: /\.(js|ts|jsx|tsx)$/ }, args => {
                    const content = fs.readFileSync(args.path, 'utf-8');
                    const { code } = swc.transformSync(content, {
                        filename: args.path
                    });
                    return {
                        contents: code
                    };
                });
            }
        }
    ]
});
