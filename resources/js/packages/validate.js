import VeeValidate from 'vee-validate';

const dictionary = {
  en: {
    messages: {
      confirmed: function () { 
        return "Your password is not confirmed"
      },
      email: function () { 
        return "I really dont like your email"
      }
    }
  }
};

VeeValidate.Validator.updateDictionary(dictionary);
Vue.use(VeeValidate);

Vue.config.debug = true;