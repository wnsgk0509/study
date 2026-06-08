let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

function changeLink(Url) {
    let parts = Url.split("://");
    
    if (parts.length < 2) {
        return "올바른 URL 형식이 아닙니다: " + Url;
    }

    let protocol = parts[0]; // "http" 또는 "https"
    let domain = parts[1];   // "human.or.kr"
    let addUrl = "secure.";  // 기본값 설정


    if (protocol.length === 4) {
        protocol = "https";
        addUrl = "open.";
    }
    return protocol + "://" + addUrl + domain;
}



console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));