console.log(2 + 2);
console.log(10 * 5);
console.log("Hola");
console.log("Hola" + " mundo");
console.log(2 + 2 * 3);
console.log((2 + 2) * 3);
console.log("2" + "2");

console.log(typeof "Mochila");
console.log(typeof 20);
console.log(typeof "20");
console.log(typeof false);
console.log(typeof "false");
console.log(typeof undefined);
console.log(typeof null);

const nombreInicial = "Mochila negra";
const lugarInicial = "Biblioteca";
const diasIniciales = 3;
const encontradaInicialmente = false;
let estadoInicial = "PERDIDO";
const universidad = "UNAM";

console.log(nombreInicial, lugarInicial, diasIniciales, encontradaInicialmente, universidad);

estadoInicial = "RECUPERADO";
console.log(estadoInicial);

const precio = 100;
const cantidad = 3;
const total = precio * cantidad;

console.log(total);
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 2);
console.log(2 ** 3);
console.log("Hola " + "Andrea");
console.log("10" + 5);
console.log("5" - 1);

const mensajeInicial = `Se perdió ${nombreInicial} en ${lugarInicial}`;

console.log(mensajeInicial);

const diasPerdido = 10;

console.log(diasPerdido > 7);
console.log(diasPerdido === 10);
console.log(diasPerdido < 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== "5");
console.log(true && false);
console.log(true || false);
console.log(!true);

const llevaUnaSemana = diasPerdido >= 7;
const estaPerdido = estadoInicial === "PERDIDO";

console.log(llevaUnaSemana, estaPerdido);

if (estadoInicial === "PERDIDO") {
  console.log("Ayúdanos a encontrarlo");
} else {
  console.log("El objeto ya no está perdido");
}

const edadMayor = 20;

if (edadMayor >= 18) {
  console.log("Puede entrar");
} else {
  console.log("No puede entrar");
}

const estadoEjemplo = "ENCONTRADO";

if (estadoEjemplo === "PERDIDO") {
  console.log("Ayúdanos a encontrarlo");
} else if (estadoEjemplo === "ENCONTRADO") {
  console.log("Buscando a su propietario");
} else if (estadoEjemplo === "RECUPERADO") {
  console.log("Caso cerrado");
} else {
  console.log("Estado desconocido");
}

const encontrado = true;
const recuperado = false;

if (encontrado && !recuperado) {
  console.log("Buscando propietario");
}

function mostrarNombreObjeto(nombre) {
  console.log(`Objeto: ${nombre}`);
}

mostrarNombreObjeto("Mochila");
mostrarNombreObjeto("Termo");
mostrarNombreObjeto("Calculadora");
mostrarNombreObjeto("Paraguas");

function duplicarNumero(numero) {
  return numero * 2;
}

console.log(duplicarNumero(5));

function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Belén"));

function triple(numero) {
  return numero * 3;
}

console.log(triple(4));
console.log(triple(10));

const resultadoTriple = triple(5);

console.log(resultadoTriple);

function sumar(a, b) {
  return a + b;
}

const resultadoSuma = sumar(5, 3);

console.log(resultadoSuma);
console.log(sumar(5, 3) > 5);

function sumarYMostrar(a, b) {
  console.log(a + b);
}

const resultadoSinReturn = sumarYMostrar(5, 3);

console.log(resultadoSinReturn);

function obtenerMensaje(estado) {
  if (estado === "PERDIDO") {
    return "Ayúdanos a encontrarlo";
  }

  if (estado === "ENCONTRADO") {
    return "Buscando a su propietario";
  }

  if (estado === "RECUPERADO") {
    return "Objeto devuelto";
  }

  return "Estado desconocido";
}

console.log(obtenerMensaje("PERDIDO"));
console.log(obtenerMensaje("RECUPERADO"));
console.log(obtenerMensaje("TACO"));

const nombreCaso = "Mochila negra";
const lugarCaso = "Biblioteca";
let estadoCaso = "PERDIDO";

console.log(`${nombreCaso} - ${lugarCaso} - ${obtenerMensaje(estadoCaso)}`);

estadoCaso = "RECUPERADO";

console.log(`${nombreCaso} - ${lugarCaso} - ${obtenerMensaje(estadoCaso)}`);


// Parte II

const nombre1 = "Mochila";
const estado1 = "PERDIDO";

const nombre2 = "Termo";
const estado2 = "ENCONTRADO";

const nombre3 = "Calculadora";
const estado3 = "RECUPERADO";

console.log(nombre1, estado1, nombre2, estado2, nombre3, estado3);

