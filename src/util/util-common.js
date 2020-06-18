function padZero(target, width) {
    target = target + '';
    return target.length >= width ? target : new Array(width - target.length + 1).join('0') + target;
}

// 출처: https://fruitdev.tistory.com/160 [과일가게 개발자]
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { padZero, numberWithCommas };