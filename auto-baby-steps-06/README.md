# auto - Baby Steps

### _For players new to WarriorJS_

## Level 6

_The wall behind you feels a bit further away in this room. And you hear more cries for help._

> **TIP:** You can walk backward by passing `'backward'` as an argument to `walk()`. Same goes for `feel()`, `rescue()` and `attack()`. Archers have a limited attack distance.

> **CLUE:** Walk backward if you're taking damage from afar and don't have enough health to attack. You may also want to consider walking backward until you hit a wall. Use `warrior.feel().isWall()` to see if there's a wall.

### Floor Map

```
╔════════╗
║C @ S aa║
╚════════╝

C = Captive (1 HP)
@ = auto (20 HP)
S = Thick Sludge (24 HP)
a = Archer (7 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
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
