curl --include --request PATCH http://localhost:3000/books/19 \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "Decision Points",
      "author": "Big Dubya"
    }
  }'
