if [ $# -lt 1 ]; then  echo "Usage: ./deploy.sh \"Remember to comment\"" && exit 1; fi
git add *
git commit -m "$1"
git push origin
