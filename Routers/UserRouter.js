const router = express.Router();
const User = require('../Modules/User');

const { addUser, getUsers } = require('../controller/UserController');
router.post("/add-user", addUser);
router.get("/Users", getUsers);
module.exports = router;