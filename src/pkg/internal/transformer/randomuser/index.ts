import type { RandomUser, RandomUserAPIRepsonse } from '@/pkg/internal/dto/randomuser'

export function transformRandomUserApiResponse(response: RandomUserAPIRepsonse): RandomUser[] {
  return response.results.map((result) => ({
    first_name: result.name.first,
    thumbnail: result.picture.medium,
    last_name: result.name.last,
    title: result.name.title,
    status: result.nat, // Assuming 'nat' (nationality) is used for status.
    dob: result.dob.date,
    gender: result.gender,
    country: result.location.country,
    email: result.email,
  }))
}
