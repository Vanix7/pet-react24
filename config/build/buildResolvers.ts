import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {

  return {
    // чтобы загружать файлы tsx, ts, js
    extensions: ['.tsx', '.ts', '.js'],
    // абсолютный путь от папки src в приоритете
    preferAbsolute: true,
    // абсолютный путь для модулей из папки src и node_modules
    modules: [options.paths.src, 'node_modules'],
    // для каждого модуля главный файл index
    mainFiles: ['index'],
    alias: {},
  }
}