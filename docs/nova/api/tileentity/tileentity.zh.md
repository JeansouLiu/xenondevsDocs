# 方块实体

方块实体是一种拥有内部逻辑并根据游戏刻更新的一种方块.

## 获取一个方块实体的所有者

=== "Kotlin"

    ```kotlin
    val tileEntity = tileEntityManager.getTileEntityAt(location) ?: return
    val owner = tileEntity.owner
    ```

=== "Java"

    ```java
    TileEntity tileEntity = tileEntityManager.getTileEntityAt(location);
    if (tileEntity == null)
        return;
    OfflinePlayer owner = tileEntity.getOwner();
    ```

##  获取一个方块实体的本地化名称

通过使用一个方块实体的 [``Nova 方块``](../blocks/blockregistry.md)来获取一个方块实体的名称.

在下方的示例中, 将演示如何获取一个粉碎机的英文名.

=== "Kotlin"

    ```kotlin
    val tileEntity = tileEntityManager.getTileEntityAt(location) ?: return
    val name = tileEntity.block.getLocalizedName("en_us")
    println(name) // 输出 "Pulverizer"
    ```

=== "Java"

    ```java
    TileEntity tileEntity = tileEntityManager.getTileEntityAt(location);
    if(tileEntity == null)
        return;
    String name = tileEntity.getMaterial().getLocalizedName("en_us");
    System.out.println(name); // 输出 "Pulverizer"
    ```

## 获取一个方块实体的掉落物

这里的掉落物包括方块实体内装有的物品和方块实体本身（如果 ``includeSelf`` 设为了 ``true`` 的话）。

=== "Kotlin"

    ```kotlin
    val tileEntity = tileEntityManager.getTileEntityAt(location) ?: return
    val drops = tileEntity.getDrops(includeSelf = true)
    ```

=== "Java"

    ```java
    TileEntity tileEntity = tileEntityManager.getTileEntityAt(location);
    if (tileEntity == null)
        return;
    List<ItemStack> drops = tileEntity.getDrops(true);
    ```

更多关于方块实体管理器的说明请见[方块实体管理器](../tileentity/tileentitymanager.md)页面.