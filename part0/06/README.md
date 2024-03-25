 ```mermaid
 sequenceDiagram
    user->>browser: The user completed the form and clicked in save button. 
    activate browser
    browser-->>browser: Apend new note to array (notes) and call  redrawNotes() method
    deactivate browser
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note_spa, send new note to server
    activate server
    server->>+browser: Append note and send respose with 201 status code and respose body { "content": "ssss", "date": "2024-03-25 ...."}
    deactivate server
    activate browser
    browser-->>browser: Print server response (console.log(this.responseText))
    deactivate browser

```