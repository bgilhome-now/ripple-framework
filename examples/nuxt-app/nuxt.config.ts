import 'dotenv/config'
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  privateRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  publicRuntimeConfig: {
    SITEID: 8888
  },
  tide: {
    contentApi: {
      site: '8888',
      baseUrl: 'https://develop.content.reference.sdp.vic.gov.au/',
      apiPrefix: 'api/v1',
      auth: {
        username: 'dpc',
        password: 'sdp'
      }
    },
    mapping: {
      content: {
        event: '@dpc-sdp/ripple-tide-event'
      },
      site: './tide/site.ts'
    },
    debug: false
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  modules: ['@dpc-sdp/ripple-tide-api/nuxt'],
  buildModules: ['@dpc-sdp/ripple-ui-core/nuxt']
})