// eslint-disable-next-line import/newline-after-import
import debug from 'debug';
const log = debug('app:components:qlik');
// const logError = debug('error:app:components:qlik');

import qlikDemoTemplate from '../views/qlik-demo.html';
import qlikHandler from '../utils/qlik-handler';
import senseConnection from '../config/senseConnection';

const QlikCtrl = ([() => {
  qlikHandler(() => {
    // eslint-disable-next-line no-undef
    const senseApp = window.qlikJs.openApp(senseConnection.appName, senseConnection);
    log('senseApp has been created', senseApp);

    senseApp.visualization.create('barchart',
      ['YEAR', '=Count(CONTRIB_ID)'],
      { title: 'Contribs' },
    ).then((elem) => {
      log('Graph has been created');
      elem.show('sense-demo');
    });
  });
}]);

export default {
  template: qlikDemoTemplate,
  controller: QlikCtrl,
};
