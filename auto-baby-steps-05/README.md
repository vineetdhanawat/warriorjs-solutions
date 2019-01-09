# auto - Baby Steps

### _For players new to WarriorJS_

## Level 5

_You hear cries for help. Captives must need rescuing._

> **TIP:** Combine `warrior.feel().getUnit().isEnemy()` and `warrior.feel().getUnit().isBound()` to see if there's a captive, and `warrior.rescue()` to rescue him. Don't attack captives.

> **CLUE:** Don't forget to constantly check if you are being attacked. Rest until your health is full if you're not taking damage.

### Floor Map

```
╔═══════╗
║@ CaaSC║
╚═══════╝

@ = auto (20 HP)
C = Captive (1 HP)
a = Archer (7 HP)
S = Thick Sludge (24 HP)
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
