<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn outlined color="teal lighten-3" dark v-on="on" class="d-block"
          >+ new Product</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">new Product</span>
        </v-card-title>
        <v-form class="px-3" ref="form">
          <v-card-text>
            <v-col cols="12" lg="12">
              <v-text-field
                v-model="title"
                prepend-icon="folder"
                label="Product name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="content"
                prepend-icon="edit"
                label="Add Product descriptin"
              >
              </v-textarea>
            </v-col>
            <v-file-input
              chips
              multiple
              v-model="images"
              label="File input w/ chips"
            >
            </v-file-input>

            <v-col cols="12" lg="6">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    lable="Date"
                    hint="MM/DD/YYY Format"
                    prepend-icon="event"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  >
                  </v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu1 = false">
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <v-spacer>
              <v-btn color="blue-darken-1" text @click="dialog = false"
                >close</v-btn
              >
              <v-btn color="green" text outlined @click="submit">save</v-btn>
            </v-spacer>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: (vm) => ({
    dialog: false,
    title: "",
    content: "",
    date: new Date().toDateString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    images: [],
  }),
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${year}/${month}/${day}`;
    },
    submit() {
      this.$store.dispatch("setImages", this.images);
      console.log(this.$store.state);
    },
    parseDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("/");
      return `${year}-${month.padStart(2, "0")} - ${day.padStart(2, "0")}`;
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>
