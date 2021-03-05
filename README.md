
`docker build -t react-docker .`
`docker run -it -v $PWD:/web react-docker /bin/bash`
`docker run -p 8000:5000 react-docker`
`docker exec -it react-docker /bin/bash`
`docker run -it -v $PWD/src:/web/src -p 8000:4000 v-t /bin/bash`
`docker run -v $PWD/src:/web/src -p 8000:4000 v-t d`
`docker tag v-d shmilyvidian/v-d`
`docker push shmilyvidian/v-d`