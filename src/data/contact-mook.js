//Este archivo solo contiene la informacion de la app, en futuro lo vamos a eliminar
const mook_data = {
  contacts: [
    {
      id: 1,
      name: "Ramon",
      last_time_connected: "14:19",
      img: "../../resources/ramon.webp",
      last_message: {
        id: 1,
        text: "Que tal, tanto tiempo!",
      },
      unread_messages: 1,
      messages: [
        {
          emisor: "Ramon",
          hora: "23:10",
          id: 1,
          texto: "¿Me podrías prestar 20 pesos? Te los pago mañana.",
          status: "visto",
        },{
          emisor: "YO",
          hora: "23:10",
          id: 2,
          texto: "Está bien, pero es la última vez.",
          status: "visto",
        },{
          emisor: "Ramon",
          hora: "23:10",
          id: 3,
          texto: "¡Gracias, joven!",
          status: "visto",
        },{
          emisor: "YO",
          hora: "23:10",
          id: 4,
          texto: "De nada, y acordate de pagar la renta!",
          status: "visto",
        },
      ],
    },
    {
      id: 2,
      name: "Chavo",
      last_time_connected: "15:19",
      img: "../../resources/chavo.webp",
      last_message: {
        id: 1,
        text: "Que tal, tanto tiempo!",
      },
      unread_messages: 0,
      messages: [
        {
          emisor: "YO",
          hora: "23:11",
          id: 1,
          texto: "Hola Chavo, ¿cómo estás hoy?",
          status: "visto",
        },
				{
          emisor: "Chavo",
          hora: "23:11",
          id: 2,
          texto: "Con hambre... ¿no tendrás una torta de jamón?",
          status: "visto",
        },
				{
          emisor: "YO",
          hora: "23:11",
          id: 3,
          texto: "Si Chavito, te la guardo",
          status: "visto",
        },
				{
          emisor: "YO",
          hora: "23:11",
          id: 4,
          texto: "🥪🥪🥪🥪",
          status: "visto",
        },
      ],
    },
    {
      id: 3,
      name: "Carlos",
      last_time_connected: "17:19",
      img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
      last_message: {
        id: 1,
        text: "Que tal, tanto tiempo!",
      },
      unread_messages: 20,
      messages: [
        {
          emisor: "YO",
          hora: "23:12",
          id: 3,
          texto: "Eso que significa 🤓?",
          status: "no-visto",
        },
      ],
    },
  ],
};

export default mook_data
