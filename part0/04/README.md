 ```mermaid
 sequenceDiagram
    user->>browser: Completed the form and clicked in save button. 
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note, send form data to server
    activate server
    server->>+browser: Append data to data.json and send respose with status code 302 (Redirect to  /exampleapp/notes)
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Send HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Send css file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Send JavaScript file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Send data.json
    deactivate server
```