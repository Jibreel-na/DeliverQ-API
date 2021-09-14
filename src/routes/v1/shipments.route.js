const express = require('express');
const authInfo = require('../../middlewares/authInfo');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const shiopmentsValidation = require('../../validations/shiopments.validation');
const shipmentsController = require('../../controllers/shipments.controller');
const router = express.Router();
const { admin, driver, normal } = require('../../config/contant');




router
  .route('/assignDriver/:id')
  .put(auth(admin), validate(shiopmentsValidation.assignDriver), shipmentsController.assignDriver)
router
  .route('/assignCompany/:id')
  .put(auth(admin), validate(shiopmentsValidation.assignCompany), shipmentsController.assignCompany)
router
  .route('/acceptOrReject/:id')
  .put(auth(admin), validate(shiopmentsValidation.acceptOrReject), shipmentsController.acceptOrReject)


router
  .route('/cancelShipment/:id')
  .put(auth(admin), validate(shiopmentsValidation.cancelShipment), shipmentsController.cancelShipment)

router
  .route('/driver/updateStatus/:id')
  .put(auth(driver), validate(shiopmentsValidation.UpdateStatus), shipmentsController.updateStatus)

router
  .route('/tag/:tag')
  .get(authInfo(), validate(shiopmentsValidation.getTag), shipmentsController.getShipmentByTag)


router.post('/guest/otpSend', validate(shiopmentsValidation.otpSend), shipmentsController.otpSend);
router
  .route('/guest/')
  .post(authInfo(), validate(shiopmentsValidation.createGuest), shipmentsController.createShipmentsGuest)


router
  .route('/')
  .post(authInfo(), validate(shiopmentsValidation.create), shipmentsController.createShipments)
  .get(auth(normal), validate(shiopmentsValidation.query), shipmentsController.getShipmentss);

router
  .route('/orderCount')
  .get(auth(normal), validate(shiopmentsValidation.query), shipmentsController.getShipmentsCount);


router
  .route('/:id')
  .get(auth(normal), validate(shiopmentsValidation.get), shipmentsController.getShipments)
  .put(auth(admin), validate(shiopmentsValidation.update), shipmentsController.updateShipments)
  .delete(auth(admin), validate(shiopmentsValidation.delete_shipments), shipmentsController.deleteShipments);

router
  .route('/deliveriedID')
  .post(function(req, res) {
    console.log(req.files.image.originalFilename);
    console.log(req.files.image.path);
    fs.readFile(req.files.image.path, function (err, data){
      var dirname = "/home/rajamalw/Node/file-upload";
      var newPath = dirname + "/uploads/deliveriedID" + 	req.files.image.originalFilename;
      fs.writeFile(newPath, data, function (err) {
        if(err){
          res.json({'response':"Error"});
        }else {
          res.json({'response':"Saved"});
        }
      });
    });
  });

router
  .route('/deliveriedID/:id')
  .get(function(req, res) {
    file = req.params.file;
		var dirname = "/home/rajamalw/Node/file-upload";
		var img = fs.readFileSync(dirname + "/uploads/" + file);
		res.writeHead(200, {'Content-Type': 'image/jpg' });
		res.end(img, 'binary');
  });


module.exports = router;
