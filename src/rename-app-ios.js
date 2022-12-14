#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var xml2js = require('xml2js');
var parser = new xml2js.Parser();

const plist = require("simple-plist");


module.exports = function(context) {

  // Make sure ios platform is part of build
  if (!context.opts.platforms.includes('ios')) return;

  // read app name from config.xml
  const configXml = fs.readFileSync(path.join(context.opts.projectRoot, 'config.xml'), 'UTF-8');
  parser.parseString(configXml, function (err, data) {
    if(err) {
      console.log(err);
      return;
    }
    const appName = String(data.widget.name);

    // read ios [APP_NAME]-Info.plist
    const infoPlistPath = path.join(context.opts.projectRoot, 'platforms', 'ios', appName, appName + '-Info.plist');
    let infoPlist = plist.readFileSync(infoPlistPath);

    infoPlist.CFBundleDisplayName = infoPlist.CFBundleName;

    // write data back to [APP_NAME]-Info.plist
    plist.writeFileSync(infoPlistPath, infoPlist);

  });

};