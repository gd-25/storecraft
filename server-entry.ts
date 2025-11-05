import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
// @ts-ignore
import serverEntry from './dist/server/server.js'

interface Env {
  __STATIC_CONTENT: any
  __STATIC_CONTENT_MANIFEST: string
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      // Try to serve static assets first
      const url = new URL(request.url)

      // Only try to serve from KV for asset paths
      if (url.pathname.startsWith('/assets/') ||
          url.pathname.startsWith('/images/') ||
          url.pathname.startsWith('/logos/') ||
          url.pathname.match(/\.(ico|svg|png|jpg|jpeg|webp|json|txt)$/)) {
        try {
          return await getAssetFromKV(
            {
              request,
              waitUntil: ctx.waitUntil.bind(ctx),
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
            }
          )
        } catch (e) {
          // If asset not found, fall through to SSR
          console.log('Asset not found, falling back to SSR:', url.pathname)
        }
      }

      // Fall back to TanStack Start SSR handler
      return await serverEntry.fetch(request, env, ctx)
    } catch (e: any) {
      console.error('Server error:', e)
      return new Response(`Error: ${e.message}`, { status: 500 })
    }
  },
}
