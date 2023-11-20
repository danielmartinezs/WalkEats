export const GET = (request) =>{
    return new Response(JSON.stringify([
      {
          id_item: 0,
          name: 'Coca Cola 355ml',
          price: '16',
          url: '',
          store: '7 Eleven',
          categories: [],
      },
      {
        id_item: 1,
        name: 'Agua epura 2lt',
        price: '55',
        url: '',
        store: '7 Eleven',
        categories: [],
    },
    {
        id_item: 2,
        name: 'Baguette Carnes Frias',
        price: '36',
        url: '',
        store: '7 Eleven',
        categories: [],
    },
    {
        id_item: 3,
        name: 'Capuchino',
        price: '40',
        url: '',
        store: 'Tim Hortons',
        categories: [],
    },
    {
        id_item: 4,
        name: 'Dark Roast',
        price: '50',
        url: '',
        store: 'Tim Hortons',
        categories: [],
    },
    {
        id_item: 5,
        name: 'Café original caliente',
        price: '25',
        url: '',
        store: 'Tim Hortons',
        categories: [],
    },
  ]), {status: 201})
  }
  