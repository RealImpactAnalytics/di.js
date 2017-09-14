// PUBLIC API

const {Injector} = require('./injector');
const {
  annotate,
  Inject,
  InjectLazy,
  InjectPromise,
  Provide,
  ProvidePromise,
  SuperConstructor,
  TransientScope,
  ClassProvider,
  FactoryProvider
} = require('./annotations');

module.exports = {
  Injector,
  annotate,
  Inject,
  InjectLazy,
  InjectPromise,
  Provide,
  ProvidePromise,
  SuperConstructor,
  TransientScope,
  ClassProvider,
  FactoryProvider
};
