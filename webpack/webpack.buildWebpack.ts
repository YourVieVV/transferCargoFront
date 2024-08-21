import webpack from "webpack";
import {webpackDevServer} from "./webpack.devServer";
import {webpackLoaders} from "./webpack.loaders";
import {webpackPlugins} from "./webpack.plugins";
import {webpackResolvers} from "./webpack.resolvers";
import {BuildOptions} from "./types/types";

export function webpackBuildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: webpackPlugins(options),
        module: {
            rules: webpackLoaders(options),
        },
        resolve: webpackResolvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDev ? webpackDevServer(options) : undefined,
    }
}