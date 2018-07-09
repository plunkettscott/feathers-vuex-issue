# How to reproduce

## Install deps

1. `yarn install` in both api/ and ui/

## Start API

1. `cd api/`
2. `node .`

## Start UI

1. `cd /ui`
2. `yarn dev`

## Visit UI

Go to [http://localhost:8080](the UI at localhost:8080)

## See errors in console

The errors in the console will state that person.fruit is null. I would expect this to be the fruit object from the /fruits service, according to fruitId, according to the documentation.


