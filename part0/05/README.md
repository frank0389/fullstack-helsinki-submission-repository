 ```mermaid
 sequenceDiagram
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: the HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the js file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Send data.json, Response body: [{
        "content": "spa", "date": "2024-03-24T17:15:07.177Z"}, ... ]
    deactivate server
    activate browser
    browser-->>browser: Parse server response and call redrawNotes() method
    deactivate browser
```