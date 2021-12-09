var express = require('express');
const {registerCompany , reregisterCompany , loginCompany} = require('../controllers/Auth');
const {getCompanyDetails , getCompanyJobs , showWelcome} = require('../controllers/Company');
const { getJobById , addJob , addFreeJob , deleteJob , editJob} = require('../controllers/Jobs');
const { addTransaction , addJobPayment , verifyPayment , stripePayment } = require('../controllers/payments');
const {valdiateJobDetails , validateCompanyRegistration } = require('../middlewares/JobVerification')

const router  = express.Router();

//Default
router.get('/', showWelcome)

//Auth
router.post('/register',validateCompanyRegistration,registerCompany)
router.post('/login', loginCompany)
router.patch('/reregister', reregisterCompany)


//Company
router.get('/company/:id', getCompanyDetails)
router.get('/jobs/:id' , getCompanyJobs)

//Jobs
router.post('/add-job' ,valdiateJobDetails,addJob)
router.get('/job/:id' , getJobById)
router.delete('/delete-job/:id' , deleteJob)
router.post('/add-free-plan', addFreeJob)
router.patch('/edit-job/:id&cid' , editJob)

//Payment

        //Razorpay
        router.post('/add-transaction',addTransaction)
        router.post('/addjobpayment', addJobPayment)
        router.post('/verify-payment', verifyPayment)
        
        //Stripe
        router.post('/create-payment-intent' , stripePayment)
        



module.exports = router;