export interface SearchItem {
  title: string;
  cmd: string;
  target: string;
  cat: string;
  keywords?: string[];
}

export const searchDatabase: SearchItem[] = [
  { title: 'Sincronizar a main', cmd: 'git switch main && git pull', target: '#antes-de-comecar', cat: 'Início', keywords: ['atualizar', 'pull', 'main'] },
  { title: 'Criar nova branch de feature', cmd: 'git switch -c feat/nome', target: '#antes-de-comecar', cat: 'Branches', keywords: ['branch', 'nova', 'switch'] },
  { title: 'Convenção de nomes de branch', cmd: 'feat/, fix/, refactor/, chore/', target: '#nomear-branches', cat: 'Convenções', keywords: ['nomes', 'prefixos', 'padrao'] },
  { title: 'Status do repositório', cmd: 'git status', target: '#durante-desenvolvimento', cat: 'Desenvolvimento', keywords: ['arquivos', 'modificados', 'stage'] },
  { title: 'Adicionar arquivos para commit', cmd: 'git add .', target: '#durante-desenvolvimento', cat: 'Desenvolvimento', keywords: ['stage', 'adicionar'] },
  { title: 'Criar commit padronizado', cmd: 'git commit -m "feat: description"', target: '#durante-desenvolvimento', cat: 'Commits', keywords: ['mensagem', 'conventional'] },
  { title: 'Conventional Commits guia', cmd: 'feat:, fix:, refactor:, chore:, docs:', target: '#padrao-commits', cat: 'Commits', keywords: ['tipos', 'padrao', 'ingles'] },
  { title: 'Primeiro push com upstream', cmd: 'git push -u origin feat/nome', target: '#enviar-branch', cat: 'Git Push', keywords: ['remoto', 'upstream', '-u'] },
  { title: 'Pushes subsequentes', cmd: 'git push', target: '#enviar-branch', cat: 'Git Push', keywords: ['push', 'enviar'] },
  { title: 'Criar Pull Request via CLI', cmd: 'gh pr create --web', target: '#pull-requests', cat: 'Pull Request', keywords: ['pr', 'github', 'cli'] },
  { title: 'Checklist de Pull Request', cmd: '9 itens de validação técnica', target: '#pr-checklist', cat: 'Qualidade', keywords: ['checklist', 'revisao', 'seguranca'] },
  { title: 'Boas práticas de Code Review', cmd: 'Cultura blameless e revisão por pares', target: '#code-review', cat: 'Review', keywords: ['review', 'aprovacao', 'pares'] },
  { title: 'Limpeza depois do merge', cmd: 'git branch -d feat/nome', target: '#depois-do-merge', cat: 'Pós-Merge', keywords: ['deletar', 'limpar', 'merge'] },
  { title: 'Fluxo completo passo a passo', cmd: 'Script mestre de ponta a ponta', target: '#fluxo-completo', cat: 'Fluxo Geral', keywords: ['tudo', 'script', 'completo'] },
  { title: 'Estou na branch errada', cmd: 'git switch nome-da-branch', target: '#situacoes-comuns', cat: 'Situações Comuns', keywords: ['errada', 'trocar', 'switch'] },
  { title: 'Criei mudanças na main sem querer', cmd: 'git switch -c feat/nome-da-feature', target: '#situacoes-comuns', cat: 'Situações Comuns', keywords: ['main', 'salvar', 'mudancas'] },
  { title: 'Minha branch está desatualizada', cmd: 'git switch main && git pull && git merge main', target: '#situacoes-comuns', cat: 'Situações Comuns', keywords: ['conflito', 'desatualizada', 'merge'] },
  { title: 'Listar todas as branches locais e remotas', cmd: 'git branch -a', target: '#situacoes-comuns', cat: 'Situações Comuns', keywords: ['listar', 'ver', 'todas'] },
  { title: 'Desfazer alterações não commitadas', cmd: 'git restore nome-do-arquivo', target: '#situacoes-comuns', cat: 'Situações Comuns', keywords: ['perigo', 'desfazer', 'restore'] },
  { title: '10 Regras da Freire&CO Tech Solutions', cmd: 'Mandamentos inegociáveis de engenharia', target: '#regras-telles-freire', cat: 'Regras Freire&CO', keywords: ['regras', 'mandamentos', 'padrao'] },
  { title: 'IA e Vibe Coding', cmd: 'Validação humana e responsabilidade', target: '#ia-vibe-coding', cat: 'IA', keywords: ['ia', 'chatgpt', 'copilot', 'vibe'] },
  { title: 'Cheat Sheet rápido', cmd: 'Tabela de comandos mais frequentes', target: '#cheat-sheet', cat: 'Cheat Sheet', keywords: ['comandos', 'atalhos', 'resumo'] }
];
