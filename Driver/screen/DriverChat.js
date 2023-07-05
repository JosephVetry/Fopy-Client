// import React from 'react';
import * as TalkRn from '@talkjs/expo';
import { useEffect } from 'react';


function ChatComponent({route}) {
    // me = orang yg login, req.user.id
    // console.log(route.params.order.UserId, '<<<<<<<, ini route me')
    const me = {
        id: `FOPY-Driver-${route.params.order.UserId}`,
        name: `FOPY Driver ${route.params.order.UserId} `,
    };

    const other = {
        // mitra yang dipilih (fetch id si admin atau mitra)
        id: `FOPY-User-${route.params.order.id}`, // nanti, ini diganti jadi AdministratorId
        name: `User ${route.params.order.id}`,
    };

    const conversationBuilder = TalkRn.getConversationBuilder(
        TalkRn.oneOnOneId(me, other)
    );

    useEffect(() => {
    })

    conversationBuilder.setParticipant(me);
    conversationBuilder.setParticipant(other);

    return (
        <TalkRn.Session appId='tC5aOcLg' me={me}>
            <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
        </TalkRn.Session>
    );
}
export default ChatComponent