/**
 * TELLES FREIRE — GIT WORKFLOW
 * Interactive Engine: Copy System, Live Search, PR Checklist & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initCopySystem();
  initSearchModal();
  initChecklist();
  initAccordions();
  initCheatSheetFilters();
  initScrollFeatures();
  initMobileDrawer();
});

/* ==========================================================================
   1. COPY TO CLIPBOARD SYSTEM
   ========================================================================== */
function initCopySystem() {
  const toast = document.getElementById('toast-notify');
  const toastText = document.getElementById('toast-text');
  let toastTimeout = null;

  function showToast(message) {
    if (toastText) toastText.textContent = message || 'Comando copiado para a área de transferência!';
    if (toast) {
      toast.classList.add('show');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }
  }

  // Handle all elements with [data-copy]
  document.addEventListener('click', (e) => {
    const copyTarget = e.target.closest('[data-copy]');
    if (!copyTarget) return;

    const textToCopy = copyTarget.getAttribute('data-copy');
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
      // Button visual feedback
      const originalText = copyTarget.querySelector('.copy-text')?.textContent;
      const copyTextEl = copyTarget.querySelector('.copy-text');
      const copyMiniEl = copyTarget.querySelector('.copy-mini');

      copyTarget.classList.add('copied');
      if (copyTextEl) copyTextEl.textContent = 'Copiado!';
      if (copyMiniEl) copyMiniEl.textContent = 'copiado!';

      showToast(`Copiado: ${textToCopy.length > 35 ? textToCopy.slice(0, 35) + '...' : textToCopy}`);

      setTimeout(() => {
        copyTarget.classList.remove('copied');
        if (copyTextEl && originalText) copyTextEl.textContent = originalText;
        if (copyMiniEl) copyMiniEl.textContent = 'copiar';
      }, 2000);
    }).catch(err => {
      console.error('Falha ao copiar:', err);
    });
  });

  // Handle "Copy full flow" special button
  const copyFullFlowBtn = document.getElementById('copy-full-flow-btn');
  const fullFlowCode = document.getElementById('full-flow-code');
  if (copyFullFlowBtn && fullFlowCode) {
    copyFullFlowBtn.addEventListener('click', () => {
      const fullCode = fullFlowCode.innerText || fullFlowCode.textContent;
      navigator.clipboard.writeText(fullCode).then(() => {
        copyFullFlowBtn.classList.add('copied');
        const textSpan = copyFullFlowBtn.querySelector('.copy-text');
        if (textSpan) textSpan.textContent = 'Fluxo copiado!';
        showToast('Fluxo completo copiado com sucesso!');
        setTimeout(() => {
          copyFullFlowBtn.classList.remove('copied');
          if (textSpan) textSpan.textContent = 'Copiar fluxo completo';
        }, 2200);
      });
    });
  }
}

/* ==========================================================================
   2. GLOBAL SEARCH MODAL (Ctrl + K / '/')
   ========================================================================== */
