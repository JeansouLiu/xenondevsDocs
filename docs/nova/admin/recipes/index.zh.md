# 自定义配方

在 Nova 中, 你可以修改所有的合成配方。你可以在 ``plugins/Nova/recipes`` 目录中找到配置文件。  
你可以修改或删除已有的配方或添加新配方. 如果我们更新了配方, Nova 将只会更新配置文件中未被修改的部分.

你可以使用 `/nova reload recipes` 指令来重载所有配方.

## 物品格式

插件提供了多种方式来在配方中指定物品:

### 自定义物品格式

这种格式将允许你使用 Nova 中的物品或是其它插件中的物品. 比如 ``itemsadder:ruby`` 在此处也是可用的.

```json title="自定义物品格式"
"machines:copper_gear"
```

对于 Nova 扩展提供的物品, 你也可以使用 ``nova:`` 前缀来代替扩展的前缀. 但是这将匹配所有使用这个 ID 的物品. 例如, 假如有几个扩展都定义了 ``copper_dust``, ``machines:copper_dust`` 将只会匹配机械扩展的铜尘, 但是 ``nova:copper_dust`` 将会匹配所有.

### 高级物品格式

这种格式将允许你完全自定义所需的物品. 如果你使用这种格式, 你将不能使用自定义命名空间，比如 ``nova:``  
因为这种检测方式很严格 (只忽略物品名称), 你可能会遇到一些附魔和物品内置数据之类的问题.  
这与 Minecraft 的 /give 指令的格式相同. 因为是 JSON, 所以引号需要被转义.

```json title="高级物品格式"
"minecraft:potion{\"Potion\": \"minecraft:water\"}"
```

## 备用物品 & 配方

尽管这个功能是为开发者准备的, 备用物品和备用配方也可以被服务器管理员使用.

**什么是备用物品和配方?**  
当物品或配方加载失败时，备用物品和配方将被使用.  
对于扩展开发者来说，这将允许他们在首选配方中使用其它扩展的物品，但并不需要将该扩展设为硬依赖.

### 备用物品

备用物品的定义方法是在首选物品 ID 后添加一个分号，然后输入备用物品 ID:
```json title="备用物品"
"nova:basic_fluid_tank; minecraft:bucket"
```
配方在加载时将会首先检验 ``nova:basic_fluid_tank`` 是否存在. 如果不存在, ``minecraft:bucket`` 将被使用.

### 备用配方

备用配方一般会在配方中使用了某个未安装扩展的物品时使用.  
要实现这种功能, 只用在 json 组中加入多个合成配方:

??? example "示例合成配方"

    === "普通"

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

        !!! info "提示"
        
            如果需要的话, 你甚至可以在配方中使用备用物品.

    === "failSilently 选项"

        如果你不想在控制台中看到备用配方无法加载的报错信息, 你可以设置 ``failSilently`` 为 ``true``.
        
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

        !!! info "提示"
        
            如果需要的话, 你甚至可以在配方中使用备用物品.