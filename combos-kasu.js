/* Combos Kasu: armados por Kasu con productos del catálogo.
   El precio se calcula solo: suma de los productos por separado menos el descuento (dto, en %), redondeado en 900.
   Así el ahorro que ve el cliente siempre es real: es la diferencia frente a comprarlos sueltos en esta misma tienda. */
window.KASU_COMBOS = [
  {id:'kc01', nombre:'Kit café de la casa', desc:'Muele el grano, prepara la greca y espuma la leche.', dto:10,
   partes:[{id:'p801306',n:1},{id:'p809702',n:1},{id:'p809802',n:1}]},
  {id:'kc02', nombre:'Kit desayuno de arepas', desc:'Arepas parejas, queso rallado y cero regueros.', dto:10,
   partes:[{id:'p808302',n:1},{id:'p804500',n:1},{id:'p808802',n:1}]},
  {id:'kc03', nombre:'Kit nevera ordenada', desc:'Cada cosa en su sitio y los alimentos frescos por más días.', dto:10,
   partes:[{id:'p809410',n:1},{id:'p801502',n:1},{id:'p807902',n:1}]},
  {id:'kc04', nombre:'Kit lavaplatos sin charcos', desc:'Esponja, jabón y platos escurriendo sin mojar el mesón.', dto:10,
   partes:[{id:'p803003',n:1},{id:'p803302',n:1},{id:'p809602',n:1}]},
  {id:'kc05', nombre:'Kit aseo sin esfuerzo', desc:'Trapeas sin mojarte las manos y el cepillo gira solo.', dto:10,
   partes:[{id:'p404905',n:1},{id:'p403303',n:1},{id:'p405103',n:1}]},
  {id:'kc06', nombre:'Kit clóset ordenado', desc:'Más espacio colgado, un piso extra y cajones divididos.', dto:10,
   partes:[{id:'p406701',n:1},{id:'p410702',n:1},{id:'p946210',n:1}]},
  {id:'kc07', nombre:'Kit noche de descanso', desc:'Almohada fresca, rodillas cómodas y una manta suave.', dto:10,
   partes:[{id:'p204500',n:1},{id:'p204510',n:1},{id:'p407603',n:1}]},
  {id:'kc08', nombre:'Kit carretera tranquila', desc:'Aire para las llantas, arranque de emergencia y el carro limpio.', dto:10,
   partes:[{id:'p700600',n:1},{id:'p701804',n:1},{id:'p401605',n:1}]},
  {id:'kc09', nombre:'Kit perro feliz', desc:'Para morder, lanzar y jalar: juego para toda la semana.', dto:10,
   partes:[{id:'p502601',n:1},{id:'p502401',n:1},{id:'p503034',n:1}]},
  {id:'kc10', nombre:'Kit tarde de spa', desc:'Masaje, aroma y una máscara de gel para descansar en casa.', dto:10,
   partes:[{id:'p209601',n:1},{id:'p407201',n:1},{id:'p210411',n:1}]},
  // Combos de regalo (navidad:true los pone en «Regalos de Navidad»)
  {id:'kc11', nombre:'Kit regalo para mamá', desc:'Espejo con luz, joyero de tres niveles y un difusor de aromas.', dto:10, navidad:true,
   partes:[{id:'p207201',n:1},{id:'p409903',n:1},{id:'p407201',n:1}]},
  {id:'kc12', nombre:'Kit regalo para papá', desc:'Caja de herramientas, destornillador eléctrico y linterna recargable.', dto:10, navidad:true,
   partes:[{id:'p702000',n:1},{id:'p702300',n:1},{id:'p402706',n:1}]},
  {id:'kc13', nombre:'Kit regalo para la oficina', desc:'Lámpara de escritorio, masaje cervical con calor y rodillo para la espalda.', dto:10, navidad:true,
   partes:[{id:'p403801',n:1},{id:'p209704',n:1},{id:'p201007',n:1}]},
  {id:'kc14', nombre:'Kit regalo para los abuelos', desc:'Manta térmica, hidromasaje para pies y cojín de lectura.', dto:10, navidad:true,
   partes:[{id:'p210600',n:1},{id:'p210100',n:1},{id:'p204515',n:1}]}
];
