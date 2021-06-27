export const LaunchProjection = ['name', 'date_utc', 'success', 'payloads', 'crew']

export type LaunchesType = "past" | "future"

export type Launch = {
  name: string,
  date_utc: string,
  success: boolean,
  payloads: string[],
  crew: string[],
}
