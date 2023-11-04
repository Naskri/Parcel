interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_API_KEY: string
  readonly GEOAPI_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
