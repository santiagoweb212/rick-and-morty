export interface ILocations {
    info: Info
    results: Result[]
  }
  
  export interface Info {
    count: number
    pages: number
    next: string
    prev: null|string
  }
  
  export interface Result {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
  }
  