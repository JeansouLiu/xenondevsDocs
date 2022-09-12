# 配置 Nova

所有配置文件都位于 `plugins/Nova/configs/`.
每一个扩展都会创建一个子目录来存放配置文件.

配置文件中的大多数选项都是字面意思, 或者有详细的注释说明。
本页面仅对更为复杂的选项进行说明。

## 物品菜单
不可能会需要自定义 Nova 的物品菜单. 你只需编辑 `plugins/Nova/configs/item_categories.yml` 即可. 你可以在该文件中添加或删除分类、更换图标、修改名称或是物品材料.

!!! 警告

    一旦你对 `item_categories.json` 做出了修改, 该文件将不会再自动更新. 这将导致新增加的物品或更新的物品需要手动添加至该文件, 在删除一个扩展且未手动移除菜单项目时将导致 Nova 无法正常运行。

## 方块实体限制

使用方块实体限制选项, 你可以限制玩家放置的方块实体种类.  
方块实体限制选项位于配置文件中的 `performance.tile_entity_limits`.  
拥有 `nova.misc.bypassTileEntityLimits` 权限的玩家将会无视这些限制.

插件提供了 4 种不同的限制条件. 你可以选择一个或多个:

|       条件名     | 功能                                                                         |
|:----------------:|:-----------------------------------------------------------------------------|
|      world       | 阻止玩家在指定世界放置方块实体.                                              |
|    type_world    | 阻止玩家在指定世界放置指定类型的方块实体.                                    |
|      amount      | 设置单个玩家可放置指定类型方块实体的上限.                                    |
| amount_per_world | 设置单个玩家在每个世界可放置指定类型方块实体的上限.                          |

实例配置:

=== "world"

    ```yaml
    # 此实例配置阻止玩家
    # 在下界和末地放置方块实体.
    performance:
      tile_entity_limits:
        world_blacklist:
          worlds:
            - world_nether
            - world_the_end
    ```

=== "type_world"

    ```yaml
    # 此实例配置阻止玩家
    # 在主世界放置 quarries 和在下界放置 pulverizers.
    performance:
      tile_entity_limits:
        world_type_blacklist:
          world:
            - machines:quarry
          world_nether:
            - machines:pulverizer
    ```

=== "amount"

    ```yaml
    # 此实例配置设置单个玩家最多可以
    # 放置 1 个 quarry, 每种类型的 cables 各 50 个.
    performance:
      tile_entity_limits:
        amount:
          machines:quarry: 1
          logistics:basic_cable: 50
          logistics:advanced_cable: 50
          logistics:elite_cable: 50
          logistics:ultimate_cable: 50
    ```

=== "amount_per_world"

    ```yaml
    # This example config sets a maximum of one
    # quarry per player per world.
    performance:
      tile_entity_limits:
        amount_per_world:
          machines:quarry: 1
    ```

## Upgrade values

The upgrade values for the default upgrade types `speed`, `efficiency`, `energy`, `fluid` and `range`
are not located in the main config `plugins/Nova/configs/config.yml` but in `plugins/Nova/configs/nova/upgrade_values.json`.
This separation is done intentionally to indicate that every addon can have its own `upgrade_values.json` file for their own upgrade types.

The config for the default upgrades looks like this:
```yaml
speed: [ 1.0, 1.91, 2.82, 3.73, 4.64, 5.55, 6.46, 7.37, 8.28, 9.19, 10.0 ]
efficiency: [ 1.0, 1.25, 1.75, 2.75, 3.75, 4.75, 5.75, 6.75, 7.75, 8.75, 9.75 ]
energy: [ 1.0, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1, 10.0 ]
fluid: [ 1.0, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1, 10.0 ]
range: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

The amount of values in the arrays specifies the amount of upgrades that can be added, the numbers themselves are the modifiers.
Depending on the type of upgrade, these values might be a multipliers or in the case of the range upgrade, are just added on top of the default max range.

The upgrade values can also be changed for specific tile-entities by adding a `upgrade_values` section to the config of that tile-entity.
For example, the default limit of range upgrades for the Pump from the Machines addon is changed to 30 this way:
```yaml
upgrade_values:
  range: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]
```