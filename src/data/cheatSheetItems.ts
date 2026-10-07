export interface CheatSheetItem {
  id: string;
  category: 'branch' | 'sync' | 'commit' | 'pr';
  categoryLabel: string;
  action: string;
  command: string;
}

export const cheatSheetItems: CheatSheetItem[] = [
  { id: '1', category: 'sync', categoryLabel: 'Sincronização', action: 'Atualizar main', command: 'git switch main && git pull' },
  { id: '2', category: 'branch', categoryLabel: 'Branches', action: 'Criar branch', command: 'git switch -c feat/nome' },
  { id: '3', category: 'commit', categoryLabel: 'Trabalho', action: 'Ver status', command: 'git status' },
  { id: '4', category: 'commit', categoryLabel: 'Trabalho', action: 'Adicionar arquivos', command: 'git add .' },
  { id: '5', category: 'commit', categoryLabel: 'Commits', action: 'Criar commit', command: 'git commit -m "feat: description"' },
  { id: '6', category: 'sync', categoryLabel: 'Envio', action: 'Push inicial (com -u)', command: 'git push -u origin nome-da-branch' },
  { id: '7', category: 'sync', categoryLabel: 'Envio', action: 'Push subsequente', command: 'git push' },
  { id: '8', category: 'pr', categoryLabel: 'Pull Request', action: 'Abrir PR no navegador', command: 'gh pr create --web' },
  { id: '9', category: 'branch', categoryLabel: 'Branches', action: 'Ver branches locais', command: 'git branch' },
  { id: '10', category: 'branch', categoryLabel: 'Branches', action: 'Trocar de branch', command: 'git switch nome' },
  { id: '11', category: 'sync', categoryLabel: 'Sincronização', action: 'Atualizar branch atual', command: 'git pull' }
];

export interface SituationItem {
  id: string;
  title: string;
  description: string;
  commands: string[];
  tip?: string;
  warning?: string;
  searchable: string;
}

export const commonSituations: SituationItem[] = [
  {
    id: 'wrong-branch',
    title: 'Estou na branch errada',
    description: 'Liste suas branches para identificar o nome correto e alterne com segurança:',
    commands: ['git branch', 'git switch nome-da-branch'],
    searchable: 'estou na branch errada trocar switch alternar'
  },
  {
    id: 'changes-on-main',
    title: 'Criei mudanças na main sem querer',
    description: 'Não faça commit na main! Crie imediatamente uma nova branch mantendo suas alterações ativas:',
    commands: ['git switch -c feat/nome-da-feature'],
    tip: 'O Git transferirá seus arquivos modificados diretamente para a nova branch sem perder nada.',
    searchable: 'criei mudancas na main sem querer modificacoes salvar'
  },
  {
    id: 'outdated-branch',
    title: 'Minha branch está desatualizada',
    description: 'Atualize a branch main localmente e incorpore as novidades da equipe na sua feature:',
    commands: ['git switch main && git pull', 'git switch feat/minha-feature', 'git merge main'],
    tip: 'OU utilize "git rebase main" caso seja o padrão adotado pelo seu time.',
    searchable: 'minha branch esta desatualizada merge sincronizar rebase'
  },
  {
    id: 'list-local',
    title: 'Quero ver minhas branches locais',
    description: 'Veja todas as branches existentes na sua máquina (a atual fica com * verde):',
    commands: ['git branch'],
    searchable: 'ver minhas branches listar locais'
  },
  {
    id: 'list-remote',
    title: 'Quero ver branches remotas',
    description: 'Exibe as branches que estão publicadas no repositório GitHub da Freire&CO Tech Solutions:',
    commands: ['git branch -r'],
    searchable: 'ver branches remotas listar origin github'
  },
  {
    id: 'list-all',
    title: 'Quero ver todas as branches (locais e remotas)',
    description: 'Visão completa de todo o repositório:',
    commands: ['git branch -a'],
    searchable: 'ver tudo listar todas as branches locais remotas'
  },
  {
    id: 'discard-changes',
    title: 'Quero desfazer alterações não commitadas',
    description: 'Descarta modificações feitas em um arquivo específico que ainda não foi comitado:',
    commands: ['git restore nome-do-arquivo'],
    warning: 'ATENÇÃO (Comando destrutivo): As alterações não salvas serão perdidas permanentemente.',
    tip: 'Para descartar todas as alterações não adicionadas do repositório todo: git restore .',
    searchable: 'desfazer alteracoes nao commitadas restore descartar perigo'
  }
];

export const checklistItemsData = [
  { id: 'check-1', text: 'O que foi alterado está descrito claramente' },
  { id: 'check-2', text: 'Expliquei por que a mudança foi necessária' },
  { id: 'check-3', text: 'Expliquei detalhadamente como validar e testar' },
  { id: 'check-4', text: 'Testei localmente em cenários reais' },
  { id: 'check-5', text: 'Build executa sem erros ou warnings bloqueantes' },
  { id: 'check-6', text: 'Não existem secrets, chaves ou tokens no código' },
  { id: 'check-7', text: 'Não deixei logs temporários (ex: console.log)' },
  { id: 'check-8', text: 'Revisei meu próprio diff completo no GitHub antes de pedir review' },
  { id: 'check-9', text: 'PR está pronto para review da equipe' }
];
