import { Bumper } from 'conventional-recommended-bump';

const bumper = new Bumper()
bumper.loadPreset('angular')
bumper.commits({
  path: ['./']
})
bumper.tag({
  prefix: "v"
})

const bump = await bumper.bump()

console.log(bump)

console.log("blocked");
