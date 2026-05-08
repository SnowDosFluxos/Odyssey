// Função para simular download
function baixar(nomeArquivo) {
    alert('🚀 Iniciando download de: ' + nomeArquivo + '\n\n⏳ Aguarde...');
    console.log('Download iniciado: ' + nomeArquivo);
    
    // Simular incremento de visitantes
    let contador = document.querySelector('.counter');
    if(contador) {
        let numeroAtual = parseInt(contador.textContent.replace('.', ''));
        numeroAtual += Math.floor(Math.random() * 100) + 1;
        contador.textContent = numeroAtual.toLocaleString('pt-BR');
    }
}

// Função para enviar contato
function enviarContato(event) {
    event.preventDefault();
    alert('✉️ Mensagem enviada com sucesso!\n\nObrigado por entrar em contato. Responderemos em breve!');
    event.target.reset();
}

// Incrementar visitantes ao carregar
window.addEventListener('load', function() {
    let contador = document.querySelector('.counter');
    if(contador) {
        let numeroAtual = parseInt(contador.textContent.replace('.', ''));
        numeroAtual += Math.floor(Math.random() * 50) + 1;
        contador.textContent = numeroAtual.toLocaleString('pt-BR');
    }
    
    // Log retro
    console.log('%c🎮 RETRO DOWNLOADS 2010 🎮', 'font-size: 20px; color: #0066cc; font-weight: bold;');
    console.log('%cBem-vindo ao melhor portal de downloads da web!', 'font-size: 14px; color: #ffcc00;');
});

// Busca ao pressionar enter
document.addEventListener('DOMContentLoaded', function() {
    let searchBar = document.querySelector('.search-bar');
    if(searchBar) {
        searchBar.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                alert('🔍 Buscando: ' + this.value + '\n\nEm breve adicionaremos resultados completos!');
                this.value = '';
            }
        });
    }
});
