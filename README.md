# React Template

This repo will be my template when ever I want to do something with ReactJS.

This template has:

- Yarn 3+
- Vite
- React
- TailwindCSS
- Prettier

## Get started

To get started, future me, please follow these steps. Trust me, it's not that hard.

1. Clone this repo. Because this repo will contain `.yarn/cache/`, this will make cloning slow.
   1. With cached files: `git clone --depth 1 https://github.com/Kunniii/react-template <YOUR_PROJECT_NAME>`
   2. If you don't want to clone the cached files: `git clone --depth 1 -b no-cache https://github.com/Kunniii/react-template <YOUR_PROJECT_NAME>`
2. Update your project name in `package.json`.
3. Remove folder `.git/`
4. Run `git init`
5. Make sure that you have an existing repo on your GitHub. Two ways to get this done:
   1. Go to GitHub website and create one.
   2. Or use `gh` CLI with command `gh repo create` and follow the steps. DO NOT CLONE THE REPO!!
6. Run `git remote add origin git@github.com:<YOUR_NAME>/<YOUR_REPO_NAME>.git` if you have ssh configured. You should have one if haven't!
7. Run `yarn` or `yarn install` to install the dependencies.
8. Add files, commit and push to that repo `git push -u origin main or master i don't know LOL`

## Some error may occur

**I cannot commit, help me**
Oh, yes, because this repo use Husky for linting by using Prettier before commit, you will need to install the dependencies.

**`Prettier` is not working**
Make sure that you installed the dependecies. If you use `npm`, just give up, take a nap, then, come back and run `yarn` or `yarn install`.

### I don't know, maybe you will find some error in the future

In that case, let's just create an issue.