const mochila = {
  nombre: "Mochila negra",
  lugar: "Biblioteca",
  diasPerdido: 3,
  recuperado: false
};

console.log(mochila);
console.log(mochila.nombre);
console.log(mochila.lugar);
console.log(mochila.diasPerdido);
console.log(mochila.recuperado);
console.log(mochila["nombre"]);

const campo = "lugar";

console.log(mochila[campo]);

mochila.recuperado = true;
mochila.lugar = "Oficina de objetos perdidos";
mochila.color = "Negro";
mochila.categoria = "Accesorios";

console.log(mochila);

const estudiante = {
  nombre: "Ana",
  edad: 20
};

estudiante.edad = 21;

console.log(estudiante.edad);

const nombresObjetos = [
  "Mochila",
  "Termo",
  "Calculadora",
  "Paraguas"
];

console.log(nombresObjetos);
console.log(nombresObjetos[0]);
console.log(nombresObjetos[1]);
console.log(nombresObjetos[2]);
console.log(nombresObjetos[3]);
console.log(nombresObjetos[4]);
console.log(nombresObjetos.length);
console.log(nombresObjetos[nombresObjetos.length - 1]);

nombresObjetos.push("Audífonos");

console.log(nombresObjetos);

const eliminado = nombresObjetos.pop();

console.log(eliminado);
console.log(nombresObjetos.includes("Termo"));
console.log(nombresObjetos.includes("Laptop"));
console.log(nombresObjetos.indexOf("Termo"));
console.log(nombresObjetos.indexOf("Laptop"));

const objetosPerdidos = [
  {
    id: 1,
    nombre: "Mochila",
    estado: "PERDIDO",
    lugar: "Biblioteca"
  },
  {
    id: 2,
    nombre: "Termo",
    estado: "ENCONTRADO",
    lugar: "Cafetería"
  },
  {
    id: 3,
    nombre: "Calculadora",
    estado: "RECUPERADO",
    lugar: "Salón 203"
  }
];

console.log(objetosPerdidos);
console.log(objetosPerdidos[0].nombre);
console.log(objetosPerdidos[1].estado);
console.log(objetosPerdidos[2].lugar);

for (let i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}

for (let i = 0; i < objetosPerdidos.length; i++) {
  console.log(objetosPerdidos[i].nombre);
}

for (const objetoActual of objetosPerdidos) {
  console.log(objetoActual.nombre);
}

objetosPerdidos.forEach(function (objetoActual) {
  console.log(objetoActual.nombre);
});

const saludarConFlecha = (nombre) => `Hola, ${nombre}`;

const duplicarConFlecha = (numero) => numero * 2;

console.log(saludarConFlecha("Ana"));
console.log(duplicarConFlecha(5));

objetosPerdidos.forEach((objetoActual) => {
  console.log(objetoActual.nombre);
});

const nombresConMap = objetosPerdidos.map((objetoActual) => {
  return objetoActual.nombre;
});

const nombresMayusculas = objetosPerdidos.map((objetoActual) => {
  return objetoActual.nombre.toUpperCase();
});

const mensajesObjetos = objetosPerdidos.map((objetoActual) => {
  return `${objetoActual.nombre} - ${objetoActual.estado}`;
});

console.log(nombresConMap);
console.log(nombresMayusculas);
console.log(mensajesObjetos);

const objetosConEstadoPerdido = objetosPerdidos.filter((objetoActual) => {
  return objetoActual.estado === "PERDIDO";
});

const recuperados = objetosPerdidos.filter((objetoActual) => {
  return objetoActual.estado === "RECUPERADO";
});

const noRecuperados = objetosPerdidos.filter((objetoActual) => {
  return objetoActual.estado !== "RECUPERADO";
});

console.log(objetosConEstadoPerdido);
console.log(recuperados);
console.log(noRecuperados);

const objetoEncontrado = objetosPerdidos.find((objetoActual) => {
  return objetoActual.id === 2;
});

const objetoInexistente = objetosPerdidos.find((objetoActual) => {
  return objetoActual.id === 999;
});

console.log(objetoEncontrado.nombre);
console.log(objetoInexistente);

if (objetoInexistente !== undefined) {
  console.log(objetoInexistente.nombre);
} else {
  console.log("No encontramos ese objeto.");
}

console.log(objetoInexistente?.nombre);

const objetoParaDesestructurar = {
  nombre: "Mochila",
  lugar: "Biblioteca",
  estado: "PERDIDO"
};

const nombreTradicional = objetoParaDesestructurar.nombre;
const lugarTradicional = objetoParaDesestructurar.lugar;

