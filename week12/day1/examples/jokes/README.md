# Dad joke simulator

- Create the boilerplate components.
  = Create the ability to render dad jokes on the page.
- Create the ability to render dad jokes on the page when the user hits submit.
- Render components based off of how many times we hit submit.

# Components

- App.js
- JokeContainer
- Joke

# Notes

```
  componentDidMount
  this triggers everytime the component is updated or mounted
    useEffect(()=>{})

  componentDidUpdate
  this triggers when the component is mounted. then everytime the value inside the array changes
  useEffect(()=>{},["value"])

  this triggers one time only. when the component is mounted
  useEffect(()=>{},[])
```
