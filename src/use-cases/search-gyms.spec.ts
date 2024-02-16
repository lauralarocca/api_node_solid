import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Academia JS',
      description: 'Primeira academia',
      phone: null,
      latitude: -27.0452242,
      longitude: -49.5416211,
    })
    await gymsRepository.create({
      title: 'Academia TS',
      description: 'Segunda academia',
      phone: null,
      latitude: -27.0452242,
      longitude: -49.5416211,
    })
    const { gyms } = await sut.execute({
      query: 'JS',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Academia JS' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Academia Full Stack - ${i}`,
        description: null,
        phone: null,
        latitude: -27.0452242,
        longitude: -49.5416211,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Stack',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Academia Full Stack - 21' }),
      expect.objectContaining({ title: 'Academia Full Stack - 22' }),
    ])
  })
})
