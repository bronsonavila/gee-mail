start({"html":"<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width\">\r\n  <title>JS Bin</title>\r\n</head>\r\n<body>\r\n<h1 id=\"car\">Lings Cars</h1>\r\n  \r\n  \r\n  <button id=\"price\">Show Price</button>\r\n</body>\r\n</html>","css":"img {\n  animation: 1s swivel infinite;\n}","javascript":"//longer version\r\nvar h1Elem = document.getElementById('car');\r\nh1Elem.addEventListener('click', showCar);\r\n\r\nfunction showCar (){\r\n  \r\n  var imgElem = document.createElement('img');\r\n  imgElem.src = \"https://www.cstatic-images.com/car-pictures/xl/usc30frc171a021003.png\";\r\n  document.body.appendChild(imgElem);\r\n  \r\n}\r\n\r\n//shorter version\r\nprice.addEventListener('click', function(){\r\n    var pElem = document.createElement('p');\r\n  pElem.innerHTML = '$220,000';\r\n  document.body.appendChild(pElem);\r\n  \r\n\r\n})","url":"http://jsbin.com/wumoha/2"}, {"state":{"title":"JS Bin","description":"","token":"3HLR8dKV-OUTXuriNLf2uXKIEN5rOSnlgqdQ","stream":false,"streaming":true,"code":"wumoha","revision":2,"processors":{"html":"html","css":"css","javascript":"javascript"},"checksum":null,"metadata":{"archive":0,"created":"2018-04-24T06:58:03.000Z","last_login":"2018-04-24T06:58:03.000Z","name":"hkotak","pro":0,"summary":"Lings Cars Show Price","updated":"2018-04-24T06:58:03.000Z","visibility":"public","last_updated":"2018-05-03T05:53:58.000Z"},"latest":true},"name":"JS Bin","settings":{"panels":["html","javascript","css","live"]},"user":{"name":"hkotak","bincount":10,"settings":{"panels":["html","javascript","live"],"editor":{},"font":14,"addons":{"closebrackets":true,"highlight":false,"vim":false,"emacs":false,"trailingspace":false,"fold":false,"sublime":false,"tern":false,"activeline":true,"matchbrackets":false},"includejs":true,"gui":{"toppanel":false}},"github_token":"a1bb41ea3b1163a0fcda169ec8a4c73347134f11"}}, this, document);
