import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Rules: React.FC = () => {
  const rules = [
    { num: '01', title: 'Nunca desenvolver diretamente na main.', desc: 'A branch main é sagrada e representa o código estável que pode ir para produção a qualquer momento.' },
    { num: '02', title: 'Toda tarefa começa em uma branch.', desc: 'Crie uma branch específica antes de escrever ou alterar qualquer linha de código.' },
    { num: '03', title: 'Branches devem ter nomes em inglês.', desc: 'Siga sempre a estrutura <type>/<short-description> em minúsculas com hífen entre as palavras.' },
    { num: '04', title: 'Commits devem estar em inglês.', desc: 'Utilize Conventional Commits (ex: feat:, fix:, refactor:) de forma clara e descritiva.' },
    { num: '05', title: 'Toda mudança relevante passa por PR.', desc: 'Nenhum código entra na main sem passar por Pull Request aprovado por ao menos um par.' },
    { num: '06', title: 'Revise seu próprio código antes do PR.', desc: 'Inspecione seu próprio diff no GitHub com atenção antes de solicitar a atenção dos colegas.' },
    { num: '07', title: 'Não versionar .env, tokens ou secrets.', desc: 'Senhas, credenciais, chaves de API e arquivos de ambiente nunca devem entrar no repositório.' },
    { num: '08', title: 'Prefira PRs pequenos.', desc: 'PRs menores são revisados mais rapidamente, com mais profundidade e reduzem drasticamente riscos de bugs.' },
    { num: '09', title: 'IA gera código, você é o responsável.', desc: 'Tudo o que a IA produzir e você comitar no repositório é de sua total responsabilidade de engenharia.', highlight: true },
    { num: '10', title: 'Main deve sempre representar código estável.', desc: 'Qualquer commit na branch main deve ser funcional, testado, validado e pronto para deploy.' },
  ];

  return (
    <section id="regras-telles-freire" className="py-16 md:py-20 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF4754]">Diretrizes da Equipe</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1 mb-2">
            Regras da Freire&CO Tech Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Os 10 mandamentos fundamentais de engenharia para nosso repositório.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((rule) => (
            <div
              key={rule.num}
              className={`p-5 rounded-xl border transition-all ${
                rule.highlight
                  ? 'bg-[#B01920]/10 border-[#B01920]/40 shadow-[0_0_20px_rgba(176,25,32,0.15)]'
                  : 'bg-[#0C0E14] border-white/10 hover:border-white/20 hover:bg-[#11141C]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#FF4754] bg-[#B01920]/15 px-2 py-0.5 rounded">
                  {rule.num}
                </span>
                {rule.highlight && <ShieldAlert className="w-4 h-4 text-[#FF4754]" />}
                <h4 className="text-sm sm:text-base font-bold text-white">{rule.title}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-8">{rule.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
