<template>
  <div class="avatar-img">
    <v-avatar
      color="grey lighten-4"
      size="64"
    >
      <img :src="avatar" alt="avatar">
      <input type="file" @change="onChange" title="Click para cambiar avatar"/>
      <font-awesome-icon class="camera" icon="camera" size="2x" />
    </v-avatar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  components: { FontAwesomeIcon },
  data: () => ({}),
  computed: {
    ...mapState(['avatarSrc', 'genre']),
    avatar() {
      if (this.avatarSrc) {
        return this.avatarSrc;
      }
      
      if (this.genre == '' || this.genre == 'male') {
        return '/public/boy.png';
      } else {
        return '/public/girl.png';
      }
    }
  },
  methods: {
    ...mapMutations(['updateUser']),
    onChange(e) {
      this.readUrl(e.target.files[0]);
    },
    readUrl(file) {
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.updateUser({ path: 'avatarSrc', value: e.target.result });
        };
        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
}

.avatar:hover {
  opacity: 0.5;
  color: #000;
  z-index: 0;

  .camera {
    display: block;
  }
}

.camera {
  display: none;
  position: absolute;
  z-index: 1;
  opacity: 0.8;
}
</style>


