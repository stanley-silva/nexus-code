export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'basico' | 'branches' | 'pr' | 'review_ci';
  categoryLabel: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'git-vs-github',
    question: 'Qual a diferença entre Git e GitHub?',
    answer: 'Git é o sistema de versionamento. GitHub é a plataforma onde o repositório fica hospedado e onde vocês usam PRs, reviews, Actions etc.',
    category: 'basico',
    categoryLabel: 'Conceitos'
  },
  {
    id: 'commit-vs-push',
    question: 'Commit é a mesma coisa que push?',
    answer: 'Não. Commit salva uma versão localmente. Push envia esses commits para o GitHub.',
    category: 'basico',
    categoryLabel: 'Conceitos'
  },
  {
    id: 'pull-vs-pr',
    question: 'Pull e Pull Request são a mesma coisa?',
    answer: 'Não. git pull baixa atualizações. Pull Request é o pedido para incorporar uma branch em outra.',
    category: 'basico',
    categoryLabel: 'Conceitos'
  },
  {
    id: 'origin-meaning',
    question: 'O que é origin?',
    answer: 'É normalmente o apelido do repositório remoto no GitHub.',
    category: 'basico',
    categoryLabel: 'Conceitos'
  },
  {
    id: 'push-u-meaning',
    question: 'O que significa -u no push?',
    answer: 'Liga a branch local à branch remota, então depois basta usar git push.',
    category: 'basico',
    categoryLabel: 'Conceitos'
  },
  {
    id: 'branch-every-time',
    question: 'Eu preciso criar uma branch toda vez?',
    answer: 'Para cada tarefa/mudança independente, sim. A ideia é não trabalhar direto na main.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'multiple-commits-branch',
    question: 'Posso fazer vários commits na mesma branch?',
    answer: 'Sim. Isso é normal e recomendado.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'commit-per-pr',
    question: 'Cada commit vira um PR?',
    answer: 'Não. Vários commits podem fazer parte de um único PR.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'push-every-commit',
    question: 'Preciso fazer push a cada commit?',
    answer: 'Não. Pode fazer vários commits locais e subir depois. Mas push frequente ajuda a não perder trabalho e facilita colaboração.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'why-not-main',
    question: 'Por que não posso trabalhar direto na main?',
    answer: 'Porque a main deve permanecer estável. A branch permite testar, revisar e corrigir antes de integrar.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'break-branch-vs-main',
    question: 'Se eu fizer algo errado na branch, posso quebrar o projeto?',
    answer: 'Você pode quebrar sua branch, mas não necessariamente a main. Esse é um dos principais benefícios.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'forgot-branch-changes',
    question: 'E se eu esquecer de criar a branch e já tiver alterado arquivos?',
    answer: 'Dá para criar uma branch naquele momento e levar as alterações junto, desde que ainda não tenha feito besteira na main.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'branch-name-format',
    question: 'Qual nome eu dou para a branch?',
    answer: 'Algo como feat/customer-dashboard, fix/mobile-menu, refactor/auth-service.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'commit-message-format',
    question: 'Qual mensagem eu uso no commit?',
    answer: 'Algo como feat: add customer dashboard ou fix: resolve login redirect issue.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'why-english',
    question: 'Por que tudo em inglês?',
    answer: 'Para manter consistência, facilitar busca, integração com ferramentas e colaboração futura.',
    category: 'branches',
    categoryLabel: 'Branches & Commits'
  },
  {
    id: 'when-open-pr',
    question: 'Quando eu devo abrir o PR?',
    answer: 'Quando a mudança já estiver pronta para revisão, ou antes como Draft PR se quiser acompanhar o trabalho.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'commit-after-pr-open',
    question: 'Posso continuar commitando depois que o PR foi aberto?',
    answer: 'Sim. Novos pushes na mesma branch atualizam o mesmo PR.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'write-in-pr',
    question: 'O que eu escrevo no Pull Request?',
    answer: 'O que mudou, por que mudou, como testar e qualquer evidência relevante.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'draft-pr-meaning',
    question: 'O que é Draft PR?',
    answer: 'Um PR ainda em andamento, que não está pronto para aprovação final.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'pr-diff-lines',
    question: 'O que significa +100 / -40 num PR?',
    answer: 'Linhas adicionadas e removidas.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'big-pr-bad',
    question: 'PR grande é ruim?',
    answer: 'Geralmente sim, porque fica mais difícil revisar. Melhor quebrar mudanças grandes em partes coerentes.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'conflict-two-people',
    question: 'O que acontece se duas pessoas mexerem no mesmo arquivo?',
    answer: 'Pode ocorrer conflito de merge. O Git pede que vocês decidam qual versão deve prevalecer.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'what-is-merge',
    question: 'O que é merge?',
    answer: 'É incorporar as alterações de uma branch em outra, normalmente da branch da feature para main.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'after-merge-branch-use',
    question: 'Depois do merge eu continuo usando aquela branch?',
    answer: 'Normalmente não. Ela pode ser apagada e uma nova branch é criada para a próxima tarefa.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'commits-after-merge',
    question: 'O que acontece com meus commits depois do merge?',
    answer: 'Continuam registrados no histórico, dependendo da estratégia de merge.',
    category: 'pr',
    categoryLabel: 'Pull Requests'
  },
  {
    id: 'who-approves-pr',
    question: 'Quem aprova meu PR?',
    answer: 'Idealmente outra pessoa do time. O objetivo é ter uma segunda validação antes de entrar na main.',
    category: 'review_ci',
    categoryLabel: 'Review, CI & IA'
  },
  {
    id: 'approve-own-pr',
    question: 'Eu posso aprovar meu próprio PR?',
    answer: 'Tecnicamente depende das regras, mas como processo não deveria contar como review real.',
    category: 'review_ci',
    categoryLabel: 'Review, CI & IA'
  },
  {
    id: 'reviewer-test-everything',
    question: 'O reviewer precisa testar tudo?',
    answer: 'Não necessariamente tudo manualmente, mas deve entender a mudança, ler o diff e validar os pontos críticos.',
    category: 'review_ci',
    categoryLabel: 'Review, CI & IA'
  },
  {
    id: 'what-is-diff',
    question: 'O que é diff?',
    answer: 'É a comparação entre antes e depois do código. É o que o reviewer lê no PR.',
    category: 'review_ci',
    categoryLabel: 'Review, CI & IA'
  },
  {
    id: 'what-is-ci',
    question: 'O que é CI?',
    answer: 'São verificações automáticas que rodam quando o código é enviado, como lint, build e testes.',
    category: 'review_ci',
    categoryLabel: 'Review, CI & IA'
  },
  {
    id: 'ci-fail-merge',
    question: 'Se o CI falhar, posso mergear?',
    answer: 'Idealmente não.',
    category: 'review_ci',
    categoryLabel: 'Review, CI & IA'
  },
  {
    id: 'ai-and-git',
    question: 'Se eu uso Codex/Claude/Antigravity, ainda preciso entender Git?',
    answer: 'Sim. A IA pode escrever código, mas vocês continuam responsáveis por branch, revisão, testes e integração.',
    category: 'review_ci',
    categoryLabel: 'Review, CI & IA'
  }
];
