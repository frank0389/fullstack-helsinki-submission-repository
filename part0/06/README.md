 ```mermaid
 sequenceDiagram
    user->>browser: Completed the form and clicked save button. 
    activate browser
    browser-->>browser: Append new note to array (notes) and call  redrawNotes() method
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note_spa, send new note to server
    deactivate browser
    activate server
    server->>+browser: Append new note and send respose with 201 status code and respose body { "content": "ssss", "date": "2024-03-25 ...."}
    deactivate server
    activate browser
    browser-->>browser: Print server response (console.log(this.responseText))
    deactivate browser

```