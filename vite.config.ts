import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwindcss(), autoprefixer()]
		}
	},
	plugins: [sveltekit()],
	define: { 'process.env': process.env },
	resolve: {
		alias: {
			$l: path.resolve('./src/lib/layout'),
			$a: path.resolve('./src/lib/arith'),
			$c: path.resolve('./src/lib/cell'),
			$g: path.resolve('./src/lib/group'),
			$w: path.resolve('./src/lib/world'),
			$lib: path.resolve('./src/lib')
		}
	}
});
