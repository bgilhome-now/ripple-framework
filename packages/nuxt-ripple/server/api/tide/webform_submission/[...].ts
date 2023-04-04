//@ts-nocheck runtime imports
import { defineEventHandler, getQuery, H3Event } from 'h3'
import { createHandler, logger, TideSiteApi } from '@dpc-sdp/ripple-tide-api'
import { useNitroApp } from '#imports'
import { createProxyMiddleware } from 'http-proxy-middleware'

export const createSearchHandler = async (event: H3Event) => {
  const { public: config } = useRuntimeConfig()

  const proxyMiddleware = createProxyMiddleware({
    target: config.tide.baseUrl,
    pathRewrite: {
      '^/api/tide/': '/api/v1/'
    },
    logger: logger,
    changeOrigin: true
  })

  return createHandler(event, 'TideWebformHandler', async () => {
    await new Promise((resolve, reject) => {
      proxyMiddleware(event.node.req, event.node.res, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
  })
}

export default defineEventHandler(async (event: H3Event) => {
  return createSearchHandler(event)
})
