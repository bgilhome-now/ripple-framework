import { RplBreakpoints } from '../../lib/breakpoints'

export const RplImagePriority = ['auto', 'low', 'high'] as const

export const RplImageFit = ['none', 'contain', 'cover'] as const

export interface RplImageFocalPoint {
  x: number
  y: number
}

type RplImageAspectOptions =
  | 'square'
  | 'full'
  | 'wide'
  | 'ultrawide'
  | 'panorama'

type RplImageAspectBreakpointsMap<Type> = {
  [Property in keyof Type]: RplImageAspectOptions
}

type RplImageAspectBreakpoints = RplImageAspectBreakpointsMap<RplBreakpoints>

export type RplImageAspect = RplImageAspectBreakpoints | RplImageAspectOptions

export interface RplImageType {
  src: string
  alt?: string
  width?: number
  height?: number
  sizes?: string
  srcSet?: string
  circle?: boolean
  focalPoint?: RplImageFocalPoint
  aspect?: RplImageAspect
  fit?: typeof RplImageFit[number]
  priority?: typeof RplImagePriority[number]
}
