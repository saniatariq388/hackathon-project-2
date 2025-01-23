export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-27'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'


export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5xrfl3a0'
  
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
