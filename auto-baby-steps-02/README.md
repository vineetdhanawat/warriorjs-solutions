# auto - Baby Steps

### _For players new to WarriorJS_

## Level 2

_It's too dark to see anything, but you smell sludge nearby._

> **TIP:** Use `warrior.feel().isEmpty()` to see if there's anything in front of you, and `warrior.attack()` to fight it. Remember, you can only do one action per turn.

> **CLUE:** Add an if/else condition using `warrior.feel().isEmpty()` to decide whether to attack or walk.

### Floor Map

```
╔════════╗
║@   s  >║
╚════════╝

@ = auto (20 HP)
s = Sludge (12 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.think()`: Thinks out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
