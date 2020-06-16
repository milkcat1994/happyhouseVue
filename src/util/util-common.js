function padZero(target, width) {
    target = target + '';
    return target.length >= width ? target : new Array(width - target.length + 1).join('0') + target;
}
export { padZero };