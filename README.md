# PokeApp

Este projeto foi desenvolvido em **Ionic + Angular** utilizando a PokeAPI como fonte de dados.  
A tela inicial carrega 20 Pokémons por vez em um scroll infinito, exibindo nome e sprite.  
Ao tocar em um card, o app abre a página de detalhes com imagem ampliada e seis informações extras.  
Toda a comunicação HTTP é centralizada no `PokemonService`, injetado via DI.  
O usuário pode favoritar criaturas; os IDs são gravados em `localStorage` e listados em uma aba própria.  
O layout responde a retrato e paisagem graças ao `ion-grid`, mudando a quantidade de colunas conforme o espaço.  
Commits seguem **Conventional Commits** para um histórico limpo e semântico.  
Testes unitários validam chamadas da API usando `HttpClientTestingModule`.  
Uma pipeline do **GitHub Actions** executa lint e testes em cada push.  
Abaixo há um GIF curto demonstrando listagem, navegação e favoritos.


