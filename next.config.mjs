/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['pino', 'pino-pretty']
  },
  webpack: (config, { isServer, dev }) => {
    if (isServer && !dev) {
      config.output.webassemblyModuleFilename = "../static/wasm/[modulehash].wasm";
    } else {
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    }

    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    return config;
  }
};

export default nextConfig;
