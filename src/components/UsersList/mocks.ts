import { faker } from '@faker-js/faker'

export const users = Array.from({ length: 1000 }, () => ({
  id: faker.number.int(),
  avatar: faker.image.avatar(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  typeSubscription: 'Plus',
}))
