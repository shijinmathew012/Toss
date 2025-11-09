document.addEventListener('DOMContentLoaded', () => {
    // Tab Navigation
    const tabs = document.querySelectorAll('.tab-link');
    const tools = document.querySelectorAll('.tool');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and hide all tools
            tabs.forEach(t => t.classList.remove('active'));
            tools.forEach(tool => tool.hidden = true);

            // Activate the clicked tab and show the corresponding tool
            tab.classList.add('active');
            const toolId = tab.getAttribute('data-tool');
            document.getElementById(toolId).hidden = false;
        });
    });

    // Coin Toss
    const tossButton = document.getElementById('toss-button');
    const coinTossResultDiv = document.getElementById('coin-toss-result');
    const coin = document.getElementById('coin');

    tossButton.addEventListener('click', () => {
        coinTossResultDiv.textContent = '';
        coin.classList.add('flipping');

        setTimeout(() => {
            coin.classList.remove('flipping');
            const outcomes = ['Heads', 'Tails'];
            const result = outcomes[Math.floor(Math.random() * outcomes.length)];
            coinTossResultDiv.textContent = result;
        }, 1000);
    });

    // Dice Roll
    const rollButton = document.getElementById('roll-button');
    const diceRollResultDiv = document.getElementById('dice-roll-result');
    const dice = document.getElementById('dice');
    const diceFace = dice.querySelector('.face');

    rollButton.addEventListener('click', () => {
        diceRollResultDiv.textContent = '';
        dice.classList.add('rolling');

        const interval = setInterval(() => {
            const randomFace = Math.floor(Math.random() * 6) + 1;
            diceFace.textContent = randomFace;
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            dice.classList.remove('rolling');
            const result = Math.floor(Math.random() * 6) + 1;
            diceFace.textContent = result;
            diceRollResultDiv.textContent = `You rolled a ${result}`;
        }, 1000);
    });
});
