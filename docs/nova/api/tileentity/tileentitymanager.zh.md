# 方块实体管理器

你可以使用[之前获取的 Nova 实例](../index.md)来获取 ``TileEntityManager``.

=== "Kotlin"

    ```kotlin
    val tileEntityManager = Nova.tileEntityManager
    ```

=== "Java"

    ```java
    TileEntityManager tileEntityManager = nova.getTileEntityManager(); // (1)!
    ```

    1. "nova" 是之前获取的 Nova 实例, 默认存储在一个字段或变量中.<br>你也可以调用 ``Nova.getNova().getTileEntityManager()``

## 获取指定位置的方块实体

要获取指定位置的方块实体，可以通过调用 ``TileEntityManager`` 中的 ``getTileEntityAt`` 函数.
一般情况下该函数将返回一个方块实体，但是如果该位置没有方块实体将会返回 ``null``.

=== "Kotlin"
    
    ```kotlin
    val tileEntity: TileEntity? = tileEntityManager.getTileEntityAt(location)
    ```

=== "Java"

    ```java
    TileEntity tileEntity = tileEntityManager.getTileEntityAt(location);
    ```