import { QueryParams } from "./query"

export const RocketProjection =
  ['active', 'company', 'cost_per_launch', 'country', 'description', 'flickr_images', 'name', 'wikipedia']

export type Rocket = {
   active: boolean,
   company: string,
   cost_per_launch: number,
   country: string,
   description: string,
   flickr_images: string[] | string
   name: string,
   wikipedia: string
}

