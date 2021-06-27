export type CrewStatus = "active" | "inactive" | "retired" | "unknow"

export type Crew = {
  name: string,
  agency: string,
  image: string,
  wikipedia: string,
  launches: string[],
  status: CrewStatus
  id: string
}
