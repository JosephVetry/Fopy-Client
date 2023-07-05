// import React from 'react';
import * as TalkRn from '@talkjs/expo';

function DriverChat(props) {
    // me = orang yg login, req.user.id
    const me = {
        id: 'FOPY-Driver-1',
        name: 'FOPY Drivers 1',
    };

    const other = {
        // mitra yang dipilih (fetch id si admin atau mitra)
        id: 'FOPY-User-1',
        name: 'FOPY User 1',
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
export default DriverChat