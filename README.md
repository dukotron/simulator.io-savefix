# simulator.io-savefix-extension

This extension was created in order to fix the save functionality of https://simulator.io (by Bastian Born) because it is a cool website with only one quite annoying bug.

Right now, when you create a user account on the mentioned website you must "jump through hoops" to get the "Fork" save feature to work. On top of that you can get stuck on an infinite loading screen and your data might be lost if you haven't used the "Link" save feature.

This extension changes some of the functionality of the website. First, to make the feature work, it overrides the behavior of the "Create new logic circuit" button on the homepage in case the user enters that way. The difference is it uses the hyper link to access the editor instead of the built-in web application transition. The next change that was made is that the extension removes the "Link" button and instead makes the "Fork" button generate the save link in one click. The link is then stored in the extension, so it can easily be accessed from the extension's pop-up window.
