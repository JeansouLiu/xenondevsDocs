# 方块注册表

方块注册表包含了所有已声明的方块类型.

你可以通过使用[之前获取的 Nova 实例](../index.md) 来获得 ``BlockRegistry``.

=== "Kotlin"

    ```kotlin
    val blockRegistry = Nova.blockRegistry
    ```

=== "Java"

    ```java
    BlockRegistry blockRegistry = Nova.getNova().getBlockRegistry();
    ```

然后, 通过 ID 来检索方块类型:

=== "Kotlin"

    ```kotlin
    val block = blockRegistry.getBlock("machines:pulverizer")
    ```

=== "Java"

    ```java
    NovaBlock block = blockRegistry.getBlock("machines:pulverizer");
    ```