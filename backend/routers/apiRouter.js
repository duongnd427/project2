const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./apiUserRouter');
const indwellRouter = require('./apiIndwellRouter');
const absentRouter = require('./apiAbsentRouter');
const logRouter = require('./apiLogRouter');
const provincesRouter = require('./apiProvinces');
const districtsRouter = require('./apiDistricts');
const wardsRouter = require('./apiWards');

apiRouter.use('/', (req, res, next) => {
    next();
});

apiRouter.use('/users', userRouter);
apiRouter.use('/absent', absentRouter);
apiRouter.use('/indwell', indwellRouter);
apiRouter.use('/log', logRouter);
apiRouter.use('/provinces', provincesRouter);
apiRouter.use('/districts', districtsRouter);
apiRouter.use('/wards', wardsRouter);

module.exports = apiRouter;