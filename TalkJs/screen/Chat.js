// import React from 'react';
import * as TalkRn from '@talkjs/expo';

function ChatComponent(props) {
    // me = orang yg login, req.user.id
    const me = {
        id: 'FOPY-user-1',
        name: 'FOPY User 1',
    };

    const other = {
        // mitra yang dipilih (fetch id si admin atau mitra)
        id: 'FOPY-2', // nanti, ini diganti jadi AdministratorId
        name: 'FOPY Admin 2',
    };

    const conversationBuilder = TalkRn.getConversationBuilder(
        TalkRn.oneOnOneId(me, other)
    );

    conversationBuilder.setParticipant(me);
    conversationBuilder.setParticipant(other);

    return (
        <TalkRn.Session appId='tC5aOcLg' me={me}>
            <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
        </TalkRn.Session>
    );
}
export default ChatComponent