export interface RandomUserAPIRepsonse {
  results: Result[]
  info: Info
}

export interface RandomUser{
    thumbnail: string
    first_name: string
    last_name: string
    status: string
    title: string
    gender: string
    country: string
    email: string
    dob: string
  }

interface Result {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: DateInfo
  registered: DateInfo
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

interface Name {
  title: string
  first: string
  last: string
}

interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: string | number
  coordinates: Coordinates
  timezone: Timezone
}

interface Street {
  number: number
  name: string
}

interface Coordinates {
  latitude: string
  longitude: string
}

interface Timezone {
  offset: string
  description: string
}

interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface DateInfo {
  date: string
  age: number
}

interface Id {
  name: string
  value: string | null
}

interface Picture {
  large: string
  medium: string
  thumbnail: string
}

interface Info {
  seed: string
  results: number
  page: number
  version: string
}
