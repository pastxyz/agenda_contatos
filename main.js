const form = document.getElementById('form-atividade');
const nome = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`A atividade: ${inputNomeContato.value} já foi inserida`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaNum() {
    const numeroNota = document.getElementById('telefone-contato');
    numeroNota.innerHTML = parseFloat(inputNotaAtividade.value);
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}