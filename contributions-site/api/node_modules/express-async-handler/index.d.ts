import express = require('express');
import core = require('express-serve-static-core');

declare function expressAsyncHandler<
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
>(handler: (...args: Parameters<express.RequestHandler<P, ResBody, ReqBody, ReqQuery>>) => void | Promise<void>):
  express.RequestHandler<P, ResBody, ReqBody, ReqQuery>;

declare namespace expressAsyncHandler {

}

export = expressAsyncHandler;
