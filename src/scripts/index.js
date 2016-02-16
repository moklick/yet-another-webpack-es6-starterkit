'use strict';

if (module.hot) {
  module.hot.accept();
}

import $ from 'jquery';

import 'babel-polyfill';
import '../styles/index.scss';

import dataSrc from 'file?name=[path][name].[ext]!../data/data.json';

$.getJSON(dataSrc)
  .then((res) => {
    console.log(res);
  });