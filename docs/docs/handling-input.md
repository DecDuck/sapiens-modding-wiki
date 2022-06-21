# Handling Input

Input handling is the ability to listen and react to key strikes, mouse movements, and other physical-input.

## Hammerstone

Hammerstone API contains an input handling wrapper, [which you can find here.](https://github.com/SirLich/hammerstone-framework/blob/master/scripts/hammerstone/input/inputManager.lua)

## Adding your action to the KeyMap

The first step is overwriting `scripts/mainThread/keyBinding.lua`. I think it's also possible to add bindings from other files, but I think there may be an ordering dependency here, so I suggest overwriting in-place.

### API
There is a mod-exposed api:
 - `keyMapping`
 - `doubleMapping`
 - `addGroup`
 - `addMapping`

### Example

Here is a sample code, which adds a custom keybinding:

```lua
function mod:onload(keyMapping)
	keyMapping.addMapping("game", "testBinding", keyMapping.keyCodes.f5, nil)
end
```

## Listening to your Action

The next step is actually listening to your action. This can be done using 
