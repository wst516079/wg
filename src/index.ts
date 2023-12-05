import { registerPlugin } from '@capacitor/core';

import type { WireguardHelperPlugin } from './definitions';

const WireguardHelper = registerPlugin<WireguardHelperPlugin>('WireguardHelper', {
  web: () => import('./web').then(m => new m.WireguardHelperWeb()),
});

export * from './definitions';
export { WireguardHelper };
