lsof -i tcp:${PORT:-33323} | grep -v PID | awk '{print "sudo kill -9 "$2}'
#                                 awk to split by space  ref https://gist.github.com/namgivu/f364bfa3ae190e1a6d6aae93f0321847
