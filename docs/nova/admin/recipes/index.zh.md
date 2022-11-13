# 自定义配方

在 Nova 中, 你可以修改所有的合成配方。你可以在 ``plugins/Nova/recipes`` 目录中找到配置文件。 
你可以修改或删除已有的配方或添加新配方. 如果我们更新了某个配方, 我们将只会
更新你的服务器上未被修改的配方.

你可以使用 `/nova reload recipes` 指令来重载所有配方.

## 物品格式

插件提供了多种方式来在配方中指定物品:

### 自定义物品格式

这种格式将允许你使用 Nova 中的物品或是其它插件中的物品. 比如 ``itemsadder:ruby``
在此处也是可用的.

```json title="自定义物品格式"
"machines:copper_gear"
```

对于 Nova 扩展提供的物品, 你也可以使用 ``nova:`` 前缀来代替扩展的前缀. 但是这将导致所有使用同一个 ID 但不属于同一个扩展的物品被匹配. For example, if multiple addons define a ``copper_dust``, ``machines:copper_dust`` would only accept the copper dust from the Machines addon, but ``nova:copper_dust`` would allow any copper dust.

### Complex Item Format

This format lets you fully customize the required item. If you use this format, you won't be able to use custom
namespaces like ``nova:``  
As this checks the item exactly (only ignoring the item name), you might encounter some issues with enchantments and
other data stored inside the item.  
This is the same format as in Minecraft's /give command. As it is in JSON, quotes need to be escaped.

```json title="Complex Item Format"
"minecraft:potion{\"Potion\": \"minecraft:water\"}"
```

## Item- & Recipe Fallbacks

While this is more intended for developers, item- and recipe fallbacks can also be used by server administrators.

**What are item- and recipe fallbacks?**  
Fallbacks can be used to define an item or recipe to fall back to when the item could not be found or the recipe could not be loaded.
This is useful for addon developers as it allows them to use items from other addons in their crafting recipes without creating a hard dependency on that addon.

### Item Fallbacks

Item fallbacks are defined by adding a semicolon after the item declaration, followed by a second declaration:
```json title="Item Fallback"
"nova:basic_fluid_tank; minecraft:bucket"
```
The recipe loader will first check if ``nova:basic_fluid_tank`` exists. If not, ``minecraft:bucket`` is used.

### Recipe Fallbacks

In some cases, it makes sense to completely change the structure of a recipe if the items from another addon are missing.  
For that, just put multiple recipe objects into a json array:

??? example "Example Recipes"

    === "Normal"

        ```json title="recipe.json"
        [
          {
            "result": "addon1:result_item",
            "shape": [
              "a  ",
              " a ",
              "  a"
            ],
            "ingredients": {
              "a": "addon2:example_item"
            }
          },
          {
            "result": "addon1:result_item",
            "shape": [
              " a ",
              " a ",
              " a "
            ],
            "ingredients": {
              "a": "addon1:fallback_item"
            }
          }
        ]
        ```

        !!! info
        
            If required, it is also possible to use item fallbacks inside of recipe fallbacks.

    === "With failSilently"

        If you don't want any exceptions in the console if none of the fallbacks could be loaded, you can set the ``failSilently`` boolean to ``true``.
        
        ```json title="recipe.json"
        {
          "failSilently": true,
          "recipes": [
            {
              "result": "addon1:result_item",
              "shape": [
                "a  ",
                " a ",
                "  a"
              ],
              "ingredients": {
                "a": "addon2:example_item"
              }
            },
            {
              "result": "addon1:result_item",
              "shape": [
                " a ",
                " a ",
                " a "
              ],
              "ingredients": {
                "a": "addon1:fallback_item"
              }
            }
          ]
        }
        ```

        !!! info
        
            If required, it is also possible to use item fallbacks inside of recipe fallbacks.