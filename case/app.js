// Dados da aplicação
const dados = {
    produtos: [
        { codigo: 'P003', produto: 'Processador Intel i7', faturamento: 3330000, percentual_acum: 23.58, classe: 'A' },
        { codigo: 'P004', produto: 'Placa de Vídeo RTX 3060', faturamento: 2112000, percentual_acum: 38.53, classe: 'A' },
        { codigo: 'P001', produto: 'SSD 1TB NVMe', faturamento: 1080000, percentual_acum: 46.18, classe: 'A' },
        { codigo: 'P002', produto: 'Memória RAM DDR4 16GB', faturamento: 1008000, percentual_acum: 53.31, classe: 'A' },
        { codigo: 'P006', produto: 'Fonte 600W Modular', faturamento: 924000, percentual_acum: 59.86, classe: 'A' },
        { codigo: 'P007', produto: 'Placa-Mãe ATX', faturamento: 816000, percentual_acum: 65.63, classe: 'A' },
        { codigo: 'P012', produto: 'Monitor LED 24"', faturamento: 675000, percentual_acum: 70.41, classe: 'A' },
        { codigo: 'P010', produto: 'Teclado Mecânico RGB', faturamento: 576000, percentual_acum: 74.49, classe: 'A' },
        { codigo: 'P005', produto: 'HD Externo 2TB', faturamento: 547200, percentual_acum: 78.36, classe: 'A' },
        { codigo: 'P011', produto: 'Mouse Gamer', faturamento: 432000, percentual_acum: 81.42, classe: 'B' },
        { codigo: 'P013', produto: 'Webcam Full HD', faturamento: 420000, percentual_acum: 84.39, classe: 'B' },
        { codigo: 'P008', produto: 'Cooler para CPU', faturamento: 360000, percentual_acum: 86.94, classe: 'B' },
        { codigo: 'P014', produto: 'Headset USB', faturamento: 315000, percentual_acum: 89.17, classe: 'B' },
        { codigo: 'P015', produto: 'Pen Drive 64GB', faturamento: 324000, percentual_acum: 91.47, classe: 'B' },
        { codigo: 'P016', produto: 'Case Mid Tower', faturamento: 280000, percentual_acum: 93.45, classe: 'B' },
        { codigo: 'P018', produto: 'Adaptador USB-C', faturamento: 198000, percentual_acum: 94.85, classe: 'B' },
        { codigo: 'P019', produto: 'Hub USB 4 Portas', faturamento: 175500, percentual_acum: 96.10, classe: 'C' },
        { codigo: 'P017', produto: 'Pasta Térmica Premium', faturamento: 134400, percentual_acum: 97.05, classe: 'C' },
        { codigo: 'P009', produto: 'Cabo HDMI 2m', faturamento: 189000, percentual_acum: 98.39, classe: 'C' },
        { codigo: 'P020', produto: 'Filtro de Linha 8 Tomadas', faturamento: 228000, percentual_acum: 100.00, classe: 'C' }
    ],
    kpis: [
        {
            nome: 'OTIF (On Time In Full)',
            descricao: 'Percentual de pedidos entregues no prazo e completos',
            formula: '(Pedidos no prazo e completos / Total de pedidos) × 100',
            meta: '≥ 95%',
            atual: '92%',
            icone: '🎯'
        },
        {
            nome: 'Lead Time de Entrega',
            descricao: 'Tempo médio entre pedido e entrega final',
            formula: 'Σ(Data Entrega - Data Pedido) / N° Pedidos',
            meta: '≤ 3 dias',
            atual: '3.2 dias',
            icone: '⏱️'
        },
        {
            nome: 'Acuracidade de Estoque',
            descricao: 'Precisão entre estoque físico e sistema',
            formula: '(Itens corretos / Total inventariado) × 100',
            meta: '≥ 98%',
            atual: '96.5%',
            icone: '✅'
        },
        {
            nome: 'Giro de Estoque',
            descricao: 'Renovação do estoque no período',
            formula: 'CMV / Estoque Médio',
            meta: '≥ 8x/ano',
            atual: '7.5x/ano',
            icone: '🔄'
        }
    ],
    processoRecebimento: [
        { num: 1, nome: 'Agendamento de Entrega', desc: 'Fornecedor agenda horário; Sistema gera protocolo', resp: 'Fornecedor/Recebimento', icone: '📅' },
        { num: 2, nome: 'Chegada do Veículo', desc: 'Verificação de documentação do motorista; Check-in', resp: 'Segurança/Portaria', icone: '🚚' },
        { num: 3, nome: 'Conferência Documental', desc: 'Validação de NF, XML, DANFE; Verificação de dados', resp: 'Analista de Recebimento', icone: '📄' },
        { num: 4, nome: 'Descarga de Materiais', desc: 'Posicionamento na doca; Descarga; Separação por lote', resp: 'Operador de Empilhadeira', icone: '⬇️' },
        { num: 5, nome: 'Conferência Física', desc: 'Contagem; Verificação de avarias; Peso/dimensões', resp: 'Conferente', icone: '🔍' },
        { num: 6, nome: 'Conferência Fiscal', desc: 'Comparação NF vs PC; Validação impostos; NCM', resp: 'Analista Fiscal', icone: '💰' },
        { num: 7, nome: 'Entrada no Sistema', desc: 'Lançamento no ERP/WMS; Etiquetas; Atualização estoque', resp: 'Operador de Sistema', icone: '💻' },
        { num: 8, nome: 'Armazenagem', desc: 'Endereçamento ABC; Movimentação; Confirmação WMS', resp: 'Operador de Armazém', icone: '📦' },
        { num: 9, nome: 'Auditoria de Qualidade', desc: 'Inspeção amostral; Registro não-conformidades', resp: 'Controle de Qualidade', icone: '🔬' },
        { num: 10, nome: 'Liberação Financeira', desc: 'Aprovação NF; Envio ao financeiro; Conclusão', resp: 'Comprador/Financeiro', icone: '✔️' }
    ],
    criterios: [
        { criterio: 'Preço', peso: 30, justificativa: 'Impacto direto na margem de contribuição e competitividade' },
        { criterio: 'Qualidade dos Produtos', peso: 25, justificativa: 'Reduz devoluções e custos de garantia; mantém reputação' },
        { criterio: 'Prazo de Entrega', peso: 20, justificativa: 'Afeta lead time e nível de estoque necessário' },
        { criterio: 'Capacidade de Fornecimento', peso: 10, justificativa: 'Garantia de atendimento em picos de demanda' },
        { criterio: 'Condições de Pagamento', peso: 10, justificativa: 'Impacto no fluxo de caixa operacional' },
        { criterio: 'Certificações e Compliance', peso: 5, justificativa: 'Conformidade legal e requisitos de clientes corporativos' }
    ],
    fornecedores: [
        {
            fornecedor: 'Taiwan Electronics',
            notas: { Preço: 8, Qualidade: 9, Prazo: 6, Capacidade: 10, Pagamento: 7, Certificacoes: 9 },
            pontuacao: 8.0
        },
        {
            fornecedor: 'Global Tech Importadora',
            notas: { Preço: 7, Qualidade: 8, Prazo: 8, Capacidade: 8, Pagamento: 8, Certificacoes: 7 },
            pontuacao: 7.65
        },
        {
            fornecedor: 'CompBR Nacional',
            notas: { Preço: 9, Qualidade: 7, Prazo: 9, Capacidade: 6, Pagamento: 9, Certificacoes: 8 },
            pontuacao: 8.15
        }
    ]
};

