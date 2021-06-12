# IO

Slice of task view feature from IO documentation project.

Shows how services are connected and working together to provide basic tasks list view.

Requirements:
  - docker ( for windows or mac or linux) https://docs.docker.com/desktop/ ( for linux it depends on distro, don't forget docker-compose )
  - docker-compose ( required on linux since windows and mac has it in their docker apps)
  - (for linux ) docker deamon service is enabled and running
  - ports 5555 and 8080 should be open and free while running docker-compose command.
  - file backend/entrypoint.sh has rights for execution. run chmod +x on it if not.


How to run project:
  - Berfore, make sure file etrypoint.sh has rights for execution! ( if not backend service will not build and app will not work)
from root dir of procjet run "docker-compose up". When every service is done with starting, frontend should be available on http://localhost:5555 and backend on http://localhost:8080


Notes:

Since database is locally stored, when first started there will be no data to view.
Create tasks to view :
  - Log in into admin site on http://localhost:8080/admin with login: admin and password: admin
  - Click SimpleTasks group and add some items
  - Now on frontend site after refresh, list of tasks should appear.