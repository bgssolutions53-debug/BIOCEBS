import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // Mantienes esta línea si necesitas la exportación estática
    images: {
        unoptimized: true, // Deshabilita la optimización
    },
    /* otras configuraciones */
};

export default nextConfig;