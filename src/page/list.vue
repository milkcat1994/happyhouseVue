<template>
  <div>
    <div v-if="items.length">
      <table class="table table-bordered table-condensed">
        <colgroup>
          <col :style="{ width: '5%' }" />
          <col :style="{ width: '50%' }" />
          <col :style="{ width: '10%' }" />
          <col :style="{ width: '25%' }" />
        </colgroup>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
        <list-row
          v-for="(item, index) in items"
          :key="`${index}_items`"
          :no="item.no"
          :title="item.title"
          :writer="item.writer"
          :regtime="item.regtime"
        />
      </table>
    </div>
    <div v-else>글이 없습니다.</div>
    <div class="text-right">
      <button class="btn btn-primary" @click="movePage">등록</button>
    </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import ListRow from "@/components/Row.vue";

export default {
  name: "list",
  components: {
    ListRow
  },
  computed: {
    ...mapGetters(["items"])
  },
  created() {
    store.dispatch("getItems");
  },
  methods: {
    movePage() {
      this.$router.push("/create");
    }
  }
};
</script>

<style></style>
