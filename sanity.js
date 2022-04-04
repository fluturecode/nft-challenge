import { createClient } from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-4-2',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

/* helper function for generating image URLs with only assest reference data in your docs. reference https://www.sanity.io/docs/image-url */
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
