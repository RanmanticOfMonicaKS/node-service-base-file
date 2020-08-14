var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    if(req.url ==='/favicon.ico') {
        return res.end();
    }
    var f= '/this上下文module模式/1.html';
    if(req.url.match(/.js$/)) {
        f = '/this上下文module模式'+req.url;
        res.setHeader('content-Type','text/javaScript;charset:utf-8')
    }
    res.writeHead(200);
        if(req.url === '/2') {
            return fs.createReadStream(__dirname+'/this上下文module模式/2.html').pipe(res)
        }
    fs.createReadStream(__dirname+f).pipe(res);
}).listen(3000);

console.log('服务开启，监听http://localhost:3000');
