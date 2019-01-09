# auto - Baby Steps

### _For players new to WarriorJS_

## Level 1

_You see before yourself a long hallway with stairs at the end. There's nothing in the way._

> **TIP:** Call `warrior.walk()` to walk forward in the Player's `playTurn` method.

### Floor Map

```
╔════════╗
║@      >║
╚════════╝

@ = auto (20 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.think()`: Thinks out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
