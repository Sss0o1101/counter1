const $counter = document.getElementById("js-counter");

// 要素.addEventListener("イベント名",関数)
document.getElementById("js-button").addEventListener("click", () => {
    let currentCount = parseInt($counter.textContent);
    $counter.textContent = currentCount + 1;
});