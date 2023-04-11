import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { dirname, join } from 'path';
import { cssModules, linearPreprocess } from 'svelte-preprocess-cssmodules';
import { fileURLToPath } from 'url';
import { BaseEx } from 'base-ex';

const baseEx = new BaseEx();
const base2048 = baseEx.base2048;
const base16 = baseEx.base16;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: linearPreprocess([
		vitePreprocess({
			style: {
				css: {
					postcss: join(dirname(fileURLToPath(import.meta.url)), 'postcss.config.cjs')
				}
			}
		}),
		cssModules({
			localIdentName: '[folder][name]___[hash:hex:8]',
			getLocalIdent: (_, { interpolatedName }) => {
				let [b, a] = interpolatedName.split(/___/);
				const mangled = base2048.encode(base16.decode(a));
				return process.env.NODE_ENV === 'production'
					? mangled
					: [
							b
								.split(/(?=[A-Z])/)
								.join('_')
								.toLowerCase(),
							mangled
					  ].join('_');
			},
			useAsDefaultScoping: true
		})
	]),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		alias: {
			$l: './src/lib/layout',
			'$l/*': './src/lib/layout/*',
			$a: './src/lib/arith',
			'$a/*': './src/lib/arith/*',
			$c: './src/lib/cell',
			'$c/*': './src/lib/cell/*',
			$g: './src/lib/group',
			'$g/*': './src/lib/group/*',
			$w: './src/lib/world',
			'$w/*': './src/lib/world/*',
			$lib: './src/lib',
			'$lib/*': './src/lib/*'
		}
	}
};

export default config;
