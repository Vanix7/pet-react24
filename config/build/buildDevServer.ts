import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

  return {
    port: options.port,
    open: true,
    // позволяет открывать по роуту
    historyApiFallback: true,

    // Hot Module Replacement
    hot: true
  }
}