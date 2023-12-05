import { WebPlugin } from '@capacitor/core';

import type { WireguardHelperPlugin } from './definitions';

export class WireguardHelperWeb extends WebPlugin implements WireguardHelperPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
