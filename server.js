var express = require('express')
var path = require('path')
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

var PORT = process.env.PORT || 8080;

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './app/public/404.html'));
});

app.listen(PORT, () => console.log(`==> Listening on port ${PORT}`));

