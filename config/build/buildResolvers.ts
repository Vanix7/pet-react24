import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {

  return {
    // чтобы загружать файлы tsx, ts, js
    extensions: ['.tsx', '.ts', '.js'],
  }
}