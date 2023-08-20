# Apps Script: Create Doc

This is an experimental Apps Script Add-on to provide a menu command
that creates a new Doc in the same folder as your current one.

The idea is that you'd select text, run the menu command,
and your selection will turn into a link to a new doc whose title is the selected text
(or an existing doc with that title if it's found).

I got this general idea working in
[another project](https://github.com/harveyr/apps-script-task-doc),
and now I'm trying to make it a proper, \[maybe] published Workspace Add-on.

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

At this point, `clasp push --watch` ran without errors,
but `clasp push` complained about a missing `package.json`.
Oopsie.

### NPM and TypeScript setup

https://www.digitalocean.com/community/tutorials/typescript-new-project

```sh
npm init

npm i typescript --save-dev

npx tsc --init
```

### Create Apps Script deployment

Add-on type needs a GCP project. I created a new GCP project for this.
I also had to configure the OAuth consent screen within that project
and add myself as a test user.

Once that was complete, I was able to successfully submit my project ID in the Apps Script project config.

After that, I was able to successfully create an Apps Script Deployment with the *Add-on* type.

Now, how to install it into my Docs editor...