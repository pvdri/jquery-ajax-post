curl --include --request POST http://localhost:3000/books \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "Oh the Places Youll Go",
      "author": "Dr.Seuss"
    }
  }'


# TITLE: "I am GOD"
# AUTHOR: "Me obviously"

# *curl --include --request POST http://localhost:3000/books \
#  --data-urlencode "book[title]=Robertos Ego" \
#  --data-urlencode "book[author]=Roberto"

# OR
# *curl --include --request http://localhost:3000/books \
#  --data-urlencode "book[title]=$TITLE" \
#  --data-urlencode "book[author]=$AUTHOR"
