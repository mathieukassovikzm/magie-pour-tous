<template src="./section-contact.html"></template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: '',
        firstname: '',
        message: ''
      },
      classFormError: 'form-error',
      classInputValid: 'valid',
      errors: false,
      formTouched: false
    }
  },
  /* List of requierement for each input */
  validations: {
    form: {
      email: { required },
      firstname: { required },
      message: { required }
    }
  },
  computed: {
    formEmailValid() {
      return !this.$v.form.email.$invalid ? this.classInputValid : ''
    },
    formFirstnameValid() {
      return !this.$v.form.firstname.$invalid ? this.classInputValid : ''
    },
    formMessageValid() {
      return !this.$v.form.message.$invalid ? this.classInputValid : ''
    },
    // v-show nameError if the form has been touch and if there is and error
    formEmailError() {
      return this.formTouched && this.$v.form.email.$error ? this.classFormError : ''
    },
    // v-show nameError if the form has been touch and if there is and error
    formFirstnameError() {
      return this.formTouched && this.$v.form.firstname.$error ? this.classFormError : ''
    },
    // v-show nameError if the form has been touch and if there is and error
    formMessageError() {
      return this.formTouched && this.$v.form.message.$error ? this.classFormError : ''
    }
  },
  methods: {
    /* Handle the user's submit
     * @emit the event 'addRequestToChat' for his parent
     */
    onSubmit(){
      this.formTouched = this.$v.form.$anyDirty
      this.errors = this.$v.form.$anyError
      if (this.errors == false && this.formTouched == true) {
        let request = {
          name: this.form.name,
          query: this.form.query,
          date: new Date(),
        }
        this.$emit('addRequestToChat', request)
        this.cleanForm()
      } else return
    },

    /* Clean the form */
    cleanForm(){
      this.name = ''
      this.query = ''
    }
  }
}

</script>

<style lang="scss" src="./section-contact.scss"></style>
