# 方块管理器

方块管理器允许你与 Nova 的方块交互. 你可以放置/破坏/捡起掉落物等.

你可以使用[之前获取的 Nova 实例](../index.md)来获得 ``BlockManager``.

=== "Kotlin"

    ```kotlin
    val blockManager = Nova.blockManager
    ```

=== "Java"

    ```java
    BlockManager blockManager = nova.getBlockManager(); // (1)!
    ```

    1. "nova" 是之前获取的 Nova 实例, 默认存储在一个字段或变量中.<br>你也可以调用 ``Nova.getNova().getMaterialRegistry()``

## 获取一个方块的状态

你还可以使用方块管理器来获得某一位置的方块状态.

=== "Kotlin"

    ```kotlin
    val blockState = blockManager.getBlock(location) ?: return
    ```

=== "Java"
    
    ```java
    NovaBlockState blockState = blockManager.getBlock(location);
    if (blockState == null)
        return;
    ```

你还可以通过 ``BlockManager.hasBlock(Location)`` 来检测某一位置的方块是否是 Nova 的方块。

详见[方块状态](blockstate.md).

## 放置一个方块

你也可以使用一个 [``NovaMaterial``](../material/index.md) 来在某一位置放置一个 Nova 方块.

!!! warning "注意"

    如果所给的 ``NovaMaterial`` 不是一个方块的话，这个函数将会抛出 ``IllegalArgumentException`` 错误.

=== "Kotlin"

    ```kotlin
    val material = materialRegistry.get("machines:pulverizer")
    blockManager.placeBlock(
        location, // (1)!
        material, // (2)!
        player, // (3)!
        true // (4)!
    )
    ```

    1. 放置方块的位置.
    2. 放置的方块材料.
    3. 放置方块的目标. 目标不一定是玩家, 也可以是方块实体或其它类似实体.
    4. 是否播放方块放置音效.

=== "Java"

    ```java
    NovaMaterial material = materialRegistry.get("machines:pulverizer");
    blockManager.placeBlock(
        location, // (1)!
        material, // (2)!
        player, // (3)!
        true // (4)!
    );
    ```

    1. 放置方块的位置.
    2. 放置的方块材料.
    3. 放置方块的目标. 目标不一定是玩家, 也可以是方块实体或其它类似实体.
    4. 是否播放方块放置音效.

!!! note "提示"

    ``BlockManager.placeBlock`` 函数有一些需要更少实参的覆盖.

## 获取一个方块的掉落物

要获取一个方块的掉落物, 可以使用 ``BlockManager.getDrops`` 函数. 该函数同样有一些需要更少实参的覆盖.

!!! warning "注意"

    如果所给的位置没有 Nova 方块此函数将返回 ``null``.

=== "Kotlin"

    ```kotlin
    val drops = blockManager.getDrops(
        location, // (1)!
        player, // (2)!
        tool // (3)!
    )
    ```

    1. 方块的位置.
    2. 目标实体, 目标不一定是玩家, 也可以是方块实体或其它类似实体.
    3. 破坏方块所用的工具.

=== "Java"

    ```java
    List<ItemStack> drops = blockManager.getDrops(
        location, // (1)!
        player, // (2)!
        tool // (3)!
    );
    ```

    1. 方块的位置.
    2. 目标实体, 目标不一定是玩家, 也可以是方块实体或其它类似实体.
    3. 破坏方块所用的工具.

## 移除一个方块

你可以使用 ``BlockManager.removeBlock`` 函数来移除某个位置的方块. 该函数将会返回一个
``boolean``, 该布尔值代表所给位置是否有方块或是所给位置的方块是否成功移除.

=== "Kotlin"

    ```kotlin
    blockManager.removeBlock(
        location, // (1)!
        player, // (2)!
        true, // (3)!
        true // (4)!
    )
    ```

    1. 方块的位置.
    2. 目标实体, 目标不一定是玩家, 也可以是方块实体或其它类似实体.
    3. 方块移除时是否播放音效.
    4. 是否显示方块破坏的粒子效果.

=== "Java"

    ```java
    blockManager.removeBlock(
        location, // (1)!
        player, // (2)!
        true, // (3)!
        true // (4)!
    );
    ```

    1. 方块的位置.
    2. 目标实体, 目标不一定是玩家, 也可以是方块实体或其它类似实体.
    3. 方块移除时是否播放音效.
    4. 是否显示方块破坏的粒子效果.