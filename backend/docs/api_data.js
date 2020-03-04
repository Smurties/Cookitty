define({ "api": [
  {
    "type": "delete",
    "url": "/recipes/:id",
    "title": "Delete a recipe",
    "name": "deleteRecipe",
    "group": "Recipes",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Recipe id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\nRequest\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Recipe id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response",
          "content": "HTTP/1.1 200 OK\n{\nResponse\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "get",
    "url": "/recipes",
    "title": "Get all recipes",
    "name": "getRecipes",
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "routes/api/recipes.js",
    "groupTitle": "Recipes"
  },
  {
    "type": "post",
    "url": "/recipes",
    "title": "Post a recipe",
    "name": "postRecipe",
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "routes/api/recipes.js",
    "groupTitle": "Recipes"
  }
] });
