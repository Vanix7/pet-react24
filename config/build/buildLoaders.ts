import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  // Загрузка файлов
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  // Загрузка svg
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  // Если не используем typescript, то нужен babel для транспиляции
  const typescriptLoader = {
    // чтобы ловить файлы ts/tsx
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            "i18next-extract", 
            {
              "locales": ['ru', 'en'],
              'keyAsDefaultValue': true
            }
          ],
        ]
      }
    }
  }

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // для разработки не создаёт отдельно css
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      // "css-loader",
      {
        loader: 'css-loader',
        options: {
          // разрешить использовать как модуль
          modules: {
            // css без .module. должны обрабатываться как обычные css файлы
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoaders,
  ]
}