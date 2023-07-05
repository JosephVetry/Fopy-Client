<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import Talk from "talkjs";
import NavBar from "../components/NavBar.vue";

export default {
  data() {
    return {
      element: null,
    };
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  components: {
    NavBar,
  },

  async mounted() {
    await Talk.ready;
    // me = admin yg login
    const me = new Talk.User({
      id: "FOPY-Admin-" + localStorage.id,
      name: "FOPY Admin " + localStorage.id,
    });

    const talkSession = new Talk.Session({
      appId: "tC5aOcLg",
      me: me,
    });

    // user yg ngechat
    const other = new Talk.User(
      {
        id: "User-1",
        name: "User 1",
      },
      {
        id: "User-2",
        name: "User 2",
      },
      {
        id: "User-3",
        name: "User 3",
      },
      {
        id: "User-4",
        name: "User 4",
      },
      {
        id: "User-5",
        name: "User 5",
      },
      {
        id: "User-6",
        name: "User 6",
      }
    );

    // [], hasilnya pasti ditampung ke suatu tempat = 'string'
    //
    const conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );

    conversation.setParticipant(me);
    conversation.setParticipant(other);

    const inbox = talkSession.createInbox();
    inbox.select(conversation);

    inbox.mount(this.$refs.talkjs);
  },
};
</script>

<template>
  <NavBar />
  <div ref="talkjs" style="margin: 30px; height: 500px">
    <i>Loading chat...</i>
  </div>
</template>
