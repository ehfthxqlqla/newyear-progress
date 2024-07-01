function secondsUntil(targetDate) {
    // 현재 날짜와 시간을 가져오기
    const now = new Date();

    // 타겟을 입력받은 날짜(ISO)로 맞추기
    const target = new Date(targetDate);

    // 차이 구하기
    const differenceInMillis = target - now;

    // ms 초로 바꾸기
    const differenceInSeconds = Math.floor(differenceInMillis / 1000);

    return differenceInSeconds;
}

function secondsSince(startDate) {
    // 지금 시간 구하기
    const now = new Date();

    // 시작날짜를 입력받은 값으로 정하기
    const start = new Date(startDate);

    // 시간차 구하기
    const differenceInMillis = now - start;

    // ms 초로 바꾸기
    const differenceInSeconds = Math.floor(differenceInMillis / 1000);

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
        
            const timeFormat = now.format("HH:MM:ss"),
            ms = now.format("SSS")
        
            timerTime.innerText = `${timeFormat} / ${ms}`
        }, 1);
        
        setInterval(() => {
            // 주기적인 퍼센테이지 변경
        
            const remainingSeconds = secondsUntil(`2025-12-31T23:59:59`),
            elapsedSeconds = secondsSince(`2024-01-01T00:00:00`)
        
            const yearProgress = ((elapsedSeconds / remainingSeconds) * 100).toFixed(6)
        
            progressEn.innerText = `${yearProgress}%`
            progressKo.innerText = `${yearProgress}%`
        
            progressBar.style.width = `${yearProgress}%`
        }, 100);
    }, 1000);
}

// const new

const timerDate = document.querySelector(".date-text h1"),
timerTime = document.querySelector(".date-text h3"),
progressEn = document.querySelector(".progress-text h1 span"),
progressKo = document.querySelector(".progress-text h3 span"),
progressBar = document.querySelector(".progress-bar-now")

const remainingSecondsInit = secondsUntil(`2025-12-31T23:59:59`),
elapsedSecondsInit = secondsSince(`2024-01-01T00:00:00`)

const yearProgress = ((elapsedSecondsInit / remainingSecondsInit) * 100).toFixed(6)

setTimeout(counterInit(progressEn, progressKo, yearProgress), 1000)