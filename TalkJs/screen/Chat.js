// import React from 'react';
import * as TalkRn from '@talkjs/expo';

function ChatComponent(props) {
    const me = {
        id: '123456789',
        name: 'Alice',
    };

    const other = {
        id: '987654321',
        name: 'Seb',
    };

    const conversationBuilder = TalkRn.getConversationBuilder(
        TalkRn.oneOnOneId(me, other)
    );

    conversationBuilder.setParticipant(me);
    conversationBuilder.setParticipant(other);

    return (
        <TalkRn.Session appId='tlSwkOpZ' me={me}>
            <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
        </TalkRn.Session>
    );
}
export default ChatComponent