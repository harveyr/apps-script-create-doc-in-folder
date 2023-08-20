# Apps Script: Create Doc


## Getting started

First, start playing Oingo Boingo's Good For Your Soul. Then and only then...

See generally: https://developers.google.com/apps-script/guides/typescript

### Followed the [clasp codelab](https://codelabs.developers.google.com/codelabs/clasp)

```sh
clasp create --title "Apps Script Create Doc"
```

Chose the `docs` script type.

(Didn't work because I had to enable the Apps Script API at https://script.google.com/home/usersettings.
Then I ran `clasp create` again.)

Continue with the codelab to create and sync a `.gs` script,
which resulted in an `Untitled.js` on my local filesystem.

I renamed that to `index.ts`, since that's the example filename used in the TypeScript guide linked above.

### TypeScript setup

https://www.digitalocean.com/community/tutorials/typescript-new-project

```sh
npm i typescript --save-dev

npx tsc --init
```

