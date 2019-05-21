#!/bin/bash

curl -X POST http://localhost:9102/deployment/create -F file=@diagram_1.dmn -H "Content-Type: multipart/form-data;boundary=--------------------------250448360112203117589859"