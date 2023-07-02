<script>
import Talk from 'talkjs';
import NavBar from '../components/NavBar.vue';

export default {
    props: {
        currentUser: {
            type: Object,
            required: true
        }
    },
    components: {
        NavBar
    },
    async mounted() {
        await Talk.ready
        const me = new Talk.User({
            id: '654321',
            name: 'Sebastian',
            email: 'Sebastian@example.com',
            photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
            welcomeMessage: 'Hey, how can I help?',
            role: 'default',
        })

        const talkSession = new Talk.Session({
            appId: 'tC5aOcLg',
            me: me,
        });

        const other = new Talk.User({
            id: '654321',
            name: 'Sebastian',
            email: 'Sebastian@example.com',
            photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
            welcomeMessage: 'Hey, how can I help?',
            role: 'default',
        });

        const conversation = talkSession.getOrCreateConversation(
            Talk.oneOnOneId(me, other)
        );

        conversation.setParticipant(me);
        conversation.setParticipant(other);

        const inbox = talkSession.createInbox();
        inbox.select(conversation);

        inbox.mount(this.$refs.talkjs);

    }
}
</script>

<template>
    <NavBar />
    <div ref="talkjs" style="margin: 30px; height: 500px">
        <i>Loading chat...</i>
    </div>
</template>