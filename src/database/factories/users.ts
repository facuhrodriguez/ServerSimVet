import { User } from '../../entity/user';
import Faker from 'faker';
import { define } from 'typeorm-seeding';
define(User, (faker: typeof Faker) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const user = new User();

  user.name = firstName;
  user.surname = lastName;
  user.password = 'secret';
  user.email = faker.internet.email();
  user.institution = faker.company.companyName();

  return user;
});
