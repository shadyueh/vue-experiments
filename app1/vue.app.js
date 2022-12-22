"use strict";

var app = new Vue({
  el: '#app',
  data: {
    timeover: false,
    timer: '',
    distance: 3000,
    title: "Darkside",
    artist: "Alan Walker",
    items: [
      { text: "We're not in love" },
      { text: "We share no stories" },
      { text: "Just something in your eyes" },
      { text: "Don't be afraid" },
      { text: "The shadows know me" },
      { text: "Let's leave the world behind" },
      { text: "Take me through the night" },
      { text: "Fall into the dark side" },
      { text: "We don't need the light" },
      { text: "We'll live on the dark side" },
      { text: "I see it" },
      { text: "Let's feel it" },
      { text: "While we're still young and fearless" },
      { text: "Let go of the light" },
      { text: "Fall into the dark side" },
      { text: "Fall into the dark side" },
      { text: "Give into the dark side" },
      { text: "Let go of the light" },
      { text: "Fall into the dark side" },
      { text: "Beneath the sky" },
      { text: "As black as diamonds" },
      { text: "We're running out of time (Time, time)" },
      { text: "Don't wait for truth" },
      { text: "To come and blind us" },
      { text: "Let's just believe their lies" },
      { text: "Believe it" },
      { text: "I see it" },
      { text: "I know that you can feel it" },
      { text: "No secrets worth keeping" },
      { text: "So fool me like I'm dreaming" },
      { text: "Take me through the night" },
      { text: "Fall into the dark side" },
      { text: "We don't need the light" },
      { text: "We'll live on the dark side" },
      { text: "I see it" },
      { text: "Let's feel it" },
      { text: "While we're still young and fearless" },
      { text: "Let go of the light" },
      { text: "Fall into the dark side" },
      { text: "Fall into the dark side" },
      { text: "Give into the dark side" },
      { text: "Let go of the light" },
      { text: "Fall into the dark side" },
      { text: "Take me through the night" },
      { text: "Fall into the dark side" },
      { text: "We don't need the light" },
      { text: "We'll live on the dark side" },
      { text: "I see it" },
      { text: "Let's feel it" },
      { text: "While we're still young and fearless" },
      { text: "Let go of the light" },
      { text: "Fall into the dark side" },
    ],
  },

  methods: {
    // define a flag para ocultar o botão
    hideElement: function () {
      this.timeover = true;
    },

    // limpa o contador
    cancelAutoUpdate: function () {
      clearInterval(this.timer);
    },

    // remove o contador ao final do lifecycle
    beforeDestroy: function () {
      this.cancelAutoUpdate();
    },
  },

  created: function(){
    // define o contador quando a instância for iniciada
    this.button_timer = setInterval(this.hideElement, this.distance);
  },

})