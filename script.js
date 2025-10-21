// Classe Funcionario - Exercício 1
class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this._id = Date.now() + Math.random(); // ID único baseado em timestamp
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
        this._salario = salario;
    }

    // Getters
    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    get cargo() {
        return this._cargo;
    }

    get salario() {
        return this._salario;
    }

    // Setters
    set nome(novoNome) {
        if (novoNome && novoNome.trim() !== '') {
            this._nome = novoNome.trim();
        } else {
            throw new Error('Nome não pode ser vazio');
        }
    }

    set idade(novaIdade) {
        if (novaIdade >= 18 && novaIdade <= 100) {
            this._idade = novaIdade;
        } else {
            throw new Error('Idade deve estar entre 18 e 100 anos');
        }
    }

    set cargo(novoCargo) {
        if (novoCargo && novoCargo.trim() !== '') {
            this._cargo = novoCargo.trim();
        } else {
            throw new Error('Cargo não pode ser vazio');
        }
    }

    set salario(novoSalario) {
        if (novoSalario >= 0) {
            this._salario = novoSalario;
        } else {
            throw new Error('Salário não pode ser negativo');
        }
    }

    // Método toString
    toString() {
        return `Funcionário: ${this._nome}, ${this._idade} anos, ${this._cargo}, R$ ${this._salario.toFixed(2)}`;
    }

    // Método para atualizar dados
    atualizarDados(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
}

// Array para armazenar funcionários
let funcionarios = [];
let funcionarioEditando = null;

// Elementos DOM
const form = document.getElementById('funcionarioForm');
const btnCadastrar = document.getElementById('btnCadastrar');
const btnCancelar = document.getElementById('btnCancelar');
const btnGerarRelatorios = document.getElementById('btnGerarRelatorios');
const tbody = document.getElementById('funcionariosTableBody');
const relatoriosContainer = document.getElementById('relatoriosContainer');

// Exercício 1 - Cadastro e Listagem
function cadastrarFuncionario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const salario = parseFloat(document.getElementById('salario').value);

    try {
        if (funcionarioEditando) {
            // Editando funcionário existente
            funcionarioEditando.atualizarDados(nome, idade, cargo, salario);
            funcionarioEditando = null;
            btnCadastrar.textContent = 'Cadastrar';
            btnCancelar.classList.add('hidden');
        } else {
            // Criando novo funcionário
            const novoFuncionario = new Funcionario(nome, idade, cargo, salario);
            funcionarios.push(novoFuncionario);
        }
        
        form.reset();
        atualizarTabela();
        mostrarMensagem('Funcionário salvo com sucesso!', 'success');
    } catch (error) {
        mostrarMensagem(`Erro: ${error.message}`, 'error');
    }
}

// Exercício 2 - Exclusão e Edição
function excluirFuncionario(id) {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
        funcionarios = funcionarios.filter(func => func.id !== id);
        atualizarTabela();
        mostrarMensagem('Funcionário excluído com sucesso!', 'success');
    }
}

