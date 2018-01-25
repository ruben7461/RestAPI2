const Users = require('../models/usuarios');

module.exports = function (app) {

app.get('/' , (req, res) => {
	Users.getUsers((err, data) => {
		res.status(200).json(data);
	});
});

}