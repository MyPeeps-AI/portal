import logo from './logo.svg';
import './App.css';
import {
    MinChatUiProvider,
    MainContainer,
    MessageInput,
    MessageContainer,
    MessageList,
    MessageHeader,
    ConversationList,
    ConversationHeader,
    Sidebar,
} from "@minchat/react-chat-ui";
const myColorSet = {
    // input
    //"--input-background-color": "#FF0000",
    //"--input-text-color": "#fff",
    //"--input-element-color": "rgb(0, 0, 255)",
    //"--input-attach-color": "#000",
    //"--input-send-color": "#fff",
    //"--input-placeholder-color": "rgb(255, 255, 255)",

    // message header
    //"--message-header-background-color": "#FF0000",
    //"--message-header-text-color": "#fff",
    //"--message-header-last-active-color": "rgb(0, 0, 255)",
    //"--message-header-back-color": "rgb(255, 255, 255)",

    // chat list header
    //"--chatlist-header-background-color": "#FF0000",
    //"--chatlist-header-text-color": "rgb(255, 255, 255)",
    //"--chatlist-header-divider-color": "rgb(0, 128, 0)",

    //chatlist
    //"--chatlist-background-color": "rgb(255, 192, 203)",
    //"--no-conversation-text-color": "rgb(255, 255, 255)",

    //chat item
    //"--chatitem-background-color": "rgb(0, 0, 255)",
    //"--chatitem-selected-background-color": "rgb(255, 255, 0)",
    //"--chatitem-title-text-color": "#FF0000",
    //"--chatitem-content-text-color": "#FF0000",
    //"--chatitem-hover-color": "#FF0000",

    //main container
    "--container-background-color": "rgb(255, 192, 203)",

    //loader
    "--loader-color": "rgb(0, 128, 0)",

    //message list
    //"--messagelist-background-color": "rgb(0, 0, 255)",
    //"--no-message-text-color": "rgb(255, 255, 255)",

    // incoming message
    //"--incoming-message-text-color": "rgb(255, 255, 255)",
    //"--incoming-message-name-text-color": "rgb(255, 255, 255)",
    //"--incoming-message-background-color": "rgb(0, 128, 0)",
    //"--incoming-message-timestamp-color": "rgb(255, 255, 255)",
    //"--incoming-message-link-color": "#FF0000",

    //outgoing message
    //"--outgoing-message-text-color": "#FF0000",
    //"--outgoing-message-background-color": "rgb(255, 255, 0)",
    //"--outgoing-message-timestamp-color": "#FF0000",
    //"--outgoing-message-checkmark-color": "#FF0000",
    //"--outgoing-message-loader-color": "#FF0000",
    //"--outgoing-message-link-color": "rgb(0, 128, 0)",
}

function App() {
    return (
        <div style={{height: '100vh'}}>
            <MinChatUiProvider theme="#6ea9d7"
                               colorSet={myColorSet}>
                <MainContainer style={{ height: '100vh' }}>
                    <Sidebar>
                        <ConversationHeader></ConversationHeader>
                        <ConversationList
                            selectedConversationId={'sherlock'}
                            conversations={[
                                {
                                    id:'sherlock',
                                    title:'Sherlock',
                                    unread:false,
                                    avatar:'https://mypeeps.ai/images/profile/profile-sherlock.jpg',
                                },
                                {
                                    id:'santa',
                                    title:'Sants',
                                    unread:true,
                                    avatar:'https://mypeeps.ai/images/profile/profile-santa.jpg',
                                },
                            ]}
                        />
                    </Sidebar>
                    <MessageContainer>
                        <MessageHeader > Chat with Peep </MessageHeader>
                        <MessageList
                            selectedConversationId="CONVERSAtionID"
                            currentUserId='rasta'
                            messages={[{
                                text: 'Hello',
                                user: {
                                    id: 'mark',
                                    name: 'Markus',
                                },
                            },{
                                text: 'Hi fellow earthling.',
                                user: {
                                    id: 'rasta',
                                    name: 'Ras Solomonic',
                                },
                            },{
                                text: 'Hi fellow earthling.',
                                user: {
                                    id: 'doof',
                                    name: 'Der Doofe',
                                },
                            },]}
                        />
                        <MessageInput placeholder="Type message here"
                                      showAttachButton={false}/>
                    </MessageContainer>
                </MainContainer>
            </MinChatUiProvider>
        </div>
)
}

export default App;
