import type {
  TidePageBase,
  TideDynamicPageComponent
} from '@dpc-sdp/ripple-tide-api'

export type TidePublicationHeader = {
  title: string
  summary: string
}

export type TidePublicationChapter = {
  title: string
  summary: string
  link: any
}

export default interface TidePublicationPage extends TidePageBase {
  /**
   * @description Page title
   */
  title: string
  /**
   * @description RplHeader
   */
  header: TidePublicationHeader
  /**
   * @description RplDescriptionList
   */
  details: any
  /**
   * @description List of cards
   */
  chapters: Array<TidePublicationChapter>
  /**
   * @description Landing page components
   */
  dynamicComponents: TideDynamicPageComponent[]
  /**
   * @description Page action documents
   */
  documents: any
}
