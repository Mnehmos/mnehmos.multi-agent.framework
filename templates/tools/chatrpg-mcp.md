# ChatRPG MCP Tool Instructions

> D&D 5e MCP Server for AI Dungeon Masters - 30+ tools for tabletop gaming

## Overview

ChatRPG provides comprehensive D&D 5e mechanics for LLM-powered tabletop gaming. Use these tools to manage characters, run combat encounters, track spells, roll dice, and create immersive gaming experiences.

**Features:**
- SRD-compliant D&D 5e mechanics
- ASCII art output for terminal aesthetics
- Persistent character and encounter storage
- Real-time combat tracking

## Tool Categories

### Dice Rolling

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `roll_dice` | Roll any dice expression | Ability checks, damage, random events |

**Dice Notation:**
- Basic: `1d20`, `2d6`, `4d6+4`
- Keep highest: `4d6kh3` (roll 4d6, keep highest 3)
- Advantage/disadvantage: Use `advantage: true` or `disadvantage: true`
- Batch: Roll multiple expressions at once

**Examples:**
```typescript
// Simple roll
await roll_dice({ expression: "1d20+5", reason: "Attack roll" });

// Ability score generation
await roll_dice({ expression: "4d6kh3", reason: "Rolling for STR" });

// Roll with advantage
await roll_dice({ expression: "1d20", advantage: true, reason: "Stealth check" });

// Batch roll for multiple attacks
await roll_dice({
  batch: [
    { expression: "1d20+7", label: "Attack 1" },
    { expression: "1d20+7", label: "Attack 2" },
    { expression: "2d6+4", label: "Damage" }
  ],
  reason: "Fighter's extra attack"
});
```

### Character Management

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `create_character` | Full D&D 5e character creation | New player or NPC |
| `get_character` | Retrieve by ID/name | Checking character stats |
| `update_character` | Modify stats | HP changes, equipment |
| `delete_character` | Remove character | Cleanup |
| `level_up` | Level progression | Character advancement |
| `take_rest` | Short/long rest | Recovery mechanics |
| `manage_spell_slots` | Spell slot tracking | Spellcasters |
| `roll_check` | Skill/ability/save rolls | Using character stats |

**Create Character Example:**
```typescript
await create_character({
  name: "Thorin",
  race: "Dwarf",
  class: "Fighter",
  level: 5,
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  background: "Soldier",
  equipment: ["Battleaxe", "Chain Mail", "Shield"],
  skillProficiencies: ["Athletics", "Intimidation"]
});
```

**Roll Check with Character:**
```typescript
// Skill check
await roll_check({
  characterName: "Thorin",
  checkType: "skill",
  skill: "Athletics",
  dc: 15
});

// Saving throw
await roll_check({
  characterName: "Thorin",
  checkType: "save",
  ability: "con",
  dc: 14
});

// Attack roll
await roll_check({
  characterName: "Thorin",
  checkType: "attack",
  advantage: true
});
```

### Combat System

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `create_encounter` | Initialize combat | Starting a fight |
| `get_encounter` | Retrieve state | Checking combat status |
| `execute_action` | Perform combat action | Attacks, spells, etc. |
| `advance_turn` | Next combatant's turn | Turn management |
| `end_encounter` | Close combat | Combat finished |
| `roll_death_save` | Death saving throw | Character at 0 HP |
| `manage_condition` | Apply/remove conditions | Status effects |
| `manage_encounter` | Composite operations | Complex combat management |
| `render_battlefield` | ASCII tactical map | Visualize positions |
| `modify_terrain` | Add/remove terrain | Dynamic battlefield |

**Create Encounter Example:**
```typescript
await create_encounter({
  participants: [
    { 
      characterName: "Thorin",
      position: { x: 5, y: 5 }
    },
    {
      id: "goblin-1",
      name: "Goblin",
      hp: 7,
      maxHp: 7,
      ac: 15,
      position: { x: 10, y: 5 },
      isEnemy: true,
      initiativeBonus: 2
    }
  ],
  terrain: {
    width: 20,
    height: 20,
    obstacles: ["8,5", "8,6"],
    difficultTerrain: ["6,5", "6,6", "7,5"]
  }
});
```

**Execute Actions:**
```typescript
// Attack
await execute_action({
  encounterId: "enc-123",
  actorName: "Thorin",
  actionType: "attack",
  targetName: "Goblin",
  weaponType: "melee"
});

// Cast spell
await execute_action({
  encounterId: "enc-123",
  actorName: "Gandalf",
  actionType: "spell",
  spellName: "Fireball",
  spellSlot: 3,
  aoeCenter: { x: 10, y: 10 },
  aoeRadius: 20,
  aoeShape: "sphere"
});

// Move
await execute_action({
  encounterId: "enc-123",
  actorName: "Thorin",
  actionType: "move",
  moveTo: { x: 8, y: 5 }
});
```

