# FBLA-Quizzes 

A mobile app quiz to test your knowledge of FLBA in 5 different categories: history, National Leadership Conference, national officers, parlimentary procedure, and sponsors.  The sixth category "random" consists of questions that can come from any of the previously mentioned categories.  You can get view the app as a [FBLA-quizzes web app] host on Github.  Since I didn't pay for any developer license, the app is not on the Apple app store, the Google Play Store, or the Microsoft Store, and consequently, it is not a trusted app.  Get the app from the [FBLA-quizzes releases] page, then follow the appropriate directions below for your device to install it.

A [PDF of documentation and screenshots] are also included.

Enjoy!

## Installation

#### Android Installation

- Allow your device to install from unknown sources:
	. Open the device settings. Look for a gear icon in the notification shade near the top left corner and tap on it.  
	. Scroll down to the Security section and tap to open it.
	. Scroll down to the entry labeled Unknown sources and read the subtext because you should always read any and all subtext in a "security" section of settings.
	Read the pop-up box that tells you Google isn't responsible if you install apps from places they do not explicitly trust and click OK to enable the setting.
 
- Go to the [FBLA-quizzes releases] page, copy the link to the latest android release

- Copy the link into a browser to download it and use the APK installer to install it

- Click yes to accept (a lot of them) and acknowledge that this is an untrusted app.


#### IOS Installation

I searched all over to find a way to get the certificate without having a paid ($99) Apple developer account, tried out many of the directions to no avail.  So as of February 22, 2019, there is no IOS distribution of this app.  For my own interest, I will keep searching and trying to find a way, so keep an eye on this project for an IOS release.  The app does run though on the [Monaca Simulator].


#### Windows Installation

- Go to the [FBLA-quizzes releases] page and download the latest windows release

- Open the folder that you downloaded the APPX installation file

- Right click on APPX file
- Click Properties
- Click Digital Signatures
- Select the Apache Cordova Signature from the list
- Click Details
- Click View Certificate
- Click Install Certificate
- Click Local Machine

At this point, you will be asked to log in as an administrator.

- Click Place all certificates in the following store
- Click Browse
- Click Trusted Root Certification Authorities
- Click OK
- Click Next
- Click Finish

The system will notfiy you that the import is successful.  Click OK.

Then double click on the downloaded APPX file to install it.


[FBLA-quizzes web app]: https://ctdoan.github.io/FBLA-quizzes/www/
[FBLA-quizzes releases]: https://github.com/ctdoan/FBLA-quizzes/releases
[PDF of documentation and screenshots]: https://github.com/ctdoan/FBLA-quizzes/blob/master/FBLA-quizzes-docs-and-screenshots.pdf
[Monaca Simulator]: https://monaca.io/



