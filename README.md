## DemoReadyLandingPage

## Run it with Docker 

Build it using `docker build -t landing-page .` 
Run it using `docker container run -it -p  3000:3000 -v $PWD\src:/app/src  landing-page`

## If you are running in Windows

Run it using `docker container run -it -p  3000:3000 -e CHOKIDAR_USEPOLLING=true -v $PWD\src:/app/src  landing-page`