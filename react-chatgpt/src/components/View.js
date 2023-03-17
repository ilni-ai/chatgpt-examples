// View component
function View(props)
{
    // get the chat from the props
    const chat = props.chat;
    // return the view
    return (

        <div>
            
            <h1> This view shows chat information in the paragraph below</h1>
            <p> this is all the chat: {chat }</p>


        </div>
    );


}
// export the component
export default View;
