 function populateVoices() {
        voices = speechSynthesis.getVoices();
        voicesDropdown.innerHTML = voices
          .map(
            (voice) =>
              `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
          )
          .join("");
      }

      // Set the selected voice
      function setVoice() {
        msg.voice = voices.find((voice) => voice.name === this.value);
        toggle();
      }

      // Toggle speaking
      function toggle(startOver = true) {
        speechSynthesis.cancel(); // Stop any current speech
        if (startOver) {
          msg.text = document.querySelector('[name="text"]').value;
          speechSynthesis.speak(msg);
        }
      }

      // Setting options for rate and pitch
      function setOption() {
        msg[this.name] = this.value;
        toggle(false); // Don't restart speaking when options are changed
      }

      speechSynthesis.addEventListener("voiceschanged", populateVoices);
      voicesDropdown.addEventListener("change", setVoice);
      options.forEach((option) => option.addEventListener("change", setOption));
      speakButton.addEventListener("click", toggle);
      stopButton.addEventListener("click", () => toggle(false)); // Stop speaking

      //Your code goes here// Your script here.
