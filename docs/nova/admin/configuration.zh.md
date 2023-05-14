# 配置 Nova

所有配置文件都位于 `plugins/Nova/configs/`.
每一个扩展都会创建一个子目录来存放配置文件.

配置文件中的大多数选项都是字面意思, 或者有详细的注释说明。
本页面仅对更为复杂的选项进行说明。

## 物品菜单
你可能会需要自定义 Nova 的物品菜单. 你只需编辑 `plugins/Nova/configs/item_categories.yml` 即可. 你可以在该文件中添加或删除分类、更换图标、修改名称或是物品材料.

!!! warning "警告"

    一旦你对 `item_categories.json` 做出了修改, 该文件将不会再自动更新. 这将导致新增加的物品或更新的物品需要手动添加至该文件, 在删除一个扩展且未手动移除菜单项目时将导致 Nova 无法正常运行。

## 方块实体限制

使用方块实体限制选项, 你可以限制玩家放置的方块实体种类.  
方块实体限制选项位于配置文件中的 `performance.tile_entity_limits`.  
拥有 `nova.misc.bypassTileEntityLimits` 权限的玩家将会无视这些限制.

插件提供了 5 种不同的限制条件. 你可以选择一个或多个:

|       条件名     | 功能                                                                         |
|:----------------:|:-----------------------------------------------------------------------------|
|       type       | 阻止玩家放置某种方块实体.                                                    |
|      world       | 阻止玩家在指定世界放置方块实体.                                              |
|    type_world    | 阻止玩家在指定世界放置指定类型的方块实体.                                    |
|      amount      | 设置单个玩家可放置指定类型方块实体的上限.                                    |
| amount_per_world | 设置单个玩家在每个世界可放置指定类型方块实体的上限.                          |
| amount_per_chunk | 设置单个玩家在每个区块可放置指定类型方块实体的上限.                          |

示例配置:

=== "type"

    ```yaml
    # 此示例配置阻止玩家放置矿机.
    performance:
      tile_entity_limits:
        type:
          - machines:quarry
    ```

=== "world"

    ```yaml
    # 此示例配置阻止玩家在下界和末地放置方块实体.
    performance:
      tile_entity_limits:
        world:
          worlds:
            - world_nether
            - world_the_end
    ```

=== "type_world"

    ```yaml
    # 此实例配置阻止玩家在主世界放置矿机和在下界放置粉碎机.
    performance:
      tile_entity_limits:
        type_world:
          world:
            - machines:quarry
          world_nether:
            - machines:pulverizer
    ```

=== "amount"

    ```yaml
    # 此实例配置设置单个玩家最多可以放置 1 个矿机, 每种类型的缆线各 50 个.
    performance:
      tile_entity_limits:
        amount:
		  '*': 100 # 可选, 此选项将限制每个玩家只能放置 100 个方块实体.
          machines:quarry: 1
          logistics:basic_cable: 50
          logistics:advanced_cable: 50
          logistics:elite_cable: 50
          logistics:ultimate_cable: 50
    ```

=== "amount_per_world"

    ```yaml
    # 此实例配置设置单个玩家最多可以在单个世界放置 1 个矿机.
    performance:
      tile_entity_limits:
        amount_per_world:
		  '*': 100 # 可选, 此选项限制每个玩家在每个世界最多放置 100 个方块实体.
          machines:quarry: 1
    ```

=== "amount_per_chunk"

    ```yaml
    # 此实例配置设置单个玩家最多可以在单个区块放置方块实体的上限.
    performance:
      tile_entity_limits:
        amount_per_chunk:
          '*': 5 # 可选, 此选项限制每个玩家在每个区块最多放置 5 个方块实体.
          machines:quarry: 1
    ```

## 升级值

每个扩展都可以声明其带有的升级模式. 服务器管理员可以在 `plugin/Nova/configs/<addon name>/upgrade_values.yml` 中设置这些值.

`simple_upgrades` 扩展的预设升级配置如下:
```yaml
speed: [ 1.0, 1.91, 2.82, 3.73, 4.64, 5.55, 6.46, 7.37, 8.28, 9.19, 10.0 ]
efficiency: [ 1.0, 1.25, 1.75, 2.75, 3.75, 4.75, 5.75, 6.75, 7.75, 8.75, 9.75 ]
energy: [ 1.0, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1, 10.0 ]
fluid: [ 1.0, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1, 10.0 ]
range: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

数组中的数字定义了可被添加的升级值, 这些数字是配置值.
根据升级的类型, 这些值将是倍率, 或是在 range 升级的情况下与默认区间最大值叠加.

方块实体的升级值可以通过在该方块实体配置文件中添加 `upgrade_values` 选项来修改.
例如, 以下配置修改机械扩展中泵的默认 range 升级限制为 30:
```yaml
upgrade_values:
  range: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ]
```

## 属性配置

每个物品的配置文件都可以有 `attribute_modifiers` 部分.

```yaml title="attribute_modifiers 部分的结构"
attribute_modifiers:
  <equipment_slot>: # (1)!
  - attribute: <attribute> # (2)!
    operation: <operation> # (3)!
    value: <value> # (4)!
    hidden: <hidden> # (5)!
