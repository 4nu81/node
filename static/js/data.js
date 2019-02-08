function button_post_click() {
    var req = new XMLHttpRequest();
    var url = '/data';
    req.open('POST', url, true);
    req.setRequestHeader("Content-Type", 'application/json');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let json = JSON.parse(req.responseText);
            console.log(json);
        }
    };
    var data = JSON.stringify({email:"am@rcs.de", pw:"asd123"});
    req.send(data);
}

function button_update_click() {
    var req = new XMLHttpRequest();
    var url = '/update';
    req.open('POST', url, true);
    req.setRequestHeader("Content-Type", 'application/json');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let json = JSON.parse(req.responseText);
            console.log(json);
        }
    };
    var data = JSON.stringify({obj:{email:"am@rcs.de", pw:"asd123456"}, filter:{email:"am@rcs.de"}});
    req.send(data);
}

function button_get_click() {
    var req = new XMLHttpRequest();
    var url = '/data';
    req.open('GET', url, true);
    req.setRequestHeader("Content-Type", 'application/json');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let json = JSON.parse(req.responseText);
            console.log(json);
        }
    };
    var data = JSON.stringify({email: "am@rcs.de"})
    req.send(data);
}

function button_del_click() {
    var req = new XMLHttpRequest();
    var url = '/del';
    req.open('POST', url, true);
    req.setRequestHeader("Content-Type", 'application/json');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let json = JSON.parse(req.responseText);
            console.log(json);
        }
    };
    var data = JSON.stringify({email: "am@rcs.de"});
    req.send(data);
}