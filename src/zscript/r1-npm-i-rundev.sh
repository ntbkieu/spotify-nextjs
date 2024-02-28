SH=`cd $(dirname ${BASH_SOURCE:-$0}) && pwd`
AH="$SH/.."
cd $AH
    npm i ; PORT=${PORT:-33323} npm run dev
