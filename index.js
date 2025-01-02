const main = () => {
    const hometownScore = document.querySelector(".hometown-score")
    const awayScore = document.querySelector(".away-score")
    
    const hometownFouls = document.querySelector(".hometown-fouls-count")
    const awayFouls = document.querySelector(".away-fouls-count")
    
    const hometownBonus = document.querySelector(".hometown-bonus > span")
    const awayBonus = document.querySelector(".away-bonus > span")
    
    howntownScoreAdd(hometownScore)
    awayScoreAdd(awayScore)
    
    addHometownFouls(hometownFouls, hometownBonus)
    addAwayFouls(awayFouls, awayBonus)
    
    start()
}

// Add score to howntown +1, +2, +3
function howntownScoreAdd(score) {
    
    const add1 = document.querySelector(".btn-htAdd1")
    const add2 = document.querySelector(".btn-htAdd2")
    const add3 = document.querySelector(".btn-htAdd3")
    
    add1.addEventListener("click", () => {
        score.textContent = +score.textContent + 1
    })
    
    add2.addEventListener("click", () => {
        score.textContent = +score.textContent + 2
    })
    
    add3.addEventListener("click", () => {
        score.textContent = +score.textContent + 3
    })
}

// Add score to away +1, +2, +3
function awayScoreAdd(score) {
    
    const add1 = document.querySelector(".btn-awayAdd1")
    const add2 = document.querySelector(".btn-awayAdd2")
    const add3 = document.querySelector(".btn-awayAdd3")
    
    add1.addEventListener("click", () => {
        score.textContent = +score.textContent + 1
    })
    
    add2.addEventListener("click", () => {
        score.textContent = +score.textContent + 2
    })
    
    add3.addEventListener("click", () => {
        score.textContent = +score.textContent + 3
    })
}

// Hometown Fouls
function addHometownFouls(fouls, bonus) {
    
    const addFouls = document.querySelector(".btn-ht-fouls")
    
    addFouls.addEventListener("click", () => {
        fouls.textContent = +fouls.textContent + 1
        // Check if fouls >= 6 (+1 bonus)
        if (fouls.textContent >= 6) {
            bonus.textContent = +bonus.textContent + 1
        }
    })
}

// Away Fouls
function addAwayFouls(fouls, bonus) {
    
    const addFouls = document.querySelector(".btn-away-fouls")
    
    addFouls.addEventListener("click", () => {
        fouls.textContent = +fouls.textContent + 1
        // Check if fouls >= 6 (+1 bonus)
        if (fouls.textContent >= 6) {
            bonus.textContent = +bonus.textContent + 1
        }
    })
}

// Remaining Time
function showTime() {
    const min = document.querySelector("#min")
    const sec = document.querySelector("#sec")
    
    let remainMinTime = 12
    min.textContent = remainMinTime
    
    let remainSecTime = 59
    sec.textContent = remainSecTime
    
    // Min Timer
    const minTimer = setInterval(() => {
        min.textContent = String(+min.textContent - 1).padStart(2, "0")
        
        if (Number(min.textContent) === 0) {
            clearInterval(minTimer)
        }
    }, 60000)
    
    // Sec Timer
    const secTimer = setInterval(() => {
        sec.textContent = String(+sec.textContent - 1).padStart(2, "0")
        
        if (Number(sec.textContent) === 0) {
            sec.textContent = remainSecTime
        }
    }, 1000)
}

 
// Start
function start() {
    const startBtn = document.querySelector(".btn-start")
    
    startBtn.addEventListener("click", showTime)
}

main()
