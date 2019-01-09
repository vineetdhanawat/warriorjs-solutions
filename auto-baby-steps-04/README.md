# auto - Baby Steps

### _For players new to WarriorJS_

## Level 4

_You can hear bow strings being stretched._

> **TIP:** No new abilities this time, but you must be careful not to rest while taking damage. Save a `this.health` variable and compare it on each turn to see if you're taking damage.

> **CLUE:** Set `this.health` to your current health at the end of `playTurn`. If this is greater than your current health next turn, then you know you're taking damage and shouldn't rest.

### Floor Map

```
╔═══════╗
║@ Sa S>║
╚═══════╝

@ = auto (20 HP)
S = Thick Sludge (24 HP)
a = Archer (7 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.rest()`: Gains 10% of max health back, but does nothing more.
- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.health()`: Returns an integer representing your health.
- `warrior.maxHealth()`: Returns an integer representing your maximum health.
- `warrior.think()`: Thinks out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
