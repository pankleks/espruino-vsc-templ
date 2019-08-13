Using Espruino in VSC + TSC

# prerequisites

- `npm install espruino -g`

> Under Windows you may need to install `npm install windows-build-tools -g` for `espruino` to build properly

# usage

1. in `src` folder put all `.ts` files (you can have multiple)
1. in `board.json` you can set your board port and speed
1. `ctrl+shift+b` to build with `tsc`, it will generate single file `Output.js`
1. open `NPM SCRIPTS` buttom of VSC explorer tree
1. use `upload` to send upload to the board
1. use `console` to open REPL

> you can adjust `tsconfig.json` to change `target` to `es5` if some of `es6` fatures are not yet supported

# limitations

- lot, this is very first attempt of marying it all togheter - so don't expect much:)
- it uses Espruino types definition https://www.npmjs.com/package/@types/espruino done by https://github.com/stasberkov, then changed manually by me to allow non-modular compilation
- not tested under linux