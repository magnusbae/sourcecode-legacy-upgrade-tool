angular.module('samtykkeTredjepartApp', [
  'ngSanitize',
  'gje.loader',
  'headers',
  'tracking',
  'gjeLabels',
  'gje.klientidentifisering',
  'samtykkeModule',
  'config',
  'shb',
  'instillingerModule'
]);


angular.module('gje.klientidentifisering').constant('KLIENTNAVN','Samtykke-Tredjepart');
