const React = require('react')

function New (props) {
  return(
    <div>
      
        <h1>New Log:</h1> 
        <a href="/logs">Back to Index Page</a>
        <form action="/logs" method="POST">
        Title: <input type="text" name="title" />
        Entry: <textarea name="entry"></textarea>
        shipIsBroken: <input type="checkbox" name="shipIsBroken" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

module.exports = New