//Teoman Güven
//İsmetGökay
let level = 1;
let clicks = 0;
let timeoutDuration = 500;
let isLevelTransition = false;

const button = document.getElementById('target-button');
const levelDisplay = document.getElementById('level');
const clicksDisplay = document.getElementById('clicks');
const messageDisplay = document.getElementById('message');


positionButton();


function positionButton() {
    
    if (isLevelTransition) return;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    
    const maxLeft = windowWidth - buttonWidth;
    const maxTop = windowHeight - buttonHeight;
    
    
    button.style.left = Math.random() * maxLeft + "px";
    button.style.top = Math.random() * maxTop + "px";
}


window.addEventListener('resize', positionButton);


button.addEventListener('mouseover', function() {
    if (!isLevelTransition) {
        setTimeout(positionButton, timeoutDuration);
    }
});


button.addEventListener('click', function() {
    clicks++;
    clicksDisplay.textContent = clicks;
    
    if (clicks === 3) {
        level++;
        levelDisplay.textContent = level;
        
        if (level <= 6) {
            
            isLevelTransition = true;
            
            
            messageDisplay.textContent = `Level ${level-1} complete!`;
            messageDisplay.style.color = 'green';
            
            
            alert(`Level ${level-1} complete! Moving to Level ${level}`);
            
            
            timeoutDuration = Math.max(0, 500 - ((level - 1) * 100));
            
            
            clicks = 0;
            clicksDisplay.textContent = clicks;
            
            
            setTimeout(() => {
                isLevelTransition = false;
                positionButton();
            }, 100);
        } else {
            
            messageDisplay.textContent = 'Congratulations!';
            messageDisplay.style.color = 'green';
            alert('Congratulations! You completed all levels!');
        }
    }
});
