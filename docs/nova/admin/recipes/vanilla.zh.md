# 原版类型配方

## 有序配方

有序配方是在工作台中进行一定结构排列的配方形式. 例如下面是高级缆线的合成配方配置:

```json title="advanced_cable.json"
{
  "result": "logistics:advanced_cable",
  "amount": 3,
  "shape": [
    "ggg",
    "ccc",
    "ggg"
  ],
  "ingredients": {
    "g": "minecraft:glowstone_dust",
    "c": "logistics:basic_cable"
  }
}
```

!!! abstract "参数"

    === "shape"

        shape 定义了配方的排列结构. 你可以把它看作一个工作台. 在这里使用的字母必须在 ``ingredients`` 里进行定义. 用空格来代表空位.

    === "amount"

        单次合成出的数量, 如不设置将默认为 1.


!!! info "原料多样性"

     如果你想允许玩家使用几种不同的原料来合成同一个物品, 你需要在 ingredients 的每一项中设置多个用逗号分开的原料.

## 无序配方

无序配方是用在工作台中且无需根据某种结构排列的配方. 下面的示例配置了基础物品筛选器的合成配方:

```json title="basic_item_filter.json"
{
  "result": "logistics:basic_item_filter",
  "ingredients": {
    "minecraft:hopper": 1,
    "minecraft:paper": 1
  }
}
```

!!! info "原料数量"

     原料 ID 后的数字代表所需的原料数量.

和有序配方一样，无序配方也可以同时设置多种原料.  
例如，在下面的示例中，玩家将既可以使用纸也可以使用铁质压力板来合成一个基础物品筛选器.

```json title="basic_item_filter.json"
{
  "result": "logistics:basic_item_filter",
  "ingredients": [
    {
      "item": "minecraft:hopper",
      "amount": 1
    },
    {
      "items": [
        "nova:iron_plate",
        "minecraft:paper"
      ],
      "amount": 1
    }
  ]
}
```

## 烧炼配方

下面的示例配置了将铁粉烧制为铁锭的配方:

```json title="iron_dust_to_iron_ingot.json"
{
  "result": "minecraft:iron_ingot",
  "input": "machines:iron_dust",
  "experience": 1.0,
  "time": 100
}
```

!!! info "原料多样性"

      如果你想允许玩家使用几种不同的原料来合成同一个物品, 你需要在 ingredients 的每一项中设置多个用逗号分开的原料.

!!! info "time"

     烧炼需要的时间，单位是 tick. 1 秒是 20 ticks.