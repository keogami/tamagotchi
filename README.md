# tamagotchi
A text based tamagotchi for PiThon

## What the heck is tamagotchi
Its some old japanese egg-shaped toy which has a virtual pet inside it. You can play with it; the only goal being keeping it alive.

## What the heck is *this*
This is a minimal text based recreation of what I think tamagotchi was like, cuz I never really got to play with it.

# Technically,

## Tech stack
The view is written in vanilla HTML and CSS; and the iteractive parts are written in Typescript which is compiled down to Javascript.

## Directory structure
- The Typescript source is in the `src/ts` directory.
- The Javascript distribution is in the `dist` directory.

## How does it work
The `tama` (aka the pet) has a `state`.
It also has three peices of data:
- (L) Love
- (H) Health
- (R) Some random garbage generated each turn

These three things are passed to a `state transition` function, which computes the `state` of our cute little `tama`.

Each action that you perform changes either L or H, which are feeded back into the state transitioner for the next `state`.

## The State Transition function
This is the brain/heart of our `tama`; the more interesting the ST function, the cuter our `tama` becomes.
So, I welcome y'all to hack into it and have fun with it~

You can learn more about State Machines here: https://en.wikipedia.org/wiki/Finite-state_machine/.

# Final words
Happy coding~
