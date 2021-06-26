export type Crew = {
  name: string,
  agency: string,
  image: string,
  wikipedia: string,
  launches: string[],
  status: "active" | "inactive" | "retired" | "unknow",
  id: string
}
