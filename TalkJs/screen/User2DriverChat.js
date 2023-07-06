// import React from 'react';
import * as TalkRn from '@talkjs/expo';

function User2Driver(props) {
    // me = orang yg login, req.user.id
    console.log(props, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    const me = {
        id: 'FOPY-user-1',
        name: 'FOPY User 1',
    };

    const other = {
        id: 'FOPY-driver-1',
        name: 'FOPY Drivers 1',
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
export default User2Driver