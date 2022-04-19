/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORLD_ATLAS_JSON_URL_110M: string,
  readonly VITE_YOUTUBE_CHANNELS_DATA_SOURCE: string,
  readonly VITE_JAMES_BOND_FILMS_DATA_SOURCE: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv,
}
