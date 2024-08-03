import { faker } from '@faker-js/faker';


console.log(JSON.stringify(faker.helpers.multiple(
    () => ({
        name: faker.animal.cat(),
        value: faker.number.int({
            min: 1098,
            max: 5200,
        }),

    }),
    {
        count: 5,
    }
)))