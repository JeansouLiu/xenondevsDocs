要使用 Nova API 首先你需要将 xenondevs maven 仓库添加到你的构建配置中.

=== "Maven"

    ```xml
    <repository>
        <id>xenondevs</id>
        <url>https://repo.xenondevs.xyz/releases</url>
    </repository>
    ```

=== "Gradle Groovy"

    ```groovy
    maven {
        url 'https://repo.xenondevs.xyz/releases'
    }
    ```

=== "Gradle Kotlin"

    ```kotlin
    maven {
        url = uri("https://repo.xenondevs.xyz/releases")
    }
    ```

然后你可以添加 API 依赖到你的构建配置中:

=== "Maven"

    ```xml
    <dependency>
        <groupId>xyz.xenondevs.nova</groupId>
        <artifactId>nova-api</artifactId>
        <version>0.11</version>
        <scope>provided</scope>
    </dependency>
    ```

=== "Gradle Groovy"

    ```groovy
    implementation "xyz.xenondevs.nova:nova-api:0.11"
    ```

=== "Gradle Kotlin"

    ```kotlin
    implementation("xyz.xenondevs.nova:nova-api:0.11")
    ```

要获取 Nova 实例你可以使用 `Nova` 类:

=== "Kotlin"

    ```kotlin
    val nova = Nova // (1)!
    ```

    1. `Nova` 是一个接口但是伴随对象则交给 ``Bukkit.getPluginManager().getPlugin("Nova") as Nova``.

=== "Java"

    ```java
    Nova nova = Nova.getNova();
    ```

你可以通过此实例来使用其它功能:

- [添加自定义保护检测](./protection/protectionintegration.md)
- [获取 ``NovaMaterials``](./material/index.md)
- [管理方块实体](./tileentity/tileentitymanager.md)
- [管理 Nova 方块](./blocks/blockmanager.md)
- [管理 WAILA overlay](./player/wailamanager.md)