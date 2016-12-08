import React from 'react';
import Router from 'react-router';
import routes from 'routes';

require('../css/main.scss');

Router.run(routes, function(Root) {
  React.render(<Root />, document.getElementById('app'));
});
