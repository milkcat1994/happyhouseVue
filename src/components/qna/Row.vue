<template>
  <tr class="noticeItem" data-noticeno="{{no}}">
    <td style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
      {{ no }}
    </td>
    <td style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
      <router-link :to="`/qna/read?no=${no}`">{{ title }}</router-link>
    </td>
    <td style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
      {{ writer }}
    </td>
    <td style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">
      {{ getFormatDate(regtime) }}
    </td>
  </tr>
</template>

<script>
import moment from "moment";
export default {
  name: "row",
  props: {
    no: { type: Number },
    writer: { type: String },
    title: { type: String },
    regtime: { type: String }
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    }
  }
};
</script>
