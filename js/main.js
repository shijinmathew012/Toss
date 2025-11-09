document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const coinTossNav = document.getElementById('coin-toss-nav');
    const diceRollNav = document.getElementById('dice-roll-nav');
    const coinTossTool = document.getElementById('coin-toss-tool');
    const diceRollTool = document.getElementById('dice-roll-tool');

    coinTossNav.addEventListener('click', () => {
        coinTossTool.hidden = false;
        diceRollTool.hidden = true;
    });

    diceRollNav.addEventListener('click', () => {
        coinTossTool.hidden = true;
        diceRollTool.hidden = false;
    });

    // Coin Toss
    const tossButton = document.getElementById('toss-button');
    const coinTossResultDiv = document.getElementById('coin-toss-result');

    tossButton.addEventListener('click', () => {
        const outcomes = ['Heads', 'Tails'];
        const result = outcomes[Math.floor(Math.random() * outcomes.length)];
        coinTossResultDiv.textContent = result;
    });

    // Dice Roll
    const rollButton = document.getElementById('roll-button');
    const diceRollResultDiv = document.getElementById('dice-roll-result');

    rollButton.addEventListener('click', () => {
        const result = Math.floor(Math.random() * 6) + 1;
        diceRollResultDiv.textContent = result;
    });
});
