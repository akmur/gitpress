# ParcelJS Starter Kit

This is a front-end development starter kit that uses [Parcel](https://en.parceljs.org/).
Linting is done using [standardJS](https://standardjs.com/). 
The use of standardJS editor extensions is recommended (for VSCode: [vscode-standardjs](https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs), [vscode-standardjs-snippets](https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets), [vscode-react](https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard) ).

Included is a test /src folder (with JS and Scss) and a test index.html.

### How does it work

1. Install Node on your machine

    I recommend using [NVM](https://github.com/creationix/nvm) or [nodenv](https://github.com/nodenv/nodenv), but you can also use the binaries from the [Node](https://nodejs.org/en/) website.

2. Open your terminal and go to the folder containing this project, then run

    ```bash
    npm install
    ```

3. Now you have at your disposal two main npm commands:

    ```bash
    npm run dev
    ```

    which will start Parcel (which in turn will compile your js and scss, watch for file changes and serve your index.html).

    ```bash
    npm run dist
    ```

    will generate production files.

___

Favicon made by [Freepik](http://www.freepik.com "Freepik") from [www.flaticon.com](https://www.flaticon.com/ "Flaticon") is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/ "Creative Commons BY 3.0")
