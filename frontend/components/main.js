const games = [
    { name: "Snake", link: "games/snake.html" },
    { name: "Tic-Tac-Toe", link: "games/tic-tac-toe.html" },
    { name: "Minesweeper", link: "games/minesweeper.html" }
];

const gameList = document.getElementById('game-list');

games.forEach(game => {
    const gameLink = document.createElement('a');
    gameLink.href = game.link;
    gameLink.textContent = game.name;
    gameLink.style.display = 'block';
    gameLink.style.margin = '10px 0';
    gameList.appendChild(gameLink);
});