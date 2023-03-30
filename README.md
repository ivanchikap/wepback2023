# webpack2023
multipages webpack bundle

To add new html file (page) you need:
1. Create file in src folder.
2. Edit webpack.config.js: plugins --> in CopyPlugin --> add one more pattern to copy html file from src to dist folder
3. Add import of new html-file to index.js file.


If you forgot how to manage webpack see package.json file --> script settings.

Browsers list is placed in package.json browserslist.