### Magic System

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `manage_concentration` | Track concentration | Concentration spells |
| `manage_aura` | Spirit Guardians, Paladin auras | Aura effects |
| `use_scroll` | Spell scroll mechanics | Using scrolls |
| `synthesize_spell` | Improvised magic | Creative spellcasting |

**Concentration Example:**
```typescript
// Set concentration
await manage_concentration({
  characterId: "wizard-1",
  operation: "set",
  spellName: "Hold Person",
  duration: 10,
  targets: ["goblin-1", "goblin-2"]
});

// Check after damage
await manage_concentration({
  characterId: "wizard-1",
  operation: "check",
  damage: 15  // DC = max(10, 15/2) = 10
});
```

### Spatial Mechanics

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `measure_distance` | Grid-based distance | Range checks |
| `calculate_aoe` | Area of effect | Spell/ability areas |
| `check_line_of_sight` | Obstacle detection | Targeting |
| `check_cover` | Cover bonuses | AC/DEX save bonuses |
| `place_prop` | Interactive objects | Barrels, doors, etc. |
| `calculate_movement` | Pathfinding | Movement planning |

**Examples:**
```typescript
// Measure distance
await measure_distance({
  encounterId: "enc-123",
  from: "Thorin",
  to: "goblin-1"
});

// Calculate fireball area
await calculate_aoe({
  encounterId: "enc-123",
  shape: "sphere",
  origin: { x: 10, y: 10 },
  radius: 20
});

// Check cover
await check_cover({
  encounterId: "enc-123",
  attacker: { x: 5, y: 5 },
  target: { x: 10, y: 10 }
});
```

### World & Session

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `manage_location` | Location graph | World building |
| `move_party` | Travel between locations | Exploration |
| `manage_party` | Party composition | Group management |
| `manage_inventory` | Item management | Equipment tracking |
| `manage_notes` | Session notes | DM notes |
| `get_session_context` | State snapshot | Session overview |

**Location Example:**
```typescript
// Create locations
await manage_location({
  operation: "create",
  locationId: "tavern",
  name: "The Rusty Dragon",
  locationType: "building",
  description: "A warm and inviting tavern",
  lighting: "bright"
});

await manage_location({
  operation: "create",
  locationId: "forest",
  name: "Darkwood Forest",
  locationType: "wilderness",
  description: "A dense and mysterious forest",
  lighting: "dim",
  hazards: ["difficult terrain", "hidden traps"]
});

// Link locations
await manage_location({
  operation: "link",
  fromLocationId: "tavern",
  toLocationId: "forest",
  connectionType: "passage"
});

// Move party
await move_party({
  operation: "move",
  toLocationId: "forest"
});
```

## ASCII Art Output

All output uses box drawing for immersive display:

```
╔═══════════════════════ CHARACTER SHEET ════════════════════════╗
║                             Thorin                              ║
║                  PC - Dwarf Fighter (Level 5)                   ║
║                                                                 ║
║                   HP: [████████████████] 45/45                  ║
║                                                                 ║
║ ────────────────────────────────────────────────────────────── ║
║                                                                 ║
║ AC         │ Speed        │ Initiative   │ Prof Bonus          ║
║ 18         │ 25 ft        │ +1           │ +3                  ║
╚════════════════════════════════════════════════════════════════╝
```

## Integration with Multi-Agent Framework

### Game Master Mode (Custom)
Create a custom "Game Master" mode using ChatRPG:
- Run entire D&D sessions
- Manage NPCs and encounters
- Track world state

### Creative Applications
- Interactive fiction
- Procedural content generation
- Game testing and simulation

### Educational Use
- Teach D&D rules through examples
- Demonstrate probability and statistics
- Practice storytelling

## Best Practices

1. **Character Management**
   - Create characters before encounters
   - Use `characterName` for persistent characters
   - Use inline `id` for temporary NPCs

2. **Combat Flow**
   - `create_encounter` → `advance_turn` → `execute_action` → repeat
   - Check `render_battlefield` for positioning
   - Use `manage_condition` for status effects

3. **Spell Tracking**
   - Set concentration when casting
   - Check concentration after damage
   - Track spell slots with `manage_spell_slots`

4. **Session Management**
   - Use `manage_notes` for important events
   - Call `get_session_context` for overview
   - Persist location state with `manage_location`

## Data Storage

Character and session data stored at:
- **Windows:** `%APPDATA%\rpg-lite-mcp\`
- **macOS/Linux:** `~/.config/rpg-lite-mcp/`

## Constraints

- MUST follow D&D 5e SRD rules for mechanics
- SHOULD use ASCII art output formatting
- SHOULD persist important characters
- SHOULD advance turns in initiative order
- SHOULD track conditions and their durations
