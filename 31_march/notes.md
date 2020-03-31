# https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript

* async and defer both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked by the scripts.
* If your scripts should be run immediately and they don't have any dependencies, then use async.
* If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding <script> elements in the order you want the browser to execute them.


https://javascript.info/script-async-defer

## in short, defer is used for scripts that need the whole DOM and/or their relative execution order is important. And async is used for independent scripts, like counters or ads.


https://bitsofco.de/async-vs-defer/
