# Part 0 

sequenceDiagram
    user->>browser: The user completed the form and clicked in save button. 
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note, send form data to server
    activate server
    server->>+browser: Append data to data.json and send respose with 302 status code (Redirect to  /exampleapp/notes)
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Send data.json, Response body: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server