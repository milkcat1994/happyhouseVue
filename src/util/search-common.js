function bestSearch(item, searchText) {
    var searchArr = searchText.split(' '),
        result; // 결과값 저장

    let tmp = 0;
    searchArr.forEach(function(text, index) {
        if (item.indexOf(text) != -1) tmp++;
    });

    if (tmp == searchArr.length) {
        return true;
    }
    return false;
}

export { bestSearch };