let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin A'
let aron = 'Aron B'
let Ted = 'Ted Mosby'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{aron}</li>
        <li>{Ted}</li>

    </ul>
)
ReactDOM.render(element, document.getElementById('content'))