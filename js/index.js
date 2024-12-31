function secondsUntil(targetDate) {
    const now = dayjs(); // 현재 시간
    const target = dayjs(targetDate); // 목표 시간

    // 시간차를 초 단위로 계산
    const differenceInSeconds = target.diff(now, 'ms');

    // console.log(differenceInSeconds)

    return differenceInSeconds;
}

function gapBetweenDate(start, end) {
    const s = dayjs(start) // 스타트
    const e = dayjs(end) // 엔드

    const diff = e.diff(s, 'ms')

    return diff
}

function secondsSince(startDate) {
    const now = dayjs(); // 현재 시간
    const start = dayjs(startDate); // 시작 시간

    // 시간차를 초 단위로 계산
    const differenceInSeconds = now.diff(start, 'ms');

    // console.log(differenceInSeconds)

    return differenceInSeconds;
}

function zeropad(num) {
    if (Number(num) <= 9) {
        return `0${num}`
    } else {
        return `${num}`
    }
}

const counterInit = ($counter, $counter2, max) => {
    let now = max;

    const handle = setInterval(() => {
    $counter.innerHTML = `${(max - now).toFixed(6)}%`;
    $counter2.innerHTML = `${(max - now).toFixed(6)}%`;
    progressBar.style.width = `${yearProgress}%`
    
    // 목표수치에 도달하면 정지
    if (now < 1) {
        clearInterval(handle);
    }
    
    // 증가되는 값이 계속하여 작아짐
    const step = now / 10;
    
    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now -= step;
    }, 50);

    setTimeout(() => {
        setInterval(() => { 
            // 주기적인 날짜 변경
            const nowFormat = dayjs().format("YYYY. MM. DD")
        
            timerDate.innerText = nowFormat
        }, 1000)
        
        // let ms_display = 0
        
        setInterval(() => {
            // 주기적인 시간 변경
            const now = dayjs()
        
            const timeFormat = now.format("HH:mm:ss"),
            ms = now.format("SSS")
        
            timerTime.innerText = `${timeFormat} / ${ms}`
        }, 1);
        
        setInterval(() => {
            // 주기적인 퍼센테이지 변경
        
            const elapsedSeconds = secondsSince(`2025-01-01T00:00:00`)
        
            const yearProgress = ((elapsedSeconds / gapBetweenDate(`2025-01-01T00:00:00`, `2026-01-01T00:00:00`)) * 100).toFixed(6)
        
            progressEn.innerText = `${yearProgress}%`
            progressKo.innerText = `${yearProgress}%`
        
            progressBar.style.width = `${yearProgress}%`
        }, 100);
    }, 2000);
}

// const new

const timerDate = document.querySelector(".date-text h1"),
timerTime = document.querySelector(".date-text h3"),
progressEn = document.querySelector(".progress-text h1 span"),
progressKo = document.querySelector(".progress-text h3 span"),
progressBar = document.querySelector(".progress-bar-now")

const elapsedSecondsInit = secondsSince(`2025-01-01T00:00:00`)

const yearProgress = (elapsedSecondsInit / gapBetweenDate(`2025-01-01T00:00:00`, `2026-01-01T00:00:00`) * 100).toFixed(6)
setTimeout(counterInit(progressEn, progressKo, yearProgress), 1000)
