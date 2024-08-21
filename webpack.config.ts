import path from 'path';
import webpack from 'webpack';
import {webpackBuildWebpack} from "./webpack/webpack.buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./webpack/types/types";


interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'main.tsx'),
        html: path.resolve(__dirname, 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = webpackBuildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })

    return config;
}

