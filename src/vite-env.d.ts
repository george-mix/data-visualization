/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_YOUTUBE_CHANNELS_DATA_SOURCE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
