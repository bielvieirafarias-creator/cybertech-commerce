// Base de dados mockada corporativa com IMAGENS REAIS (Expandida: 6 itens por categoria)
const dbProdutos = [
    { id: 1, type: 'prod', name: "Placa de Vídeo RTX 4070", desc: "Hardware - Alta performance para computação gráfica e IA.", price: 4299.00, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80" },
    { id: 2, type: 'prod', name: "SSD NVMe 2TB Kingston", desc: "Hardware - Armazenamento de velocidade extrema de leitura.", price: 789.00, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 3, type: 'prod', name: "Licença Windows 11 Pro", desc: "Software - Código digital de ativação com suporte empresarial.", price: 349.00, image: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?auto=format&fit=crop&w=400&q=80" },
    { id: 10, type: 'prod', name: "Processador Intel Core i9", desc: "Hardware - Arquitetura híbrida de última geração para tarefas pesadas.", price: 2899.00, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 11, type: 'prod', name: "Memória RAM DDR5 32GB Corsair", desc: "Hardware - Kit dual-channel otimizado para máxima estabilidade.", price: 950.00, image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&w=400&q=80" },
    { id: 12, type: 'prod', name: "Monitor Gamer UltraWide 34\"", desc: "Hardware - Painel IPS com taxa de atualização de 144Hz para produtividade.", price: 2199.00, image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=400&q=80" }
];

const dbServicos = [
    { id: 4, type: 'serv', name: "Formatação & Backup", desc: "Assistência - Restauração completa de SO com cópia de segurança.", price: 150.00, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=400&q=80" },
    { id: 5, type: 'serv', name: "Infraestrutura de Redes", desc: "Suporte - Cabeamento estruturado e roteamento avançado.", price: 850.00, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80" },
    { id: 6, type: 'serv', name: "Hospedagem Cloud Dedicada", desc: "Hosting - Solução escalável com SLA estável de 99.9%.", price: 450.00, image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80" },
    { id: 13, type: 'serv', name: "Remoção de Malware & Auditoria", desc: "Segurança - Análise profunda e blindagem digital de endpoints.", price: 320.00, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80" },
    { id: 14, type: 'serv', name: "Consultoria DevOps & CI/CD", desc: "Projetos - Automatização de deploys e arquitetura de microsserviços.", price: 1500.00, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" },
    { id: 15, type: 'serv', name: "Limpeza Física & Troca de Pasta", desc: "Manutenção - Higienização interna completa de desktops ou notebooks.", price: 120.00, image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=400&q=80" } // Foto de hardware de PC corrigida aqui
];

const dbLocacao = [
    { id: 7, type: 'loc', name: "Locação Notebook Core i7", desc: "Outsourcing - Equipamento otimizado para operações ágeis.", price: 290.00, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80" },
    { id: 8, type: 'loc', name: "Locação Servidor Dell", desc: "Outsourcing - Unidade física local para banco de dados interno.", price: 1200.00, image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=400&q=80" },
    { id: 9, type: 'loc', name: "Kit Home Office Completo", desc: "Outsourcing - Inclui 1 notebook corporativo, monitor 24\" e periféricos.", price: 450.00, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80" },
    { id: 16, type: 'loc', name: "Locação de Switch Gerenciável", desc: "Networking - Switch PoE Cisco de 24 portas para alta demanda de rede.", price: 180.00, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80" },
    { id: 17, type: 'loc', name: "Locação Workstation Xeon", desc: "Outsourcing - Estação de trabalho pesada para engenharia, CAD e render 3D.", price: 890.00, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80" },
    { id: 18, type: 'loc', name: "Locação de Impressora Térmica", desc: "Outsourcing - Ideal para faturamento de notas e logística rápida.", price: 95.00, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80" }
];

let carrinho = [];
let usuarioLogadoEmail = "";

// ESCUTADORES DE EVENTOS GLOBAIS
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('form-login').addEventListener('submit', handleLogin);
    document.getElementById('form-register').addEventListener('submit', handleRegister);
    document.getElementById('form-profile').addEventListener('submit', handleUpdateProfile);
    document.getElementById('form-forgot').addEventListener('submit', handleForgotPasswordSubmit);
    
    document.getElementById('tab-login').addEventListener('click', (e) => { e.preventDefault(); switchAuthTab('login'); });
    document.getElementById('tab-register').addEventListener('click', (e) => { e.preventDefault(); switchAuthTab('register'); });
    document.getElementById('btn-forgot-back').addEventListener('click', () => switchAuthTab('login'));
    
    document.getElementById('link-forgot').addEventListener('click', (e) => { e.preventDefault(); handleForgotPassword(); });
});

// ENGINE DE ALERTA TOAST CUSTOMIZADO
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-xmark';

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('form-login');
    const registerForm = document.getElementById('form-register');
    const forgotForm = document.getElementById('form-forgot');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    forgotForm.classList.add('hidden');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
    } else if (tab === 'register') {
        registerForm.classList.remove('hidden');
        tabLogin.classList.remove('active');
        tabRegister.classList.add('active');
    } else if (tab === 'forgot') {
        forgotForm.classList.remove('hidden');
        tabLogin.classList.remove('active');
        tabRegister.classList.remove('active');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;

    const user = { name, email, pass, orders: [] };
    localStorage.setItem(email, JSON.stringify(user));
    
    showToast('Conta criada com sucesso! Faça seu Login.', 'success');
    
    document.getElementById('form-register').reset();
    switchAuthTab('login');
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    const storedUser = localStorage.getItem(email);
    
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.pass === pass) {
            usuarioLogadoEmail = email;
            liberarSistema(user.name);
            showToast(`Acesso concedido. Bem-vindo, ${user.name}!`, 'success');
            document.getElementById('form-login').reset();
            return;
        }
    }
    showToast('Credenciais inválidas! Tente novamente.', 'error');
}

function liberarSistema(nome) {
    document.getElementById('auth-screen').classList.add('hidden');
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('blur-content');
    mainContent.style.pointerEvents = "auto";
    document.getElementById('user-display').innerHTML = `<i class="fa-solid fa-user-gear"></i> Olá, ${nome.split(' ')[0]}`;
    
    renderCards();
}

function handleLogout() {
    document.getElementById('auth-screen').classList.remove('hidden');
    const mainContent = document.getElementById('main-content');
    mainContent.classList.add('blur-content');
    mainContent.style.pointerEvents = "none";
    carrinho = [];
    usuarioLogadoEmail = "";
    updateCartUI();
    closeProfileModal();
    showToast('Sessão encerrada.', 'info');
}

function handleForgotPassword() {
    switchAuthTab('forgot');
}

function handleForgotPasswordSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('forgot-email').value;

    if (email && email.includes('@')) {
        const storedUser = localStorage.getItem(email);
        
        if (storedUser) {
            showToast(`Redefinição enviada para: ${email}`, 'success');
        } else {
            showToast(`Se o e-mail existir no sistema, as instruções foram enviadas.`, 'info');
        }
        
        document.getElementById('form-forgot').reset();
        switchAuthTab('login');
    } else {
        showToast('Por favor, digite um e-mail válido.', 'error');
    }
}

function toggleProfileModal() {
    const modal = document.getElementById('profile-modal');
    modal.classList.toggle('hidden');
    
    if (!modal.classList.contains('hidden') && usuarioLogadoEmail) {
        const userData = JSON.parse(localStorage.getItem(usuarioLogadoEmail));
        if (userData) {
            document.getElementById('profile-name').value = userData.name;
            document.getElementById('profile-email').value = userData.email;
            document.getElementById('profile-pass').value = userData.pass;
            
            renderOrderHistory(userData.orders || []);
        }
    }
}

function closeProfileModal(event) {
    document.getElementById('profile-modal').classList.add('hidden');
}

function renderOrderHistory(orders) {
    const container = document.getElementById('order-history-container');
    if (!container) return;
    
    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-history">
                <i class="fa-solid fa-basket-shopping"></i>
                Nenhum pedido realizado ainda.
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    [...orders].reverse().forEach(order => {
        container.innerHTML += `
            <div class="order-card">
                <div class="order-card-header">
                    <span class="order-id">Pedido #${order.id}</span>
                    <span class="order-date">${order.date}</span>
                </div>
                <div class="order-items-list">
                    ${order.items.join('<br>')}
                </div>
                <div class="order-card-footer">
                    <span class="order-payment-method">${order.payment}</span>
                    <span class="order-total-price">R$ ${order.total.toFixed(2)}</span>
                </div>
            </div>
        `;
    });
}

function handleUpdateProfile(event) {
    event.preventDefault();
    const updatedName = document.getElementById('profile-name').value;
    const updatedPass = document.getElementById('profile-pass').value;

    if (usuarioLogadoEmail) {
        const userData = JSON.parse(localStorage.getItem(usuarioLogadoEmail));
        if (userData) {
            userData.name = updatedName;
            userData.pass = updatedPass;
            
            localStorage.setItem(usuarioLogadoEmail, JSON.stringify(userData));
            
            document.getElementById('user-display').innerHTML = `<i class="fa-solid fa-user-gear"></i> Olá, ${updatedName.split(' ')[0]}`;
            showToast('Perfil atualizado com sucesso!', 'success');
            toggleProfileModal();
        }
    }
}

function renderCards() {
    renderGrid(dbProdutos, 'products-grid');
    renderGrid(dbServicos, 'services-grid');
    renderGrid(dbLocacao, 'rent-grid');
}

function renderGrid(items, targetId) {
    const grid = document.getElementById(targetId);
    grid.innerHTML = '';
    items.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <div class="card-img" style="background: none; padding: 0; overflow:hidden;">
                    <img src="${item.image}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> (5.0)
                    </div>
                    <p class="card-desc">${item.desc}</p>
                    <div class="card-price">R$ ${item.price.toFixed(2)}</div>
                    <button class="btn-primary" onclick="addToCart(${item.id})">Adicionar</button>
                </div>
            </div>
        `;
    });
}

function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('open'); }

function addToCart(id) {
    const todosItens = [...dbProdutos, ...dbServicos, ...dbLocacao];
    const item = todosItens.find(p => p.id === id);
    carrinho.push(item);
    updateCartUI();
    showToast(`${item.name} no carrinho!`, 'success');
}

function removeFromCart(index) {
    const itemRemovido = carrinho[index];
    carrinho.splice(index, 1);
    updateCartUI();
    showToast(`${itemRemovido.name} removido.`, 'info');
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = carrinho.length;
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    let total = 0;
    carrinho.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <div class="cart-item">
                <div><h4>${item.name}</h4><small style="color: var(--accent)">R$ ${item.price.toFixed(2)}</small></div>
                <button class="btn-remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });
    document.getElementById('cart-total').innerText = `R$ ${total.toFixed(2)}`;
}

function checkout() {
    if (carrinho.length === 0) {
        return showToast("Adicione itens antes de finalizar!", "error");
    }
    
    const paymentMethod = document.getElementById('cart-payment').value;
    
    if (!paymentMethod) {
        return showToast("Por favor, selecione uma forma de pagamento!", "error");
    }
    
    if (usuarioLogadoEmail) {
        const userData = JSON.parse(localStorage.getItem(usuarioLogadoEmail));
        if (userData) {
            if (!userData.orders) userData.orders = [];
            
            const totalPedido = carrinho.reduce((acc, item) => acc + item.price, 0);
            const itensNomes = carrinho.map(item => `• ${item.name}`);
            
            const dataAtual = new Date();
            const dataFormatada = dataAtual.toLocaleDateString('pt-BR') + ' às ' + dataAtual.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});

            const novoPedido = {
                id: Math.floor(1000 + Math.random() * 9000), 
                date: dataFormatada,
                items: itensNomes,
                total: totalPedido,
                payment: paymentMethod
            };
            
            userData.orders.push(novoPedido);
            localStorage.setItem(usuarioLogadoEmail, JSON.stringify(userData));
        }
    }
    
    showToast(`Pedido finalizado com sucesso via ${paymentMethod}!`, "success");
    
    carrinho = [];
    document.getElementById('cart-payment').value = ""; 
    updateCartUI();
    toggleCart();
}