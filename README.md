## Introduction

This site serves as a tutorial for how to get started integrating the Braze Web SDK.

The framework of this site (HTML, CSS, Javascript) is already build out such that all that needs to be added is the Braze SDK and relevant methods to start logging user data. You don't need to know much about HTML or Javascript to get going here. 

This was ideated and created by Seth Tillis @sdtilliss as part of his 2019 Summer Internship

## Instructions

1) Clone or download the repo to your computer.

* There are two files that require editing: `index.html` and `script.js` They can be edited in any text editor or IDE. Check out [Sublime](https://www.sublimetext.com/) or [atom](https://atom.io/) if you don't have a text editor already

2) Once cloned/downloaded open up `index.html` and integrate the Braze SDK by following the instructions on our [github] (https://github.com/Appboy/appboy-web-sdk#getting-started). Be sure to change the  base URL [initialization](https://js.appboycdn.com/web-sdk/2.4/doc/module-appboy.html#.initialize) options to target our staging environment sondheim.braze.com.

3) Now that you have the SDK loaded, click on the `index.html` file to open it in your browser. Open your developer console (CMD + Option + J on Chrome/Mac) and type in `appboy` you should see a response that looks like the below which means you've successfully implemented. If you don't see that response, check step 1 again. 

```
{AF: ƒ, initialize: ƒ, destroy: ƒ, getDeviceId: ƒ, toggleAppboyLogging: ƒ, …}
```


4) Next, you'll want to go through the `script.js` file to add the Braze SDK methods to the javascript to actually collect user data in Braze when you click on the buttons. Throughout the `script.js` file, you'll find comments that tell you what to do. Example:

  > //TODO ADD CODE HERE. Pass the email variable into the Braze email capture method.

  You'll need to use your resources to identify which Braze method needs to be called here and insert it appropriately.

5) Once you've gone through and updated the `script.js` file, open `index.html` back up in your browser and start sending data by entering info in the text fields and clicking the submit buttons. You can look in the Braze dashboard to find your user in your target environment and validate that the data is set appropriately
