Modelo Entidade-Relacionamento (MER) para o Sistema de Cadastro de Projetos/Ações Culturais
do Instituto Energisa, vamos considerar todas as entidades principais e suas relações baseadas 
na descrição fornecida pelo Senai.

Entidades Principais:

Usuário
ProjetoAcao
Anexo
Espaço Cultural
Notificação

Relacionamentos:
Cada Usuário pode submeter vários Projetos.
Cada Projeto/Ação pode ter vários Anexos.
Cada Projeto/Ação é relacionado a um Espaço Cultural específico.
Cada Projeto/Ação pode gerar várias Notificações.

Atributos das Entidades:

Usuário

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

Projeto

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

Anexo

id_anexo (PK)
tipo_anexo (PDF, imagem, texto, etc.)
arquivo
id_projetoacao (FK)

Espaço Cultural

id_espaco_cultural (PK)
nome_espaco
endereco

Notificação

id_notificacao (PK)
mensagem
data_envio
status
id_projetoacao (FK)


Diagrama MER

+------------------------+       +------------------------+       +-------------------+
|      Usuário           |       |       Projeto          |       |    Anexo          |
+------------------------+       +------------------------+       +-------------------+
| PK id_usuario          |<----+ | PK id_projetoacao      |       | PK id_anexo       |
| nome_completo          |     | | nome_projetoacao       |       | tipo_anexo        |
| email                  |     | | descricao_proposta     |       | arquivo           |
| senha                  |     | | curriculum             |       | FK id_projetoacao |
| telefone               |     | | ficha_tecnica          |       +-------------------+
| genero                 |     | | cronograma             |
| raca_etnia             |     | | fotos_imagens          |   
| cidade                 |     | | data_submissao         |
| estado                 |     | | status                 |
| comprovante_residencia |     | | duvidas_sugestoes      |
| documento_identificacao|     | | FK id_usuario          |
| documento_rne          |     | |  FK id_espaco_cultural |       
+------------------------+      +-------------------------+
                                ^
                                |                                |
                                v
                      +----------------------+
                      |  Espaço Cultural     |
                      +----------------------+
                      | PK id_espaco_cultural|
                      | nome_espaco          |
                      | endereco             |
                      +----------------------+

                      +-----------------------+
                      |    Notificação        |
                      +-----------------------+
                      | PK id_notificacao     |
                      | mensagem              |
                      | data_envio            |
                      | status                |
                      | FK id_projetoacao         |
                      +-----------------------+
Descrição dos Relacionamentos:
Usuário - Projeto: Um usuário pode submeter vários projetos (1).
Projeto - Anexo: Um projeto pode ter vários anexos (1).
Projeto - Espaço Cultural: Um projeto é realizado em um único espaço cultural (N:1).
Projeto - Notificação: Um projeto pode gerar várias notificações (1).
Este diagrama e a descrição fornecem uma visão clara de como os dados estarão estruturados e como se 
relacionam no sistema de cadastro de ações e projetos culturais.
