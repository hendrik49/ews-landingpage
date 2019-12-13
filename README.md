# ews-landingpage

How to deploy The Early Warning System Landingpage


1. Installing NodeJS
   https://nodejs.org/en/download/
2. Installing PM2
   npm install pm2@latest -g
3. Installing GIT
   cloning project ews-landingpage. 
   git clone https://github.com/hendrik49/ews-landingpage
4. cd to directory ews-landing page
   execute pm2 start npm --name=landingpage -- start
5. Check the web is running
   pm2 status
6. Access the web on http://IP:3000
