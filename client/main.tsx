import React from 'react';
import { Meteor } from 'meteor/meteor';
// import { renderToString } from 'react-dom/server';
// import { onPageLoad } from 'meteor/server-render';
import { render } from 'react-dom';
import { App } from '/imports/ui/App'

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
  // onPageLoad(sink => {
  //   sink.renderIntoElementById("app", renderToString(
  //     <App location={sink.request.url} />
  //   ));
  // });
});
