// eslint-disable-next-line import/newline-after-import
import debug from 'debug';
const log = debug('app:qlik-handler');
const logError = debug('error:app:qlik-handler');

/**
 * This util is gonna check if 'qlik' exists and return its action
 * If it doesn't exists, wait a time before checking it again
 */

const heartbeat = 1; // Seconds to wait before checking again
const checksLimit = 15;

const qlikPromise = action => new Promise(() => {
  const name = '<qlikJs>';
  let checks = 0;

  const qlikCheck = () => {
    checks += 1;
    if (checks <= checksLimit) {
      log(`Checking ${name} availability, try: ${checks}`);

      if (window.qlikJs && typeof window.qlikJs !== 'undefined') { // eslint-disable-line no-undef
        log(`${name} is available, executing`);

        action();
      } else {
        log(`${name} is not available, waiting a heartbeat`);

        setTimeout(() => {
          qlikCheck();
        }, heartbeat * 1000);
      }
    } else {
      logError(`Too many errors while loading ${name}`);
    }
  };

  qlikCheck();
});

export default qlikPromise;
