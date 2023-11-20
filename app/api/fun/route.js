export const GET = (request) =>{
    return new Response(JSON.stringify([
      {
          comment: "Que gran proyecto",
          delay: 'myDelay-0',
          user: 'Juan Carlos',
      },
      {
          comment: "Que maravilla!!!",
          delay: 'myDelay-600',
          user: 'Marianella Espinosa',
      },
      {
          comment: "Es el servicio que no sabíamos que necesitábamos",
          delay: 'myDelay-1000',
          user: 'Andrea Cabazos',
      },
      {
          comment: "Es hermoso",
          delay: 'myDelay-1600',
          user: 'Joel Vázquez'
      }
  ]), {status: 201})
  //return new Response({error: "Error connecting to the DB"}, {status: 500})
  }
  