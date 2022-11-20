# cordova-plugin-app-name-letsworks
I created this plugin to address the issue of spaces in the names of my Cordova apps. 
 
## How does it work?
It adds an after_prepare hook that changes the value of app_name in strings.xml for Android and updates the "Project Name" and 
"Project Display Name" and "Bundle Display Name" in the plist for iOS.

## How do I install it?

If you're like me and using [Cordova CLI](http://cordova.apache.org/):
```
cordova plugin add https://github.com/queenyjina/cordova-plugin-app-name-letsworks.git --variable APP_NAME="냠냠"
```

or

```
phonegap local plugin add https://github.com/queenyjina/cordova-plugin-app-name-letsworks.git --variable APP_NAME="냠냠"
```




