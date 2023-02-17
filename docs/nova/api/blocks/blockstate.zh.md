# 方块状态

方块状态是决定方块的纹理和行为的额外数据. 这个 API 仅仅开放给
[``NovaMaterial``](../material/index.md) 和 ``NovaBlockState`` 类中的方块位置.

## 获得某一位置方块的 Nova 材料

=== "Kotlin"

    ```kotlin
    val blockState = blockManager.getBlock(location) ?: return
    val material = blockState.material
    val location = blockState.location
    ```

=== "Java"

    ```java
    NovaBlockState blockState = blockManager.getBlock(location);
    if (blockState == null)
        return;
    NovaMaterial material = blockState.getMaterial();
    Location location = blockState.getLocation();
    ```

## 方块实体状态

[方块实体](../tileentity/tileentity.md)使用 ``NovaTileEntityState`` 类来获取方块的方块实体实例.

=== "Kotlin"

    ```kotlin
    val blockState = blockManager.getBlock(location) ?: return
    if (blockState is NovaTileEntityState) {
        val tileEntity = blockState.tileEntity
    }
    ```

=== "Java"

    ```java
    NovaBlockState blockState = blockManager.getBlock(location);
    if (blockState == null)
        return;
    if (blockState instanceof NovaTileEntityState tileEntityState) {
        TileEntity tileEntity = tileEntityState.getTileEntity();
    }
    ```

更多关于方块管理器的信息请见[方块管理器](blockmanager.md)页面。