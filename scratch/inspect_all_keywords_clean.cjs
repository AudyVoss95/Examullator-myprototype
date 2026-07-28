const fs = require('fs');
const { bancoQuestoesExamullator } = require('../src/questions/trilha_de_estudos_e_avalia_o_no_modelo_examullator');

console.log("=== Checking ALL 32 Examullator Questions ===");

Object.keys(bancoQuestoesExamullator).forEach(id => {
  const q = bancoQuestoesExamullator[id];
  console.log(`Q${id} [${q.titulo}]:`, JSON.stringify(q.keywords));
});
