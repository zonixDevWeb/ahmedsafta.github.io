# sELECT THE BASE IMAGE 
FROM  node:lts-alpine
# creating a directory for our application 
WORKDIR /app
# Copying the directory  of  the safta's portfolio to the app dirctory we created in the docker container 
  COPY . .
#  Run the app in the conatiner by installing only the dependencies set in Production
# to not introduce some  security risks and not to lose storage 
#  installing the dependencies
RUN npm install  --only=production 
# Run the app(the front client  ) 
RUN npm build 
#  the last part : what to do when our container starts up  ==> use the cmd command 
# when the docke rimage is builds and want to start the docker container 
#  For the sake of szecurity we have  to specifty the user 
USER node  

CMD  ["npm", "start "]
# let us think ab security :
#Docker will run all of these commands  as the root user.
#  we want  to  run our  appplication as  user  wuith the minimum priveleges/permissions 
#  If our application faces some security issues , any hacker only willl have to get the minimum permisson