// Função para formatar moeda
function formatarMoeda(valor) {
    return 'R$ ' + valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Função para obter badge de classe
function getBadgeClasse(classe) {
    const badges = {
        'A': '<span class="badge badge-classe-a">Classe A</span>',
        'B': '<span class="badge badge-classe-b">Classe B</span>',
        'C': '<span class="badge badge-classe-c">Classe C</span>'
    };
    return badges[classe] || '';
}

// Renderizar Curva ABC
function renderizarCurvaABC() {
    const tbody = document.getElementById('curvaABCTableBody');
    if (!tbody) return;

    tbody.innerHTML = dados.produtos.map(p => `
        <tr>
            <td><strong>${p.codigo}</strong></td>
            <td>${p.produto}</td>
            <td class="text-end">${formatarMoeda(p.faturamento)}</td>
            <td class="text-end">${p.percentual_acum.toFixed(2)}%</td>
            <td class="text-center">${getBadgeClasse(p.classe)}</td>
        </tr>
    `).join('');
}

// Renderizar KPIs
function renderizarKPIs() {
    const container = document.getElementById('kpisContainer');
    if (!container) return;

    container.innerHTML = dados.kpis.map(kpi => `
        <div class="col-md-6">
            <div class="card kpi-card">
                <div style="font-size: 2rem;">${kpi.icone}</div>
                <h5 style="color: var(--color-primary); margin-top: 0.5rem;">${kpi.nome}</h5>
                <p class="small text-muted mb-2">${kpi.descricao}</p>
                <div class="formula" style="font-size: 0.85rem; padding: 0.5rem;">${kpi.formula}</div>
                <div class="kpi-value">${kpi.atual}</div>
                <div class="kpi-meta">Meta: ${kpi.meta}</div>
            </div>
        </div>
    `).join('');
}

// Renderizar Processo de Recebimento
function renderizarProcessoRecebimento() {
    const container = document.getElementById('processoRecebimentoContainer');
    if (!container) return;

    container.innerHTML = dados.processoRecebimento.map(etapa => `
        <div class="processo-step">
            <div class="d-flex align-items-start">
                <span class="step-number">${etapa.num}</span>
                <div class="flex-grow-1">
                    <h6 style="color: var(--color-primary); margin-bottom: 0.5rem;">
                        ${etapa.icone} ${etapa.nome}
                    </h6>
                    <p class="mb-2">${etapa.desc}</p>
                    <p class="small text-muted mb-0"><strong>Responsável:</strong> ${etapa.resp}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizar Critérios de Fornecedores
function renderizarCriteriosFornecedores() {
    const tbody = document.getElementById('criteriosTableBody');
    if (!tbody) return;

    tbody.innerHTML = dados.criterios.map(c => `
        <tr>
            <td><strong>${c.criterio}</strong></td>
            <td class="text-center"><span class="badge bg-primary">${c.peso}%</span></td>
            <td>${c.justificativa}</td>
        </tr>
    `).join('');
}

// Renderizar Avaliação de Fornecedores
function renderizarAvaliacaoFornecedores() {
    const tbody = document.getElementById('avaliacaoTableBody');
    if (!tbody) return;

    // Ordenar por pontuação decrescente
    const fornecedoresOrdenados = [...dados.fornecedores].sort((a, b) => b.pontuacao - a.pontuacao);

    tbody.innerHTML = fornecedoresOrdenados.map((f, index) => {
        const rowClass = index === 0 ? 'fornecedor-rank-1' : '';
        const ranking = index === 0 ? '🥇 1º' : index === 1 ? '🥈 2º' : '🥉 3º';
        
        return `
            <tr class="${rowClass}">
                <td><strong>${f.fornecedor}</strong></td>
                <td class="text-center">${f.notas.Preço}</td>
                <td class="text-center">${f.notas.Qualidade}</td>
                <td class="text-center">${f.notas.Prazo}</td>
                <td class="text-center">${f.notas.Capacidade}</td>
                <td class="text-center">${f.notas.Pagamento}</td>
                <td class="text-center">${f.notas.Certificacoes}</td>
                <td class="text-center"><strong style="font-size: 1.2rem; color: var(--color-primary);">${f.pontuacao.toFixed(2)}</strong></td>
                <td class="text-center"><strong>${ranking}</strong></td>
            </tr>
        `;
    }).join('');
}

// Smooth scroll para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Destacar link ativo na navegação
function atualizarNavegacaoAtiva() {
    const sections = ['home', 'secao1', 'secao2', 'secao3', 'secao4', 'secao5', 'secao6', 'secao7'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
                    currentSection = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mostrar/ocultar botão "Voltar ao Topo"
function controlarBotaoTopo() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarCurvaABC();
    renderizarKPIs();
    renderizarProcessoRecebimento();
    renderizarCriteriosFornecedores();
    renderizarAvaliacaoFornecedores();
    atualizarNavegacaoAtiva();
    controlarBotaoTopo();
});

// Expor função scrollToSection globalmente
window.scrollToSection = scrollToSection;