const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./apiUserRouter');
const indwellRouter = require('./apiIndwellRouter');
const absentRouter = require('./apiAbsentRouter');
const logRouter = require('./apiLogRouter');

apiRouter.use('/', (req, res, next) => {
    // console.log('mid');
    next();
});

apiRouter.use('/users', userRouter);
apiRouter.use('/absent', absentRouter);
apiRouter.use('/indwell', indwellRouter);
apiRouter.use('/log', logRouter);

module.exports = apiRouter;