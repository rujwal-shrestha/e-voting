const express = require('express');
const router = express.Router();


const {addMember, viewCount} = require('../controllers/admin');
const {vote} = require('../controllers/user');
const {validate} = require('../controllers/validate');
const {addUser} = require('../controllers/addUser');
const {getMembers} = require('../controllers/getMembers');
const {signIn} = require('../controllers/signin')




router.route('/addMember').post(addMember);
router.route('/addUser').post(addUser);

router.route('/viewCount').get(viewCount);

router.route('/getmembers').get(getMembers);    

router.route("/vote/:id").patch(vote);
router.route("/validate").get(validate);
router.route("/signin").post(signIn)

module.exports = router