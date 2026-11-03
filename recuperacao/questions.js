/* Avaliação de recuperação — questões sem gabarito. Gabarito permanece privado no Apps Script. */
window.QUESTIONS = [
  {
    "id": 1,
    "section": "Scratch avançado",
    "skill": "Laços aninhados e coordenadas",
    "prompt": "Um ator começa em (0,0). Depois de executar todo o roteiro, quais serão suas coordenadas finais?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina x para 0; defina y para 0"
      },
      {
        "kind": "control",
        "text": "repita 3 vezes {"
      },
      {
        "kind": "control",
        "text": "  repita 2 vezes {"
      },
      {
        "kind": "motion",
        "text": "    mude x por 4"
      },
      {
        "kind": "control",
        "text": "  } fim do laço interno"
      },
      {
        "kind": "motion",
        "text": "  mude y por 2"
      },
      {
        "kind": "control",
        "text": "} fim do laço externo"
      },
      {
        "kind": "looks",
        "text": "diga (junte x, y)"
      }
    ],
    "options": [
      "x=18; y=6 ao final",
      "x=24; y=3 ao final",
      "x=24; y=6",
      "x=12; y=12 ao final"
    ]
  },
  {
    "id": 2,
    "section": "Scratch avançado",
    "skill": "Condições dentro de laços",
    "prompt": "A variável energia começa com 6. Qual valor será exibido após as quatro repetições?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina energia para 6"
      },
      {
        "kind": "control",
        "text": "repita 4 vezes {"
      },
      {
        "kind": "operators",
        "text": "  se (energia > 3), então {"
      },
      {
        "kind": "variables",
        "text": "    mude energia por -2"
      },
      {
        "kind": "control",
        "text": "  } senão {"
      },
      {
        "kind": "variables",
        "text": "    mude energia por 1"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "diga energia"
      }
    ],
    "options": [
      "4 unidades",
      "3 unidades de energia",
      "2 unidades de energia ao final",
      "5 unidades após as repetições"
    ]
  },
  {
    "id": 3,
    "section": "Scratch avançado",
    "skill": "Mensagens e sincronização",
    "prompt": "Os dois roteiros pertencem ao mesmo projeto. A mensagem é transmitida com a opção 'e espere'. O que o ator dirá?",
    "blocks": [
      {
        "kind": "event",
        "text": "ROTEIRO A — quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina pontos para 1"
      },
      {
        "kind": "event",
        "text": "transmita [bônus] e espere"
      },
      {
        "kind": "variables",
        "text": "mude pontos por 2"
      },
      {
        "kind": "looks",
        "text": "diga pontos"
      },
      {
        "kind": "event",
        "text": "ROTEIRO B — quando receber [bônus]"
      },
      {
        "kind": "control",
        "text": "repita 3 vezes {"
      },
      {
        "kind": "variables",
        "text": "  mude pontos por 2"
      },
      {
        "kind": "control",
        "text": "}"
      }
    ],
    "options": [
      "7 pontos, pois o laço termina depois",
      "8 pontos, somando só o roteiro A",
      "11 pontos, contando quatro bônus",
      "9 pontos"
    ]
  },
  {
    "id": 4,
    "section": "Scratch avançado",
    "skill": "Condição aninhada e repetição",
    "prompt": "Um jogo executa o roteiro até que as vidas acabem. Quantas moedas serão registradas?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina vidas para 3"
      },
      {
        "kind": "variables",
        "text": "defina moedas para 0"
      },
      {
        "kind": "control",
        "text": "repita até (vidas = 0) {"
      },
      {
        "kind": "variables",
        "text": "  mude moedas por 2"
      },
      {
        "kind": "variables",
        "text": "  mude vidas por -1"
      },
      {
        "kind": "control",
        "text": "  se (moedas > 3), então {"
      },
      {
        "kind": "variables",
        "text": "    mude moedas por 1"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "diga moedas"
      }
    ],
    "options": [
      "6 moedas, sem considerar a condição",
      "8 moedas",
      "9 moedas após três bônus",
      "7 moedas em toda a rodada"
    ]
  },
  {
    "id": 5,
    "section": "Scratch avançado",
    "skill": "Decisão e plano cartesiano",
    "prompt": "Qual posição final do ator é obtida pelo roteiro abaixo?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina x para -10"
      },
      {
        "kind": "variables",
        "text": "defina y para 5"
      },
      {
        "kind": "control",
        "text": "repita 4 vezes {"
      },
      {
        "kind": "motion",
        "text": "  mude x por 6"
      },
      {
        "kind": "control",
        "text": "  se (x > 0), então {"
      },
      {
        "kind": "motion",
        "text": "    mude y por -2"
      },
      {
        "kind": "control",
        "text": "  } senão {"
      },
      {
        "kind": "motion",
        "text": "    mude y por 1"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "control",
        "text": "}"
      }
    ],
    "options": [
      "x=14; y=2 depois das mudanças",
      "x=14; y=0",
      "x=8; y=2 considerando três voltas",
      "x=14; y=-3 ao terminar o roteiro"
    ]
  },
  {
    "id": 6,
    "section": "Scratch avançado",
    "skill": "Operador resto e acumuladores",
    "prompt": "A cada volta, n muda. Qual será o valor final da variável soma?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina soma para 0"
      },
      {
        "kind": "variables",
        "text": "defina n para 1"
      },
      {
        "kind": "control",
        "text": "repita 5 vezes {"
      },
      {
        "kind": "operators",
        "text": "  se ((n mod 2) = 0), então {"
      },
      {
        "kind": "variables",
        "text": "    mude soma por (n × 2)"
      },
      {
        "kind": "control",
        "text": "  } senão {"
      },
      {
        "kind": "variables",
        "text": "    mude soma por n"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "variables",
        "text": "  mude n por 1"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "diga soma"
      }
    ],
    "options": [
      "15, somando todos os números uma vez",
      "25, dobrando também os ímpares",
      "20, ignorando a quinta volta",
      "21"
    ]
  },
  {
    "id": 7,
    "section": "Scratch avançado",
    "skill": "Contagem de operações",
    "prompt": "O último bloco 'mude total por -1' pertence apenas ao laço externo. Que valor final o programa mostra?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina total para 0"
      },
      {
        "kind": "control",
        "text": "repita 3 vezes {"
      },
      {
        "kind": "control",
        "text": "  repita 2 vezes {"
      },
      {
        "kind": "variables",
        "text": "    mude total por 3"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "variables",
        "text": "  mude total por -1"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "diga total"
      }
    ],
    "options": [
      "15",
      "18 após subtrair apenas uma unidade",
      "12 ao subtrair em cada laço interno",
      "9, considerando só uma repetição"
    ]
  },
  {
    "id": 8,
    "section": "Scratch avançado",
    "skill": "Condição de parada e convergência",
    "prompt": "O laço termina somente quando valor é pelo menos 10. Qual número aparece no balão?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina valor para 0"
      },
      {
        "kind": "control",
        "text": "repita até (valor >= 10) {"
      },
      {
        "kind": "variables",
        "text": "  mude valor por 3"
      },
      {
        "kind": "control",
        "text": "  se (valor > 6), então {"
      },
      {
        "kind": "variables",
        "text": "    mude valor por -1"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "diga valor"
      }
    ],
    "options": [
      "9, pois a condição é testada antes",
      "11, antes de descontar uma unidade",
      "10",
      "12, somando quatro incrementos iguais"
    ]
  },
  {
    "id": 9,
    "section": "Scratch avançado",
    "skill": "Estado após correção condicional",
    "prompt": "O bloco de correção é executado dentro do laço. Qual pontuação final resta?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina pontos para 4"
      },
      {
        "kind": "control",
        "text": "repita 3 vezes {"
      },
      {
        "kind": "variables",
        "text": "  mude pontos por 3"
      },
      {
        "kind": "control",
        "text": "  se (pontos >= 10), então {"
      },
      {
        "kind": "variables",
        "text": "    mude pontos por -2"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "diga pontos"
      }
    ],
    "options": [
      "11 pontos sem aplicar qualquer desconto",
      "7 pontos depois de três descontos",
      "10 pontos após corrigir uma única vez",
      "9 pontos"
    ]
  },
  {
    "id": 10,
    "section": "Scratch avançado",
    "skill": "Multiplicação iterativa",
    "prompt": "O valor de n aumenta somente depois da multiplicação. Qual é o produto exibido?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "defina n para 2"
      },
      {
        "kind": "variables",
        "text": "defina produto para 1"
      },
      {
        "kind": "control",
        "text": "repita 4 vezes {"
      },
      {
        "kind": "variables",
        "text": "  defina produto para (produto × n)"
      },
      {
        "kind": "variables",
        "text": "  mude n por 1"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "diga produto"
      },
      {
        "kind": "looks",
        "text": "não há outros comandos"
      }
    ],
    "options": [
      "24, como se a primeira parcela fosse 1",
      "60, sem considerar a última volta",
      "120",
      "720, incluindo a quinta parcela"
    ]
  },
  {
    "id": 11,
    "section": "Tecnologia e lógica",
    "skill": "Seleção de dados por condição",
    "prompt": "Um programa soma apenas arquivos maiores que 3 MB. Quanto entra no total?",
    "blocks": [
      {
        "kind": "event",
        "text": "DADOS: arquivos = [4, 7, 2] MB"
      },
      {
        "kind": "variables",
        "text": "total ← 0"
      },
      {
        "kind": "control",
        "text": "para cada tamanho na lista {"
      },
      {
        "kind": "operators",
        "text": "  se tamanho > 3 então {"
      },
      {
        "kind": "variables",
        "text": "    total ← total + tamanho"
      },
      {
        "kind": "control",
        "text": "  } senão {"
      },
      {
        "kind": "looks",
        "text": "    não alterar total"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "exibir total"
      }
    ],
    "options": [
      "13 MB, incluindo os três arquivos",
      "11 MB",
      "7 MB, apenas do arquivo maior",
      "9 MB, retirando o menor arquivo"
    ]
  },
  {
    "id": 12,
    "section": "Tecnologia e lógica",
    "skill": "Phishing e verificação da origem",
    "prompt": "Um e-mail com logotipo da escola exige confirmação de senha em 15 minutos. O domínio do link não é o oficial. Qual procedimento reduz melhor o risco?",
    "blocks": [
      {
        "kind": "event",
        "text": "REMETENTE: secretaria@escola-suporte.info"
      },
      {
        "kind": "looks",
        "text": "ASSUNTO: Acesso será suspenso hoje"
      },
      {
        "kind": "sensing",
        "text": "LINK: escola-conta-segura.com/login"
      },
      {
        "kind": "operators",
        "text": "Solicita: usuário, senha e código recebido por SMS"
      },
      {
        "kind": "control",
        "text": "O endereço não coincide com o portal institucional"
      }
    ],
    "options": [
      "Entrar no portal oficial digitando o endereço",
      "Responder o e-mail pedindo mais detalhes pessoais",
      "Abrir o link em janela anônima para verificar",
      "Enviar somente o código SMS, sem a senha"
    ]
  },
  {
    "id": 13,
    "section": "Tecnologia e lógica",
    "skill": "Backup e sincronização",
    "prompt": "Uma estudante salva a versão final apenas no disco local, enquanto a sincronização com a nuvem está pausada. O computador apresenta defeito. O que pode acontecer?",
    "blocks": [
      {
        "kind": "event",
        "text": "14h: trabalho-v2 salvo na nuvem"
      },
      {
        "kind": "variables",
        "text": "16h: trabalho-v3 salvo no computador"
      },
      {
        "kind": "control",
        "text": "Sincronização pausada até o dia seguinte"
      },
      {
        "kind": "looks",
        "text": "Nenhum outro backup foi realizado"
      },
      {
        "kind": "sensing",
        "text": "17h: disco local deixa de funcionar"
      },
      {
        "kind": "operators",
        "text": "Nuvem ainda contém trabalho-v2"
      }
    ],
    "options": [
      "A nuvem passa a conter automaticamente a versão v3",
      "O sistema recupera v3 da memória RAM desligada",
      "A versão v3 pode não estar disponível",
      "Todos os arquivos antigos são apagados da nuvem"
    ]
  },
  {
    "id": 14,
    "section": "Tecnologia e lógica",
    "skill": "Ordenação por comparação",
    "prompt": "Considere uma passagem completa do algoritmo, comparando vizinhos e trocando quando o da esquerda é maior. Como termina a lista?",
    "blocks": [
      {
        "kind": "event",
        "text": "lista = [7, 2, 5, 1]"
      },
      {
        "kind": "control",
        "text": "para i de 1 até 3 {"
      },
      {
        "kind": "operators",
        "text": "  comparar lista[i] com lista[i+1]"
      },
      {
        "kind": "control",
        "text": "  se esquerda > direita {"
      },
      {
        "kind": "variables",
        "text": "    trocar os dois valores"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "looks",
        "text": "avançar para o próximo par"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "mostrar lista após uma passagem"
      }
    ],
    "options": [
      "[2, 5, 1, 7]",
      "[1, 2, 5, 7] após ordenar completamente",
      "[2, 7, 1, 5] após duas trocas",
      "[7, 5, 2, 1] em ordem decrescente"
    ]
  },
  {
    "id": 15,
    "section": "Tecnologia e lógica",
    "skill": "Validação de respostas de IA",
    "prompt": "Um assistente de IA apresenta título, autor e ISBN de um livro, mas a obra não aparece em catálogos confiáveis. Antes de usar a referência, o estudante deve:",
    "blocks": [
      {
        "kind": "event",
        "text": "PEDIDO À IA: cite um livro sobre o tema"
      },
      {
        "kind": "looks",
        "text": "RESPOSTA: título + autor + ISBN"
      },
      {
        "kind": "sensing",
        "text": "Busca no catálogo da biblioteca: nenhum registro"
      },
      {
        "kind": "sensing",
        "text": "Busca no site da editora: nenhum registro"
      },
      {
        "kind": "operators",
        "text": "Confiança do texto não equivale a confirmação"
      },
      {
        "kind": "control",
        "text": "A atividade exige referências verificáveis"
      }
    ],
    "options": [
      "Aceitar a referência porque contém ISBN",
      "Trocar o nome da editora e manter o título",
      "Usar a referência sem citar a fonte consultada",
      "Verificar a obra em fontes independentes"
    ]
  },
  {
    "id": 16,
    "section": "Tecnologia e lógica",
    "skill": "Tentativas de autenticação",
    "prompt": "Um sistema bloqueia após três erros. As duas primeiras senhas estão erradas e a terceira está correta. Qual será o resultado?",
    "blocks": [
      {
        "kind": "event",
        "text": "tentativas ← 0; acesso ← falso"
      },
      {
        "kind": "control",
        "text": "enquanto tentativas < 3 E acesso = falso {"
      },
      {
        "kind": "sensing",
        "text": "  receber uma senha"
      },
      {
        "kind": "control",
        "text": "  se senha correta {"
      },
      {
        "kind": "variables",
        "text": "    acesso ← verdadeiro"
      },
      {
        "kind": "control",
        "text": "  } senão {"
      },
      {
        "kind": "variables",
        "text": "    tentativas ← tentativas + 1"
      },
      {
        "kind": "control",
        "text": "  }"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "looks",
        "text": "se acesso, mostrar 'Entrada autorizada'"
      }
    ],
    "options": [
      "Bloqueio automático antes da terceira senha certa",
      "Acesso liberado na terceira tentativa",
      "Bloqueio definitivo após dois erros consecutivos",
      "Acesso liberado mesmo sem digitar a terceira senha"
    ]
  },
  {
    "id": 17,
    "section": "Tecnologia e lógica",
    "skill": "Licenças e remix de conteúdo",
    "prompt": "Um aluno adapta um infográfico com licença CC BY-SA e pretende publicar a versão modificada. Qual conduta respeita essa licença?",
    "blocks": [
      {
        "kind": "event",
        "text": "MATERIAL ORIGINAL: infográfico educacional"
      },
      {
        "kind": "looks",
        "text": "LICENÇA: Creative Commons BY-SA"
      },
      {
        "kind": "operators",
        "text": "BY = atribuição; SA = compartilhar igual"
      },
      {
        "kind": "control",
        "text": "AÇÃO: alterar cores e textos, depois publicar"
      },
      {
        "kind": "sensing",
        "text": "A licença permite adaptações sob condições"
      },
      {
        "kind": "looks",
        "text": "Novo trabalho será distribuído publicamente"
      }
    ],
    "options": [
      "Creditar e manter a mesma licença",
      "Retirar o nome do autor porque houve alterações",
      "Proibir qualquer adaptação de terceiros ao trabalho",
      "Omitir a fonte porque a publicação é escolar"
    ]
  },
  {
    "id": 18,
    "section": "Tecnologia e lógica",
    "skill": "Expressões lógicas",
    "prompt": "O alerta exige temperatura acima de 30 °C E umidade abaixo de 40%. Com 32 °C e 45%, qual saída é gerada?",
    "blocks": [
      {
        "kind": "event",
        "text": "temperatura ← 32"
      },
      {
        "kind": "variables",
        "text": "umidade ← 45"
      },
      {
        "kind": "control",
        "text": "se (temperatura > 30) E (umidade < 40) {"
      },
      {
        "kind": "looks",
        "text": "  exibir 'Alerta'"
      },
      {
        "kind": "control",
        "text": "} senão {"
      },
      {
        "kind": "looks",
        "text": "  exibir 'Normal'"
      },
      {
        "kind": "control",
        "text": "}"
      },
      {
        "kind": "operators",
        "text": "As duas condições precisam ser verdadeiras"
      }
    ],
    "options": [
      "Alerta, pois basta a temperatura superar 30 °C",
      "Alerta, porque 45 também supera 40",
      "Normal",
      "Sem saída, pois não existe condição satisfeita"
    ]
  },
  {
    "id": 19,
    "section": "Tecnologia e lógica",
    "skill": "Proteção e verificação de senhas",
    "prompt": "Um serviço armazena apenas um resumo criptográfico (hash) da senha, e não a senha original. Para que essa estratégia é usada?",
    "blocks": [
      {
        "kind": "event",
        "text": "Cadastro: usuário cria uma senha secreta"
      },
      {
        "kind": "operators",
        "text": "Servidor calcula hash(senha)"
      },
      {
        "kind": "variables",
        "text": "Banco registra apenas o resultado do hash"
      },
      {
        "kind": "control",
        "text": "No login, calcular hash(senha digitada)"
      },
      {
        "kind": "operators",
        "text": "Comparar com o resumo armazenado"
      },
      {
        "kind": "looks",
        "text": "A senha original não precisa ser guardada"
      }
    ],
    "options": [
      "Mostrar a senha original a qualquer administrador",
      "Comparar resumos sem guardar a senha",
      "Enviar a senha por mensagem para a conta",
      "Fazer o navegador ignorar a autenticação"
    ]
  },
  {
    "id": 20,
    "section": "Tecnologia e lógica",
    "skill": "Privacidade em projetos escolares",
    "prompt": "Uma equipe deseja publicar imagens de colegas e uma planilha com nomes completos e números de matrícula em um site público. Qual decisão é mais adequada?",
    "blocks": [
      {
        "kind": "event",
        "text": "PROJETO: portal para divulgar a feira escolar"
      },
      {
        "kind": "looks",
        "text": "DADOS: fotografias + nomes + matrículas"
      },
      {
        "kind": "sensing",
        "text": "O site pode ser acessado por qualquer pessoa"
      },
      {
        "kind": "control",
        "text": "A publicação exige finalidade e cuidado"
      },
      {
        "kind": "operators",
        "text": "Divulgar o projeto não exige expor identificadores"
      },
      {
        "kind": "looks",
        "text": "A equipe precisa revisar os materiais"
      }
    ],
    "options": [
      "Publicar a planilha e apagar o arquivo local depois",
      "Mostrar matrículas apenas nas fotos menores",
      "Esconder o endereço da página e publicar tudo",
      "Omitir matrículas e obter autorização para fotos"
    ]
  }
];