```

1. 物品需要在背包的哪个位置才能使这些属性生效.  
    可用值: `mainhand`(主手), `offhand`(副手), `feet`(脚), `legs`(腿), `chest`(上身), `head`(头)
2. 要修改的属性.  
    可用属性: `generic.maxHealth`(最大生命值), `generic.followRange`(跟随距离), `generic.knockbackResistance`(击退抗性), `generic.movementSpeed`(基础移动加速度), `generic.flying_speed`(飞行时的移动加速度), `generic.attackDamage`(近战攻击伤害), `generic.attack_knockback`(击退效果), `generic.attackSpeed`(每秒可以进行全力攻击的次数), `generic.armor`(盔甲值), `generic.armorToughness`(盔甲韧性), `generic.luck`(幸运值)
    各属性的作用见[属性 - Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/%E5%B1%9E%E6%80%A7)
3. 修改模式.  
    可用值: `addition`(加法), `multiply_base`(比例增加), `multiply_total`(乘法)
4. 修改值.
5. 是否在物品 lore 中隐藏属性.
    默认值: `false`

??? example "示例配置"

    ```yaml
    # 如果物品被拿在主手，玩家的近战攻击伤害增加 5
    # 如果物品被拿在主手或者副手，增加 10% 的速度.
    
    attribute_modifiers:
      mainhand:
      - attribute: generic.attack_damage
        operation: addition
        value: 5.0
      offhand:
      - attribute: generic.movement_speed
        operation: multiply_base
        value: 0.1
      - attribute: generic.movement_speed
        operation: multiply_base
        value: 0.1
    ```
    
    ![](https://i.imgtg.com/2023/05/14/OMkl6x.png)

## 资源包筛选器

通过使用资源包筛选，将可以在生成资源包时排除某些文件. 该设置位于主配置文件中的 `resource_pack.generation.resource_filters` 部分.

```yaml
resource_pack:
  generation:
    content_filters:
    - stage: "" # (1)!
      type: "" # (2)!
      pattern_type: "" # (3)!
      filter: "" # (4)!
      directory: "" # (5)!
```

1. 筛选器启用的阶段. 可为 `asset_pack` 或 `resource_pack`.
2. The type of the filter. Can be `whitelist` or `blacklist`.
3. The pattern type of the `filter` field. Can be `regex` or `wildcard`.
4. The filter pattern to match against. The `pattern_type` field determines how the pattern is interpreted.
5. The directory to apply the filter to. This property is optional and defaults to the root directory.

??? example "Example: Excluding all language files except en_us.json and de_de.json"

    ```yaml
    resource_pack:
      generation:
        resource_filters:
        - stage: resource_pack
          type: whitelist
          pattern_type: regex
          filter: minecraft\/lang\/(en_us|de_de).json
          directory: minecraft/lang/
    ```

## WAILA Positioning

If you want to change the vertical position of the WAILA overlay, you can do so by defining which boss bars should be
above or below it. This is done by defining matchers in `waila.positioning.above` (defines the boss bars that should
be below WAILA) and `waila.positioning.below` (defines the boss bars that should be above WAILA).

There are five different types of matchers available:

| Type      | Description                                                                                                               |
|-----------|---------------------------------------------------------------------------------------------------------------------------|
| `origin`  | Matches against the origin of the boss bar. (Either `minecraft` or a plugin name.)                                        |
| `text`    | Matches against the text of the boss bar using either a regex or wildcard.                                                |
| `overlay` | Matches against the overlay id of a boss bar overlay from a different Nova addon.                                         |
| `uuid`    | Matches against the UUID of the boss bar.                                                                                 |
| `index`   | Matches against the index of the boss bar (before Nova rearranges them), with the uppermost boss bar starting at index 0. |

=== "Origin"

    ```yaml
    waila:
      positioning:
        above:
        - type: origin
          origin: <origin> # (1)!
    ```

    1. The origin to match against. Can be `minecraft` or a plugin name.

=== "Text"

    === "Wildcard"


        ```yaml
        waila:
          positioning:
            above:
            - type: text
              wildcard: <pattern> # (1)!
        ```

        1. The wildcard pattern to match against.  
           Use `*` to match any number of characters and `?` to match a single character.

    === "Regex"

        ```yaml
        waila:
          positioning:
            above:
            - type: text
              regex: <pattern> # (1)!
        ```

        1. The regex pattern to match against.  
           You can try out your regex pattern on [RegExr](https://regexr.com/).

=== "Overlay"

    ```yaml
    waila:
      positioning:
        above:
        - type: overlay
          overlay: <overlay id> # (1)!
    ```

    1. The overlay id of a boss bar overlay from a different Nova addon.  
       For example, WAILA's overlay id is `nova:waila`.

=== "UUID"

    ```yaml
    waila:
      positioning:
        above:
        - type: uuid
          uuid: <uuid> # (1)!
    ```

    1. The UUID to match against.

=== "Index"

    ```yaml
    waila:
      positioning:
        above:
        - type: index
          index: <index> # (1)!
    ```

    1. The index of the boss bar. Starts at 0, from the top down.

??? example "Example configuration"

    This example configuration places WAILA above all vanilla boss bars, but below all boss bars registered by `PluginA` and `PluginB`.

    ```yaml
    waila:
      positioning:
        above:
        - type: origin
          origin: minecraft
        below:
        - type: origin
          origin: PluginA
        - type: origin
          origin: PluginB
    ```