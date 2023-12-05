export interface WireguardHelperPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
