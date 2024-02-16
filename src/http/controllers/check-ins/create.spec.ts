import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import request from 'supertest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
import { prisma } from '@/lib/prisma'

describe('Create Check-in (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create check-in', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    const gym = await prisma.gym.create({
      data: {
        title: 'JavaScript Gym',
        latitude: -26.9090816,
        longitude: -49.0799104,
      },
    })

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/check-ins`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -26.9090816,
        longitude: -49.0799104,
      })

    expect(response.statusCode).toEqual(201)
  })
})
