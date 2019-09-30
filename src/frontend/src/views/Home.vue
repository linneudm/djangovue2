<template>
  <div class="home">
    <div class="container mt-2">
      <div v-for="question in questions"
           :key="question.pk">
        <p class="mb-0">Posted by:
          <span class="question-author">{{ question.author }}</span>
        </p>
        <h2>
          <router-link
            :to="{ name: 'question', params: { slug: question.slug } }"
            class="question-link"
            >{{ question.content }}
          </router-link>
        </h2>
        <p>Answers: {{ question.answers_count }}</p>
        <hr>
      </div>
      <div class="my-4">
        <p v-show="number > 0"><animated-number :duration="duration" :formatValue="formatToInt" :value="number"/></p>
        <p v-show="emps != null">{{emps}}</p>
        <button
          class="btn btn-sm btn-outline-success"
          >Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import { apiService } from "@/common/api.service.js";
//http://dummy.restapiexample.com/api/v1/employees
import AnimatedNumber from "animated-number-vue";
import axios from 'axios';


export default {
  components: {
    AnimatedNumber
  },
  name: "home",
  data() {
    return {
      questions: [],
      next: null,
      loadingQuestions: false,
      number: 300,
      duration: 1000,
      emps: null,
    }
  },
  methods: {
    formatToInt(value) {
      return `${Number(value).toFixed(0)}`;
    },
    getEx() {
      axios.get(`http://dummy.restapiexample.com/api/v1/employee/81988  `)
      .then(response => {
        // JSON responses are automatically parsed.
        this.emps = response.data;
        this.number = this.emps.length;
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  created() {
    this.getEx()
    this.$notify({
      group: 'foo',
      title: 'Important message',
      text: 'Hello user! This is a notification!'
    });
    document.title = "Teste :)";
  }
};
</script>

<style scoped>
.question-author {
  font-weight: bold;
  color: #DC3545;
}

.question-link {
  font-weight: bold;
  color: black;
}

.question-link:hover {
  color: #343A40;
  text-decoration: none;
}
</style>