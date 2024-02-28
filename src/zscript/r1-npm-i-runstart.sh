SH=`cd $(dirname ${BASH_SOURCE:-$0}) && pwd`
AH="$SH/.."
cd $AH
    npm i ; npm run build ; PORT=${PORT:-33323} npm run start
