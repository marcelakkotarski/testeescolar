/* Questões públicas sem gabarito. A correção fica somente no Google Apps Script privado. */
window.QUESTIONS = [
  {
    "id": 1,
    "section": "Scratch",
    "skill": "Eventos e sequência",
    "prompt": "Ao clicar na bandeira verde, o que o ator fará?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "motion",
        "text": "mova 10 passos"
      },
      {
        "kind": "motion",
        "text": "gire ↻ 15 graus"
      }
    ],
    "options": [
      "Moverá 10 passos e depois girará 15 graus",
      "Repetirá os dois comandos para sempre",
      "Girará 15 graus e depois moverá 10 passos",
      "Executará apenas o primeiro bloco"
    ]
  },
  {
    "id": 2,
    "section": "Scratch",
    "skill": "Coordenadas",
    "prompt": "O ator começa em x=0 e y=0. Em qual posição terminará?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "motion",
        "text": "mude x por 40"
      },
      {
        "kind": "motion",
        "text": "mude y por -20"
      }
    ],
    "options": [
      "x=40, y=-20",
      "x=-20, y=40",
      "x=-40, y=-20",
      "x=40, y=20"
    ]
  },
  {
    "id": 3,
    "section": "Scratch",
    "skill": "Repetição",
    "prompt": "Quantos passos o ator avançará ao todo?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "control",
        "text": "repita 4"
      },
      {
        "kind": "motion",
        "text": "mova 15 passos"
      }
    ],
    "options": [
      "19",
      "45",
      "15",
      "60"
    ]
  },
  {
    "id": 4,
    "section": "Scratch",
    "skill": "Mensagens",
    "prompt": "Qual roteiro começa quando o bloco 'transmita início' é executado em outro ator?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando eu receber início"
      },
      {
        "kind": "looks",
        "text": "mostre"
      },
      {
        "kind": "motion",
        "text": "vá para x: 0 y: 0"
      }
    ],
    "options": [
      "Este roteiro, pois recebe a mensagem início",
      "O roteiro que começa com bandeira verde",
      "Nenhum, porque mensagens não ligam atores",
      "Somente o roteiro do palco"
    ]
  },
  {
    "id": 5,
    "section": "Scratch",
    "skill": "Condição",
    "prompt": "O sensor indica que o ator toca na cor vermelha. Qual mensagem será exibida?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "control",
        "text": "se tocando na cor vermelha? então"
      },
      {
        "kind": "looks",
        "text": "diga Perigo! por 2 segundos"
      },
      {
        "kind": "control",
        "text": "senão"
      },
      {
        "kind": "looks",
        "text": "diga Caminho livre! por 2 segundos"
      }
    ],
    "options": [
      "Nenhuma mensagem",
      "As duas mensagens",
      "Perigo!",
      "Caminho livre!"
    ]
  },
  {
    "id": 6,
    "section": "Scratch",
    "skill": "Variáveis",
    "prompt": "Qual será o valor final da variável pontos?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "variables",
        "text": "mude pontos para 10"
      },
      {
        "kind": "variables",
        "text": "adicione 5 a pontos"
      },
      {
        "kind": "variables",
        "text": "adicione -2 a pontos"
      }
    ],
    "options": [
      "13",
      "3",
      "10",
      "17"
    ]
  },
  {
    "id": 7,
    "section": "Scratch",
    "skill": "Sensores",
    "prompt": "O ator deve seguir o ponteiro do mouse continuamente. Qual é o efeito do roteiro?",
    "blocks": [
      {
        "kind": "event",
        "text": "quando ⚑ for clicado"
      },
      {
        "kind": "control",
        "text": "sempre"
      },
      {
        "kind": "motion",
        "text": "aponte para ponteiro do mouse"
      },
      {
        "kind": "motion",
        "text": "mova 3 passos"
      }
    ],
    "options": [
      "Segue continuamente na direção do ponteiro",
      "Teletransporta-se para o ponteiro",
      "Para quando toca na borda automaticamente",
      "Move 3 passos uma única vez"
    ]
  },
  {
    "id": 8,
    "section": "Scratch",
    "skill": "Repita até",
    "prompt": "O ator começa sem tocar na borda. Quando o laço termina?",
    "blocks": [
      {
        "kind": "control",
        "text": "repita até que tocando na borda?"
      },
      {
        "kind": "motion",
        "text": "mova 5 passos"
      }
    ],
    "options": [
      "Quando a bandeira for clicada novamente",
      "Depois de exatamente 5 repetições",
      "Quando o ator tocar na borda",
      "Nunca, porque a condição precisa ser falsa"
    ]
  },
  {
    "id": 9,
    "section": "Scratch",
    "skill": "Depuração de condição",
    "prompt": "O roteiro deveria encerrar o jogo quando vidas chegasse a zero, mas isso não acontece quando vidas vale exatamente 0. Qual correção é adequada?",
    "blocks": [
      {
        "kind": "control",
        "text": "se vidas < 0 então"
      },
      {
        "kind": "control",
        "text": "pare todos"
      }
    ],
    "options": [
      "Trocar 'pare todos' por 'espere 1 segundo'",
      "Trocar a condição por vidas = 0 ou vidas < 1",
      "Usar apenas o bloco sempre",
      "Adicionar 10 a vidas"
    ]
  },
  {
    "id": 10,
    "section": "Scratch",
    "skill": "Laços aninhados",
    "prompt": "Quantas vezes o ator executará 'mova 10 passos'?",
    "blocks": [
      {
        "kind": "control",
        "text": "repita 2"
      },
      {
        "kind": "control",
        "text": "repita 3"
      },
      {
        "kind": "motion",
        "text": "mova 10 passos"
      }
    ],
    "options": [
      "2",
      "5",
      "3",
      "6"
    ]
  },
  {
    "id": 11,
    "section": "Outros conteúdos",
    "skill": "Informática básica",
    "prompt": "Em um computador escolar, qual componente executa as instruções dos programas?",
    "blocks": [],
    "options": [
      "Memória RAM",
      "Teclado",
      "Monitor",
      "Processador (CPU)"
    ]
  },
  {
    "id": 12,
    "section": "Outros conteúdos",
    "skill": "Arquivos e pastas",
    "prompt": "Para organizar códigos, imagens e sons de um jogo, qual atitude facilita encontrar os arquivos depois?",
    "blocks": [],
    "options": [
      "Salvar tudo na área de trabalho",
      "Dar nomes idênticos a todos",
      "Apagar extensões",
      "Criar pastas por projeto"
    ]
  },
  {
    "id": 13,
    "section": "Outros conteúdos",
    "skill": "Segurança digital",
    "prompt": "Um aluno recebe uma mensagem com link pedindo sua senha escolar. O que deve fazer?",
    "blocks": [],
    "options": [
      "Testar o link em outro celular",
      "Informar a senha ao colega",
      "Encaminhar o link à turma",
      "Não abrir e avisar um responsável"
    ]
  },
  {
    "id": 14,
    "section": "Outros conteúdos",
    "skill": "Senhas e contas",
    "prompt": "Qual prática protege melhor uma conta usada em atividades escolares?",
    "blocks": [],
    "options": [
      "Usar a mesma senha para todos",
      "Senha forte e verificação em duas etapas",
      "Anotar a senha no quadro",
      "Compartilhar a senha com amigos"
    ]
  },
  {
    "id": 15,
    "section": "Outros conteúdos",
    "skill": "Busca na internet",
    "prompt": "Ao pesquisar uma informação para a aula, qual ação ajuda a verificar sua confiabilidade?",
    "blocks": [],
    "options": [
      "Escolher o primeiro resultado",
      "Confiar só na imagem do site",
      "Comparar fontes e conferir autoria",
      "Usar apenas comentários anônimos"
    ]
  },
  {
    "id": 16,
    "section": "Outros conteúdos",
    "skill": "Inteligência artificial",
    "prompt": "Uma IA respondeu a uma pergunta científica com uma informação duvidosa. Qual deve ser o próximo passo?",
    "blocks": [],
    "options": [
      "Pedir que a IA não explique",
      "Tratar a resposta como prova",
      "Conferir em fontes confiáveis",
      "Copiar a resposta sem ler"
    ]
  },
  {
    "id": 17,
    "section": "Outros conteúdos",
    "skill": "Privacidade digital",
    "prompt": "Ao testar um aplicativo de IA, quais dados você deve evitar informar sem necessidade?",
    "blocks": [],
    "options": [
      "Pergunta sobre uma planta",
      "Título de uma história",
      "Dados pessoais de outras pessoas",
      "Tema geral da pesquisa"
    ]
  },
  {
    "id": 18,
    "section": "Outros conteúdos",
    "skill": "Algoritmos e jogos",
    "prompt": "Um personagem precisa repetir o mesmo movimento cinco vezes. Qual estratégia reduz comandos repetidos?",
    "blocks": [],
    "options": [
      "Desligar os eventos",
      "Copiar o cenário cinco vezes",
      "Criar cinco personagens iguais",
      "Usar um laço de repetição"
    ]
  },
  {
    "id": 19,
    "section": "Outros conteúdos",
    "skill": "Depuração",
    "prompt": "Um jogo de blocos não inicia quando a bandeira verde é clicada. Qual é a primeira verificação útil?",
    "blocks": [],
    "options": [
      "Trocar o nome do projeto",
      "Aumentar o volume da música",
      "Conferir o bloco de evento inicial",
      "Mudar a cor do personagem"
    ]
  },
  {
    "id": 20,
    "section": "Outros conteúdos",
    "skill": "Cidadania digital",
    "prompt": "Você usou um desenho encontrado na internet na apresentação do projeto. Qual cuidado é necessário?",
    "blocks": [],
    "options": [
      "Conferir licença e citar autoria",
      "Dizer que a imagem é sua",
      "Esconder a origem da imagem",
      "Modificar a cor para liberar uso"
    ]
  }
];
