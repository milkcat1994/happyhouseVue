import moment from "moment";

function getDayDiff(qnaTime) {
    return moment(qnaTime, "YY-MM-DD HH:mm").fromNow();
}

function getFormatDate(regtime) {
    return moment(new Date(regtime)).format("YYYY.MM.DD HH:mm:ss");
}
export { getDayDiff, getFormatDate };