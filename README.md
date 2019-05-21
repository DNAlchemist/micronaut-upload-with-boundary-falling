# Demo file upload problem with micronaut / netty and boundary parameter

## How to reproduce

Clone this repo.

```
> ./gradlew run

> Task :compileJava
Note: Creating bean classes for 1 type elements

> Task :run
08:43:22.895 [main] INFO  io.micronaut.runtime.Micronaut - Startup completed in 639ms. Server Running: http://localhost:9102
```

This is works fine: 
```
> curl -X POST http://localhost:9102/deployment/create -F file=@diagram_1.dmn -H "Content-Type: multipart/form-data"
```

Add boundary to request
```
> curl -X POST http://localhost:9102/deployment/create -F file=@diagram_1.dmn -H "Content-Type: multipart/form-data;boundary=--------------------------250448360112203117589859"
```

Then we get:

```
{"_links":{"self":{"href":"/deployment/create","templated":false}},"message":"Required argument [CompletedFileUpload file] not specified","path":"/file"}
```        