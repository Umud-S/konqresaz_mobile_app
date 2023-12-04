import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.qrcodeScanner.konqress',
  appName: 'KonqresQR',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
