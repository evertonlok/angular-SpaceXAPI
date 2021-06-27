export const PayloadProjection =
  ['name', 'customers', 'manufacturers', 'nationalities', 'orbit', 'type', 'mass_kg', 'mass_lbs',
    'reference_system', 'spanlife_years', 'inclination_deg', 'reused'
  ]

export type Payload = {
  name: string,
  customers: string[],
  manufacturers: string[],
  nationalities: string[],
  orbit: string,
  type: string,
  mass_kg: number,
  mass_lbs: number,
  reference_system: string,
  spanlife_years: string,
  inclination_deg: number,
  reused: boolean
}
