// Event Handler definition with eventObj as the Event Object
function handleFormSubmit(eventObj) {
    eventObj.preventDefault();
    console.log("Submitted the form!");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}