function editarFuncionario(id) {
    const funcionario = funcionarios.find(func => func.id === id);
    if (funcionario) {
        document.getElementById('nome').value = funcionario.nome;
        document.getElementById('idade').value = funcionario.idade;
        document.getElementById('cargo').value = funcionario.cargo;
        document.getElementById('salario').value = funcionario.salario;
        
        funcionarioEditando = funcionario;
        btnCadastrar.textContent = 'Atualizar';
        btnCancelar.classList.remove('hidden');
        
        // Scroll para o formulário
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function cancelarEdicao() {
    funcionarioEditando = null;
    form.reset();
    btnCadastrar.textContent = 'Cadastrar';
    btnCancelar.classList.add('hidden');
}

// Função para atualizar a tabela
function atualizarTabela() {
    tbody.innerHTML = '';
    
    if (funcionarios.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #666;">Nenhum funcionário cadastrado</td></tr>';
        return;
    }
    
    funcionarios.forEach(funcionario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${funcionario.id.toString().substring(0, 8)}</td>
            <td>${funcionario.nome}</td>
            <td>${funcionario.idade}</td>
            <td>${funcionario.cargo}</td>
            <td>R$ ${funcionario.salario.toFixed(2)}</td>
            <td>
                <button onclick="editarFuncionario(${funcionario.id})" class="warning">Editar</button>
                <button onclick="excluirFuncionario(${funcionario.id})" class="danger">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Exercício 4 - Relatórios com métodos de array
function gerarRelatorios() {
    if (funcionarios.length === 0) {
        mostrarMensagem('Não há funcionários para gerar relatórios', 'warning');
        return;
    }

    relatoriosContainer.innerHTML = '';

    // 1. Funcionários com salário maior que R$ 5000
    const funcionariosSalarioAlto = funcionarios.filter(func => func.salario > 5000);
    const relatorio1 = document.createElement('div');
    relatorio1.className = 'relatorio';
    relatorio1.innerHTML = `
        <h3>💰 Funcionários com Salário > R$ 5.000</h3>
        <p><strong>Quantidade:</strong> ${funcionariosSalarioAlto.length}</p>
        <ul>
            ${funcionariosSalarioAlto.map(func => `<li>${func.nome} - ${func.cargo} - R$ ${func.salario.toFixed(2)}</li>`).join('')}
        </ul>
    `;
    relatoriosContainer.appendChild(relatorio1);

    // 2. Média salarial
    const mediaSalarial = funcionarios.reduce((soma, func) => soma + func.salario, 0) / funcionarios.length;
    const relatorio2 = document.createElement('div');
    relatorio2.className = 'relatorio';
    relatorio2.innerHTML = `
        <h3>📊 Média Salarial</h3>
        <p><strong>Valor:</strong> R$ ${mediaSalarial.toFixed(2)}</p>
        <p><strong>Total de funcionários:</strong> ${funcionarios.length}</p>
    `;
    relatoriosContainer.appendChild(relatorio2);

    // 3. Cargos únicos
    const cargosUnicos = [...new Set(funcionarios.map(func => func.cargo))];
    const relatorio3 = document.createElement('div');
    relatorio3.className = 'relatorio';
    relatorio3.innerHTML = `
        <h3>👔 Cargos Únicos</h3>
        <p><strong>Quantidade:</strong> ${cargosUnicos.length}</p>
        <ul>
            ${cargosUnicos.map(cargo => `<li>${cargo}</li>`).join('')}
        </ul>
    `;
    relatoriosContainer.appendChild(relatorio3);

    // 4. Nomes em maiúsculo
    const nomesMaiusculo = funcionarios.map(func => func.nome.toUpperCase());
    const relatorio4 = document.createElement('div');
    relatorio4.className = 'relatorio';
    relatorio4.innerHTML = `
        <h3>🔤 Nomes em Maiúsculo</h3>
        <ul>
            ${nomesMaiusculo.map(nome => `<li>${nome}</li>`).join('')}
        </ul>
    `;
    relatoriosContainer.appendChild(relatorio4);

    // 5. Relatório adicional - Faixa etária
    const funcionariosJovens = funcionarios.filter(func => func.idade < 30);
    const funcionariosMeiaIdade = funcionarios.filter(func => func.idade >= 30 && func.idade < 50);
    const funcionariosExperientes = funcionarios.filter(func => func.idade >= 50);
    
    const relatorio5 = document.createElement('div');
    relatorio5.className = 'relatorio';
    relatorio5.innerHTML = `
        <h3>👥 Distribuição por Faixa Etária</h3>
        <p><strong>Jovens (< 30 anos):</strong> ${funcionariosJovens.length}</p>
        <p><strong>Meia-idade (30-49 anos):</strong> ${funcionariosMeiaIdade.length}</p>
        <p><strong>Experientes (≥ 50 anos):</strong> ${funcionariosExperientes.length}</p>
    `;
    relatoriosContainer.appendChild(relatorio5);

    mostrarMensagem('Relatórios gerados com sucesso!', 'success');
}

// Função para mostrar mensagens
function mostrarMensagem(mensagem, tipo) {
    // Remove mensagens anteriores
    const mensagensExistentes = document.querySelectorAll('.mensagem');
    mensagensExistentes.forEach(msg => msg.remove());

    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = `mensagem ${tipo}`;
    mensagemDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    switch (tipo) {
        case 'success':
            mensagemDiv.style.backgroundColor = '#28a745';
            break;
        case 'error':
            mensagemDiv.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            mensagemDiv.style.backgroundColor = '#ffc107';
            mensagemDiv.style.color = '#212529';
            break;
    }

    mensagemDiv.textContent = mensagem;
    document.body.appendChild(mensagemDiv);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagemDiv.remove();
    }, 3000);
}

// Exercício 3 - Funções anônimas e arrow functions
// Event listeners usando funções anônimas e arrow functions
document.addEventListener('DOMContentLoaded', () => {
    // Formulário de cadastro
    form.addEventListener('submit', (event) => {
        cadastrarFuncionario(event);
    });

    // Botão cancelar
    btnCancelar.addEventListener('click', () => {
        cancelarEdicao();
    });

    // Botão gerar relatórios
    btnGerarRelatorios.addEventListener('click', () => {
        gerarRelatorios();
    });

    // Inicializar tabela
    atualizarTabela();
});

// Funções auxiliares usando arrow functions
const buscarFuncionarioPorId = (id) => funcionarios.find(func => func.id === id);
const buscarFuncionarioPorNome = (nome) => funcionarios.filter(func => 
    func.nome.toLowerCase().includes(nome.toLowerCase())
);
const ordenarFuncionariosPorSalario = () => [...funcionarios].sort((a, b) => b.salario - a.salario);
const calcularTotalSalarios = () => funcionarios.reduce((total, func) => total + func.salario, 0);

// Adicionar alguns funcionários de exemplo para demonstração
function adicionarFuncionariosExemplo() {
    if (funcionarios.length === 0) {
        const exemplos = [
            new Funcionario('João Silva', 28, 'Desenvolvedor Frontend', 6500),
            new Funcionario('Maria Santos', 35, 'Desenvolvedora Backend', 7500),
            new Funcionario('Pedro Costa', 42, 'Gerente de Projetos', 8500),
            new Funcionario('Ana Oliveira', 26, 'Designer UX/UI', 5500),
            new Funcionario('Carlos Lima', 38, 'DevOps Engineer', 7200),
            new Funcionario('Lucia Ferreira', 31, 'Product Manager', 9000)
        ];
        
        funcionarios.push(...exemplos);
        atualizarTabela();
        mostrarMensagem('Funcionários de exemplo adicionados!', 'success');
    }
}

// Adicionar botão para carregar exemplos
document.addEventListener('DOMContentLoaded', () => {
    const btnExemplos = document.createElement('button');
    btnExemplos.textContent = 'Carregar Funcionários de Exemplo';
    btnExemplos.className = 'warning';
    btnExemplos.style.marginTop = '10px';
    btnExemplos.addEventListener('click', adicionarFuncionariosExemplo);
    
    const container = document.querySelector('.container');
    container.appendChild(btnExemplos);
});

