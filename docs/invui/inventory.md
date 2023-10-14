The `xyz.xenondevs.invui.inventory.Inventory` is a type of inventory that can be embedded in GUIs.
It provides several utility methods to easily add and remove items from the inventory, as well as an advanced event
system allowing to listen for and affect changes in the inventory.

The general contracts of `Inventory` and all implementations are:

* There are no `ItemStacks` of type `Material.AIR` or `ItemStack.getAmount() == 0`.  
  Empty `ItemStacks` are represented by `null`.
* Unless otherwise specified, all methods will return a clone of the actual backing `ItemStack`.  
  Changes to returned `ItemStacks` will never affect the `Inventory`.
* Unless otherwise specified, all methods accepting `ItemStacks` will always clone them before  
  putting them in the backing array / inventory.  
  Changes to the passed `ItemStacks` after calling a method will never affect the `Inventory`.

## Types of Inventories

### Virtual Inventory

Like normal inventories, virtual inventories can store a predefined amount of `ItemStacks`, but unlike
Minecraft's inventories, they do not have a defined width or height, just a size.

To create a `VirtualInventory`, you can do one of three things:

* Call the `VirtualInventory` constructor directly
* Deserialize a `VirtualInventory` from an `InputStream` or `byte[]` using `VirtualInventory#deserialize`
* Use the `VirtualInventoryManager` to get a previously serialized `VirtualInventory` from a file.
  This `VirtualInventory` will then get written into the file again when the plugin gets disabled.

#### Custom Stack Sizes

Virtual inventories also allow customizing the stack sizes of every slot.
You can change them by providing a `maxStackSizes` array in the constructor, or set them later using
`VirtualInventory#setMaxStackSizes` or `VirtualInventory#setMaxStackSize`.

If you're creating a plugin that modifies maximum stack sizes of items, change the
`StackSizeProvider` in `InventoryUtils#stackSizeProvider` to a custom one you've created.  
This will make InvUI respect your maximum stack sizes.

!!! warning "Stack sizes higher than what is normally allowed in vanilla Minecraft are not possible!"

#### Serialization

You can either directly (de)serialize a `VirtualInventory` to/from a stream or byte[] using `VirtualInventory#serialize`
and `VirtualInventory#deserialize`, or use the `VirtualInventoryManager` to automatically do that for you.

!!! warning "Only the `UUID` and `ItemStack[]` are serialized!"

Using the `VirtualInventoryManager`, inventories obtained with `createNew`, `getByUUID` and `getOrCreate`
will be automatically serialized when the plugin gets disabled. These inventories are stored under
`plugins/InvUI/VirtualInventory/<Name of your plugin>/`.

!!! info

    The `uuid` parameter is only required for serialization with the `VirtualInventoryManager`.  
    You can set it to null, if you're not planning to serialize your inventory this way.

### ReferencingInventory

The `ReferencingInventory` is an `Inventory` that is backed by a Bukkit inventory. Changes in this inventory are
applied in the referenced inventory and changes in the bukkit inventory are visible in this inventory.

!!! warning "Window Updating"

    Changes done using the methods provided by InvUI inventory will cause displaying `Windows` to be notified, but
    changes done directly in the bukkit inventory will not. Therefore, if embedded in a GUI, it is necessary to call
    `Inventory#notifyWindows` manually in order for changes to be displayed.

### CompositeInventory

The `CompositeInventory` is a composite of multiple inventories. Those can be `VirtualInventories`, `ReferencingInventories`,
or any other custom implementation of `Inventory`.

## Inventory Events

You can also register update handlers to your `Inventory`. There are two different types of events:

| Event type            | Registered with                         | Description                                                                                                                                                                                            | Use-case                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-----------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ItemPreUpdateEvent`  | `#!java Inventory.setPreUpdateHandler`  | Called before changes were fully processed. Cancelling this event or changing the amount of items that were added/removed will affect the source of the change (which is the player most of the time). | Restricting which or how many items can be put into an inventory or a specific slot.<br><br>**Example 1:** A player tries to put a full stack of 64 items into the inventory, but the amount gets changed to 32 in the event, so the remaining 32 items stay on the player's cursor.<br><br>**Example 2:** A player shift-clicks a dirt block into the inventory, but the event is cancelled in such a way that only diamonds can be placed on slot 1, and everything else can be placed on slot 2, so the dirt is put on slot 2. |
| `ItemPostUpdateEvent` | `#!java Inventory.setPostUpdateHandler` | After changes were fully processed. This event cannot be cancelled and changes done to the inventory during this event will not affect the source of the change.                                       | Removing or editing items after they've been added to the inventory.<br><br>**Example:** A trash can inventory that immediately removes all items that have been put into it.                                                                                                                                                                                                                                                                                                                                                     |

## Inventories in GUIs

Adding an `Inventory` to a GUI can be done the same way as adding Items.  
You can either:

* Define an ingredient for the `Inventory` in `Structure` or the delegating `Gui.Builder` method.
* Use the filling methods in `Gui`.
* Create a `SlotElement.InventorySlotElement` which links to the specific slot.

### GUI priority

If you have multiple virtual inventories in one GUI, you might want to change the order of
which items are added to them with shift-clicks or collected using double clicks.
This can be done by setting the `guiPriority` in `Inventory`. The inventory with the highest priority will be used first.

### Background

If you want your inventory slots to have a background `ItemProvider` (which is an item that is technically in the slot,
but will be ignored by all click actions) you can set the `background` parameter in
`#!java Structure.addIngredient(char key, Inventory inventory, ItemProvider background)` or in the delegating `Gui.Builder` method for it.  
Alternatively, you can also create the `SlotElement.InventorySlotElement` yourself.