// No necesito definir la estructura de un objeto

// Por ejemplo un restservice me podría devolver esto:

const misCoches = [
    { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    { "name":"Fiat", "models":[ "500", "Panda" ] }
  ];


  // y ya lo puedo tratar
  misCoches.forEach(
      item => {
          console.log(item.name)
      }
  )