import moment from "moment";
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
moment.locale('ko');

function getDayDiff(qnaTime) {
    return moment.utc(qnaTime, "YY-MM-DD HH:mm").fromNow();
}

function getFormatDate(regtime) {
    return moment.utc(new Date(regtime)).format("YYYY.MM.DD HH:mm:ss");
}
export { getDayDiff, getFormatDate };