function initSearchModal() {
  const triggerBtn = document.getElementById('search-trigger-btn');
  const modal = document.getElementById('search-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const searchInput = document.getElementById('modal-search-input');
  const resultsContainer = document.getElementById('search-results-list');

  if (!modal || !searchInput || !resultsContainer) return;

  // Search items database
  const searchDatabase = [
    { title: 'Sincronizar a main', cmd: 'git switch main && git pull', target: '#antes-de-comecar', cat: 'Início' },
    { title: 'Criar nova branch de feature', cmd: 'git switch -c feat/nome', target: '#antes-de-comecar', cat: 'Branches' },
    { title: 'Convenção de nomes de branch', cmd: 'feat/, fix/, refactor/, chore/', target: '#nomear-branches', cat: 'Convenções' },
    { title: 'Status do repositório', cmd: 'git status', target: '#durante-desenvolvimento', cat: 'Desenvolvimento' },
    { title: 'Adicionar arquivos para commit', cmd: 'git add .', target: '#durante-desenvolvimento', cat: 'Desenvolvimento' },
    { title: 'Criar commit padronizado', cmd: 'git commit -m "feat: description"', target: '#durante-desenvolvimento', cat: 'Commits' },
    { title: 'Conventional Commits guia', cmd: 'feat:, fix:, refactor:, chore:, docs:', target: '#padrao-commits', cat: 'Commits' },
    { title: 'Primeiro push com upstream', cmd: 'git push -u origin feat/nome', target: '#enviar-branch', cat: 'Git Push' },
    { title: 'Pushes subsequentes', cmd: 'git push', target: '#enviar-branch', cat: 'Git Push' },
    { title: 'Criar Pull Request via CLI', cmd: 'gh pr create --web', target: '#pull-requests', cat: 'Pull Request' },
    { title: 'Checklist de Pull Request', cmd: '9 itens de validação', target: '#pr-checklist', cat: 'Qualidade' },
    { title: 'Boas práticas de Code Review', cmd: 'Cultura e revisão por pares', target: '#code-review', cat: 'Review' },
    { title: 'Limpeza depois do merge', cmd: 'git branch -d feat/nome', target: '#depois-do-merge', cat: 'Pós-Merge' },
    { title: 'Fluxo completo passo a passo', cmd: 'Script mestre de ponta a ponta', target: '#fluxo-completo', cat: 'Fluxo Geral' },
    { title: 'Estou na branch errada', cmd: 'git switch nome-da-branch', target: '#situacoes-comuns', cat: 'Situações Comuns' },
    { title: 'Criei mudanças na main sem querer', cmd: 'git switch -c feat/nome-da-feature', target: '#situacoes-comuns', cat: 'Situações Comuns' },
    { title: 'Minha branch está desatualizada', cmd: 'git switch main && git pull && git merge main', target: '#situacoes-comuns', cat: 'Situações Comuns' },
    { title: 'Listar todas as branches locais e remotas', cmd: 'git branch -a', target: '#situacoes-comuns', cat: 'Situações Comuns' },
    { title: 'Desfazer alterações não commitadas', cmd: 'git restore nome-do-arquivo', target: '#situacoes-comuns', cat: 'Situações Comuns' },
    { title: '10 Regras da Telles Freire', cmd: 'Mandamentos inegociáveis de engenharia', target: '#regras-telles-freire', cat: 'Regras' },
    { title: 'IA e Vibe Coding', cmd: 'Validação humana e boas práticas', target: '#ia-vibe-coding', cat: 'IA' },
    { title: 'Cheat Sheet rápido', cmd: 'Tabela de comandos frequentes', target: '#cheat-sheet', cat: 'Cheat Sheet' },
  ];

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Global Keyboard Shortcuts (Ctrl+K or Command+K or /)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal.classList.contains('open') ? closeModal() : openModal();
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    } else if (e.key === '/' && !modal.classList.contains('open') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openModal();
    }
  });

  // Live filter
  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    resultsContainer.innerHTML = '';

    const filtered = query.length === 0
      ? searchDatabase.slice(0, 7)
      : searchDatabase.filter(item => {
          return item.title.toLowerCase().includes(query) ||
                 item.cmd.toLowerCase().includes(query) ||
                 item.cat.toLowerCase().includes(query);
        });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<div class="search-empty-state">Nenhum resultado encontrado para "<strong>${escapeHtml(query)}</strong>"</div>`;
      return;
    }

    filtered.forEach((item, index) => {
      const resultEl = document.createElement('a');
      resultEl.href = item.target;
      resultEl.className = `search-result-item ${index === 0 ? 'selected' : ''}`;
      resultEl.innerHTML = `
        <div class="result-info">
          <span class="result-title">${highlightMatch(item.title, query)}</span>
          <span class="result-category">${item.cat}</span>
        </div>
        <span class="result-cmd">${escapeHtml(item.cmd)}</span>
      `;

      resultEl.addEventListener('click', (ev) => {
        closeModal();
      });

      resultsContainer.appendChild(resultEl);
    });
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark style="background: rgba(176,25,32,0.3); color:#fff; border-radius:2px; padding:0 2px;">$1</mark>');
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
}

/* ==========================================================================
   3. INTERACTIVE PULL REQUEST CHECKLIST
   ========================================================================== */
function initChecklist() {
  const checkboxes = document.querySelectorAll('.interactive-check');
  const countEl = document.getElementById('checked-count');
  const progressBar = document.getElementById('checklist-progress-bar');
  const feedbackEl = document.getElementById('checklist-feedback');
  const resetBtn = document.getElementById('reset-checklist-btn');

  const STORAGE_KEY = 'tf_git_pr_checklist_state';

  // Load state from localStorage
  const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  checkboxes.forEach(cb => {
    if (savedState[cb.id]) {
      cb.checked = true;
    }
  });

  function updateChecklist() {
    let checkedCount = 0;
    const currentState = {};

    checkboxes.forEach(cb => {
      if (cb.checked) {
        checkedCount++;
        currentState[cb.id] = true;
      }
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));

    const total = checkboxes.length;
    if (countEl) countEl.textContent = checkedCount;

    const percentage = Math.round((checkedCount / total) * 100);
    if (progressBar) progressBar.style.width = `${percentage}%`;

    if (feedbackEl) {
      if (checkedCount === 0) {
        feedbackEl.textContent = 'Marque os itens ao inspecionar seu código';
        feedbackEl.style.color = 'var(--color-text-muted)';
      } else if (checkedCount < total) {
        feedbackEl.textContent = `Em andamento (${percentage}% validado). Conclua todas as verificações.`;
        feedbackEl.style.color = 'var(--primitive-yellow-400)';
      } else {
        feedbackEl.textContent = '🎉 Tudo pronto! Seu Pull Request está excelente para review.';
        feedbackEl.style.color = 'var(--primitive-green-400)';
      }
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateChecklist);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      checkboxes.forEach(cb => cb.checked = false);
      localStorage.removeItem(STORAGE_KEY);
      updateChecklist();
    });
  }

  updateChecklist();
}

/* ==========================================================================
   4. ACCORDIONS (Situações Comuns)
   ========================================================================== */
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const headerBtn = item.querySelector('.accordion-header');
    if (!headerBtn) return;

    headerBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordions for cleaner experience
      accordionItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        headerBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        headerBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   5. CHEAT SHEET CATEGORY FILTERS
   ========================================================================== */
function initCheatSheetFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const cheatItems = document.querySelectorAll('.cheat-item-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      cheatItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCat === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. SCROLL FEATURES (Header, Progress Bar, Back-to-Top, Spy)
   ========================================================================== */
function initScrollFeatures() {
  const header = document.getElementById('header');
  const progressBar = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top-btn');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Top progress bar
    if (progressBar) progressBar.style.width = `${scrollPercent}%`;

    // Sticky header shadow
    if (header) {
      if (scrollTop > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTop) {
      if (scrollTop > 450) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Scroll spy for active navbar item
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
