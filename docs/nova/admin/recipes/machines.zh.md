# 机械扩展配方

## 粉碎机配方

以下示例配置了将铁矿粉碎为铁粉的配方:

```json title="iron_ore_to_iron_dust.json"
{
  "input": [
    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore"
  ],
  "result": "machines:iron_dust",
  "amount": 2,
  "time": 200
}
```

## 机械冲压机配方

机械冲压机配方存放在子文件夹 ``gear/`` 和 ``plate/`` 中  
两者使用同样的格式.  
下面的示例配置是冲压铁质压力板的配方:

```json title="iron_ingot_to_iron_plate.json"
{
  "input": "minecraft:iron_ingot",
  "result": "machines:iron_plate",
  "time": 200
}
```

!!! info "原料多样性"

    如果你想允许玩家使用几种不同的原料来合成同一个物品, 你需要在 ingredients 的每一项中设置多个用逗号分开的原料.

## 液体注入机配方

液体注入机有两种工作模式: 将液体注入物品或者将液体从物品中抽取出来。  
下面的示例配置是将水注入桶合成水桶的配方:

```json title="bucket_to_water_bucket.json"
{
  "mode": "INSERT",
  "fluid_type": "WATER",
  "fluid_amount": 1000,
  "input": "minecraft:bucket",
  "result": "minecraft:water_bucket",
  "time": 100
}
```
!!! abstract "参数"

    === "mode"

        mode 参数定义此配方是注入 (``INSERT``) 还是抽取 (``EXTRACT``) 液体.

    === "fluid_type"

        目前只支持水 (``WATER``) 和岩浆 (``LAVA``). 暂不支持其它插件的自定义流体.

下面的示例配置是将水从水瓶中抽取出来从而合成玻璃瓶的配方:

```json title="potion_to_glass_bottle.json"
{
  "mode": "EXTRACT",
  "fluid_type": "WATER",
  "fluid_amount": 300,
  "input": "minecraft:potion{\"Potion\": \"minecraft:water\"}",
  "result": "minecraft:glass_bottle",
  "time": 30
}
```

!!! info "自定义物品格式"

    因为水瓶并没有对应的 ID, 你需要使用[高级物品格式](index.md#_4)来定义它.

## 电力酿造台配方

你可以使用这种配方来配置电力酿造台可以酿造的药水类型.
你同时也可以配置它们的原料、持续时间及倍率、药水等级以及时长和等级限制.

下面的示例配置将为电力酿造台添加幸运效果配方:

```json title="luck.json"
{
  "result": "minecraft:luck",
  "default_time": 1800,
  "redstone_multiplier": 2,
  "glowstone_multiplier": 0.5,
  "max_duration_level": 5,
  "max_amplifier_level": 5,
  "inputs": [
    "minecraft:nether_wart",
    "minecraft:grass_block"
  ]
}
```

!!! abstract "参数"

    === "default_time"

        这种药水效果的默认持续时间. 单位是 tick, 20 ticks = 1 秒. 在上面的配置中就是 1 分 30 秒

    === "redstone_multiplier"

         当时长等级 (一个红石) 增加时，持续时间的倍率. 在上面的配置中就是时长等级 2 的幸运药水的持续时间将是 3 分钟, 时长等级 3 为 4 分 30 秒，以此类推.

    === "glowstone_multiplier"

        在 Minecraft 中, 当向药水中添加荧石来增加药水等级时, 药水的持续时间将减少. 这在倍率中有所体现. 在上面的配置中，等级 2 的药水将只有 0:45 的持续时间, 等级 3 则只有 0:11，以此类推.

    === "max_duration_level"

        此药水效果允许的最大时长等级。默认情况下, 你不能让时长等级和药水等级同时增长, 但是你可以通过修改电力酿造台的配置文件来实现这种设置.

    === "max_amplifier_level"

        此药水效果允许的最大药水等级. 默认情况下, 你不能让时长等级和药水等级同时增长, 但是你可以通过修改电力酿造台的配置文件来实现这种设置.

!!! info "原料多样性"

    在这种配方类型中, **不支持**原料的多样性.
