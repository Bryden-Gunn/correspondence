exports.seed = (knex) => {
  return knex('users').then(() =>
    knex('users').insert([
      {
        auth0_id: 'auth0|123',
        name: 'Elizabeth ',
        username: 'elizabeth01',
        email: 'eliza@gmail.com',
        delay_id: 1,
      },
      {
        auth0_id: 'auth0|456',
        name: 'Samuel',
        username: 'sam01',
        email: 'grape@gmail.com',
        delay_id: 2,
      },
      {
        auth0_id: 'auth0|1200',
        name: 'Keagan',
        username: 'kea01',
        email: 'kea@example.com',
        delay_id: 3,
      },
      {
        auth0_id: 'auth0|1201',
        name: 'Daniel',
        username: 'danny01',
        email: 'dantheman@example.com',
        delay_id: 2,
      },
      {
        auth0_id: 'auth0|1202',
        name: 'Gracie',
        username: 'gracie01',
        email: 'gracie@example.com',
        delay_id: 1,
      },
      {
        auth0_id: 'auth0|1203',
        name: 'Bryden',
        username: 'bryden01',
        email: 'brydene@example.com',
        delay_id: 1,
      },
      {
        auth0_id: 'auth0|1204',
        name: 'Livi',
        username: 'livi01',
        email: 'livie@example.com',
        delay_id: 3,
      },
      {
        auth0_id: 'auth0|1205',
        name: 'Oscar',
        username: 'oscar01',
        email: 'oscar@example.com',
        delay_id: 1,
      },
      {
        auth0_id: 'auth0|1206',
        name: 'Elizabeth',
        username: 'elize02',
        email: 'elize02@example.com',
        delay_id: 2,
      },
      {
        auth0_id: 'auth0|1207',
        name: 'Samuel',
        username: 'sam02',
        email: 'sam@example.com',
        delay_id: 1,
      },
      {
        auth0_id: 'auth0|1208',
        name: 'null',
        username: 'ceo_frey',
        email: 'mrceo@example.com',
        delay_id: 1,
      },
      {
        auth0_id: 'auth0|1209',
        name: 'Daniel',
        username: 'dan02',
        email: 'dan02e@example.com',
        delay_id: 2,
      },
      {
        auth0_id: 'auth0|63336870d3036f897e16eadf',
        name: 'Grapeman',
        username: 'grape_gatsby',
        email: 'grape_gatsby@gmail.com',
        delay_id: 42,
      },
      {
        auth0_id: 'auth0|6331ff7335450ad949086015',
        name: 'Banana Man',
        username: 'banana_llama',
        email: 'banana_llama@gmail.com',
        delay_id: 42,
      },
    ])
  )
}