const { nombre, lugar } = objetoParaDesestructurar;

const { estado: estadoActual } = objetoParaDesestructurar;

console.log(nombreTradicional);
console.log(lugarTradicional);
console.log(nombre);
console.log(lugar);
console.log(estadoActual);

const colores = [
  "rojo",
  "azul",
  "verde"
];

const [primerColor, segundoColor] = colores;

const [, , tercerColor] = colores;

console.log(primerColor);
console.log(segundoColor);
console.log(tercerColor);

function mostrarObjeto({ nombre, estado }) {
  console.log(`${nombre}: ${estado}`);
}

mostrarObjeto({
  nombre: "Mochila",
  estado: "PERDIDO"
});

const objetoOriginal = {
  nombre: "Mochila",
  estado: "PERDIDO"
};

const copiaPorReferencia = objetoOriginal;

copiaPorReferencia.estado = "RECUPERADO";

console.log(objetoOriginal.estado);

const mochilaOriginal = {
  nombre: "Mochila",
  estado: "PERDIDO"
};

const mochilaActualizada = {
  ...mochilaOriginal,
  estado: "RECUPERADO"
};

console.log(mochilaOriginal.estado);
console.log(mochilaActualizada.estado);
console.log(mochilaOriginal === mochilaActualizada);

const frutasOriginales = [
  "Manzana",
  "Pera"
];

const frutasNuevas = [
  ...frutasOriginales,
  "Uva"
];

console.log(frutasOriginales);
console.log(frutasNuevas);

const listaActualizada = [
  ...objetosPerdidos,
  {
    id: 4,
    nombre: "Audífonos",
    estado: "PERDIDO",
    lugar: "Laboratorio"
  }
];

console.log(objetosPerdidos);
console.log(listaActualizada);

const registroOriginal = {
  nombre: "Mochila",
  propietario: {
    nombre: "Ana",
    carrera: "Matemáticas"
  }
};

const registroCopia = {
  ...registroOriginal
};

registroCopia.propietario.nombre = "Carlos";

console.log(registroOriginal.propietario.nombre);

const registroActualizado = {
  ...registroOriginal,
  propietario: {
    ...registroOriginal.propietario,
    nombre: "Lucía"
  }
};

console.log(registroOriginal.propietario.nombre);
console.log(registroActualizado.propietario.nombre);

const inventario = [
  {
    id: 1,
    nombre: "Mochila",
    estado: "PERDIDO"
  },
  {
    id: 2,
    nombre: "Termo",
    estado: "ENCONTRADO"
  },
  {
    id: 3,
    nombre: "Calculadora",
    estado: "PERDIDO"
  },
  {
    id: 4,
    nombre: "Audífonos",
    estado: "RECUPERADO"
  }
];

function buscarPorEstado(lista, estado) {
  return lista.filter((objetoActual) => {
    return objetoActual.estado === estado;
  });
}

const perdidosDelInventario = buscarPorEstado(
  inventario,
  "PERDIDO"
);

const encontradosDelInventario = buscarPorEstado(
  inventario,
  "ENCONTRADO"
);

const recuperadosDelInventario = buscarPorEstado(
  inventario,
  "RECUPERADO"
);

console.log(perdidosDelInventario);
console.log(encontradosDelInventario);
console.log(recuperadosDelInventario);

const nombresPerdidos = perdidosDelInventario.map((objetoActual) => {
  return objetoActual.nombre;
});

const nombresDeObjetosPerdidos = inventario
  .filter((objetoActual) => objetoActual.estado === "PERDIDO")
  .map((objetoActual) => objetoActual.nombre);

console.log(nombresPerdidos);
console.log(nombresDeObjetosPerdidos);

function buscarPorId(lista, id) {
  return lista.find((objetoActual) => {
    return objetoActual.id === id;
  });
}

console.log(buscarPorId(inventario, 3));
console.log(buscarPorId(inventario, 100));

const reporte = {
  total: inventario.length,

  perdidos: inventario.filter((objetoActual) => {
    return objetoActual.estado === "PERDIDO";
  }).length,

  encontrados: inventario.filter((objetoActual) => {
    return objetoActual.estado === "ENCONTRADO";
  }).length,

  recuperados: inventario.filter((objetoActual) => {
    return objetoActual.estado === "RECUPERADO";
  }).length
};

console.log(reporte);

const inventarioActualizado = inventario.map((objetoActual) => {
  if (objetoActual.id === 1) {
    return {
      ...objetoActual,
      estado: "RECUPERADO"
    };
  }

  return objetoActual;
});

console.log(inventario);
console.log(inventarioActualizado);