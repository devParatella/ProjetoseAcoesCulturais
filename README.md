
Modelo Entidade-Relacionamento (MER) Atualizado para o Sistema de Cadastro de Projetos/Ações Culturais do Instituto Energisa
Entidades:

Usuário:
Atributos:
id_usuario (PK)
nome_completo
email
senha
telefone
genero
raca_etnia
cidade
estado
comprovante_residencia (arquivo)
documento_identificacao (arquivo PDF de RG, CPF ou CNPJ)
documento_rne (arquivo PDF, opcional para estrangeiros)
ProjetoAção:
Atributos:
id_projetoacao (PK)
nome_projetoacao
descricao_proposta (arquivo PDF)
curriculum (arquivo PDF)
ficha_tecnica (arquivo PDF)
cronograma (arquivo PDF)
fotos_imagens (arquivos)
data_submissao
status
duvidas_sugestoes
id_usuario (FK)
id_espaco_cultural (FK)
linguagem_artistica
especificacao_linguagem (opcional, se "Outros" for selecionado)
Anexo:
Atributos:
id_anexo (PK)
tipo_anexo (PDF, imagem, texto, etc.)
arquivo
id_projetoacao (FK)
Espaço Cultural:
Atributos:
id_espaco_cultural (PK)
nome_espaco
endereco
Notificação:
Atributos:
id_notificacao (PK)
mensagem
data_envio
status
id_projetoacao (FK)
Relacionamentos:

Usuário - ProjetoAção:
Um usuário pode submeter vários projetos (1:N).
Um projeto é submetido por um único usuário (N:1).
ProjetoAção - Anexo:
Um projeto pode ter vários anexos (1:N).
Um anexo pertence a um único projeto (N:1).
ProjetoAção - Espaço Cultural:
Um projeto é realizado em um único espaço cultural (N:1).
Um espaço cultural pode ter diversos projetos realizados (1:N).
ProjetoAção - Notificação:
Um projeto pode gerar várias notificações (1:N).
Uma notificação está relacionada a um único projeto (N:1).
Diagrama MER Atualizado:

Snippet de código
graph TD
  A[Usuário] --> |submete| B[ProjetoAção]
  B --> |tem| C[Anexo]
  B --> |realizado em| D[Espaço Cultural]
  B --> |gera| E[Notificação]
  A --> |possui| F[Documento de Identidade]
  A --> |possui| G[Comprovante de Residência]
  A --> |possui| H[Documento RNE]
  B --> |possui| I[Curriculum]
  B --> |possui| J[Ficha Técnica]
  B --> |possui| K[Cronograma]
  B --> |possui| L[Fotos/Imagens]
Use o código com cuidado.
content_copy
Descrição dos Relacionamentos:

Usuário - ProjetoAção:
Um usuário pode submeter vários projetos, mas cada projeto é submetido por um único usuário.
Essa relação garante que cada projeto tenha um responsável claro e facilita o controle de acesso às informações do projeto.
ProjetoAção - Anexo:
Um projeto pode ter vários anexos para complementar a proposta, como fotos, vídeos, documentos, etc.
Cada anexo está associado a um único projeto, garantindo organização e evitando duplicação de arquivos.
ProjetoAção - Espaço Cultural:
Um projeto é realizado em um único espaço cultural, definindo o local onde a ação será desenvolvida.
Um espaço cultural pode ter diversos projetos realizados ao longo do tempo
