# auto - Baby Steps

### _For players new to WarriorJS_

## Level 7

_You feel a wall right in front of you and an opening behind you._

> **TIP:** You're not as effective at attacking backward. Use `warrior.feel().isWall()` and `warrior.pivot()` to turn around.

### Floor Map

```
╔══════╗
║>a S @║
╚══════╝

a = Archer (7 HP)
S = Thick Sludge (24 HP)
@ = auto (20 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.pivot()`: Rotates in the given direction (`'backward'` by default).
- `warrior.rescue()`: Releases a unit from his chains in the given direction (`'forward'` by default).
- `warrior.rest()`: Gains 10% of max health back, but does nothing more.
- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).

### Senses

- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.health()`: Returns an integer representing your health.
- `warrior.maxHealth()`: Returns an integer representing your maximum health.
- `warrior.think()`: Thinks out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
